import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import { Helmet } from "react-helmet-async";

function AdminPanel() {
  return (
    <><Helmet>
    <title>SpiceDine</title>
    <link
      rel="icon"
      href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
    />
  </Helmet>
      <div className="account">
        <p>
          <Link to={"/"}>
            <i className="fa-solid fa-house"></i>
          </Link>
          Admin Panel
        </p>
      </div>
      <div className="adminPanel">
        <h3>
          <Link to={"/menuPanel"}>Menu Panel</Link>
        </h3>
        <h3>
          <Link to={"/userPanel"}>User Panel</Link>
        </h3>
      </div>
      
      <Mode />
      <Cursor />
    </>
  );
}

export default AdminPanel;
