import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Workspace.css";
// import ProblemDetails from "../../problem.js";

function ProblemDescription() {
  const urlPathname = window.location.pathname;
  const segments = urlPathname.split("/");
  const problemId = segments[segments.length - 1];

  const [details, setDetails] = useState({});

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await axios.get(
          `http://localhost:3001/problem/${problemId}`
        );
        setDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetails();
  }, [problemId]);
  console.log(details);

  if (details) {
    return;
  }

  return (
    <div className="problem-desc-container">
      <div className="problem-desc-heading">Description</div>
      <div className="desc-title">
        {details.order}. {details.title}
      </div>
      <div className="desc-difficult" style={{ color: "green" }}>
        {details.difficult}
      </div>
      <div className="companies-container">
        <div className="problem-companies">Companies</div>
      </div>
      <div className="problem-description">{details.description}</div>
      <div className="problem-examples">
        {details.examples.map((example, index) => {
          return (
            <div className="example-container" key={index}>
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
        {details.constraints.map((constraint, index) => {
          return <li key={index}>{constraint}</li>;
        })}
      </div>
    </div>
  );
}

export default ProblemDescription;
