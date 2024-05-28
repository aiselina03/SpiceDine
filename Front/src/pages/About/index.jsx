import React from "react";
import "./style.scss";
import { Helmet } from "react-helmet-async";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import AboutRestaurant from "../../components/AboutRestaurant";
import AboutSlider from "../../components/AboutSlider";
import CounterApp from "../../components/Counter";
import VideoAbout from "../../components/VideoAbout";
import AboutStory from "../../components/AboutStory";
import FeedBack from "../../components/FeedBack";

function About() {
  return (
    <>
      <Helmet>
        <title>SpiceDine - About Us</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
      <div className="aboutPage">
        <div className="aboutUs">
          <div className="headers">
            <h2>ABOUT US</h2>
            <p>
              Need food and a good place to eat? Welcome to our humble place where you can eat good food peacefully.
            </p>
          </div>
        </div>
        <AboutRestaurant />
        <AboutSlider />
        <CounterApp />
        <AboutStory />
        <VideoAbout />
        <FeedBack />
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default About;
