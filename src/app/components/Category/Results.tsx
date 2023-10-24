import { Result } from "@/types";
import Image from "next/image";
import { posterImage } from "@/util/helper";
import { placeHolderPoster , downloadIcon } from "@/images";

export default function Results (props:{sendData(value:Result):void , userId: string | null , results:Result[]}){
    return (
        <div className="w-full grid grid-cols-sm gap-x-3">
            {props.results.map(result => {
                return (
                    <div className=" animate-zoomIn  w-auto flex flex-col relative" key={result.id}>
                    <div className=" h-cover w-auto  xs:h-sm  overflow-hidden relative border-none shadow-lg rounded-md">
                    {props.userId != null ? 
                    <div className=" cursor-pointer  right-0 mr-2 mt-3 z-20 w-[28px] h-[28px] absolute rounded-lg" onClick={() => {props.sendData(result)}}>
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
                    <span className=" truncate pt-2 pb-5 text-sm text-textPrimary font-medium">{result.title  == undefined ? result.name : result.title}</span>
                </div>
                )
            }).slice(0,6)}
        </div>
    )
}