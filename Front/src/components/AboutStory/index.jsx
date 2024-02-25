import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function AboutStory() {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutStory">
          <div className="imagesAbout">
            <img src="/src/images/about-2.jpg" alt="" />
            <img src="/src/images/about-3.jpg" alt="" className="aboutimg3" />
          </div>
          <div className="story">
            <span>Our Philosophy</span>
            <h2>
              EVERY DISH IS <br />A STORY
            </h2>
            <p>
              Simple and balanced. Alexander Petillo brings together flavors and
              specialties from Italy and beyond to create his own culinary
              world, full of surprising artistry.
            </p>
            <p>
              Our attentive and welcoming staff is here to ensure that your
              experience with us is nothing short of exceptional.
            </p>
            <Link to={"/chef"}>
              <div className="btn">
                <p>VIEW ALL THE CHEF</p>
                <div className="opacity"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutStory;
