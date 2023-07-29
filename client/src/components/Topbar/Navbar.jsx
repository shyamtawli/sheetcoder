import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <nav>
      <div className="navbar-container">
        <button className="logout-btn" onClick={handleLogout}>
          LOGOUT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
