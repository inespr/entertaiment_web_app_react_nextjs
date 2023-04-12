import Image from 'next/image'
import styles from './SearchBar.module.css'

export default function SearchBar() {
  return (
    <div className={styles.input_search_wrapper}>
      <Image
        src="/icons/icon-search.svg"
        alt="movies"
        width={15}
        height={15}
        className={styles.svg}
      />
      <input type="text" className={styles.input_search} placeholder="Search for movies, series or famous person" />
    </div>
  )
}