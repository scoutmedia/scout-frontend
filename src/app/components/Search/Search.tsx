"use client"
import { useState } from "react";
import Searchbar from "../Searchbar/searchbar";
import { Result } from "@/types";
import Image from "next/image";
import { posterImage } from "@/util/helper";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";


export default function Search(){
    const [results , setResults] = useState<Result[]>([]);

    const sendData = async (value:string) => {
        const response = await fetch(`api/torrent?q=${value}` , {
           method: "POST",
           body: JSON.stringify({data: value})
        })
        if(!response.ok) {
            toast.error(`Failed to request ${value}`, {position: "top-right"})
        }
        toast.success("Request sent 🍿 " , {position: "top-right"})
   }
    return (
        <>
        <div><Toaster/></div>
        <div className="w-full pl-64 pt-7 mx-auto flex flex-col">
            <Searchbar setResults = {setResults}/>
            <section className=" pt-6 w-10/12 mx-auto mt-10">
                 <div className="grid grid-cols-searchResults gap-x-3 justify-between text-white">
                    {results.sort((a:Result , b:Result) => {
                        return b.popularity - a.popularity
                    }).map(result => {
                        return (
                            <div className="w-auto flex flex-col relative" key={result.id} onClick={() => {sendData(result.title)}}>
                                <div className="w-auto h-cover overflow-hidden relative border-none rounded">
                                <Image
                                 src={posterImage(result.poster_path)}
                                 alt={result.title}
                                 fill
                                 priority={true}
                                 style={{objectFit:'contain'}}
                                 quality={100}
                                 sizes="(min-width: 60em) 24vw,
                                 (min-width: 28em) 45vw,
                                 100vw"
                                />
                                </div>
                                <span className="pt-2 pb-5">{result.title}</span>
                            </div>
                        )
                    })}
                 </div>
            </section>
        </div>
        </>
    )
}