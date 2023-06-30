import React, { useContext } from "react";
import { useState } from "react";
import CodeContext from "../components/CodeContext";

const ResultsStateToggle = ({ state, onUpdateState }) => {
  return (
    <>
      <div className="flex flex-row gap-4 font-normal">
        <div
          className={`${
            state === 0
              ? "flex rounded-lg bg-code-darkpurple px-3 py-1"
              : "cursor-pointer"
          }`}
          onClick={() => onUpdateState(0)}
        >
          Case 1
        </div>
        <div
          className={`${
            state === 1
              ? "flex rounded-lg bg-code-darkpurple px-3 py-1"
              : "cursor-pointer"
          }`}
          onClick={() => onUpdateState(1)}
        >
          Case 2
        </div>
      </div>
    </>
  );
};

const Results = () => {
  const [state, setState] = useState(0);
  const { language, code } = useContext(CodeContext);

  const [isRunning, setIsRunning] = useState(false);

  const handleExecute = async () => {
    setIsRunning(true);
    axios
      .post("/api/execute", {
        source_code: code.toString("base64"),
        language_id: language.id,
        stdin: null,
      })
      .then((response) => {
        console.log("BHELLO", response.data);
      })
      .finally(() => {
        setIsRunning(false);
      });
  };

  const handleSubmit = async () => {
    setIsRunning(true);
    axios
      .post("/api/execute", {
        source_code: code.toString("base64"),
        language_id: language.id,
        stdin: null,
      })
      .then((response) => {
        console.log("BHELLO", response.data);
      })
      .finally(() => {
        setState(1);
        setIsRunning(false);
      });
  };

  return (
    <div style={{ overflow: 'scroll', height: '150px'}}>
      <div className="flex flex-row gap-4 font-normal">
        <div className="text-lg text-code-green">Accepted</div>
        <div className="text-sm">Runtime: 0ms</div>
      </div>
      <div className="flex-row gap-4 font-normal">
        <ResultsStateToggle state={state} onUpdateState={setState} />
        {state === 0 && 
          <div className="h-40">.</div>}
        {state === 1 && <div className="h-40">..</div>}
        {/* <button className="flex rounded-lg bg-code-darkpurple px-3 py-1">
          Case 1
        </button>
        <button className="flex rounded-lg bg-code-darkpurple px-3 py-1">
          Case 2
        </button> */}
      </div>
      <div>
        Input
        <div className="flex rounded-lg bg-code-darkpurple px-3 py-1">
          s =
          <br/>
          &quot;hello&quot;
        </div>
      </div>
      <div>
        Output
        <div className="flex rounded-lg bg-code-darkpurple px-3 py-2">
          &quot;holle&quot;
        </div>
      </div>
      <div>
        Expected
        <div className="flex rounded-lg bg-code-darkpurple px-3 py-2">
          &quot;holle&quot;
        </div>
      </div>
    </div>
  );
};

export default Results;
