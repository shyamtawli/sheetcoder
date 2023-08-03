import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Topbar/Navbar";
import "./Home.css";

import TableData from "./TableData";

function Home() {
  const [problems, setProblems] = useState([]);
  useEffect(() => {
    async function fetchProbelems() {
      try {
        const response = await axios.get("http://localhost:3001/problemsTable");
        setProblems(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProbelems();
  }, []);

  console.log(problems);

  return (
    <>
      <Navbar />
      <TableData problems={problems} />
    </>
  );
}

export default Home;
