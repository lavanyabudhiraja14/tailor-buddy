import "./login.css";
import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
import tailorImg from "../assets/tailoring.jpg"; 

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Login clicked");

    try {
      const res = await fetch(`${API}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      // ✅ SUCCESS
      if (data.message === "Login successful") {
        localStorage.setItem("userEmail", data.user.email);
        navigate("/"); // 🔥 redirect to home
      }

      alert(data.message);

    } catch (err) {
      console.log(err);
      alert("Error connecting to server");
    }
  };



  return (
    <div className="login-container">
      <div className="login-card">

        {/* LEFT IMAGE */}
        <div className="login-image">
          <img src={tailorImg} alt="tailor" />
        </div>

        {/* RIGHT FORM */}
        <div className="login-form">
          <h2 className="logo">TailorBuddy</h2>

          <input
            type="text"
            placeholder="email or phone number"
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

          <button className="login-btn" onClick={handleLogin}>Login</button>
        </div>

      </div>
      
    </div>
    
  );
}