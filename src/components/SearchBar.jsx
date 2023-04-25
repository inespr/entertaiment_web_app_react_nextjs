import Image from "next/image";
import { createContext, useContext } from "react";
import styles from "./SearchBar.module.css";
import { useEffect, useState } from "react";
import { SearchDataContext } from "./DataContext";
import { SearchResults } from "./SearchResults";

export default function SearchBar() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_API_BASE_PATH}/search/movie?api_key=${
          process.env.NEXT_PUBLIC_TMDB_API_KEY
        }&language=en-US&query=${encodeURI(query)}&page=1&include_adult=false`
      );
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    if (query.length >= 3) {
      fetchData();
    }
  }, [query]);

  return (
    <>
      <div className={styles.input_search_wrapper}>
        <Image
          src="/icons/icon-search.svg"
          alt="movies"
          width={15}
          height={15}
          className={styles.svg}
        />
        <input
          type="search"
          className={styles.input_search}
          placeholder="Search for movies, series or famous person"
          minLength={3}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <SearchDataContext.Provider value={data}>
        <SearchResults />
      </SearchDataContext.Provider>
    </>
  );
}
