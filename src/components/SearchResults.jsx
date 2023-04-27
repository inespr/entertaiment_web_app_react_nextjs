import { useContext } from "react";
import SearchBar, { SearchContext } from "./SearchBar";
import { SearchDataContext } from "./DataContext";
import Image from "next/image";
import { FiStar } from "react-icons/fi";
import styles from "./SearchResults.module.css";

export function SearchResults() {
  const value = useContext(SearchDataContext);
  console.log("datos en search result", value.results);
  return (
    <div className={styles.resultsSection}>
      {value &&
        value.results &&
        value.results.map((result) => (
          <div key={result.id} className={styles.rated_box_wrapper}>
            <div className={styles.bookmark}>
              <Image
                src="/icons/icon-bookmark-empty.svg"
                alt="home"
                width={12}
                height={12}
              />
            </div>
            <div className={styles.rated_box}>
              <Image
                src={result.backdrop_path || result.poster_path ? `${process.env.NEXT_PUBLIC_TMDB_IMG_BASE_PATH}${
                  result.backdrop_path
                    ? result.backdrop_path
                    : result.poster_path
                    ? result.poster_path
                    : '/notfound'
                }`: '/icons/image-not-found.webp'}
                height={170}
                width={270}
                alt={`Image from ${result.title}`}
                position={"relative"}
                className={styles.image}
              />
              <div className={styles.description}>
                <span className={styles.elements}>
                  <span className={styles.elements_left}>
                    <span>
                      {result.release_date && result.release_date.slice(0, 4)}
                    </span>
                    <span>
                      {result.original_language &&
                        result.original_language.toUpperCase()}
                    </span>
                    <span>
                      {result.adult === false ? '' : '+18asd'}
                    </span>
                  </span>

                  <span className={styles.vote}>
                    {result.vote_average.toFixed(1)} <FiStar />
                  </span>
                </span>
                <li key={result.id} className={styles.title}>
                  {result.title}
                </li>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
