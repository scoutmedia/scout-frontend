"use client"
import { useEffect, useState } from "react";
import Searchbar from "../Searchbar/searchbar";
import { Result } from "@/types";
import Image from "next/image";
import { downloadIcon, placeHolderPoster } from "@/images";
import { formatRequestTitle, posterImage } from "@/util/helper";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";


export default function Search(props:{userId:string | null}){
    const [results , setResults] = useState<Result[]>([]);

    const sendData = async (value:Result) => {
         const response = await fetch(`api/torrent?q=${value}` , {
            method: "POST",
            body: JSON.stringify({
                data: formatRequestTitle(value.title , value.release_date)
            })
         })
         if(!response.ok) {
             toast.error(`Failed to request ${value.title} `, {position: "top-right"})
             return
         }
         toast.success("Request sent 🍿 " , {position: "top-right"})
   }


    return (
        <>
        <div><Toaster/></div>
        <div className=" lg:pl-52 w-full  pt-7 mx-auto flex flex-col bg-primary">
            <Searchbar setResults = {setResults}/>
            <section className="w-10/12  xs:w-4/5 pt-6 mx-auto mt-10">
                 <div className=" grid-cols-searchResults gap-x-4 grid  xs:grid-cols-sm justify-between text-white">
                    {results.sort((a:Result , b:Result) => {
                        return b.popularity - a.popularity
                    }).map((result:Result) => {
                        return (
                            <div className=" animate-zoomIn  w-auto flex flex-col relative" key={result.id}>
                                <div className=" h-cover w-auto  xs:h-sm  overflow-hidden relative border-none shadow-lg rounded-md">
                                {props.userId != null ? 
                                <div className=" cursor-pointer  right-0 mr-2 mt-3 z-20 w-[28px] h-[28px] absolute rounded-lg" onClick={() => {sendData(result)}}>
                                    <Image src={downloadIcon} alt="download icon" fill priority={true} style={{objectFit: "cover"}} quality={100} />
                                </div> : ""}
                                <Image
                                 src={result.poster_path != null ?  posterImage(result.poster_path) : placeHolderPoster}
                                 alt={result.original_title = undefined ? result.original_title : result.original_title}
                                 fill
                                 priority={true}
                                 style={{objectFit:'cover'}}
                                 quality={100}
                                 sizes="(min-width: 60em) 24vw,
                                 (min-width: 28em) 45vw,
                                 100vw"
                                />
                                </div>
                                <span className="pt-2 pb-5 text-sm text-textPrimary font-medium">{result.title  == undefined ? result.name : result.title}</span>
                            </div>
                        )
                    })}
                 </div>
            </section>
        </div>
        </>
    )
}