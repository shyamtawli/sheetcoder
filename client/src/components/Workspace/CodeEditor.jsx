import React, { useState } from "react";
import "./Workspace.css";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ onChange }) => {
  const [value, setValue] = useState("");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange(value);
  };

  return (
    <div className="editor-container">
      <div className="code-editor-heading">JavaScript</div>
      <Editor
        width={`100%`}
        language={"javascript"}
        value={value}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;
