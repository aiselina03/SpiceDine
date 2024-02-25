import React from "react";
import Slider from "react-slick";
import "./style.scss";

function SliderServices() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "400px",
    slidesToShow: 1,
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
    <div className="servicesP">
      <div className="service">
        <div className="header">
          <img src="/src/images/sepreter.png" alt="" />
          <h2>YOUR PRIVATE EVENT</h2>
          <p>
          Whether you're hosting a corporate event, cocktail party, luncheon, dinner, meeting, shower, wedding reception, bat/bar mitzvah or rehearsal dinner, we know we can offer you and your guests a truly memorable event. We have a variety of private event spaces that can accommodate up to 180 guests.
          </p>
        </div>
        <div className="sliderServices">
          <Slider {...settings}>
            <div className="photos">
              <img src="/src/images/service-slider-1.jpg" alt="" />
            </div>
            <div className="photos">
              <img src="/src/images/service-slider-2.jpg" alt="" />
            </div>
            <div className="photos">
              <img src="/src/images/service-slider-3.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SliderServices;
