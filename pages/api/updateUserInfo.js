import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default async function updateUserInfo(req, res) {
  const userDocRef = doc(db, "users", req.body.uid);
  try {
    await updateDoc(userDocRef, {
      username: req.body.newName,
    });
    res.status(200).json({ newName: req.body.newName });
  } catch {
    res
      .status(400)
      .json({ error: "*Sorry, there was an error with your request" });
  }
}
