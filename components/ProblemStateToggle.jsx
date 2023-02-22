import React from "react";

const ProblemStateToggle = ({ state, onUpdateState }) => {
  return (
    <div>
      <div className="flex justify-start bg-code-lightpurple pt-2">
        <div className="flex justify-between bg-code-lightpurple w-[45%]">
          <div
            className={`${
              state === 0 ? "bg-code-darkpurple" : "bg-code-darkerpurple"
            } hover:bg-code-darkpurple rounded-t-xl px-14 text-xl text-white text-center py-2 font-medium w-1/3 cursor-pointer`}
            onClick={() => onUpdateState(0)}
          >
            Description
          </div>
          <div
            className={`${
              state === 1 ? "bg-code-darkpurple" : "bg-code-darkerpurple"
            } hover:bg-code-darkpurple rounded-t-xl px-14 text-xl text-white text-center py-2 font-medium w-1/3 cursor-pointer`}
            onClick={() => onUpdateState(1)}
          >
            Solution
          </div>
          <div
            className={`${
              state === 2 ? "bg-code-darkpurple" : "bg-code-darkerpurple"
            } hover:bg-code-darkpurple rounded-t-xl px-14 text-xl text-white text-center py-2 font-medium w-1/3 cursor-pointer`}
            onClick={() => onUpdateState(2)}
          >
            Submissions
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStateToggle;
