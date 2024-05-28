import React from "react";
import "./style.scss";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import { Helmet } from "react-helmet-async";
import PrivateBooking from "../../components/PrivateBooking";
import FeedBack from "../../components/FeedBack";
import VideoAbout from "../../components/VideoAbout";
import SliderServices from "../../components/SliderServices";
import RoomServices from "../../components/RoomServices";

function Services() {
  return (
    <>
      <Helmet>
        <title>SpiceDine - Our Services</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
      <div className="servicesPage">
        <div className="servicePage">
          <div className="headers">
            <h2>OUR SERVICES</h2>
            <p>
              Not only delicious food, we also provide customers with luxurious
              and high-class services.
            </p>
          </div>
        </div>
        <SliderServices />
        <RoomServices />
        <PrivateBooking />
        <VideoAbout />
        <FeedBack />
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default Services;
