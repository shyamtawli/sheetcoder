import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Topbar/Navbar";
import "./Home.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TableData from "./TableData";

function Home() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function fetchProbelems() {
      try {
        const response = await axios.get("http://localhost:3001/problemsTable");
        setProblems(response.data.data);
        toast.success("Logged in successfully");
      } catch (error) {
        console.log(error);
      }
    }
    fetchProbelems();
  }, []);

  return (
    <>
      <Navbar />
      <TableData problems={problems} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Home;
