import React from "react";
import "./HeroStyles.scss";

import Video from "../../Assets/maldivesVideo.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <video src={Video} autoPlay loop muted id="video" />
      <div className="overlay"></div>
    </div>
  );
};

export default Hero;
