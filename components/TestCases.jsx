import { useState, useContext } from "react";
import CodeContext from "../components/CodeContext";

const TestCaseInput = ({ tests, state }) => {
  return (
    <div className="flex flex-col">
      <div className="text-sm">input =</div>
      <div className="bg-code-darkpurple rounded-lg p-2">
        {tests[state].input}
      </div>
    </div>
  );
};
const TestCasesToggle = ({ state, onUpdateState }) => {
  return (
    <div className="flex flex-row gap-2 py-2 h-30">
      <div
        className={`${
          state === 0 ? "bg-code-darkpurple" : "bg-code-darkerpurple"
        } hover:bg-code-darkpurple rounded-lg px-3 py-1 text-code-white cursor-pointer`}
        onClick={() => onUpdateState(0)}
      >
        Case 1
      </div>
      <div
        className={`${
          state === 1 ? "bg-code-darkpurple" : "bg-code-darkerpurple"
        } hover:bg-code-darkpurple rounded-lg px-3 py-1 text-code-white cursor-pointer`}
        onClick={() => onUpdateState(1)}
      >
        Case 2
      </div>
    </div>
  );
};
const TestCases = () => {
  const [state, setState] = useState(0);
  const { problem } = useContext(CodeContext);
  const [inputs] = useState([...problem.testcases]);

  return (
    <div className="h-40">
      <TestCasesToggle state={state} onUpdateState={setState} />
      <TestCaseInput tests={inputs} state={state} />
    </div>
  );
};

export default TestCases;
