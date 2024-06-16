import React, { useContext, useState } from "react";
import "./style.scss";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { SearchContext } from "../../context/searchContext";
import SearchResult from "../../components/SearchResult";
import { BasketContext } from "../../context/basketContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPages, setIsOpenPages] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const { basket } = useContext(BasketContext);
  const { decode, logOut } = useContext(UserContext);
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { id } = useParams();
  let location = useLocation();

  const handleSearch = () => {
    setShowSearchResult(!showSearchResult);
  };
  function toggleNavbar() {
    setIsOpen(!isOpen);
  }
  function toggleNavbarPages() {
    setIsOpenPages(!isOpenPages);
  }
  function toggleSearch() {
    setOpenSearch(!openSearch);
  }
  function stickyNavbar() {
    if (window.scrollY >= 500) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  window.addEventListener("scroll", stickyNavbar);

  return (
    <>
      <div
        className={`navbar
         ${
           sticky === true
             ? "sticky"
             : "" || location.pathname === `/shopDetail/${id}`
             ? "navbarBcgColor"
             : "" || location.pathname === "/basket"
             ? "navbarBcgColor"
             : "" || location.pathname === "/wishlist"
             ? "navbarBcgColor"
             : "" || location.pathname === "/*"
             ? "navbarBcgColor"
             : "" || location.pathname === "/login"
             ? "navbarBcgColor"
             : "" || location.pathname === "/signUp"
             ? "navbarBcgColor"
             : "" || location.pathname === "/resetPassword"
             ? "navbarBcgColor"
             : "" || location.pathname === "/privacyPolicy"
             ? "navbarBcgColor"
             : "" || location.pathname === "/adminPanel"
             ? "navbarBcgColor"
             : "" || location.pathname === "/menuPanel"
             ? "navbarBcgColor"
             : "" || location.pathname === "/userPanel"
             ? "navbarBcgColor"
             : "" || location.pathname === `/userEditPanel/${id}`
             ? "navbarBcgColor"
             : "" || location.pathname === `/menuEditPanel/${id}`
             ? "navbarBcgColor"
             : "" || location.pathname === "/account"
             ? "navbarBcgColor"
             : "" || location.pathname === "/order"
             ? "navbarBcgColor"
             : "" || location.pathname === "/accountDetails"
             ? "navbarBcgColor"
             : "" || location.pathname === "/adresses"
             ? "navbarBcgColor"
             : "" || location.pathname === "/checkout"
             ? "navbarBcgColor"
             : "" || location.pathname === "/billing"
             ? "navbarBcgColor"
             : "" || location.pathname === "/shipping"
             ? "navbarBcgColor"
             : ""
         }`}
      >
        <div className="header">
          <div className="message">
            <p>
              <i className="fa-light fa-gift"> </i> We are creative, ambitious
              and ready for challenges! Hire Us
            </p>
          </div>
          <div className="headerRight">
            <div className="number">
              <i className="fa-light fa-phone"></i>
              <a href="tel:+0011234567890"> (+001) 123-456-7890</a>
            </div>
            <div className="mail">
              <i className="fa-light fa-envelope"></i>
              <a href="mailto:Spicedine@templatetrip.com">
                Spicedine@templatetrip.com
              </a>
            </div>
          </div>
        </div>
        <div className="mainNavbar">
          <div className="logo">
            <NavLink to={"/"}>
              <img src="/src/images/logo.png" alt="" />
            </NavLink>
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to={"/"}>HOME</NavLink>
              </li>
              <li className="pages">
                <p>
                  PAGES <i className="fa-sharp fa-light fa-chevron-down"></i>
                </p>
                <div className="menus">
                  <NavLink to={"/chef"}>Chef</NavLink>
                  <NavLink to={"/appointment"}>Appointment</NavLink>
                  <NavLink to={"/services"}>Services</NavLink>
                  <NavLink to={"/faq"}>FAQ</NavLink>
                </div>
              </li>
              <li>
                <NavLink to={"/about"}>ABOUT</NavLink>
              </li>
              <li>
                <NavLink to={"/menu"}>MENU</NavLink>
              </li>
              <li>
                <NavLink to={"/shop"}>SHOP</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>CONTACT</NavLink>
              </li>
              {decode && decode.role === "admin" ? (
                <li>
                  <NavLink to={"/adminPanel"}>ADMIN PANEL</NavLink>
                </li>
              ) : null}
            </ul>
          </div>
          <div className="icons">
            <i
              className="fa-sharp fa-light fa-magnifying-glass"
              onClick={toggleSearch}
            ></i>

            <NavLink to={"/wishlist"}>
              <i className="fa-light fa-heart"></i>
            </NavLink>
            {decode ? (
              <>
                <div className="user">
                  <NavLink to={"/login"}>
                    <i className="fa-solid fa-user"></i>
                  </NavLink>
                  <div className="logOut" onClick={logOut}>
                    <i className="fa-regular fa-right-from-bracket"></i>
                    <p>Log Out</p>
                  </div>
                </div>
              </>
            ) : (
              <NavLink to={"/login"}>
                <i className="fa-light fa-user"></i>
              </NavLink>
            )}

            <NavLink to={"/basket"}>
              <i className="fa-light fa-cart-shopping"></i>
              {decode ? <sup>{basket.length ? basket.length : ""}</sup> : ""}
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={`resNavbar ${
          sticky === true
            ? "sticky"
            : "" || location.pathname === `/shopDetail/${id}`
            ? "navbarBcgColor"
            : "" || location.pathname === "/basket"
            ? "navbarBcgColor"
            : "" || location.pathname === "/wishlist"
            ? "navbarBcgColor"
            : "" || location.pathname === "/*"
            ? "navbarBcgColor"
            : "" || location.pathname === "/login"
            ? "navbarBcgColor"
            : "" || location.pathname === "/signUp"
            ? "navbarBcgColor"
            : "" || location.pathname === "/resetPassword"
            ? "navbarBcgColor"
            : "" || location.pathname === "/privacyPolicy"
            ? "navbarBcgColor"
            : "" || location.pathname === "/adminPanel"
            ? "navbarBcgColor"
            : "" || location.pathname === "/menuPanel"
            ? "navbarBcgColor"
            : "" || location.pathname === "/userPanel"
            ? "navbarBcgColor"
            : ""
        }`}
      >
        <div className="row">
          <div className="bars" onClick={toggleNavbar}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="logo">
            <NavLink to={"/"}>
              <img src="/src/images/logo.png" alt="" />
            </NavLink>
          </div>
          <div className="icons">
            <i
              className="fa-sharp fa-light fa-magnifying-glass"
              onClick={toggleSearch}
            ></i>
            <NavLink to={"/wishlist"}>
              <i className="fa-light fa-heart"></i>
            </NavLink>
            {decode ? (
              <NavLink to={"/login"}>
                <i className="fa-solid fa-user"></i>
              </NavLink>
            ) : (
              <NavLink to={"/login"}>
                <i className="fa-light fa-user"></i>
              </NavLink>
            )}

            <NavLink to={"/basket"}>
              <i className="fa-light fa-cart-shopping"></i>
              {decode ? <sup>{basket.length ? basket.length : ""}</sup> : ""}
            </NavLink>
          </div>
        </div>
        <div className={`resMenu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li className="pages">
              <p>
                PAGES
                <i
                  className="fa-sharp fa-light fa-chevron-down"
                  onClick={toggleNavbarPages}
                ></i>
              </p>
              <div className={`resMenus ${isOpenPages ? "openPages" : ""}`}>
                <NavLink to={"/chef"}>Chef</NavLink>
                <NavLink to={"/appointment"}>Appointment</NavLink>
                <NavLink to={"/services"}>Services</NavLink>
                <NavLink to={"/faq"}>FAQ</NavLink>
                {decode && decode.role === "admin" ? (
                  <NavLink to={"/adminPanel"}>Admin Panel</NavLink>
                ) : null}
              </div>
            </li>
            <li>
              <NavLink to={"/about"}>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>MENU</NavLink>
            </li>
            <li>
              <NavLink to={"/shop"}>SHOP</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={`searchPanel  ${openSearch ? "searchToggle" : ""}`}>
        <i className="fa-sharp fa-light fa-xmark" onClick={toggleSearch}></i>
        <div className="search">
          <input
            type="text"
            placeholder="Enter Search Keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <i
            className="fa-sharp fa-light fa-magnifying-glass"
            onClick={handleSearch}
          ></i>
        </div>
        {showSearchResult && <SearchResult />}
      </div>
    </>
  );
}

export default Navbar;
