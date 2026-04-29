import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import tailorImg from "../assets/tailoring.jpg";
import { login } from "../api"; // ✅ import API

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await login({ email, password });

      alert(data.message);

      // ✅ success
      localStorage.setItem("userEmail", data.user.email);
      navigate("/");

    } catch (err) {
      console.log(err);
      alert(err.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-image">
          <img src={tailorImg} alt="tailor" />
        </div>

        <div className="login-form">
          <h2 className="logo">TailorBuddy</h2>

          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="signup-text">
            Don’t have an account? <Link to="/signup">Sign-Up</Link>
          </p>

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>

      </div>
    </div>
  );
}