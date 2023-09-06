import ProgrammingProblem from "./ProgrammingProblem";

const Problems = ({ problems }) => {
  return (
    <div className="py-3 pr-4 w-full h-full text-code-white">
      <div className="flex justify-between">
        <div className="text-2xl">Title</div>
        <div className="text-2xl">Difficulty </div>
      </div>
      <hr className="border-2 opacity-100 border-white m-0" />

      {problems.map((problem, index) => (
        <ProgrammingProblem
          problem={problem.data}
          index={problem.id}
          key={index}
        />
      ))}
    </div>
  );
};

export default Problems;
