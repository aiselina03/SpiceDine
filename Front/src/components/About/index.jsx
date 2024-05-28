import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="aboutSection">
        <div className="about">
          <div className="story">
            <div className="info">
              <img src="/src/images/sepreter.png" alt="" />
              <h2>
                EVERY FLAVOR TELLS <br />A STORY
              </h2>
              <p>
                Every restaurant has a story to tell, and these narratives are
                as diverse and rich as the flavors on their menus. A
                restaurant’s story weaves together its history, concept,
                culinary vision.
              </p>
              <Link to={"/about"}>
                <div className="btn">
                  <p>ABOUT US</p>
                  <div className="opacity"></div>
                </div>
              </Link>
            </div>
            <div className="image">
              <img src="/src/images/restaurant-Image1.jpg" alt="" />
            </div>
          </div>
          <div className="sec">
            <div className="restaurantImage">
              <img src="/src/images/restaurant-Image2.jpg" alt="" />
            </div>
            <div className="time">
              <div className="tallSquare">
                <div className="square">
                  <div className="lunchTime">
                    <h2>LUNCH TIME</h2>
                    <p>
                      Monday to Sunday <br />
                      11:00 am – 2:30pm
                    </p>
                  </div>
                  <div className="dinnerTime">
                    <h2>DINNER TIME</h2>
                    <p>
                      Monday to Sunday <br />
                      5:30 am – 11:30pm
                    </p>
                  </div>
                  <div className="contactNow">
                    <img src="/src/images/sepreter.png" alt="" />
                    <h2>CONTACT NOW</h2>
                    <p>
                      71 Madison Ave, London 9578, UK,
                      <br /> +1 123 456 7890,
                      <br />
                      Email : example123@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
