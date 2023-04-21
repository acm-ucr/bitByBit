import { FaEllipsisH } from "react-icons/fa";
import Link from "next/link";

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
        <Link
          className="text-2xl mb-2 no-underline"
          href={"/problems/" + index}
        >
          {problem.title}
        </Link>
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
    </div>
  );
};

const Problems = () => {
  return (
    <div className="py-3 pr-4 w-full h-screen text-code-white">
      <div className="flex justify-between">
        <div className="text-2xl">Title</div>
        <div className="text-2xl">Difficulty</div>
      </div>
      <hr className="border-2 opacity-100 border-white" />

      {dummyProgrammingProblems.map(handleProgrammingProblems)}
      <div className="flex justify-center">
        <button className="py-2 pl-1.5 pr-2.5 ">
          <FaEllipsisH className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Problems;
