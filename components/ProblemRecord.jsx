import React from "react";
import { useState } from "react";
import ProgressCircle from "./ProgressCircle";
import { dummyProgrammingProblems, difficultyColors } from "./data/Problems";

const handleProgrammingProblems = (problem, index) => {
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
        <div>
          {problem.status === "completed" ? (
            <ProgressCircle completed={false} index={index} />
          ) : (
            <ProgressCircle completed={true} index={index} />
          )}
        </div>
      </div>
    </div>
  );
};

const ProblemRecord = () => {
  const [filteredProblems, setFilteredProblems] = useState(
    dummyProgrammingProblems
  );
  const [status, setStatus] = useState("all");

  const filterProblem = (status) => {
    setStatus(status);
    switch (status) {
      case "all":
        setFilteredProblems(dummyProgrammingProblems);
        break;
      case "completed":
        setFilteredProblems(
          dummyProgrammingProblems.filter((a) => a.status === "completed")
        );
        break;
      case "in-progress":
        setFilteredProblems(
          dummyProgrammingProblems.filter((a) => a.status === "in-progress")
        );
        break;
    }
  };

  return (
    <div className="py-3 pr-4 font-readex w-full h-screen text-code-white">
      <div className="flex gap-3 mb-3">
        <div className="font-bold text-2xl">Problem Record</div>
        <div className="flex gap-1">
          <button
            onClick={() => filterProblem("all")}
            className={`hover:cursor-pointer px-3 self-center border-code-darkpurple border-2 rounded-full ${
              status === "all" ? "bg-code-darkpurple" : ""
            }`}
          >
            all
          </button>
          <button
            onClick={() => filterProblem("completed")}
            className={`hover:cursor-pointer px-3 self-center border-code-darkpurple border-2 rounded-full ${
              status === "completed" ? "bg-code-darkpurple" : ""
            }`}
          >
            completed
          </button>
          <button
            onClick={() => filterProblem("in-progress")}
            className={`hover:cursor-pointer px-3 self-center  border-code-darkpurple border-2 rounded-full ${
              status === "in-progress" ? "bg-code-darkpurple" : ""
            }`}
          >
            in progress
          </button>
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

      {filteredProblems.map(handleProgrammingProblems)}
    </div>
  );
};

export default ProblemRecord;
