import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Account() {
  const { logOut } = useContext(UserContext);

  return (
    <>
     <Helmet>
    <title>SpiceDine - Account</title>
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
          My Account
        </p>
      </div>
      <div className="accountPages">
        <div className="accountPage">
        <div className="nav">
            <NavLink to={"/account"}>
              <h2>Dashboard</h2>
            </NavLink>
            <NavLink to={"/order"}>
              <h2>Orders</h2>
            </NavLink>
            <NavLink to={"/adresses"}>
              <h2>Addresses</h2>
            </NavLink>
            <NavLink to={"/accountDetails"}>
              <h2>Account details</h2>
            </NavLink>
            <NavLink>
              <h2 onClick={logOut}>Log out</h2>
            </NavLink>
          </div>
          <div className="dashboard">
            <h3>Hello User</h3>
            <p>
              From your account dashboard you can view your <Link to={"/order"}>
              recent orders</Link> ,
              manage your <Link to={"/adresses"}>shipping and billing addresses
              </Link>, and <Link to={"/accountDetails"}>edit your password
              and account details
              </Link> .
            </p>
          </div>
        </div>
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default Account;
