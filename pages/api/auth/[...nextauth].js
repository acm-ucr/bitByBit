/* eslint-disable */ // no-cap rule must be changed so GoogleProvider works
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "@/firebase";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    }),
  ],

  secret: process.env.JWT_SECRET,

  // events: {
  //   async signOut() {
  //     FirebaseSignOut(auth).then(() => {
  //       console.log("Logged out Successfully");
  //     });
  //   }
  // },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        const idToken = account.id_token;
        const credential = GoogleAuthProvider.credential(idToken);

        await signInWithCredential(auth, credential)
          .then(() => {
            console.log(auth.currentUser); // Logs correct auth with user
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);

            console.log("ERROR: " + errorCode);
          });

        return true;
      } else {
        return false;
      }
    },

    async session({ session, token, user }) {
      session.id_token = token.id_token;

      return session;
    },

    async jwt({ token, account, profile }) {
      if (account) {
        token.id_token = account.id_token;
      }

      return token;
    },
  },
};

export default NextAuth(authOptions);
