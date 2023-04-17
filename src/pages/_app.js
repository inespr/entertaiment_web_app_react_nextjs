import 'normalize.css';
import "../styles/globals.css";
import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] });

export default function EntertainmentApp({ Component, pageProps }) {
  return (
    <div className={outfit.className}>
      <Component {...pageProps} />
    </div>
  );
}
