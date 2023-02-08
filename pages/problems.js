import ProblemDescription from "@/components/ProblemDescription";
import ProblemSolution from "@/components/ProblemSolution";
import ProblemSubmission from "@/components/ProblemSubmission";
import React, { useState } from "react";

const Problems = () => {
  // NEED TO ADD setState
  const [state] = useState(0);

  return (
    <div>
      {state === 0 && <ProblemDescription />}
      {state === 1 && <ProblemSolution />}
      {state === 2 && <ProblemSubmission />}
    </div>
  );
};

export default Problems;
