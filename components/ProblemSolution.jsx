import React from "react";
import { useState, useEffect, useContext } from "react";
import { useCallback } from "react";
import axios from "axios";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import CodeContext from "../components/CodeContext";

// const ProblemSolutionEntry = ({
//   methodName,
//   description,
//   implementation,
//   timeComplexity,
//   spaceComplexity,
//   index,
// }) => {
//   return (
//     <div className="min-h-screen w-full bg-code-darkerpurple px-3 pt-3 text-code-white font-readex flex flex-col gap-3">
//       <div className="font-bold text-2xl">
//         Approach {index}: {methodName}
//       </div>
//       <div className="font-semibold text-2xl">
//         Algorithm
//         <div className="font-thin text-xl">{description}</div>
//       </div>
//       <div className="font-semibold text-2xl">
//         Implementation
//         <div className="bg-code-darkpurple flex p-2.5 my-1.5 font-thin w-full whitespace-pre text-xl">
//           {implementation}
//         </div>
//       </div>
//       <div className="font-semibold text-2xl">
//         Complexity Analysis
//         <ul className="list-disc font-extralight text-xl">
//           <li>Time Complexity: {timeComplexity}</li>
//           <li>Space Complexity: {spaceComplexity}</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

const ProblemSolutionEntry = ({solutions, state}) => {
  return (
    <div className="min-h-screen w-full bg-code-darkerpurple px-3 pt-3 text-code-white font-readex flex flex-col gap-3">
      <div className="font-bold text-2xl">
        Approach: 
        <div className="bg-code-darkpurple rounded-lg p-2">
          {solutions[state].input}
        </div>
      </div>
      <div className="font-semibold text-2xl">
        Algorithm
        <div className="bg-code-darkpurple rounded-lg p-2">
          {solutions[state].input}
        </div>
      </div>
      <div className="font-semibold text-2xl">
        Implementation
        <div className="bg-code-darkpurple rounded-lg p-2">
          {solutions[state].input}
        </div>
      </div>
      <div className="font-semibold text-2xl">
        Complexity Analysis
        <ul className="list-disc font-extralight text-xl">
          <li>
            Time Complexity:
            <div className="bg-code-darkpurple rounded-lg p-2">
              {solutions[state].input}
            </div>
          </li>
          <li>
            Space Complexity:
            <div className="bg-code-darkpurple rounded-lg p-2">
              {solutions[state].input}
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
};

const ProblemSolution = () => {
  const [state, setState] = useState(0);
  const [inputs, setInputs] = useState([{}]);
  const { problem } = useContext(CodeContext);

  const populateArray = useCallback (
    (data) => {
      const index = data.findIndex((element) => element.id == problem.id);
      const newArr = [...data[index].data.testcases];
      setInputs(newArr);
    },
    [problem.id]
  );

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      axios
        .get("../api/getProblems")
        .then((response) => populateArray(response.data))
        .catch((error) => {
          console.log(error);
        });
    });
  }, [populateArray]);

  return (
    <div className="h-40">
        <ProblemSolutionEntry solutions={inputs} state={state} />
    </div>
  )
};

// const ProblemSolution = ({ entries }) => {
//   return (
//     <div className="min-h-screen w-full">
//       {entries?.map((entry, i) => (
//         <ProblemSolutionEntry
//           methodName={entry.methodName}
//           description={entry.description}
//           implementation={entry.implementation}
//           timeComplexity={entry.timeComplexity}
//           spaceComplexity={entry.spaceComplexity}
//           index={i + 1}
//           key={i}
//         />
//       ))}
//     </div>
//   );
// };

export default ProblemSolution;
