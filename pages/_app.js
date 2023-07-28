import { useState, useEffect } from "react";
import CodeContext from "@/components/CodeContext";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";
import { SessionProvider } from "next-auth/react";
import axios from "axios";

// eslint-disable-next-line camelcase
import { Readex_Pro } from "@next/font/google";

// eslint-disable-next-line new-cap
const readex = Readex_Pro({
  subsets: ["latin"],
  variable: "--font-readex",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState({
    name: "C++",
    id: 54,
  });

  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <CodeContext.Provider
        value={{
          code,
          setCode,
          language,
          setLanguage,
        }}
      >
        <main className={`${readex.variable}`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </CodeContext.Provider>
    </SessionProvider>
  );
}
