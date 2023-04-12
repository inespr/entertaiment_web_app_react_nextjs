import styles from './SearchBar.module.css'

export default function SearchBar() {
  return (
    <div className={styles.input_search_wrapper}>
      <input type="text" className={styles.input_search} placeholder="Search for movies, series or famous person" />
    </div>
  )
}