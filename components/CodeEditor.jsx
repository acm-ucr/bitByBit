import React from "react";
import CodeContext from "./CodeContext";
import { useContext, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { aura } from "@uiw/codemirror-theme-aura";

const CodeEditor = ({ problem }) => {
  const { setCode } = useContext(CodeContext);

  const onChange = useCallback((value) => {
    setCode(value);
  }, []);

  return (
    <div className="bg-code-darkerpurple h-full">
      <CodeMirror
        extensions={[cpp()]}
        value={problem.boilerplate}
        onChange={onChange}
        theme={aura}
      />
    </div>
  );
};

export default CodeEditor;
