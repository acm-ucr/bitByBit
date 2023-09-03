import { difficultyColors, difficultyColorsBorder } from "./data/Problems";

const ProblemDescription = ({ problem }) => {
  return (
    problem && (
      <div className="flex bg-code-darkerpurple h-full p-2">
        <div className="w-full flex flex-col  pt-3 pb-3 px-3 text-code-white font-readex">
          <div className="flex flex-row justify-between">
            <div className="text-2xl font-bold">{problem.title}</div>
            <div
              className={`border-2 rounded-full py-px px-3 ${
                difficultyColors[problem.difficulty]
              } ${difficultyColorsBorder[problem.difficulty]}`}
            >
              {problem.difficulty && problem.difficulty.toUpperCase()}
            </div>
          </div>
          <div className="flex flex-row mt-1 mb-4 font-thin">
            {problem.tags &&
              problem.tags.map((element, index) => (
                <div className="mr-1 px-1 bg-code-black rounded" key={index}>
                  {element}
                </div>
              ))}
          </div>
          <div className="font-light mb-4">{problem.description}</div>
          <div className="text-2xl font-bold">Example</div>
          <div className="bg-code-darkpurple flex py-2.5 px-3 mb-3 my-1.5 font-thin w-full whitespace-pre rounded-2xl">
            {problem.example}
          </div>
        </div>
      </div>
    )
  );
};

export default ProblemDescription;
