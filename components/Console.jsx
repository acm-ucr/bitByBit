import React, { useContext } from "react";
import { RxCaretUp } from "react-icons/rx";
import { useState } from "react";
// import axios from "axios";
import CodeContext from "../components/CodeContext";

const ConsoleStateToggle = ({ state, onUpdateState }) => {
  return (
    <>
      <div className="flex flex-row gap-4 font-normal">
        <div
          className={`${
            state === 0
              ? "underline underline-offset-4 cursor-pointer"
              : "cursor-pointer"
          }`}
          onClick={() => onUpdateState(0)}
        >
          Testcase
        </div>
        <div
          className={`${
            state === 1
              ? "underline underline-offset-4 cursor-pointer"
              : "cursor-pointer"
          }`}
          onClick={() => onUpdateState(1)}
        >
          Result
        </div>
      </div>
    </>
  );
};

const Console = () => {
  const [state, setState] = useState(0);
  const { language, code } = useContext(CodeContext);

  const [isRunning, setIsRunning] = useState(false);

  const handleExecute = async () => {
    console.log(language, code);
    setIsRunning(true);
    // axios
    //   .post("/api/execute", {
    //     source_code: code,
    //     language_id: language.id,
    //     stdin: null,
    //   })
    //   .then((response) => {
    //     console.log("BHELLO", response.data);
    //   });

    // SIMULATE API CALL HERE
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsRunning(false);
  };

  const handleSubmit = async () => {
    setIsRunning(true);

    // SIMULATE API CALL HERE
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setState(1);
    setIsRunning(false);
  };

  console.log(isRunning);

  return (
    <div className="p-2.5 text-code-white flex-col font-readex bg-code-darkerpurple">
      <ConsoleStateToggle state={state} onUpdateState={setState} />
      {state === 0 && <div className="h-40">.</div>}
      {state === 1 && <div className="h-40">..</div>}
      <div className="flex flex-row gap-4 justify-between">
        <button className="flex rounded-lg bg-code-darkpurple px-3 py-1">
          Console <RxCaretUp className="text-2xl" />
        </button>
        <div className="flex text-code-black gap-2">
          <button
            disabled={isRunning}
            onClick={handleExecute}
            className={`rounded-full bg-code-white font-bold px-3 ${
              isRunning ? `cursor-not-allowed` : `cursor-pointer`
            }`}
          >
            Run
          </button>
          <button
            disabled={isRunning}
            className={`rounded-full bg-code-lime font-bold px-3 ${
              isRunning ? `cursor-not-allowed` : `cursor-pointer`
            }`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Console;
