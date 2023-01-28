/* eslint-disable new-cap */
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line camelcase
import { Readex_Pro } from "@next/font/google";

const readex = Readex_Pro({
  subsets: ["latin"],
  variable: "--font-readex",
  weight: "500",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${readex.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
