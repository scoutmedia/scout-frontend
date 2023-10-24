import Category from "../Category/Category";
import { Result } from "@/types";


export default function Categories(props:{sendData(value:Result):void , userId:string | null , trending:Result[] , popular:Result[]}){
    return (
        <>
        <Category sendData={props.sendData} userId={props.userId} title={"Trending Now"} results={props.trending}/>
        <Category sendData={props.sendData} userId={props.userId} title={"What's Popular"} results={props.popular}/>
        </>
    )
}

