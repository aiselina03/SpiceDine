import React from "react";
import "./style.scss";
import { Helmet } from "react-helmet-async";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import ShopCards from "../../components/ShopCards";

function Shop() {
  return (
    <>
      <Helmet>
        <title>SpiceDine - Shop</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
      <div className="shopPages">
        <div className="shopPage">
          <div className="headers">
            <h2>OUR SHOP</h2>
            <p>
              Explore our menu with a wide range of Asian to European dishes,
              dishes to suit all your tastes or events
            </p>
          </div>
        </div>
        <ShopCards />
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default Shop;
