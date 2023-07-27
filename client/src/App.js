import "./App.css";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>

      <Routes>
        {user && <Route exact path="/" element={<Home />} />}
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
