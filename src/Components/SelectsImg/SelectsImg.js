import React from "react";
import "./SelectsImgStyles.scss";

const SelectsImg = ({ bgImg, text }) => {
  return (
    <div className="selects-location">
      <img src={bgImg} alt="destination" />
      <div className="overlay">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SelectsImg;
