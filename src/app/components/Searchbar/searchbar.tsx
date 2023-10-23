"use client"
import styles from './searchbar.module.css'
import useDebounce from '@/app/hooks/useDebounce';
import { useEffect, useState } from 'react'
import { createOpts } from '@/util/api/helper';
import { Result } from '@/types';

 
export default function Searchbar(props:{ setResults(value:Result[]):void} ){
    const [input , setInput] = useState<string>("")
    const debouncedSearch: string | undefined = useDebounce(input , 500)

    const search = async (value:string) => {
        const response =  await fetch(`api/search?q=${value}` , createOpts("GET"))
        const {data}: {data:Result[]} = await response.json()

        props.setResults(data)
    }
    useEffect(() => {
        if(debouncedSearch == ""){
            props.setResults([])
        }
        if(!debouncedSearch) return
        search(debouncedSearch)
    } , [debouncedSearch])


    return (
        <> 
        <div className='w-11/12 py-8 mx-auto bg-primary flex'>
            <div className= 'w-4/6 mr-16'>
                <label className='uppercase text-textPrimary tracking-wider font-bold text-xs pl-1'>Search</label>
                <input className= 'shadow-sm mt-1 tracking-wide  capitalize  border-2 rounded-md pl-4 py-[.4em] w-full  text-textPrimary outline-none font-medium' type='text' onChange={(e) => {setInput(e.target.value)}}/>
            </div>
        </div>
        </>
    )
}