import React from "react";

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <div className="navbar-container">
        <button className="logout-btn" onClick={handleLogout}>
          LogOut
        </button>
      </div>
    </>
  );
}

export default Navbar;
