import Image from "next/image";
import styles from "./SearchBar.module.css";
import { useEffect, useState, } from "react";
import { useDataContext } from "@/contexts/dataContext";

export default function SearchBar() {
  //encodeURI(query)
  const [data, setData] = useState({})
  const [query, setQuery] = useState("");
  //const {setContextData} = useDataContext();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_API_BASE_PATH}/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      const data = await res.json();
      console.log(data);
      setData(data)
      setContextData(data)
    };
    if (query.length >= 3) {
      fetchData();
    }
  }, [query]);
 
  return (
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
  );
}

