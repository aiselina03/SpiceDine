import React, { useEffect, useState } from "react";
import "./style.scss";
import SliderImage from "../../components/SliderImage";
import About from "../../components/About";
import AboutIcons from "../../components/AboutIcons";
import BookingTable from "../../components/BookingTable";
import Video from "../../components/Video";
import Menu from "../../components/Menu";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import FeedBack from "../../components/FeedBack";
import HomeChef from "../../components/HomeChef";
import { Helmet } from "react-helmet-async";
import BestSeller from "../../components/BestSeller";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2300);
  }, []);

  return (
    <>
       <Helmet>
        <title>SpiceDine</title>
        <link rel="icon" href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png" />
      </Helmet>
      {loading ? (
        <div className="loaderCenter">
          <div className="loader">
            <img src="/src/images/loader.gif" alt="" />
          </div>
        </div>
      ) : (
        <>
          <div className="homePage">
            <SliderImage />
            <About /> 
            <AboutIcons />
            <Menu />
            <BookingTable />
            <BestSeller/>
            <Video />
            <HomeChef/>
            <FeedBack />
          </div>
        </>
      )}
      <Mode />
      <Scroll />
      <Cursor/>
    </>
  );
}

export default Home;
