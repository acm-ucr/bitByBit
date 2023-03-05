import React from "react";

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
const ProgressCircle = () => {
  const radius = 7;
  const circleWidth = 40;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray - dashArray* 62/100;
  return (
    <svg
      width={circleWidth}
      height={circleWidth}
      viewBox={`0 0 ${circleWidth} ${circleWidth}`}
    >
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        r={radius}
        strokeWidth="19px"
        className="fill-none stroke-code-white"
      />
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        r={radius}
        strokeWidth="14px"
        style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset}}
        className="fill-none stroke-code-darkerpurple"
        transform={`rotate(45 ${circleWidth / 2} ${circleWidth / 2})`}
      />
    </svg>
  );
};

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
        <div className="flex justify-between">
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
      <div
        className={`${
          difficultyColors[problem.difficulty]
        } text-2xl text-center`}
      >
        {problem.difficulty}
      </div>
      {problem.status === "completed" ? (
        <ProgressCircle />
      ) : (
        <div className="bg-code-white rounded-full flex flex-column justify-center items-center mb-6 border-8"></div>
      )}
    </div>
  );
};

const ProblemRecord = () => {
  return (
    <div className="py-3 pr-4 font-readex w-full h-screen text-code-white">
      <div className="flex gap-3">
        <div className="font-bold text-2xl">Problem Record</div>
        <div className="flex gap-1">
          <div className="hover:cursor-pointer px-3 self-center border-code-darkpurple border-2 rounded-full">
            all
          </div>
          <div className="px-3 self-center border-code-darkpurple border-2 rounded-full">
            completed
          </div>
          <div className="px-3 self-center border-code-darkpurple border-2 rounded-full">
            in progress
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-xl">Title</div>
        <div className="flex">
          <div className="text-xl">Difficulty</div>
          <div className="text-xl">Status</div>
        </div>
      </div>
      <hr className="border-2 opacity-100 border-white" />

      {dummyProgrammingProblems.map(handleProgrammingProblems)}
    </div>
  );
};

export default ProblemRecord;
