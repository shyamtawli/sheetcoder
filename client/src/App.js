import "./App.css";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Main/Home";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      {!user && (
        <div className="navbar-container">
          <div className="navbar">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      )}
      <div className="main">
        <Routes>
          {user && <Route exact path="/home" element={<Home />} />}
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/" exact element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
