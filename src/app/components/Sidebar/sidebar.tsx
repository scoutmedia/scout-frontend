"use client"
import Link from 'next/link';
import Image from 'next/image';
import { lightModeIcon } from '@/images';

export default function Sidebar() {
    return (
        <aside className='h-screen fixed top-0 left-0 w-48 border-solid border-secondary border-1 shadow-lg rounded-r-md' >
            <div className='bg-secondary h-full'>
                <header className=' w-1/2 mx-auto pt-8 text-2xl text-black font-bold tracking-wide pb-7'>
                    <h1>Scout</h1>
                </header>
                <div className='w-full mx-auto text-textPrimary'>
                        <ul className=' w-[85%] mx-auto flex flex-col font-normal  text-md tracking-wide'>
                            <Link href={"/"}><li className='pl-4 py-1 mb-3 rounded-md hover:bg-secondaryHover hover:text-white'>Home</li></Link>
                            <Link href={"/search"}><li className='pl-4 py-1  rounded-md  hover:bg-secondaryHover hover:text-white'>Search</li></Link>
                        </ul>
                </div>
            </div>
            <div className=' absolute bottom-5 left-5 w-11/12 pt-7 text-white flex align-bottom'>
                    <Image 
                        alt='lightmode' 
                        src={lightModeIcon} 
                        width={32} 
                        height={32}
                        priority={true}
                        quality={100}
                        style={{cursor: "pointer"}}
                        onClick={() => {alert("change mode")}}
                        />
                </div>
        </aside>
    )
}