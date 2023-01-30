import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line camelcase
import { Readex_Pro } from "@next/font/google";
import Layout from "@/components/Layout";

// eslint-disable-next-line new-cap
const readex = Readex_Pro({
  subsets: ["latin"],
  variable: "--font-readex",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${readex.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
