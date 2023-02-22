import ProblemDescription from "@/components/ProblemDescription";
import ProblemSolution from "@/components/ProblemSolution";
import ProblemStateToggle from "@/components/ProblemStateToggle";
import ProblemSubmission from "@/components/ProblemSubmission";
import React, { useState } from "react";

const Problems = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <ProblemStateToggle state={state} onUpdateState={setState} />
      {state === 0 && <ProblemDescription />}
      {state === 1 && <ProblemSolution />}
      {state === 2 && <ProblemSubmission />}
    </div>
  );
};

export default Problems;
