import React from "react";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function SliderImage() {
  const settings = {
    // fade: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="sliderImage">
      <Slider {...settings}>
        <div>
          <div className="photo1">
            <div className="text">
              <h1>
                DELICACIES FLAVORS <br /> THE SEASONS
              </h1>
              <Link to={"/menu"}>
                <div className="btn">
                  <p>VIEW OUR MENU</p>
                  <div className="opacity"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="photo2">
            <div className="text">
              <h1>
                DELICACIES FLAVORS <br /> THE SEASONS
              </h1>
              <Link to={"/menu"}>
                <div className="btn">
                  <p>VIEW OUR MENU</p>
                  <div className="opacity"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="photo3">
            <div className="text">
              <h1>
                DELICACIES FLAVORS <br /> THE SEASONS
              </h1>
              <Link to={"/menu"}>
                <div className="btn">
                  <p>VIEW OUR MENU</p>
                  <div className="opacity"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderImage;
