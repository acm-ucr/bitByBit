import { db } from "../../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

export default async function getProfileInfo(req, res) {
  const output = [];
  const docSnap = await getDocs(
    query(collection(db, "attempts"), where("uid", "==", req.body.uid))
  );
  docSnap.forEach((doc) => {
    output.push({ id: doc.id, data: doc.data() });
  });
  res.status(200).json(output);
}

// SAMPLE RESPONSE
// [
//   {
//     id: '0ecukaXAixgIjf0hr8b9',
//     data: {
//       pid: 'k6FD9uCF8mzxeJsK2aAP',
//       uid: 'UID REDACTED',
//       complete: true,
//       code: "print(\'POGGERS\')"
//     }
//   }
// ]
