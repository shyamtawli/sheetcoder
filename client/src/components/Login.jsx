import React, { useState } from "react";
import axios from "axios";
import { DiCodeBadge } from "react-icons/di";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/auth/login",
        data
      );

      localStorage.setItem("token", response.data);
      window.location = "/";
      console.log(response.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-title">
          <DiCodeBadge size="50px" />
          <span>SheetCoder</span>
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            className="input"
            type="email"
            name="email"
            value={data.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className="input"
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <button className="submit-btn" type="submit">
            Log In
          </button>
        </form>
        <div className="signup-container">
          <a href="">Forgot Password?</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
