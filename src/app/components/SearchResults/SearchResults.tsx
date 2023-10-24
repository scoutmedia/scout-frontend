import { placeHolderPoster  , downloadIcon} from "@/images";
import { Result } from "@/types";
import { posterImage  } from "@/util/helper";
import Image from "next/image";


export default function SearchResults(props:{userId:string | null , results:Result[] , sendData(value:Result):void}){
    return (
              <section className="w-11/12 mx-auto">
                 <div className="w-full grid grid-cols-sm gap-x-3">
                    {props.results.sort((a:Result , b:Result) => {
                        return b.popularity - a.popularity
                    }).map((result:Result) => {
                        return (
                            <div className=" animate-zoomIn  w-auto flex flex-col relative" key={result.id}>
                                <div className=" h-cover w-auto  xs:h-sm  overflow-hidden relative border-none shadow-lg rounded-md">
                                {props.userId != null ? 
                                <div className=" cursor-pointer  right-0 mr-1 mt-2 z-20 w-[25px] h-[25px] absolute rounded-lg" onClick={() => {props.sendData(result)}}>
                                    <Image src={downloadIcon} alt="download icon" fill priority={true} style={{objectFit: "cover"}} quality={100} />
                                </div> : ""}
                                <Image
                                 src={result.poster_path != null ?  posterImage(result.poster_path) : placeHolderPoster}
                                 alt={result.original_title = undefined ? result.original_title : result.original_title}
                                 fill
                                 priority={true}
                                 style={{objectFit:'cover'}}
                                 quality={100}
                                 sizes="(min-width: 60em) 24vw,
                                 (min-width: 28em) 45vw,
                                 100vw"
                                />
                                </div>
                                <span className="pt-2 pb-5 text-sm text-textPrimary font-medium">{result.title  == undefined ? result.name : result.title}</span>
                            </div>
                        )
                    })}
                 </div>
            </section>
    )
}  