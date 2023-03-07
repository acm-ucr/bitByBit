import React from "react";

// name, tags, difficulty, description, example, contraints
const ProblemDescription = ({ problem }) => {
  return (
    <div className="flex flex-col bg-code-darkerpurple pt-3 pb-2 px-3 text-code-white font-readex">
      <div className="flex flex-row justify-between">
        <div className="text-2xl font-bold">{problem.name}</div>
        <div className="border-2 rounded-full py-px px-3 text-code-lightgreen border-code-lightgreen">
          {problem.difficulty}
        </div>
      </div>
      <div className="flex flex-row mt-1 mb-4 font-thin">
        {problem.tags.map((element, index) => (
          <div className={`mr-1 px-1 bg-code-black rounded`} key={index}>
            {element}
          </div>
        ))}
      </div>
      <div className="font-light mb-4">{problem.description}</div>
      <div className="text-2xl font-bold">Example</div>
      <div className="bg-code-darkpurple flex py-2.5 px-3 mb-3 my-1.5 font-thin w-full whitespace-pre rounded-2xl">
        {problem.example}
      </div>
      <div className="text-2xl font-bold">Constraints</div>
      <ul className="list-disc font-extralight">
        {problem.constraints.map((constraint, index) => (
          <div key={index}>
            <li>{constraint}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProblemDescription;
