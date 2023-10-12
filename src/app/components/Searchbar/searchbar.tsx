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
        <div className=' xs:w-9/12 xs:ml-9 w-10/12  pt-6 mx-auto bg-primary flex'>
            <div className= 'w-[185px]  xs:w-full mr-16'>
                <label className='text-sm tracking-wide pl-1 text-textPrimary font-medium'>Search</label>
                <input className= 'shadow-md mt-1 focus:border-2 capitalize focus:border-searchbarFocus border-gray-200 border-2 rounded-md pl-4 py-[.5em] w-full text- outline-none font-medium' type='text' onChange={(e) => {setInput(e.target.value)}}/>
            </div>
        </div>
        </>
    )
}