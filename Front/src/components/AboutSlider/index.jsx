import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

function AboutSlider() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    centerPadding: "400px",
    speed: 500,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          centerPadding: "250px",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "140px",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          centerPadding: "60px",
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "2px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="aboutSlider">
        <Slider {...settings}>
          <div className="photo">
            <img src="/src/images/about-slider-1.jpg" alt="" />
          </div>
          <div className="photo">
            <img src="/src/images/about-slider-2.jpg" alt="" />
          </div>
          <div className="photo">
            <img src="/src/images/about-slider-3.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default AboutSlider;
