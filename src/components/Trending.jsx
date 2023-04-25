import React from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import styles from "./Trending.module.css";

export default function Trending({ trendings }) {
  console.log("trends", trendings);
  return (
    <div>
      <h1>Trending of the week</h1>
      <Carousel
        withIndicators
        height={200}
        slideSize="100%"
        mx="auto"
        loop
        slideGap="md"
        align="start"
        slidesToScroll={3}
      >
        {trendings && trendings.results && trendings.results.map((result) => (
          <section key={result.id} className={styles.trending_box_wrapper}>
            <Carousel.Slide>
              <div className={styles.bookmark}>
                <Image
                  src="/icons/icon-bookmark-empty.svg"
                  alt="home"
                  width={12}
                  height={12}
                />
              </div>
              <section className={styles.trending_box}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_TMDB_IMG_BASE_PATH}${result.backdrop_path}`}
                  height={300}
                  width={385}
                  alt={`Image from ${result.title}`}
                  position={"relative"}
                  className={styles.image}
                />
                <div className={styles.description}>
                  <span className={styles.elements}>
                    <span>{result.media_type.toUpperCase()}</span>
                    <span>
                      {result.release_date
                        ? result.release_date.slice(0, 4)
                        : result.first_air_date.slice(0, 4)}
                    </span>
                    <span>{result.original_language.toUpperCase()}</span>
                  </span>
                  <li key={result.id} className={styles.title}>
                    {result.title ? result.title : result.name}
                  </li>
                </div>
              </section>
            </Carousel.Slide>
          </section>
        ))}
      </Carousel>
    </div>
  );
}
