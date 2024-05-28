import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";

function Order() {
  const { logOut } = useContext(UserContext);

  return (
    <>
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
          <div className="order">
            <div className="noOrder">
              <p>
                No order has been made yet.
                <Link to={"/shop"}>
                  <h4>Browse products</h4>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default Order;
