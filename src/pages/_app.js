import Layout from "../layouts/AppLayout";
import "../styles/globals.css";
import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={outfit.className}>
      <Component {...pageProps} />
    </div>
  );
}
