import Searchbar from './components/Searchbar/searchbar'
import Sidebar from './components/Sidebar/sidebar'
import styles from './page.module.css'

export default async function Home() {  
  return (
    <>
    <section className='w-full flex'>
        <Sidebar/>
    </section>
    </>
  )
}
