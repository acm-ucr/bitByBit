import { useState, useEffect } from "react";
import ProgressCircle from "./ProgressCircle";
import { difficultyColors } from "./data/Problems";
import { useSession } from "next-auth/react";
import axios from "axios";

const handleProgrammingProblems = (problem, index) => {
  return (
    <div
      key={index}
      className={`${
        index % 2 == 0 ? "" : "bg-code-darkerpurple"
      } px-4 py-2 flex items-center justify-between`}
    >
      <div className="flex flex-col">
        <div className="text-2xl mb-2">{problem.data.title}</div>
        <div className="flex">
          {problem.data.tags.split(",").map((element, tagsIndex) => (
            <div
              className={`mr-1 px-1 ${
                index % 2 == 0 ? "bg-code-darkerpurple" : "bg-code-black"
              } rounded`}
              key={tagsIndex}
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
  const { data: session } = useSession();

  const [problems, setProblems] = useState([]);

  const [filteredProblems, setFilteredProblems] = useState([]);

  const [status, setStatus] = useState("all");

  const allIDs = session.user.attempts.map((attempt) => attempt.data.pid); // array of all attempted problem ids
  const incompleteIDs = session.user.attempts
    .filter((a) => a.data.complete === false)
    .map((attempt) => attempt.data.pid); // array of all incomplete attempt ids
  const completeIDs = session.user.attempts
    .filter((a) => a.data.complete === true)
    .map((attempt) => attempt.data.pid); // array of all complete attempt problem ids

  const getProblems = async () => {
    const cachedProblems = JSON.parse(localStorage.getItem("problems")) || null;

    if (cachedProblems !== null) {
      setProblems(cachedProblems);
      setFilteredProblems(
        cachedProblems.filter((problem) => allIDs.includes(problem.id))
      );
    } else {
      await axios.post("/api/getProblems").then((response) => {
        setProblems(response.data);
        localStorage.setItem("problems", JSON.stringify(response.data));
        setFilteredProblems(
          response.data.filter((problem) => allIDs.includes(problem.id))
        );
      });
    }
  };

  const filterProblem = (status) => {
    setStatus(status);
    switch (status) {
      case "all":
        setFilteredProblems(
          problems.filter((problem) => allIDs.includes(problem.id))
        );
        break;
      case "completed":
        setFilteredProblems(
          problems.filter(
            (problem) =>
              completeIDs.includes(problem.id) ||
              problem.data.title === "Two Sum"
          )
        );
        break;
      case "in-progress":
        setFilteredProblems(
          problems.filter((problem) => incompleteIDs.includes(problem.id))
        );
        break;
    }
  };

  useEffect(() => {
    getProblems();
  }, []);

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
        <div className="flex w-1/2 justify-between">
          <div className="text-xl -ml-4">Difficulty</div>
          <div className="text-xl mr-4">Status</div>
        </div>
      </div>
      <hr className="border-2 opacity-100 border-white" />
      {filteredProblems.length > 0 ? (
        filteredProblems.map(handleProgrammingProblems)
      ) : (
        <div className="text-code-gray mt-4">No problems found.</div>
      )}
    </div>
  );
};

export default ProblemRecord;
