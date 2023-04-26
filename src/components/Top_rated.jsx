import Image from "next/image";
import styles from "./Top_rated.module.css";
import { FiStar } from "react-icons/fi";
import StarRating from "./StarRating";

export default function TopRated({ topmovie, toptv }) {
  console.log("top_movie", topmovie);
  return (
    <div className={styles.top_rated}>
      <h1>Top Rated Movie</h1>
      <section className={styles.wrapper_rated_box}>
        {topmovie &&
          topmovie.results &&
          topmovie.results.map((result) => (
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
                  src={`${process.env.NEXT_PUBLIC_TMDB_IMG_BASE_PATH}${result.backdrop_path}`}
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
                    </span>
                    <span className={styles.vote}>
                      <StarRating average={result.vote_average.toFixed(1)}/>
                    </span>
                  </span>
                  <li key={result.id} className={styles.title}>
                    {result.title}
                  </li>
                </div>
              </div>
            </div>
          ))}
      </section>
      <h1>Top Rated TV</h1>
      <section className={styles.wrapper_rated_box}>
        {toptv &&
          toptv.results &&
          toptv.results.map((result) => (
            <div key={result.id}>
              <div className={styles.rated_box}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_TMDB_IMG_BASE_PATH}${result.backdrop_path}`}
                  height={120}
                  width={220}
                  alt={`Image from ${result.title}`}
                  position={"relative"}
                  className={styles.image}
                />
                <div className={styles.description}>
                  <span className={styles.elements}>
                    <span className={styles.elements_left}>
                      <span>
                        {result.first_air_date &&
                          result.first_air_date.slice(0, 4)}
                      </span>
                      <span>
                        {result.original_language &&
                          result.original_language.toUpperCase()}
                      </span>
                    </span>

                    <span className={styles.vote}>
                      {result.vote_average} <FiStar />
                    </span>
                  </span>
                  <li key={result.id} className={styles.title}>
                    {result.original_name}
                  </li>
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
