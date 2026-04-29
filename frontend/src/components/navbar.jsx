import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">

      <h2 className="logo" onClick={() => navigate("/")}>
        TailorBuddy
      </h2>

      <input
        type="text"
        placeholder="Search tailor or services..."
        className="search"
      />

      <div className="nav-buttons">
        <button onClick={() => navigate("/account")} className="nav-btn">
          Account
        </button>

        <button onClick={() => navigate("/login")} className="nav-btn">
          My Cart
        </button>
      </div>

    </div>
  );
};

export default Navbar;