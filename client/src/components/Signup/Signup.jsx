import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { DiCodeBadge } from "react-icons/di";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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
        "https://sheetcoder-backend.vercel.app/auth/signup",
        data
      );
      console.log(response.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="logo-title">
          <DiCodeBadge size="50px" />
          <span>SheetCoder</span>
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
          <button className="submit-btn" type="submit">
            Sign Up
          </button>
        </form>
        <div className="have-account-container">
          <p>Have an account? </p>
          <a href="/login">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
