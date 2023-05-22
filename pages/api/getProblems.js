import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function getProfileInfo(req, res) {
  const output = [];
  const docSnap = await getDocs(collection(db, "problems"));
  docSnap.forEach((doc) => {
    output.push({ id: doc.id, data: doc.data() });
  });
  res.status(200).json(output);
}

// SAMPLE RESPONSE
/*
[
  {
    id: "k6FD9uCF8mzxeJsK2aAP",
    data: {
      testcases: [
        { output: "[4, 5]", input: "[1, 2, 3, 4, 5]" },
        { input: "[6, 7, 8, 9, 0]", output: "[8, 9]" },
      ],
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
    },
  },
];

*/
