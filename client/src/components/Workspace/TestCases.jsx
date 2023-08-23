import React from "react";

const TestCases = ({ handleCompile }) => {
  return (
    <div className="testcase-container">
      <div className="test-cases">
        <div className="test-cases-heading">Testcases</div>
        <div className="test-case-number">Case 1</div>
        <div className="testcases-input-container">
          <p>Input:</p>
          <div className="testcase-input">[2,7,11,15]</div>
        </div>
        <div className="testcases-output-container">
          <p>Output:</p>
          <div className="testcase-output">9</div>
        </div>
      </div>
      <div className="compile-btn-container">
        <button onClick={handleCompile}>Compile and Execute</button>
      </div>
    </div>
  );
};

export default TestCases;
