import { FaEllipsisH } from "react-icons/fa";
import Link from "next/link";
import { difficultyColors } from "./data/Problems";

const handleProgrammingProblems = (problem, index) => {
  return (
    <Link
      key={index}
      href={"/problems/" + index}
      className={`${
        index % 2 == 0 ? "" : "bg-code-darkerpurple"
      } p-4 flex items-center justify-between no-underline ${
        difficultyColors[problem.difficulty]
      } `}
    >
      <div className="flex flex-col">
        <p className="text-2xl mb-2 text-code-white no-underline hover:text-code-lightpurple">
          {problem.title}
        </p>
        <div className="flex justify-between">
          {problem.tags.map((tag) => (
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

const Problems = ({ problems }) => {
  return (
    <div className="py-3 pr-4 w-full h-screen text-code-white">
      <div className="flex justify-between">
        <div className="text-2xl">Title</div>
        <div className="text-2xl">Difficulty </div>
      </div>
      <hr className="border-2 opacity-100 border-white" />

      {problems.map(handleProgrammingProblems)}
      <div className="flex justify-center">
        <button className="py-2 pl-1.5 pr-2.5 ">
          <FaEllipsisH className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Problems;
