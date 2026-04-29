import "./signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    console.log("Signup clicked"); // debug

    try {
      const res = await fetch("http://localhost:8000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      alert(data.message);

    } catch (err) {
      console.log(err);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <h2 className="logo">TailorBuddy</h2>

        <input 
          type="text" 
          placeholder="Username" 
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type="password" 
          placeholder="Create password" 
          onChange={(e) => setPassword(e.target.value)}
        />

        <input 
          type="password" 
          placeholder="Confirm password"
        />

        <input 
          type="email" 
          placeholder="Email address" 
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="signup-btn" onClick={handleSignup}>
          Sign Up
        </button>

        <p className="login-text">
          Already have an Account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}