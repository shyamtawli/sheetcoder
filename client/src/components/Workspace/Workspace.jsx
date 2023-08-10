import React from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription";

function Workspace() {
  return (
    <Split className="split">
      <ProblemDescription />
      <div style={{ borderRadius: "10px" }}>Code Editor</div>
    </Split>
  );
}

export default Workspace;
