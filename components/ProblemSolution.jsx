const ProblemSolutionEntry = ({
  methodName,
  description,
  implementation,
  timeComplexity,
  spaceComplexity,
  index,
}) => {
  return (
    <div className="min-h-screen w-full bg-code-darkerpurple px-3 pt-3 text-code-white font-readex flex flex-col gap-3">
      <div className="font-bold text-2xl">
        Approach {index}: {methodName}
      </div>
      <div className="font-semibold text-2xl">
        Algorithm
        <div className="font-thin text-xl">{description}</div>
      </div>
      <div className="font-semibold text-2xl">
        Implementation
        <div className="bg-code-darkpurple flex p-2.5 my-1.5 font-thin w-full whitespace-pre text-xl">
          {implementation}
        </div>
      </div>
      <div className="font-semibold text-2xl">
        Complexity Analysis
        <ul className="list-disc font-extralight text-xl">
          <li>Time Complexity: {timeComplexity}</li>
          <li>Space Complexity: {spaceComplexity}</li>
        </ul>
      </div>
    </div>
  );
};

const ProblemSolution = ({ entries }) => {
  return (
    <div className="min-h-screen w-full">
      {entries?.map((entry, i) => (
        <ProblemSolutionEntry
          methodName={entry.methodName}
          description={entry.description}
          implementation={entry.implementation}
          timeComplexity={entry.timeComplexity}
          spaceComplexity={entry.spaceComplexity}
          index={i + 1}
          key={i}
        />
      ))}
    </div>
  );
};

export default ProblemSolution;
