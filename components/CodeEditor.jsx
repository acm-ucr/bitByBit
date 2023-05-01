import React from "react";
import CodeContext from "./CodeContext";
import { useContext } from "react";

const CodeEditor = () => {
  const { code, setCode } = useContext(CodeContext);
  console.log(code);
  return (
    <div className="p-6 w-full">
      <textarea
        className="text-code-white bg-transparent w-full resize-none border-white border-2 focus:outline-none"
        onChange={(e) => setCode(e.target.value)}
      />
    </div>
  );
};

export default CodeEditor;
