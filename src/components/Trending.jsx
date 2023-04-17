import React from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import styles from "./Trending.module.css";

export default function Trending({ trendings }) {
  console.log("trends", trendings);
  return (
    <div>
      <h1>Trending movies and series for the week</h1>
      <Carousel
        withIndicators
        height={200}
        slideSize="100%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={3}
      >
        {trendings.results.map((result) => (
          <div key={result.id}>
            <Carousel.Slide>
              <div className={styles.trending_box}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_TMDB_IMG_BASE_PATH}${result.backdrop_path}`}
                  height={320}
                  width={420}
                  alt={`Image from ${result.title}`}
                  position={"relative"}
                  className={styles.image}
                />
                <div className={styles.description}>
                  <span className={styles.elements}>
                    <span>{result.media_type.toUpperCase()}</span>
                    <span>
                      {result.release_date && result.release_date.slice(0, 4)}
                    </span>
                    <span>{result.original_language.toUpperCase()}</span>
                  </span>
                  <li key={result.id} className={styles.title}>
                    {result.title}
                  </li>
                </div>
              </div>
            </Carousel.Slide>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
