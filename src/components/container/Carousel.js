import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    arrows: true,
    fade: true,
    className: "carousel-container",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        <div
          className="carousel-slide slide1"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            className="carousel-image"
            src={require("./images/slide-1.jpg")}
            alt="Slide 1"
          />
        </div>
        <div className="carousel-slide slide2">
          <img
            className="carousel-image"
            src={require("./images/slide-2.jpg")}
            alt="Slide 2"
          />
        </div>
        <div className="carousel-slide slide3">
          <img
            className="carousel-image"
            src={require("./images/slide-3.jpg")}
            alt="Slide 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
