import { NextRequest, NextResponse } from "next/server";
import { searchUrls } from "@/constants";
import { createOpts } from "@/util/api/helper";
import { createUrl, getMediaType } from "@/util/helper";
import { Keyword, ResponseData, Result } from "@/types";
import { getKeywords } from "@/util/api/helper";



export async function GET(req:NextRequest , res:NextResponse){
    const  {searchParams} = new URL(req.url)
    const  query = searchParams.get("q") as string

    const requests = searchUrls.map(url => fetch(createUrl(query , url) , createOpts("GET")));
    const responses =  await Promise.all(requests)
    const promises = responses.map((response) => response.json())
    const responseData:ResponseData[] =   await Promise.all(promises)

    const mediaData = await Promise.all(responseData[0].results.concat(responseData[1].results).map(async result => {
        return {
            ...result,
            name: result.name == undefined ? result.title : result.name,
            type: getMediaType(result.name),
            keywords: await getKeywords(result.id , result.name)
        }
    }))

    return NextResponse.json({success: 200  , data: mediaData})
}   

