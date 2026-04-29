import { useState } from "react";
import "./account.css";

export default function Measurements() {
  const [data, setData] = useState({
    neck: "",
    arm: "",
    chest: "",
    thigh: "",
    waist: "",
    ankle: "",
    sleeve: "",
    wrist: "",
  });

  // handle input change
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // handle save
  const handleSave = () => {
    console.log("Saved Measurements:", data);
    alert("Measurements saved successfully!");
  };

  return (
    <div className="measurements-container">

      <h2>My Measurements</h2>

      <div className="measure-grid">

        <div className="measure-box">
          <input name="neck" placeholder="neck" onChange={handleChange} />
          <span>cm</span>
        </div>

        <div className="measure-box">
          <input name="arm" placeholder="arm" onChange={handleChange} />
          <span>cm</span>
        </div>

        <div className="measure-box">
          <input name="chest" placeholder="chest" onChange={handleChange} />
          <span>cm</span>
        </div>

        <div className="measure-box">
          <input name="thigh" placeholder="thigh" onChange={handleChange} />
          <span>cm</span>
        </div>

        <div className="measure-box">
          <input name="waist" placeholder="waist" onChange={handleChange} />
          <span>cm</span>
        </div>

        <div className="measure-box">
          <input name="ankle" placeholder="ankle" onChange={handleChange} />
          <span>cm</span>
        </div>

        <div className="measure-box">
          <input name="sleeve" placeholder="sleeve" onChange={handleChange} />
          <span>cm</span>
        </div>

        <div className="measure-box">
          <input name="wrist" placeholder="wrist" onChange={handleChange} />
          <span>cm</span>
        </div>

      </div>

      <button className="save-btn" onClick={handleSave}>
        Save
      </button>

    </div>
  );
}