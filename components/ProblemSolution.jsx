import React from "react";
import { useEffect, useContext } from "react";
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

const ProblemSolutionEntry = () => {
  const { problem } = useContext(CodeContext);
  return (
    <div className="min-h-screen w-full bg-code-darkerpurple px-3 pt-3 text-code-white font-readex flex flex-col gap-3">
      <div className="font-bold text-2xl">
        Approach: {problem.approach}
      </div>
      <div className="font-semibold text-2xl">
        Algorithm
        <div className="font-extralight text-xl">
          {problem.algorithm}
        </div>
      </div>
      <div className="font-semibold text-2xl">
        Implementation
        <div className="bg-code-darkpurple flex p-2.5 my-1.5 font-thin w-full whitespace-pre text-xl">
          {problem.implementation}
        </div>
      </div>
      <div className="font-semibold text-2xl">
        Complexity Analysis
        <ul className="list-disc font-extralight text-xl">
          <li>
            Time Complexity: {problem.time}
          </li>
          <li>
            Space Complexity: {problem.space}
          </li>
        </ul>
      </div>

    </div>
  );
};

// const ProblemSolution = () => {
//   // const [state, setState] = useState(0);
//   // const [inputs, setInputs] = useState([{}]);
//   const { problem } = useContext(CodeContext);

//   useEffect(() => {
//     const newArr = [...problem.solutions];
//     setInputs(newArr);
//   }, [problem.solutions]);

//   return (
//     <div className="h-40">
//         <ProblemSolutionEntry solutions={problem} />
//     </div>
//   )
// };

export default ProblemSolutionEntry;
