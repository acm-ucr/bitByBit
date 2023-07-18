import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function getProfileInfo(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    const output = [];
    const docSnap = await getDocs(collection(db, "problems"));
    docSnap.forEach((doc) => {
      output.push({ id: doc.id, data: doc.data() });
    });
    res.status(200).json(output);
  } else {
    res.status(401);
  }

  res.end()
}

// SAMPLE RESPONSE
/*
[
  {
    id: "k6FD9uCF8mzxeJsK2aAP",
    data: {
      title: "Two Sum",
      difficulty: "easy",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.  You may assume that each input would have exactly one solution, and you may not use the same element twice.  You can return the answer in any order.",
      solutions: [
        {
          title: "BRUTE FORCE",
          implementation: 'print("HELLO WORLD")',
          time: "O^n",
          space: "O^n",
        },
      ],
      tags: ["arrays", "loops"],
      constraints: [
        "2 <= nums.length <= 10^4",
        "-10^9 <= nums[i] <= 10^9",
        "-10^9 <= target <= 10^9",
        "Only one valid answer exists.",
      ],
      boilerplate: "def two_sum(nums):",
      testcases: [
        { output: "[4, 5]", input: "[1, 2, 3, 4, 5]" },
        { input: "[6, 7, 8, 9, 0]", output: "[8, 9]" },
      ],
    },
  },
];

*/
