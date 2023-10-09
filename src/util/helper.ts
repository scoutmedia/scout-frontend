export const posterImage = (posterPath:string):string => {
    return `https://image.tmdb.org/t/p/original/${posterPath}`
}


export const formatRequestTitle = (title:string , releaseDate:string): string => {
    return `${title} (${releaseDate.split("-")[0]})`
}

export const createUrl = (query:string , url:string):string => {
    return `${url}?query=${query}&language=en-US`
}
