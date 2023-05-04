import ProblemsCategory from "@/components/ProblemsCategory";
import CodeContext from "./CodeContext";
import { useContext } from "react";

const ProblemsSolved = () => {
  const { user } = useContext(CodeContext);
  const total = Number(user?.easy + user?.medium + user?.hard);

  const problemsCategoriesData = [
    {
      difficulty: "Easy",
      solved: user?.easy,
      total: 20,
      color: "bg-code-lime",
    },
    {
      difficulty: "Medium",
      solved: user?.medium,
      total: 15,
      color: "bg-code-yellow",
    },
    {
      difficulty: "Hard",
      solved: user?.hard,
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
  return (
    <div className="bg-code-gray rounded-3xl w-2/3 p-6 m-2 font-medium">
      <div className="flex flex-col items-center">
        <div
          className="radial-progress text-code-green flex flex-col justify-center items-center"
          style={{
            "--value": total,
            "--size": "12rem",
            "--thickness": "12px",
          }}
        >
          <p className="text-4xl text-code-black mb-0">{total}</p>
          <p className="text-3xl text-code-black mt-0">Solved</p>
        </div>
      </div>
      {problemsCategoriesList}
    </div>
  );
};

export default ProblemsSolved;
