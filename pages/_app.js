import { useEffect, useState } from "react";
import CodeContext from "@/components/CodeContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";

// eslint-disable-next-line camelcase
import { Readex_Pro } from "@next/font/google";

// eslint-disable-next-line new-cap
const readex = Readex_Pro({
  subsets: ["latin"],
  variable: "--font-readex",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState({
    name: "Python",
    id: 92,
  });
  const [problem, setProblem] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        axios
          .post("api/getUserInfo", { uid: currentUser.uid })
          .then((response) => {
            setUser({
              ...response.data.data,
              name: currentUser.displayName,
              image: currentUser.photoURL,
              uid: currentUser.uid,
              email: currentUser.email,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, []);

  return (
    <CodeContext.Provider
      value={{
        user,
        setUser,
        code,
        setCode,
        language,
        setLanguage,
        problem,
        setProblem,
      }}
    >
      <main className={`${readex.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </CodeContext.Provider>
  );
}
