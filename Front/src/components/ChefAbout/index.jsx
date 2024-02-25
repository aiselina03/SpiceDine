import React from "react";
import "./style.scss";
import HomeChef from "../HomeChef";

function ChefMaster() {
  return (
    <>
      <div className="chefAbout">
        <div className="chefMaster">
          <div className="chefImage">
            <img src="/src/images/chef-1.jpg" alt="" />
          </div>
          <div className="chefJonathon">
            <h2>JOHNATHAN - CHEF MASTER</h2>
            <h3>
              I like the idea of being so passionate about everything I do and
              the fact that I might wake up tomorrow and say 'I want to be a
              chef,' and just pour myself into that.
            </h3>
            <p>
              Founded in 1984 by renowned restaurant industry veteran Ray
              Schoenbaum, Marietta-based Ray's Restaurants, LLC, is comprised of
              Ray's on the River, Ray's in the City and Ray's at Killer Creek.
              Each restaurant features an award winning menu with an emphasis on
              fresh fish flown in daily from the Atlantic and Pacific, house-cut
              chops.
            </p>
            <img src="/src/images/signature.png" alt="" />
          </div>
        </div>
        <div className="chefAssistant">
          <div className="assistantAbout">
            <span>Assistant Chef</span>
            <h2>ALEX BEBIAK</h2>
            <p>
              Consider implementing an “Employee of the Month” program. Each
              month, select one outstanding team member based on criteria such
              as exceptional service, teamwork, or going above and beyond their
              responsibilities. Offer a certificate, a small trophy, or a gift
              card as a reward.
            </p>
            <p className="paragraf">
              I like the idea of being so passionate about everything I do and
              the fact that I might wake up tomorrow and say 'I want to be a
              chef,' and just pour myself into that.
            </p>
          </div>
          <div className="assistantImage">
            <img src="/src/images/chef-2.jpg" alt="" />
          </div>
          <div className="circle"></div>
        </div>
        <HomeChef />
        <div className="allChef">
          <div className="text">
            <h2>
              Along with all the other chefs, we welcome and always <br />welcome
              customers to our Brochette Restaurant
            </h2>
            
          </div><img src="/src/images/all-chefs.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default ChefMaster;
