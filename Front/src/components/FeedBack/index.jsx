import React from "react";
import Slider from "react-slick";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeedBack() {
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
    <>
      <div className="feedBack">
        <div className="comments">
          <Slider {...settings}>
            <div>
              <div className="feed">
                <div className="quote">
                  <img src="/src/images/icon-quote.png" alt="" />
                </div>
                <p>
                  The service was impeccable. The staff was not only attentive
                  but also incredibly knowledgeable about the menu and wine
                  pairings. They guided us through the evening with genuine
                  care, ensuring our dining experience was nothing short of
                  extraordinary.
                </p>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <h4>Sophia Dubois</h4>
              </div>
            </div>
            <div>
              <div className="feed">
                <div className="quote">
                  <img src="/src/images/icon-quote.png" alt="" />
                </div>
                <p>
                  We indulged in a five-course tasting menu that showcased the
                  chef’s creativity and mastery of culinary techniques. Each
                  course was a harmonious blend of ingredients, and the flavors
                  danced on our palates.
                </p>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <h4>Alejandro Fernandez</h4>
              </div>
            </div>
            <div>
              <div className="feed">
                <div className="quote">
                  <img src="/src/images/icon-quote.png" alt="" />
                </div>
                <p>
                  Our dining experience was nothing short of exceptional, and we
                  will eagerly return to savor more of their culinary magic. I
                  wholeheartedly recommend this restaurant to anyone in search
                  of an unforgettable dining adventure.
                </p>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <h4>Diego Santos</h4>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FeedBack;
