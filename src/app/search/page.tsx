import Search from '../components/Search/Search';
import Sidebar from '../components/Sidebar/sidebar';
import { auth, currentUser } from '@clerk/nextjs';
import type {User} from '@clerk/nextjs/api'

export default async function Page(){
    const {userId} = auth()
    return (
        <>
        <section className='w-full flex'>
            <Sidebar/>
            <Search userId={userId}/>
        </section>
        </>
    )
}