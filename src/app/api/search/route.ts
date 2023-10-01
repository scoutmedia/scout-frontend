import { NextRequest, NextResponse } from "next/server";
import { searchUrl } from "@/constants";
import { createOpts } from "@/util/api/helper";
import { ResponseData } from "@/types";


export async function GET(req:NextRequest , res:NextResponse){
    const  {searchParams} = new URL(req.url)
    const  query = searchParams.get("q")
    
    const response = await fetch(`${searchUrl}?query=${query}&language=en-US` , createOpts("GET"))
    if(!response.ok) {
        console.error(`Error fetching ${query} ${response.status}: ${response.statusText}`)
        return  NextResponse.json({"status": response.status , "text": response.statusText})
    }
    const {results}:ResponseData = await response.json()
    return NextResponse.json({success: response.status  , data: results})
}   

