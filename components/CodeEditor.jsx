import React from "react";
import CodeContext from "./CodeContext";
import { useContext, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
// import { javascript } from "@codemirror/lang-javascript";
// import { python } from "@codemirror/lang-python";
import { aura } from "@uiw/codemirror-theme-aura";

const CodeEditor = () => {
  const { setCode } = useContext(CodeContext);
  const onChange = useCallback((value) => {
    setCode(value);
  }, []);
  return (
    <div className="bg-code-darkerpurple h-full">
      <CodeMirror
        extensions={[cpp()]}
        // extensions={[python()]}
        // extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        theme={aura}
      />
    </div>
  );
};

export default CodeEditor;
