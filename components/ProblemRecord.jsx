import React from "react";
import ProgressCircle from "./ProgressCircle";

const dummyProgrammingProblems = [
  {
    title: `Problem 1`,
    tags: ["arrays", "functions"],
    difficulty: "Easy",
    status: "in-progress",
  },
  {
    title: `Problem 2`,
    tags: ["loops", "conditionals"],
    difficulty: "Medium",
    status: "in-progress",
  },
  {
    title: `Problem 3`,
    tags: ["variables", "functions"],
    difficulty: "Hard",
    status: "completed",
  },
  {
    title: `Problem 1`,
    tags: ["arrays", "functions"],
    difficulty: "Easy",
    status: "in-progress",
  },
  {
    title: `Problem 2`,
    tags: ["loops", "conditionals"],
    difficulty: "Medium",
    status: "in-progress",
  },
  {
    title: `Problem 3`,
    tags: ["variables", "functions"],
    difficulty: "Hard",
    status: "in-progress",
  },
];

const handleProgrammingProblems = (problem, index) => {
  const difficultyColors = {
    Easy: "text-code-lime",
    Medium: "text-code-yellow",
    Hard: "text-code-pink",
  };

  return (
    <div
      key={index}
      className={`${
        index % 2 == 0 ? "" : "bg-code-darkerpurple"
      } p-4 flex items-center justify-between`}
    >
      <div className="flex flex-col">
        <div className="text-2xl mb-2">{problem.title}</div>
        <div className="flex">
          {problem.tags.map((element, tagsIndex) => (
            <div
              className={`mr-1 px-1 ${
                index % 2 == 0 ? "bg-code-darkerpurple" : "bg-code-black"
              } rounded`}
              key={index}
            >
              {element}
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 justify-between flex ">
        <div
          className={`${
            difficultyColors[problem.difficulty]
          } text-2xl text-center`}
        >
          {problem.difficulty}
        </div>
        <div className="w-1/2justify-between flex ">
          {problem.status === "completed" ? (
            <ProgressCircle completed={true} index={index} />
          ) : (
            <ProgressCircle completed={false} index={index} />
          )}
        </div>
      </div>
    </div>
  );
};

const ProblemRecord = () => {
  return (
    <div className="py-3 pr-4 font-readex w-1/2 h-screen text-code-white">
      <div className="flex gap-3 mb-3">
        <div className="font-bold text-2xl">Problem Record</div>
        <div className="flex gap-1">
          <div className="hover:cursor-pointer px-3 self-center bg-code-darkpurple border-code-darkpurple border-2 rounded-full">
            all
          </div>
          <div className="hover:cursor-pointer px-3 self-center border-code-darkpurple border-2 rounded-full">
            completed
          </div>
          <div className="hover:cursor-pointer px-3 self-center  border-code-darkpurple border-2 rounded-full">
            in progress
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-xl">Title</div>
        <div className="flex gap-10 w-1/2 justify-between">
          <div className="text-xl">Difficulty</div>
          <div className="text-xl mr-4">Status</div>
        </div>
      </div>
      <hr className="border-2 opacity-100 border-white" />

      {dummyProgrammingProblems.map(handleProgrammingProblems)}
    </div>
  );
};

export default ProblemRecord;
