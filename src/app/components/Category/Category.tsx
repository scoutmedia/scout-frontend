import Results from "./Results"
import { Result } from "@/types"



interface Category {
    sendData(value:Result):void
    userId: string | null
    title: string
    results: Result[]
}

export default function Category({sendData , userId , title , results}:Category){
    return (
        <div className="w-11/12 mx-auto text-textPrimary py-5">
            <div className="pb-5">
                <span className="uppercase text-textPrimary tracking-wide font-bold text-sm pb-5">{title}</span>
            </div>
            <Results sendData={sendData} userId={userId} results={results}/>
        </div>
    )
}