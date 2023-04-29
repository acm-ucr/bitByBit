import ProblemsCategory from "@/components/ProblemsCategory";

const problemsCategoriesData = [
  {
    difficulty: "Easy",
    solved: 8,
    total: 20,
    color: "bg-code-lime",
  },
  {
    difficulty: "Medium",
    solved: 4,
    total: 15,
    color: "bg-code-yellow",
  },
  {
    difficulty: "Hard",
    solved: 3,
    total: 15,
    color: "bg-code-pink",
  },
];

const problemsCategoriesList = problemsCategoriesData.map((category) => (
  <>
    <ProblemsCategory
      difficulty={category.difficulty}
      solved={category.solved}
      total={category.total}
      color={category.color}
    />
  </>
));

const ProblemsSolved = () => {
  return (
    <div className="bg-code-gray rounded-3xl w-2/3 p-6 m-2 font-medium">
      <div className="flex flex-col items-center">
        <div
          className="radial-progress text-code-green flex flex-col justify-center items-center"
          style={{ "--value": 15, "--size": "12rem", "--thickness": "12px" }}
        >
          <p className="text-4xl text-code-black mb-0">15</p>
          <p className="text-3xl text-code-black mt-0">Solved</p>
        </div>
      </div>
      {problemsCategoriesList}
    </div>
  );
};

export default ProblemsSolved;
