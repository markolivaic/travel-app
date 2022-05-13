import React from "react";
import "./ImgCarouselStyles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import BoraBora from "../../Assets/borabora.jpg";
import BoraBora2 from "../../Assets/borabora2.jpg";
import Maldives from "../../Assets/maldives.jpg";

const ImgCarousel = () => {
  return (
    <div name="carousel" className="container">
      <Carousel
        className="carousel"
        showArrows={false}
        swipeable={true}
        autoPlay
        infiniteLoop
      >
        <div>
          <img src={BoraBora} />
        </div>
        <div>
          <img src={BoraBora2} />
        </div>
        <div>
          <img src={Maldives} />
        </div>
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
