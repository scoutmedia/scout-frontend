import { createOpts } from "@/util/api/helper";
import { NextRequest , NextResponse } from "next/server";

// http://192.168.1.40:8000

export async function POST(req:NextRequest , res:NextResponse){
    const {data}:{data:string} = await req.json()
    const response = await fetch('http://localhost:8000' ,  { method: "POST", body: JSON.stringify({"data": data})})
    if(!response.ok) {
        return NextResponse.json({status: response.status , error: response.statusText})
    }
    return NextResponse.json({status: response.status , message: response.statusText})
}       

