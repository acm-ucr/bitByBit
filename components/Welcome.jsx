import React from "react";
import { useRouter } from "next/router";
import {
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const Welcome = () => {
  const router = useRouter();
  const login = () => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      return signInWithPopup(auth, new GoogleAuthProvider())
        .then(() => {
          router.push("/dashboard");
        })
        .catch((error) => {
          router.push("/");
        });
    });
  };

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
      </div>
    </div>
  );
};

export default Welcome;
