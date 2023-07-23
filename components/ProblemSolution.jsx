import React from "react";

const ProblemSolutionEntry = ({ problem }) => {
  return (
    <div className="h-full w-full bg-code-darkerpurple px-3 pt-3 text-code-white font-readex flex flex-col gap-3">
      <div className="font-bold text-2xl">
        Approach: {problem.solutions[0].title}
      </div>
      <div className="font-semibold text-2xl">
        Algorithm
        <div className="font-extralight text-xl">
          {problem.solutions[0].description}
        </div>
      </div>
      <div className="font-semibold text-2xl">
        Implementation
        <div className="bg-code-darkpurple flex p-2.5 my-1.5 font-thin w-full whitespace-pre text-xl">
          {problem.solutions[0].implementation}
        </div>
      </div>
      <div className="font-semibold text-2xl">
        Complexity Analysis
        <ul className="list-disc font-extralight text-xl">
          <li>Time Complexity: {problem.solutions[0].time}</li>
          <li>Space Complexity: {problem.solutions[0].space}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProblemSolutionEntry;
