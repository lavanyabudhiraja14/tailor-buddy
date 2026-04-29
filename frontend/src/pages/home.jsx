import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";


const styles = [
  { name: "Blazers", img: "https://i.pinimg.com/1200x/f3/30/ac/f330ac74d2ac868539d2fdd918d10773.jpg" },
  { name: "Kurti", img: "https://i.pinimg.com/736x/47/db/2d/47db2dd6a59d870ad53c03395767242b.jpg" },
  { name: "Saree", img: "https://i.pinimg.com/736x/cb/0d/d9/cb0dd9dc65a09e16b69ba69a211b03aa.jpg" },
  { name: "Mens-Ethnic", img: "https://i.pinimg.com/1200x/7e/f0/e9/7ef0e9b402597452a4d14a6294daa28d.jpg" },
  { name: "Anarkalis", img: "https://i.pinimg.com/736x/70/9f/49/709f49e7717d8d8b770edf1fdffb0218.jpg" },
  { name: "Bottom Wear", img: "https://i.pinimg.com/736x/48/12/4e/48124ef5bbc32859776238167b2df334.jpg" },
  { name: "Gowns", img: "https://i.pinimg.com/736x/2e/88/cc/2e88cc7c15d8dd618d2df73066f83542.jpg" },
  { name: "Sharara", img: "https://i.pinimg.com/736x/8a/7a/0c/8a7a0ce0f82a1c1ff3dde70f30cd51fc.jpg" },
  { name: "Bodycon", img: "https://i.pinimg.com/736x/c7/a4/6c/c7a46ce1d18392f1862e873476d8c49e.jpg" },
  { name: "Shirts", img: "https://i.pinimg.com/736x/ba/29/f0/ba29f0e095d5d913fe0058479d91bb67.jpg" },
];

const outfits = [
  { id: 1, img: "https://i.pinimg.com/736x/47/db/2d/47db2dd6a59d870ad53c03395767242b.jpg" },
  { id: 2, img: "https://i.pinimg.com/736x/ae/4e/eb/ae4eeb93af51089f3533225421bc57de.jpg" },
  { id: 3, img: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, img: "https://i.pinimg.com/736x/48/cc/a6/48cca6321118fa8263392f7c667fbd17.jpg" },
  { id: 5, img: "https://i.pinimg.com/736x/e7/9a/cd/e79acd777c7c533f682249cfad258bf3.jpg" },
];


const tailors = [
  {
    name: "Anaya Designs",
    rating: 4.8,
    tailorId: "69da49c53deecd5a420a9236",
    price: "₹799",
    img: "https://i.pinimg.com/1200x/13/92/ab/1392abd4ec86a2d8b421d8237cd2676b.jpg",
  },
  {
    name: "SewCraft Studio",
    rating: 4.6,
    tailorId: "69da5ade2a80202e4a7c8768",
    price: "₹599",
    img: "https://i.pinimg.com/736x/3c/69/a6/3c69a6df24907e8324a3543210d36fa6.jpg",
  },
  {
    name: "Royal Stitch",
    rating: 4.9,
    tailorId: "69da9b0bd3194b1ec3acb825",
    price: "₹999",
    img: "https://i.pinimg.com/1200x/7b/57/30/7b5730a4b85f9df67db2ac2e81925ab2.jpg",
  },
];
const reviews = [
  {
    name: "Priya S",
    text: "The fit was just perfect! I felt super confident wearing it.",
    img: "https://i.pinimg.com/1200x/17/74/8e/17748edeb985a6c3f375bd2599e43d76.jpg"
  },
  {
    name: "Ananya",
    text: "Better than ready-made outfits. Loved it!",
    img: "https://i.pinimg.com/736x/70/00/ef/7000ef2e76dac92ffde353cd8734e5a3.jpg"
  },
  {
    name: "Riya",
    text: "Stitching quality is next level.",
    img: "https://i.pinimg.com/736x/b6/03/7f/b6037fb3269b70289e91f8a0bbd840d1.jpg"
  }
];


export default function Home() {
  const navigate = useNavigate();
  // 🔥 NEW: active center index
  const [active, setActive] = useState(2);
  const [showAll, setShowAll] = useState(false);

  // 🔥 OPTIONAL: auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % outfits.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">TailorBuddy</h2>
        <div className="Nav-buttons">
          <button onClick={() => navigate("/login")}>MyCart</button>
          <button onClick={() => navigate("/account")}>Account</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1>Your Personal Tailor, One Tap Away</h1>
        <p>
          From design to doorstep -effortless tailoring made just for you.
        </p>

        <div className="outfit-row">
          {outfits.map((item, index) => (
            <div
              key={item.id}
              className={`card ${index === active ? "active" : ""}`}
              onClick={() => setActive(index)}   // 🔥 click to focus
            >
              <img src={item.img} alt="outfit" />
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="features">
  
  <div className="feature">
    <div className="icon-box">
      <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
    </div>
    <h4>Proven Experience</h4>
    <p>Over 10 years of trusted tailoring</p>
  </div>

  <div className="feature">
    <div className="icon-box">
      <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" />
    </div>
    <h4>Custom Fit</h4>
    <p>Stitching styles just how you want</p>
  </div>

  <div className="feature">
    <div className="icon-box">
      <img src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" />
    </div>
    <h4>Personalised Stitching</h4>
    <p>Tailoring designed only for you</p>
  </div>

  <div className="feature">
    <div className="icon-box">
      <img src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png" />
    </div>
    <h4>24/7 Support</h4>
    <p>We’re here whenever you need us</p>
  </div>

</div>

      {/* Categories */}
      
<div className="categories">
  <h2>Top Tailors Near You</h2>

  <div className="tailor-grid">
    {tailors.map((tailor, i) => (
      <div key={i} className="tailor-card">
        
        <img src={tailor.img} alt={tailor.name} />

        <div className="tailor-info">
          <h3>{tailor.name}</h3>
          <p className="rating">⭐ {tailor.rating}</p>
          <p className="price">{tailor.price}</p>
        </div>

      </div>
    ))}
  </div>
</div>

<div className="appoint">
  <button onClick={() => navigate("/Bookings")}>Book Appointment</button>
</div>



<div className="styles-section">

  <p className="subheading"># OUR SERVICES</p>
  <h2>We specialize in stitching</h2>

  <div className="styles-grid">
    {(showAll ? styles : styles.slice(0, 5)).map((item, i) => (
      <div key={i} className="style-card">
        <img src={item.img} alt={item.name} />
        <p>{item.name}</p>
      </div>
    ))}
  </div>

  <button 
    className="see-more-btn"
    onClick={() => setShowAll(!showAll)}
  >
    {showAll ? "Show Less" : "See More"}
  </button>

</div>
<section className="reviews-section">
  <h3># CUSTOMER REVIEWS</h3>

  <div className="reviews-wrapper">
    <div className="reviews-track">
      
      {[...reviews, ...reviews].map((review, index) => (
        <div className="review-card" key={index}>
          <img src={review.img} alt="" />
          <h4>{review.name}</h4>
          <p>{review.text}</p>
        </div>
      ))}

    </div>
  </div>
</section>
<footer className="footer">
  <div className="footer-container">

    <div className="footer-left">
      <h2>✂ TailorBuddy</h2>
      <p>Your personal tailor, one tap away.</p>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <p>Home</p>
      <p>Explore</p>
      <p>Tailors</p>
      <p>Contact</p>
    </div>

    <div className="footer-links">
      <h4>Visit Us</h4>
      <p>India</p>
      <p>Email: support@tailorbuddy.com</p>
    </div>

  </div>
</footer>
</div>
  );
}