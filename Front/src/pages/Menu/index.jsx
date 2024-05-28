import React from "react";
import "./style.scss";
import { Helmet } from "react-helmet-async";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import StartersMenu from "../../components/StartersMenu";
import MainMenu from "../../components/MainMenu";
import DessertMenu from "../../components/DessertMenu";
import DrinksMenu from "../../components/DrinksMenu";

function Menu() {
  return (
    <>
      <Helmet>
        <title>SpiceDine - Menu</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
      <div className="menuPage">
        <div className="ourMenu">
          <div className="headers">
            <h2>OUR MENU</h2>
            <p>
              Explore our menu with a wide range of Asian to European dishes,
              dishes to suit all your tastes or events
            </p>
          </div>
        </div>
        <StartersMenu />
        <MainMenu />
        <DessertMenu />
        <DrinksMenu />
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default Menu;
