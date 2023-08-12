import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Main/Home";
import Problem from "./components/Problem/Problem";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <div className="main">
        <Routes>
          {user && <Route exact path="/home" element={<Home />} />}
          {user && <Route exact path="/problem/:id" element={<Problem />} />}
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
