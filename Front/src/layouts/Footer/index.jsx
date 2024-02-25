import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  function toggleFooter() {
    setIsOpen(!isOpen);
  }
  function toggleFooter2() {
    setIsOpen2(!isOpen2);
  }
  return (
    <>
      <div className="footer">
        <div className="containerFooter">
          <div className="foot1">
            <div className="quick">
              <h2>QUICK LINKS</h2>
              <ul>
                <li>
                  <Link to={"/appointment"}>Appointment</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/services"}>Services</Link>
                </li>
                <li>
                  <Link to={"/faq"}>Faq</Link>
                </li>
              </ul>
            </div>
            <div className="borderContact">
              <div className="contactUs"></div>
              <div className="contacts">
                <h2>CONTACT US</h2>
                <p>7515 Carriage Court, Coachella, CA, 92236 USA</p>
                <a href="tel:+0011234567890"> (+001) 123-456-7890</a>
                <a href="mailto:Spicedine@templatetrip.com">
                  Spicedine@templatetrip.com
                </a>
                <h1>GET OUR EMAILS FOR INFO ON NEW ITEMS, SALES</h1>
                <form action="#">
                  <input type="email" placeholder="Enter Your Email" />
                  <button>
                    <i className="fa-regular fa-paper-plane-top"></i>
                  </button>
                </form>
                <div className="brands">
                  <a href="https://www.facebook.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.youtube.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://twitter.com/?lang=en">
                    <div className="hover"></div>
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://az.linkedin.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="services">
              <h2>SERVICES</h2>
              <ul>
                <li>
                  <Link to={"/privacyPolicy"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={"/basket"}>Cart</Link>
                </li>
                <li>
                  <Link>Checkout</Link>
                </li>
                <li>
                  <Link to={"/login"}>My account</Link>
                </li>
                <li>
                  <Link to={"/shop"}>Shop</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot2">
            <p>Copyright 2024, All Rights Reserved.</p>
          </div>
        </div>
      </div>

      <div className="resFooter">
        <div className="containerFooter">
          <div className="foot1">
            <div className="row1">
              <div className="head">
                <h2>QUICK LINKS</h2>
                <i className="fa-regular fa-plus" onClick={toggleFooter}></i>
              </div>
              <div className={`quick ${isOpen ? "open" : ""}`}>
                <ul>
                  <li>
                    <Link to={"/appointment"}>Appointment</Link>
                  </li>
                  <li>
                    <Link to={"/menu"}>Menu</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/services"}>Services</Link>
                  </li>
                  <li>
                    <Link to={"/faq"}>Faq</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row2">
              <div className="head">
                <h2>SERVICES</h2>
                <i className="fa-regular fa-plus" onClick={toggleFooter2}></i>
              </div>
              <div className={`services ${isOpen2 ? "open2" : ""}`}>
                <ul>
                  <li>
                    <Link to={"/privacyPolicy"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"/basket"}>Cart</Link>
                  </li>
                  <li>
                    <Link>Checkout</Link>
                  </li>
                  <li>
                    <Link to={"/login"}>My account</Link>
                  </li>
                  <li>
                    <Link to={"/shop"}>Shop</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="borderContact">
              <div className="contactUs"></div>
              <div className="contacts">
                <h2>CONTACT US</h2>
                <p>7515 Carriage Court, Coachella, CA, 92236 USA</p>
                <a href="tel:+0011234567890"> (+001) 123-456-7890</a>
                <a href="mailto:Spicedine@templatetrip.com">
                  Spicedine@templatetrip.com
                </a>
                <h1>GET OUR EMAILS FOR INFO ON NEW ITEMS, SALES</h1>
                <form action="#">
                  <input type="email" placeholder="Enter Your Email" />
                  <button>
                    <i className="fa-regular fa-paper-plane-top"></i>
                  </button>
                </form>
                <div className="brands">
                  <a href="https://www.facebook.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.youtube.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://twitter.com/?lang=en">
                    <div className="hover"></div>
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://az.linkedin.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
