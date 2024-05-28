import React from "react";
import { Link } from "react-router-dom";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import "./style.scss";
import { Helmet } from "react-helmet-async";

function ErrorPage() {
  return (
    <>
        <Helmet>
        <title>SpiceDine - Not Found Page</title>
        <link rel="icon" href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png" />
      </Helmet>
      <div className="errorPage">
        <h1>404</h1>
        <h2>Oops! This Page is Not Found.</h2>
        <p>
          Sorry for the inconvenience. Go to our homepage or check out our
          latest solution for your finance and insurance needs.
        </p>
        <Link to={"/"}>
          <div className="btn">
            <p>Back to Home</p>
            <div className="opacity"></div>
          </div>
        </Link>
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default ErrorPage;
