"use client"
import styles from './searchbar.module.css'
import useDebounce from '@/app/hooks/useDebounce';
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { createOpts } from '@/util/api/helper';
import { Result } from '@/types';
import { posterImage } from '@/util/helper';


interface SearchBarProps {
    setResults(value:Result[]):void
}
 

export default function Searchbar({setResults}:SearchBarProps){
    const [input , setInput] = useState<string>("")
    const debouncedSearch: string | undefined = useDebounce(input , 500)

    const search = async (value:string) => {
        const response =  await fetch(`api/search?q=${value}` , createOpts("GET"))
        const {data}: {data:Result[]} = await response.json()
        setResults(data)
    }


    useEffect(() => {
        if(!debouncedSearch) return
        search(debouncedSearch)
    } , [debouncedSearch])

    
    return (
        <> 
        <div className=' w-10/12 mx-auto'>
            <div className=' w-1/4'>
                <input className= 'focus:border-2 capitalize focus:border-searchbarFocus border-gray-200 border-2 rounded-lg pl-4 py-[.3em] w-full text-sm outline-none font-medium' type='text'placeholder='Search for a movie or tv show' onChange={(e) => {setInput(e.target.value)}}/>
            </div>
        </div>
        </>
    )
}