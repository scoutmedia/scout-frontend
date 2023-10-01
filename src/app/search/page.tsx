import Search from '../components/Search/Search';
import Searchbar from '../components/Searchbar/searchbar';
import Sidebar from '../components/Sidebar/sidebar';
import styles from './page.module.css';

export default async function Page(){
    return (
        <>
        <section className='w-full flex'>
            <Sidebar/>
            <Search/>
        </section>
        </>
    )
}