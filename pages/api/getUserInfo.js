import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function getProfileInfo(req, res) {
  const docSnap = await getDoc(doc(db, "users", req.body.uid));
  if (!docSnap.exists()) {
    res.status(400).json({});
  } else {
    res.status(200).json({ data: docSnap.data(), id: docSnap.id });
  }
}
