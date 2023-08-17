import React from "react";
import "./Workspace.css";
import Editor from "@monaco-editor/react";
import Split from "react-split";
import TestCases from "./TestCases";

const CodeEditor = () => {
  return (
    <div className="code-editor-container">
      <div className="code-editor-heading">JavaScript</div>
      <Editor
        height="85vh"
        width={`100%`}
        language={"javascript"}
        // value={value}
        defaultValue="//Write Your Code Here..."
        // onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;
