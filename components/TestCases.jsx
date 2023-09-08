import { useState } from "react";

const TestCaseInput = ({ tests, state }) => {
  return (
    <div className="flex flex-col">
      <div className="text-sm">input =</div>
      <div className="bg-code-darkpurple rounded-lg p-2">
        {tests ? tests[state].input : <div />}
      </div>
    </div>
  );
};
const TestCasesToggle = ({ caseIndex, state, onUpdateState }) => {
  return (
    <div
      className={`${
        state === caseIndex ? "bg-code-darkpurple" : "bg-code-darkerpurple"
      } hover:bg-code-darkpurple rounded-lg px-3 py-1 text-code-white cursor-pointer`}
      onClick={() => onUpdateState(caseIndex)}
    >
      Case {caseIndex + 1}
    </div>
  );
};
const TestCases = ({ problem }) => {
  const [state, setState] = useState(0);

  return (
    <div className="h-full">
      <div className="flex flex-row gap-2 py-2 h-30">
        {problem.testcases.map((input, index) => (
          <TestCasesToggle
            key={index}
            caseIndex={index}
            state={state}
            onUpdateState={setState}
          />
        ))}
      </div>
      <TestCaseInput tests={problem.testcases} state={state} />
    </div>
  );
};

export default TestCases;
