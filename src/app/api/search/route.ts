import { NextRequest, NextResponse } from "next/server";
import { searchUrls } from "@/constants";
import { createOpts } from "@/util/api/helper";
import { createUrl } from "@/util/helper";
import { ResponseData, Result } from "@/types";



export async function GET(req:NextRequest , res:NextResponse){
    const data:Result[] = []

    const  {searchParams} = new URL(req.url)
    const  query = searchParams.get("q") as string

    const requests = searchUrls.map(url => fetch(createUrl(query , url) , createOpts("GET")));
    const responses =  await Promise.all(requests)
    const promises = responses.map((response) => response.json())
    const promiseData =   await Promise.all(promises)


    promiseData.forEach((response:ResponseData) => {
        response.results.forEach((result:Result) => {
            data.push(result)
        })
    })
    return NextResponse.json({success: 200  , data: data})
}   


