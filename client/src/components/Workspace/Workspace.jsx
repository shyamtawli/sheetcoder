import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import CodeEditor from "./CodeEditor";

function Workspace() {
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

  return (
    <Split className="split" minSize={0}>
      <ProblemDescription details={details} />
      <CodeEditor />
    </Split>
  );
}

export default Workspace;
