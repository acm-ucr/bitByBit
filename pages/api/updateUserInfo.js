import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function updateUserInfo(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    const userDocRef = doc(db, "users", req.body.uid);
    try {
      await updateDoc(userDocRef, {
        username: req.body.newName,
      });
      res.status(200).json({ newName: req.body.newName });
    } catch {
      res
        .status(500)
        .json({ error: "*Sorry, there was an error with your request" });
    }
  } else {
    res.status(401);
  }
  res.end();
}
