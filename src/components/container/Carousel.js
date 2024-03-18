import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Ok navigasyonunu kapat
    fade: true, // Geçiş efektini kullan
    responsive: [
      {
        breakpoint: 768, // Ekran boyutu 768px altında
        settings: {
          arrows: false, // Ok navigasyonunu kapat
        },
      },
    ],
  };

  return (
    <div className="max-w-lg rounded-lg overflow-hidden mx-auto ">
      
      <Slider {...settings}>
        {/* Carousel içeriğini buraya ekleyin */}
        <div>
          <img
            className="w-full h-64 object-cover object-center"
            src={require("./photo1.jpg")}
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            className="w-full h-64 object-cover object-center"
            src={require("./photo2.jpg")}
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            className="w-full h-64 object-cover object-center"
            src={require("./photo3.jpg")}
            alt="Slide 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
