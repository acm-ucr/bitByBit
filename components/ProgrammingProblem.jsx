import Link from "next/link";
import { difficultyColors } from "./data/Problems";
import { useContext } from "react";
import CodeContext from "./CodeContext";

const ProgrammingProblem = (problem, index) => {
  const { setProblem } = useContext(CodeContext);

  const selectProblem = () => {
    setProblem({
      difficulty: problem.difficulty,
      title: problem.title,
      tags: problem.tags,
      example: problem.example,
      constraints: problem.constraints,
      description: problem.description,
    });
  };

  return (
    <Link
      key={index}
      href={"/problems/" + index}
      className={`${
        index % 2 == 0 ? "" : "bg-code-darkerpurple"
      } p-4 flex items-center justify-between no-underline ${
        difficultyColors[problem.difficulty]
      } `}
      onClick={selectProblem}
    >
      <div className="flex flex-col">
        <p className="text-2xl mb-2 text-code-white no-underline hover:text-code-lightpurple">
          {problem.title}
        </p>
        <div className="flex justify-between">
          {problem.tags &&
            problem.tags.map((tag) => (
              <div
                className={`mr-1 px-1 ${
                  index % 2 == 0 ? "bg-code-darkerpurple" : "bg-code-black"
                } rounded text-code-white no-underline`}
                key={index}
              >
                {tag}
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
    </Link>
  );
};

export default ProgrammingProblem;
