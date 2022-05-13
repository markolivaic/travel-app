import React from "react";
import "./DestinationsStyles.scss";

import BoraBora from "../../Assets/borabora.jpg";
import BoraBora2 from "../../Assets/borabora2.jpg";
import Maldives from "../../Assets/maldives.jpg";
import Maldives2 from "../../Assets/maldives2.jpg";
import KeyWest from "../../Assets/keywest.jpg";

const Destinations = () => {
  return (
    <div name="destinations" className="destinations">
      <div className="container">
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean's Best Beaches</p>
        <div className="img-container">
          <img
            src={BoraBora}
            alt="BoraBora"
            className="span-3 image-grid-row2"
          />
          <img src={BoraBora2} alt="BoraBora" />
          <img src={Maldives} alt="Maldives" />
          <img src={Maldives2} alt="Maldives" />
          <img src={KeyWest} alt="KeyWest" />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
