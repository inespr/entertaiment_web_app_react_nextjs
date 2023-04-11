import Head from "next/head";
import styles from '../styles/Layout.module.css'
import SearchBar from "@/components/SearchBar";


export default function AppLayout() {
  return (
    <div className={styles.wrapper}>
     <Head>
      <SearchBar/>
     </Head>
    </div>
  )
}
