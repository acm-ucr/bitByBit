import React from "react";

const Results = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 font-normal">
        <div className="text-lg text-code-green">Accepted</div>
        <div className="text-sm">Runtime: 0ms</div>
      </div>
      <div className="flex flex-row gap-4 font-normal">
        <button className="flex rounded-lg bg-code-darkpurple px-3 py-1">
          Case 1
        </button>
        <button className="flex rounded-lg bg-code-darkpurple px-3 py-1">
          Case 2
        </button>
      </div>
      <div>
        Input
        <div className="flex rounded-lg bg-code-darkpurple px-3 py-1">
          <p>s =</p>
          <p>{"hello"}</p>
        </div>
      </div>
      <div>
        Output
      </div>
      <div>Expected</div>
    </div>
  );
};

export default Results;
