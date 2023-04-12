import Head from "next/head";

import styles from "./AppLayout.module.css";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function AppLayout({ metaTitle, metaDescription, children }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />

        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta name="theme-color" content="#4285f4" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:type" content="video.movie" />
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        <meta
          property="og:image"
          content="https://ia.media-imdb.com/images/rock.jpg"
        />
      </Head>
      <header className={styles.header}>
        <SideBar />
      </header>
      <main>
        <SearchBar />
        {children}
      </main>
      <footer className={styles.credits}>
        <p className={styles.text}>Powered by</p>
        <Image alt="TMDB" src="/icons/apiLogo.svg" width={100} height={10} />
      </footer>
    </div>
  );
}
