"use client"
import { useEffect, useState } from "react";
import Searchbar from "../Searchbar/searchbar";
import Category from "../Category/Category";
import { Result } from "@/types";
import Image from "next/image";
import { downloadIcon, placeHolderPoster } from "@/images";
import { formatRequestTitle, posterImage } from "@/util/helper";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import SearchResults from "../SearchResults/SearchResults";
import Categories from "../Categories/Categories";

interface SearchProps {
    trendingData: Result[]
    popularData: Result[]
    userId: string | null
}

export default function Search({userId , trendingData , popularData}:SearchProps){
    const [results , setResults] = useState<Result[]>([]);
    useEffect(() => {} , [results])

    const sendData = async (value:Result) => {
         const response = await fetch(`api/media?q=${value}` , {
            method: "POST",
            body: JSON.stringify(value)
         })
         if(!response.ok) {
             toast.error(`Failed to request ${!value.title ? value.name : value.title} `, {position: "bottom-center"})
             return
         }
         toast.success("Request sent 🍿 " , {position:  "bottom-center"})
   }



    return (
        <>
        <div><Toaster/></div>
        <div className=" lg:pl-52 w-full  pt-7 mx-auto flex flex-col bg-primary">
            <Searchbar  setResults={setResults}/>
            {results.length < 1 ? <Categories sendData={sendData} userId={userId} trending={trendingData} popular={popularData}/>  :  <SearchResults userId={userId} results={results} sendData={sendData}/>}
        </div>
        </>
    )
}