import React from "react";
import { useState } from "react";

const TestCaseInput = ({ tests, state, handleInputChange }) => {
  return (
    <div className="flex flex-col">
      <div className="text-sm">input =</div>
      <input
        className="bg-code-darkpurple rounded-lg p-2"
        name="input"
        value={tests[state]}
        onChange={(e) => handleInputChange(e, state)}
      />
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
const TestCases = ({ inputs, setInputs }) => {
  const [state, setState] = useState(0);

  const handleInputChange = (e, index) => {
    const updateInput = inputs.map((c, i) => {
      if (i === index) {
        return e.target.value;
      } else {
        return c;
      }
    });
    setInputs(updateInput);
  };

  return (
    <div className="h-40">
      <TestCasesToggle state={state} onUpdateState={setState} />
      {state === 0 && (
        <TestCaseInput
          tests={inputs}
          handleInputChange={handleInputChange}
          state={state}
        />
      )}
      {state === 1 && (
        <TestCaseInput
          tests={inputs}
          handleInputChange={handleInputChange}
          state={state}
        />
      )}
    </div>
  );
};

export default TestCases;
