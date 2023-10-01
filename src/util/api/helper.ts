export interface Options {
    method: string,
    headers: {
        accept:string
        authorization:string
    }
}

export const createOpts = (method:string):Options => {
    return {
        "method": method,
        "headers": {
            "accept": 'application/json',
            "authorization": `Bearer ${process.env.ACCESS_TOKEN}`
        }
    }
}
