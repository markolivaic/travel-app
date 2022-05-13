import React from "react";
import "./SelectsStyles.scss";
import SelectsImg from "../SelectsImg/SelectsImg";

import BoraBora from "../../Assets/borabora.jpg";
import BoraBora2 from "../../Assets/borabora2.jpg";
import Maldives from "../../Assets/maldives.jpg";
import Maldives2 from "../../Assets/maldives2.jpg";
import Maldives3 from "../../Assets/maldives3.jpg";
import KeyWest from "../../Assets/keywest.jpg";

const Selects = () => {
  return (
    <div className="selects">
      <div className="container">
        <SelectsImg bgImg={BoraBora} text="Bora Bora" />
        <SelectsImg bgImg={BoraBora2} text="Emerald Bay" />
        <SelectsImg bgImg={Maldives} text="Maldives" />
        <SelectsImg bgImg={Maldives2} text="Maldives" />
        <SelectsImg bgImg={Maldives3} text="Maldives" />
        <SelectsImg bgImg={KeyWest} text="Key West" />
      </div>
    </div>
  );
};

export default Selects;
