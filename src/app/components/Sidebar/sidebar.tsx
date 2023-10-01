"use client"
import Link from 'next/link';

export default function Sidebar() {
    
    return (
        <aside className='h-screen fixed top-0 left-0 w-56 border-solid border-secondary border-1 shadow-sm rounded-r-md' >
            <div className='bg-secondary h-full'>
                <header className=' w-1/2 mx-auto pt-8 text-xl text-white font-bold tracking-wide pb-7'>
                    <h1>Scout</h1>
                </header>
                <div className='w-full mx-auto text-white'>
                        <ul className=' w-[90%] mx-auto flex flex-col font-normal  text-md tracking-wide'>
                            <li className='pl-4 py-1 mb-3 rounded-md hover:bg-secondaryHover'>Home</li>
                            <Link href={"/search"}><li className='pl-4 py-1  rounded-md  hover:bg-secondaryHover'>Search</li></Link>
                        </ul>
                </div>
            </div>
        </aside>
    )
}