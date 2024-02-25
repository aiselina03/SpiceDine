import React from "react";
import "./style.scss";
import ChefMaster from "../../components/ChefAbout";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import { Helmet } from "react-helmet-async";

function ChefPage() {
  return (
    <>
      <Helmet>
        <title>SpiceDine - Our Chef</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
      <div className="chefPage">
        <div className="chefsPage">
          <div className="headers">
            <h2>MEET OUR CHEF</h2>
            <p>
              Meet the world's top, award-winning professional chefs working
              in basilico restaurants
            </p>
          </div>
        </div>
        <ChefMaster />
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default ChefPage;
