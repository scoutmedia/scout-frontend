import { createOpts } from '@/util/api/helper'
import Search from './components/Search/Search'
import Sidebar from './components/Sidebar/sidebar'
import {popular, trending } from '@/constants'
import { ResponseData, Result } from '@/types'
import { auth } from '@clerk/nextjs'


async function getTrending():Promise<Result[]> {
  const res = await fetch(trending, createOpts("GET"))
  const data:ResponseData = await res.json()
  return data.results 
}

async function getPopular():Promise<Result[]> {
  const res = await fetch(popular , createOpts("GET"))
  const data:ResponseData = await res.json()
  return data.results
}


export default async function Home() { 
  const trendingData:Result[] = await getTrending()
  const popularData:Result[] = await getPopular()
  const {userId} = auth()



  return (
    <>
    {/* <Sidebar/> */}
    <section className='w-full max-h-screen flex bg-primary'>
      <Search userId={userId}  trendingData={trendingData} popularData={popularData}/>
    </section>
    </>
  )
}
