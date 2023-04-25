import { FaEllipsisH } from "react-icons/fa";
import { useState } from "react";

const dummyProgrammingProblems = [
  {
    title: `Problem 1`,
    tags: ["arrays", "functions"],
    difficulty: "easy",
  },
  {
    title: `Problem 2`,
    tags: ["loops", "conditionals"],
    difficulty: "medium",
  },
  {
    title: `Problem 3`,
    tags: ["variables", "functions"],
    difficulty: "hard",
  },
  {
    title: `Problem 1`,
    tags: ["arrays", "functions"],
    difficulty: "easy",
  },
  {
    title: `Problem 2`,
    tags: ["loops", "conditionals"],
    difficulty: "medium",
  },
  {
    title: `Problem 3`,
    tags: ["variables", "functions"],
    difficulty: "hard",
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

const Problems = ({filtered}) => {
  // const [filteredProblems, setFilteredProblems] = useState(dummyProgrammingProblems)
  // const filteredProblems = dummyProgrammingProblems.filter(problems => {return problems.difficulty === filtered[0] || problems.tags.filter(tg=> {return tg === filtered[1]})})
  const filteredProblems= [];

  for (const problems of dummyProgrammingProblems) {
    for (const val of filtered){
      if (problems.difficulty === val) {
        filteredProblems.push(problems);
      }
      else{
        for (const tgs of problems.tags){
          if (tgs === val){
            filteredProblems.push(problems);
          }
        }
      }
    }
  }
  return (
    <div className="py-3 pr-4 w-full h-screen text-code-white">
      <div className="flex justify-between">
        <div className="text-2xl">Title</div>
        <div className="text-2xl">Difficulty</div>
      </div>
      <hr className="border-2 opacity-100 border-white" />

      {filteredProblems.map(handleProgrammingProblems)}
      <div className="flex justify-center">
        <button className="py-2 pl-1.5 pr-2.5 ">
          <FaEllipsisH className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Problems;
