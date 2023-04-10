import React from "react";

const ProblemSolutionEntry = ({ entry, index }) => {
  return (
    <div className="bg-code-darkerpurple px-3 pt-3 text-code-white font-readex flex flex-col gap-3">
      <div className="font-bold">
        Approach {index}: {entry.methodName}
      </div>
      <div className="font-semibold">
        Algorithm
        <div className="font-thin">{entry.description}</div>
      </div>
      <div className="font-semibold">
        Implementation
        <div className="bg-code-darkpurple flex p-2.5 my-1.5 font-thin w-full whitespace-pre">
          {entry.implementation}
        </div>
      </div>
      <div className="font-semibold">
        Complexity Analysis
        <ul className="list-disc font-extralight">
          <li>Time Complexity: {entry.timeComplexity}</li>
          <li>Space Complexity: {entry.spaceComplexity}</li>
        </ul>
      </div>
    </div>
  );
};

const ProblemSolution = ({ entries }) => {
  return (
    <div className="min-h-screen w-full">
      {entries?.map((entry, i) => (
        <ProblemSolutionEntry entry={entry} index={i + 1} key={i} />
      ))}
    </div>
  );
};

export default ProblemSolution;
