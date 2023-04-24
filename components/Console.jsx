import React from "react";
import { RxCaretUp } from "react-icons/rx";

const Console = () => {
  return (
    <div className="p-2.5 text-code-white flex-col font-readex">
      <div className="flex flex-row gap-4 font-normal">
        <button className="underline underline-offset-4">Testcase</button>
        <button className="">Result</button>
      </div>
      <div className="h-40"></div>
      <div className="flex flex-row gap-4 justify-between">
        <button className="flex rounded-lg bg-code-darkpurple px-3 py-1">
          Console <RxCaretUp className="text-2xl" />
        </button>
        <div className="flex text-code-black gap-2">
          <button className="rounded-full bg-code-white font-bold px-3">
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
