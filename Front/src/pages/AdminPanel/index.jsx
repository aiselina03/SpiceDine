import React from "react";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import { Helmet } from "react-helmet-async";

function AdminPanel() {
  return (
    <>
      <Helmet>
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
        <div className="panel">
           <h3>
          <NavLink to={"/menuPanel"}>Menu</NavLink>
        </h3>
        <h3>
          <NavLink to={"/userPanel"}>User</NavLink>
        </h3>
        </div>
      </div>
      <Mode />
      <Cursor />
    </>
  );
}

export default AdminPanel;
