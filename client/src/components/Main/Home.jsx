import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Topbar/Navbar";
import "./Home.css";
import { Link } from "react-router-dom";

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
      <div className="main-container">
        <table className="problem-table">
          <thead className="table-head-col">
            <tr>
              <th className="table-heading">Rank</th>
              <th className="table-heading">Title</th>
              <th className="table-heading">Difficulty</th>
              <th className="table-heading">Category</th>
            </tr>
          </thead>
          {problems.length > 0 ? (
            <tbody>
              {problems.map((doc, idx) => {
                const difficulyColor =
                  doc.difficult === "Easy"
                    ? "green"
                    : doc.difficult === "Medium"
                    ? "yellow"
                    : "red";
                return (
                  <tr
                    className={`${idx % 2 == 1 ? "row-odd" : ""}`}
                    key={doc.id}
                  >
                    <th>{doc.order}</th>
                    <td className="title">
                      <Link to={`/problems/${doc.id}`}>{doc.title}</Link>
                    </td>
                    <td style={{ color: difficulyColor }}>{doc.difficult}</td>
                    <td>{doc.category}</td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <p>Loading...</p>
          )}
        </table>
      </div>
    </>
  );
}

export default Home;
