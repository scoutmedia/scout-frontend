"use client"
import { useEffect, useState } from 'react'
import styles from './searchbar.module.css'
import useDebounce from '@/app/hooks/useDebounce';
import { createOpts } from '@/util/api/helper';


export default function Searchbar(){
    const [input , setInput] = useState<string>("")
    const [results , setResults] = useState<[]>([]);
    const debouncedSearch: string | undefined = useDebounce(input , 500)

    const search = async (value:string) => {
        const response =  await fetch(`api/search?q=${value}` , createOpts("GET"))
    }


    useEffect(() => {
        if(!debouncedSearch) return
        search(debouncedSearch)
    } , [debouncedSearch])

    return (
        <div id={styles.searchbarContainer}>
            <div id={styles.searchBar}>
                <input className={styles.searchbarInput} type='text'placeholder='Search for a movie' onChange={(e) => {setInput(e.target.value)}}/>
            </div>
        </div>  
    )
}