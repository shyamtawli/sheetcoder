import React, { useState } from "react";
import "./Workspace.css";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const [value, setValue] = useState("");
  console.log(value);

  const handleEditorChange = (value) => {
    setValue(value);
  };

  return (
    <div className="editor-container">
      <div className="code-editor-heading">JavaScript</div>
      <Editor
        height={"50%"}
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
