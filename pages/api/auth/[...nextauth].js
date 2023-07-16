import nextAuth from "next-auth/next";
import googleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import { db } from "../../../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

export const authOptions = {
  // eslint-disable-next-line new-cap
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
  }),
  providers: [
    googleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl);
    },

    async session({ session, user }) {
      const output = [];
      const docSnap = await getDocs(
        query(collection(db, "attempts"), where("uid", "==", user.id))
      );
      docSnap.forEach((doc) => {
        output.push({ id: doc.id, data: doc.data() });
      });

      user.attempts = output;
      session.user = user;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};

export default nextAuth(authOptions);
