import React from "react";
import "./Workspace.css";
import Editor from "@monaco-editor/react";
import Split from "react-split";
import TestCases from "./TestCases";

const CodeEditor = () => {
  return (
    <div className="code-editor-container">
      <Split direction="vertical">
        <div className="editor-container">
          <div className="code-editor-heading">JavaScript</div>
          <Editor
            height={`70vh`}
            width={"100%"}
            language={"javascript"}
            // value={value}
            defaultValue="//Write Your Code Here..."
            // onChange={handleEditorChange}
          />
        </div>
        <div className="testcase-container">
          <TestCases />
        </div>
      </Split>
    </div>
  );
};

export default CodeEditor;
