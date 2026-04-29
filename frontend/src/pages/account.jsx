import { Outlet, useNavigate, NavLink } from "react-router-dom";
import "./account.css";

export default function Account() {
  const navigate = useNavigate();

  return (
    <div className="account-container">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h3>Account</h3>

        <NavLink to="orders">Your Orders</NavLink>
        <NavLink to="addresses">My Addresses</NavLink>
        <NavLink to="measurements">My Measurements</NavLink>
        <NavLink to="privacy">Account Privacy</NavLink>

        {/* LOGOUT */}
        <button
          className="logout-btn"
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="account-content">
        <Outlet />
      </div>

    </div>
  );
}