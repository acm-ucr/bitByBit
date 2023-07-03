import { useState, useContext, useEffect } from "react";
import ProgressCircle from "./ProgressCircle";
import { difficultyColors } from "./data/Problems";
import CodeContext from "./CodeContext";

const handleProgrammingProblems = (problem, index) => {
  return (
    <div
      key={index}
      className={`${
        index % 2 == 0 ? "" : "bg-code-darkerpurple"
      } p-4 flex items-center justify-between`}
    >
      <div className="flex flex-col">
        <div className="text-2xl mb-2">{problem.data.title}</div>
        <div className="flex">
          {problem.data.tags.map((element, tagsIndex) => (
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
            difficultyColors[problem.data.difficulty]
          } text-2xl text-center`}
        >
          {problem.data.difficulty}
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
  const { attempts, problems } = useContext(CodeContext);

  const allProblemData = problems.filter(() => attempts.map((x) => x.data.pid));

  const [filteredProblems, setFilteredProblems] = useState([]);

  useEffect(() => {
    setFilteredProblems(allProblemData); // fixes refresh bug
  }, [problems]);

  const [status, setStatus] = useState("all");

  const filterProblem = (status) => {
    setStatus(status);
    const incompleteIDs = attempts
      .filter((a) => a.data.complete === false)
      .map((x) => x.data.pid); // array of all incomplete attempt ids
    const completeIDs = attempts
      .filter((a) => a.data.complete === true)
      .map((x) => x.data.pid); // array of all complete attempt problem ids
    switch (status) {
      case "all":
        setFilteredProblems(allProblemData);
        break;
      case "completed":
        setFilteredProblems(problems.filter((x) => completeIDs.includes(x.id)));
        break;
      case "in-progress":
        setFilteredProblems(
          problems.filter((x) => incompleteIDs.includes(x.id))
        );
        break;
    }
  };

  return (
    <div className="py-3 pr-4 font-readex w-full h-min text-code-white">
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
