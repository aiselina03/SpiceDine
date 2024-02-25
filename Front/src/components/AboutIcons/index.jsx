import React from "react";
import "./style.scss";

function AboutIcons() {
  return (
    <>
      <div className="aboutIcons">
        <div className="iconsContainer">
          <div className="iconCards">
            <div className="iconCard">
              <div className="iconImage">
                <img src="/src/images/food-icons.png" alt="" />
              </div>
              <div className="hoverBoard"> </div>

              <h2>FOOD IS ALWAYS FRESH</h2>
              <p>
                The food we choose is always <br /> fresh and carefully checked{" "}
                <br /> before processing
              </p>
            </div>
            <div className="iconCard">
              <div className="iconImage">
                <img src="/src/images/chef.png" alt="" />
              </div>
              <div className="hoverBoard"> </div>
              <h2>LONGTIME CHEF</h2>
              <p>
                The best Chefs in the world <br />
                always have their own secrets for <br /> their dishes
              </p>
            </div>
            <div className="iconCard">
              <div className="iconImage">
                <img src="/src/images/music.png" alt="" />
              </div>{" "}
              <div className="hoverBoard"></div>
              <h2>LUXURY SPACE & MUSIC</h2>
              <p>
                What's better than enjoying <br />
                delicious food and music at the <br /> same time
              </p>
            </div>
            <div className="iconCard">
              <div className="iconImage">
                <img src="/src/images/wines.png" alt="" />
              </div>
              <div className="hoverBoard"> </div>
              <h2>DRINKS AND WINES</h2>
              <p>
                The wines at the restaurant are all <br />
                precious and of the best quality <br />
                for you enjoy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutIcons;
