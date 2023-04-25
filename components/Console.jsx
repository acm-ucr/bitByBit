import React from "react";
import { RxCaretUp } from "react-icons/rx";
import { useState } from "react";
import axios from "axios";

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

  // temp values before context is made
  // 71 is python 3
  const language = 71;
  const code = "print('Hello World')";

  const handleExecute = () => {
    axios
      .post("/api/execute", {
        source_code: code,
        language_id: language,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="p-2.5 text-code-white flex-col font-readex">
      <ConsoleStateToggle state={state} onUpdateState={setState} />
      {state === 0 && <div className="h-40">.</div>}
      {state === 1 && <div className="h-40">..</div>}
      <div className="flex flex-row gap-4 justify-between">
        <button className="flex rounded-lg bg-code-darkpurple px-3 py-1">
          Console <RxCaretUp className="text-2xl" />
        </button>
        <div className="flex text-code-black gap-2">
          <button
            onClick={handleExecute}
            className="rounded-full bg-code-white font-bold px-3"
          >
            Run
          </button>
          <button className="rounded-full bg-code-lime font-bold px-3">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Console;
