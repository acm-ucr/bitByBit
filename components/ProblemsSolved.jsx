import React from "react";
import ProblemsCategory from "@/components/ProblemsCategory";

const ProblemsSolved = () => {
  return (
    <div className="bg-code-gray rounded-3xl w-10/12 p-6 m-6 font-medium items-center place-content-center">
      <p className="text-3xl mb-4">Problems Solved</p>
      <div className="flex justify-center">
        <div className="bg-code-gray w-40 h-40 rounded-full flex flex-column justify-center items-center border-black mb-6 border-8 border-r-code-green">
          <p className="font-semibold text-4xl mb-0">15</p>
          <p className="font-normal text-3xl mt-0">solved</p>
        </div>
      </div>
      <>
        <ProblemsCategory
          difficulty="Easy"
          solved={8}
          total={20}
          color="bg-code-lime"
        />

        <ProblemsCategory
          difficulty="Medium"
          solved={4}
          total={15}
          color="bg-code-yellow"
        />
        <ProblemsCategory
          difficulty="Hard"
          solved={3}
          total={15}
          color="bg-code-pink"
        />
      </>
    </div>
  );
};

export default ProblemsSolved;
