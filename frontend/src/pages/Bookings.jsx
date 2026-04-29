import React, { useState } from "react";
import "./bookings.css";

const Bookings = () => {
  // 🔥 static tailors (for now)
  const tailors = [
    { _id: "69da49c53deecd5a420a9236", name: "Anaya Designs", shopName: "Luxury Stitch" },
    { _id: "69da5ade2a80202e4a7c8768", name: "SewCraft Studio", shopName: "Modern Tailor" },
    { _id: "69da9b0bd3194b1ec3acb825", name: "Royal Stitch", shopName: "Premium Wear" },
  ];

  const [form, setForm] = useState({
    tailorId: "",
    style: "",
    date: "",
    name: "",
    phone: "",
  });

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit booking
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Booking Successful!!");
        
        // reset form
        setForm({
          tailorId: "",
          style: "",
          date: "",
          name: "",
          phone: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book Appointment ✂️</h2>

      <form className="booking-form"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        {/* Tailor Dropdown */}
        <select
          name="tailorId"
          value={form.tailorId}
          onChange={handleChange}
          required
        >
          <option value="">Select Your Tailor</option>
          {tailors.map((t) => (
            <option key={t._id} value={t._id}>
              {t.name} — {t.shopName}
            </option>
          ))}
        </select>

        {/* Style */}
        <input
          type="text"
          name="style"
          placeholder="Style (Kurti, Saree...)"
          value={form.style}
          onChange={handleChange}
          required
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        {/* Button */}
        <button className="booking-btn"
          type="submit"
          
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Bookings;