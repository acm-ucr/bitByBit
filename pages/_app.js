import { useEffect, useState } from "react";
import CodeContext from "@/components/CodeContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

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
  const [problem, setProblem] = useState({});
  const [language, setLanguage] = useState({
    name: "C++",
    id: 54,
  });
  const [problems, setProblems] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        axios
          .post("/api/getProblems")
          .then((response) => setProblems(response.data));
        axios
          .post("/api/getAttempts", { uid: currentUser.uid })
          .then((response) => setAttempts(response.data)); // note for andrew khadder
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
      } else {
        router.push("/");
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
        problems,
        setProblems,
        attempts,
        setAttempts,
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
