import React from "react";

const dummyProgrammingProblems = [
  {
    title: `Problem 1`,
    tags: ["arrays", "functions"],
    difficulty: "Easy",
  },
  {
    title: `Problem 2`,
    tags: ["loops", "conditionals"],
    difficulty: "Medium",
  },
  {
    title: `Problem 3`,
    tags: ["variables", "functions"],
    difficulty: "Hard",
  },
];

const handleProgrammingProblems = (problem, index) => {
  const difficultyColors = { Easy: "lime", Medium: "yellow", Hard: "pink" };
  if (index % 2 == 0) {
    return (
      <div key={index} className="p-4 flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-2xl mb-2">{problem.title}</div>
          <div className="flex justify-between">
            {problem.tags.map((element, index) => (
              <div
                className="mr-1 px-1 bg-code-darkerpurple rounded"
                key={index}
              >
                {element}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`text-code-${
            difficultyColors[problem.difficulty]
          } text-2xl text-center`}
        >
          {problem.difficulty}
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={index}
        className="bg-code-darkerpurple p-4 flex items-center justify-between"
      >
        <div className="flex flex-col">
          <div className="text-2xl mb-2">{problem.title}</div>
          <div className="flex justify-between">
            {problem.tags.map((element, index) => (
              <div className="mr-1 px-1 bg-code-black rounded" key={index}>
                {element}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`text-code-${
            difficultyColors[problem.difficulty]
          } text-2xl text-center`}
        >
          {problem.difficulty}
        </div>
      </div>
    );
  }
};

const Problems = () => {
  return (
    <div className="m-4 p-4 w-full h-full bg-code-black text-code-white">
      <div className="flex justify-between">
        <div className="text-2xl">Title</div>
        <div className="text-2xl">Difficulty</div>
      </div>
      <hr className="border-2 opacity-100 border-white" />

      {dummyProgrammingProblems.map(handleProgrammingProblems)}
    </div>
  );
};

export default Problems;
