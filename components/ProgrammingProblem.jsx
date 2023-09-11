import Link from "next/link";
import { difficultyColors, difficultyColorsBorder } from "./data/Problems";

const ProgrammingProblem = ({ problem, index, id }) => {
  const selectProblem = () => {};

  return (
    <Link
      href={"/user/problems/" + id}
      className={`${
        index % 2 == 0 ? "h-20" : "bg-code-darkerpurple h-20"
      } p-4 flex items-center justify-between no-underline ${
        difficultyColors[problem.difficulty]
      }`}
      onClick={selectProblem}
    >
      <div className="flex flex-col">
        <p className="text-2xl mb-2 text-code-white no-underline">
          {problem.title}
        </p>
        <div className="flex justify-between">
          {problem.tags &&
            typeof problem.tags === "string" &&
            problem.tags.split(",").map((tag, tagIdx) => (
              <div
                className={`mr-1 px-1 ${
                  index % 2 == 0 ? "bg-code-darkerpurple" : "bg-code-black"
                } rounded text-code-white no-underline`}
                key={tagIdx}
              >
                {tag}
              </div>
            ))}
        </div>
      </div>
      <div
        className={`${difficultyColors[problem.difficulty]} ${
          difficultyColorsBorder[problem.difficulty]
        } border-rounded border-2 py-2 px-2 rounded-full text-lg text-center`}
      >
        {problem.difficulty.toUpperCase()}
      </div>
    </Link>
  );
};

export default ProgrammingProblem;
