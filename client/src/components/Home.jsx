import React from "react";

function Home() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
}

export default Home;
