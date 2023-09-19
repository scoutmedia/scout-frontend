import { NextRequest, NextResponse } from "next/server";



export async function GET(req:NextRequest , res:NextResponse){
    console.log(req.url)
    const  {searchParams} = new URL(req.url)
    const  query = searchParams.get("q")

    console.log(query)
}