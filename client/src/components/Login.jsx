import React, { useState } from "react";
import axios from "axios";
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
    <div>
      <h2>LogIn</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={data.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
