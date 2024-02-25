import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function AboutRestaurant() {
  return (
    <>
      <div className="aboutRestaurant">
        <div className="itemImage1">
          <img src="/src/images/item-1.png" alt="" />
        </div>
        <div className="itemImage2">
          <img src="/src/images/item-1.png" alt="" />
        </div>
        <div className="textAbout">
          <span>About Restaurant</span>
          <h2>
            5 STAR LUXURY <br />
            RESTAURANT IN LONDON
          </h2>
          <p>
            We believe independent restaurants occupy a distinctive position in
            the world of business. They are visible, important and integral
            parts of the communities they serve. Unlike their chain
            counterparts, people often have a personal connection to one or more
            of their home grown restaurants.
          </p>
          <p>
            Drawing on their respective experiences in the hospitality industry,
            the imagined a place celebrating the London’s festive spirit,
            generous cuisine and friendly atmosphere.
          </p>
          <Link to={"/appointment"}>
            <div className="btn">
              <p>BOOK A TABLE</p>
              <div className="opacity"></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutRestaurant;
