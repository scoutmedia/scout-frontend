import { Keyword } from "@/types"
import { getMediaType } from "../helper"

interface Options {
    method: string,
    headers: {
        accept:string
        authorization:string
    },
    body: BodyInit | null | undefined
}

export const createOpts = (method:string , body?:BodyInit):Options => {
    return {
        "method": method,
        "headers": {
            "accept": 'application/json',
            "authorization": `Bearer ${process.env.ACCESS_TOKEN}`
        },
        body: body 
    }
}


export const getKeywords = async (id:number , name:string):Promise<Keyword[]> => {
    const response =  await fetch(`https://api.themoviedb.org/3/${getMediaType(name)}/${id}/keywords` , createOpts("GET"))
    const {keywords , results} = await response.json()
    return keywords == undefined ? results : keywords
}
