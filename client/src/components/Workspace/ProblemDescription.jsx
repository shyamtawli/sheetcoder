import React from "react";
import "./Workspace.css";
import ProblemDetails from "../../problem.js";

function ProblemDescription() {
  return (
    <div className="problem-desc-container">
      <div className="problem-desc-heading">Description</div>
      <div className="desc-title">
        {ProblemDetails.order}. {ProblemDetails.title}
      </div>
      <div className="desc-difficult" style={{ color: "green" }}>
        {ProblemDetails.difficult}
      </div>
      <div className="companies-container">
        <div className="problem-companies">Companies</div>
      </div>
      <div className="problem-description">{ProblemDetails.description}</div>
      <div className="problem-examples">
        {ProblemDetails.examples.map((example, index) => {
          return (
            <div className="example-container">
              <div className="example-no">Example {index + 1}:</div>
              <div className="example-desc">
                <strong>Input:</strong> {example.input} <br />
                <strong>Output:</strong> {example.output}
                <br />
                <strong>Explanation:</strong> {example.explanation}
              </div>
            </div>
          );
        })}
      </div>
      <div className="constraints-container">
        <div className="constraints">Constraints:</div>
        {ProblemDetails.constraints.map((constraint) => {
          return <li>{constraint}</li>;
        })}
      </div>
    </div>
  );
}

export default ProblemDescription;
