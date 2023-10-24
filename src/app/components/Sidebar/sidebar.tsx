"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {homeIcon , searchIcon , menuIcon } from '@/images';

export default function Sidebar() {
    const [active , setIsActive] = useState<boolean>(false);
    return (
        <>
        <aside className='xs:hidden sm:hidden h-screen fixed top-0 left-0 w-48 border-solid border-secondary border-1 shadow-lg rounded-r-md' >
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
        </aside>
        <div className={active ? 'lg:hidden md:hidden z-40  flex flex-col fixed  bottom-16 left-8 shadow-lg  bg-secondaryHover w-[40px] h-[100px] rounded-md' : "hidden" }>
                <div className={active ? 'md:hidden z-40 flex flex-col  w-full h-full justify-around items-center' : ""}>
                <Link href={"/"}>
                <Image 
                alt='menu icon' 
                src={homeIcon}  
                width={22}
                height={22}
                priority={true}
                quality={100}
                />
                </Link> 
                <Link href={"/search"}>
                <Image 
                alt='menu icon' 
                src={searchIcon} 
                width={23}
                height={23}
                priority={true}
                quality={100}
                />
                </Link>
                </div>
              </div>
              <div className=' lg:hidden md:hidden z-40  bottom-8   left-8 fixed  shadow-lg bg-secondaryHover w-[40px] h-[40px] flex justify-center rounded-md' onClick={() => setIsActive(prevActive => !prevActive)}>
                <Image 
                alt='menu icon' 
                src={menuIcon} 
                width={25}
                height={25}
                priority={true}
                quality={100}
                />
              </div>
        </>            
    )
}