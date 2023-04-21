import SignUp from "@/components/SignUp";
import styles from "./AuthLayout.module.css";
import Head from "next/head";

export default function AuthLayout() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className={styles.authLayout}>
        <SignUp />
      </section>
    </>
  );
}
