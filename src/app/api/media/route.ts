import { Result } from "@/types";
import { createOpts } from "@/util/api/helper";
import { NextRequest , NextResponse } from "next/server";


export async function POST(req:NextRequest , res:NextResponse){
    const data = await req.json()
    console.log(data)
    const response = await fetch(`${process.env.SCOUT_API}`,createOpts("POST" , JSON.stringify(data)))
    if(!response.ok) {
        return NextResponse.json({status: response.status , error: response.statusText})
    }
    return NextResponse.json({status: response.status , message: response.statusText})
}       

