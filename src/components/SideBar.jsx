import Image from "next/image";

import styles from "./Sidebar.module.css";

export default function SideBar(params) {
  return (
    <div className={styles.sideBar}>
      <Image src="/icons/logo.svg" alt="logo" width={25} height={25} />
      <Image src="/icons/icon-nav-home.svg" alt="home" width={15} height={15} />
      <Image
        src="/icons/icon-nav-movies.svg"
        alt="movies"
        width={15}
        height={15}
      />
      <Image
        src="/icons/icon-nav-tv-series.svg"
        alt="Entertainment Web App"
        width={15}
        height={15}
      />
      <Image
        src="/icons/icon-nav-bookmark.svg"
        alt="bookmark"
        width={15}
        height={15}
      />
      <Image
        className={styles.last_child}
        src="/icons/avatar.svg"
        alt="avatar"
        width={25}
        height={25}
      />
    </div>
  );
}
