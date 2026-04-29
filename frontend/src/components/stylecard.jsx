import React from "react";

const StyleCard = ({ title, img }) => {
  return (
    <div className="style-card">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default StyleCard;