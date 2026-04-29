import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./book.css";

// import same images
import men1 from "../assets/men1.jpg";
import men2 from "../assets/men2.jpeg";
import tailor3 from "../assets/tailor3.jpeg";

import saree from "../assets/saree.png";
import suit from "../assets/suit.png";
import shirt from "../assets/shirt.jpg";

export default function Book() {
  const navigate = useNavigate();

  const [selectedTailor, setSelectedTailor] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [measurementOption, setMeasurementOption] = useState("");

  const tailors = [
    { name: "Sushma", img: men1 },
    { name: "Kirpal", img: men2 },
    { name: "Neha", img: tailor3 },
  ];

  const styles = [
    { title: "Ethnic", img: saree },
    { title: "Formal", img: suit },
    { title: "Casual", img: shirt },
  ];

  const handleConfirm = () => {
    if (!selectedTailor || !selectedStyle || !measurementOption) {
      alert("Please complete all selections");
      return;
    }

    alert("Appointment Booked!");
  };

  return (
    <div className="book-container">

      <h2>Book Appointment</h2>

      {/* 🔥 SELECT TAILOR */}
      <h3>Select Tailor</h3>
      <div className="scroll-row">
        {tailors.map((t, i) => (
          <div
            key={i}
            className={`select-card ${
              selectedTailor === t.name ? "active" : ""
            }`}
            onClick={() => setSelectedTailor(t.name)}
          >
            <img src={t.img} alt={t.name} />
            <p>{t.name}</p>
          </div>
        ))}
      </div>

      {/* 🔥 SELECT STYLE */}
      <h3>Select Style</h3>
      <div className="scroll-row">
        {styles.map((s, i) => (
          <div
            key={i}
            className={`select-card ${
              selectedStyle === s.title ? "active" : ""
            }`}
            onClick={() => setSelectedStyle(s.title)}
          >
            <img src={s.img} alt={s.title} />
            <p>{s.title}</p>
          </div>
        ))}
      </div>

      {/* 🔥 MEASUREMENTS */}
      <h3>Measurements</h3>

      <div className="measure-options">

        <div
          className={`option ${
            measurementOption === "saved" ? "active" : ""
          }`}
          onClick={() => setMeasurementOption("saved")}
        >
          Use Saved Measurements
        </div>

        <div
          className={`option ${
            measurementOption === "new" ? "active" : ""
          }`}
          onClick={() => {
            setMeasurementOption("new");
            navigate("/account/measurements"); // 🔥 redirect
          }}
        >
          Add New Measurements
        </div>

      </div>

      {/* 🔥 CONFIRM BUTTON */}
      <button className="confirm-btn" onClick={handleConfirm}>
        Confirm Booking
      </button>

    </div>
  );
}