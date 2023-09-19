import Searchbar from './components/Searchbar/searchbar'
import Sidebar from './components/Sidebar/sidebar'
import styles from './page.module.css'

export default async function Home() {
  
  return (
    <>
       <main id={styles.main}>
       <Sidebar/>
       <div id={styles.pageContainer}>
            <Searchbar/>
       </div>
      </main>

    </>
  
  )
}
