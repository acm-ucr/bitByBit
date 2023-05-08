import React from "react";
import CodeContext from "./CodeContext";
import { useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
// import { javascript } from "@codemirror/lang-javascript";
// import { python } from "@codemirror/lang-python";
import { aura } from "@uiw/codemirror-theme-aura";

const CodeEditor = () => {
  const { code, setCode } = useContext(CodeContext);
  console.log(code);
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
    setCode(value);
  }, []);
  return (
    <CodeMirror
      extensions={[cpp()]}
      // extensions={[python()]}
      // extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      theme={aura}
    />
  );
};

export default CodeEditor;
