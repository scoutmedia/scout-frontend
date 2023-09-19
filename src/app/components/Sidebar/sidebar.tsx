import styles from './sidebar.module.css';



export default async function Sidebar() {
    return (
        <div id={styles.sidebar}>
            <div id={styles.sidebarContent}>
                <header id={styles.header}>
                    <h1 id={styles.headerName}>Scout</h1>
                </header>
                <ul className={styles.navLinks}>
                    <li>Search</li>
                </ul>
            </div>
        </div>
    )
}