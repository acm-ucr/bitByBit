import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  // setPersistence,
  // browserLocalPersistence,
  // signInWithPopup,
  GoogleAuthProvider,
  signOut as FirebaseSignOut,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../firebase";
import { useSession, signIn, signOut } from "next-auth/react";

const Welcome = () => {
  // const router = useRouter();
  const { data: session, status } = useSession();

  const login = () => {
    // setPersistence(auth, browserLocalPersistence).then(() => {
    //   return signInWithPopup(auth, new GoogleAuthProvider())
    //     .then(() => {
    //       router.push("/dashboard");
    //     })
    //     .catch((error) => {
    //       router.push("/");
    //     });
    // });
    signIn("google");
  };

  const logout = () => {
    signOut();

    FirebaseSignOut(auth).then(() => {
      console.log("Logged out Successfully");
    });
  };

  const logSession = () => {
    console.log("yo");
    console.log(session);
    console.log(auth);
  };

  useEffect(() => {
    if (status == "loading") {
      return;
    }

    if (session) {
      const idToken = session.id_token;
      const credential = GoogleAuthProvider.credential(idToken);

      signInWithCredential(auth, credential).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log("ERROR: " + errorCode);
      });
    }
  }, []);

  return (
    <div className="bg-code-black w-full">
      <div className="flex flex-col items-center pt-32">
        <div className="text-white text-5xl font-bold mb-5 font-readex">
          Welcome!
        </div>
      </div>
      <div className="flex flex-col items-center pb-32">
        <button
          onClick={login}
          className="text-black text-2xl mb-4 rounded-full w-96 h-20 ring-4 ring-white font-bold bg-blue-300 font-readex"
        >
          Get Started
        </button>
        <button
          onClick={logSession}
          className="text-black text-2xl mb-4 rounded-full w-96 h-20 ring-4 ring-white font-bold bg-blue-300 font-readex"
        >
          Log
        </button>
        <button
          onClick={() => signOut()}
          className="text-black text-2xl mb-4 rounded-full w-96 h-20 ring-4 ring-white font-bold bg-blue-300 font-readex"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Welcome;
