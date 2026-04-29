import React from "react";

const TailorCard = ({ id, name, img, rating }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>⭐ {rating}</p>
      <button>Book Now</button>
    </div>
  );
};

export default TailorCard;