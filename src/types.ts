export type ResponseData = {
    page: number;
    results: Result[]
}

export type Result = {
    adult:false
    backdrop_path: string
    id: number;
    original_language: string
    original_title:string
    name:string
    overview:string
    popularity: number
    poster_path:string
    release_date:string
    title:string
    video:false
    vote_average:number
    vote_count:number
}


export type Keyword = {
    id: number,
    name: string
}

export enum MediaType {
    Movie = "movie",
    TV = "tv",
}


