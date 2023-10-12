import { NextRequest, NextResponse } from "next/server";
import { searchUrls } from "@/constants";
import { createOpts } from "@/util/api/helper";
import { createUrl } from "@/util/helper";
import { ResponseData, Result } from "@/types";



export async function GET(req:NextRequest , res:NextResponse){
    const  {searchParams} = new URL(req.url)
    const  query = searchParams.get("q") as string

    const requests = searchUrls.map(url => fetch(createUrl(query , url) , createOpts("GET")));
    const responses =  await Promise.all(requests)
    const promises = responses.map((response) => response.json())
    const promiseData:ResponseData[] =   await Promise.all(promises)

    return NextResponse.json({success: 200  , data: [...promiseData[0].results , ...promiseData[1].results]})
}   


