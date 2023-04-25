import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserContext from "@/components/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";
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
  const [user, setUser] = useState(null);
  const router = useRouter();

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
        router.push("/dashboard");
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <main className={`${readex.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </UserContext.Provider>
  );
}
