import React from "react";
import "./style.scss";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import { Helmet } from "react-helmet-async";

import ContactMessage from "../../components/ContactMessage";

function Contact() {
  return (
    <>
      <Helmet>
        <title>SpiceDine - Contact Us</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
      <div className="contactPage">
        <div className="contactUs">
          <div className="headers">
            <h2>CONTACT US</h2>
            <p>
              If you have any questions or concerns, you can contact us in the
              following ways
            </p>
          </div>
        </div>
        <div className="info">
          <div className="infos">
            <div className="contact">
              <img src="/src/images/call.png" alt="" />
              <h2>CONTACT US</h2>
              <p>
                Phone: (+001) 123-456-7890 <br />
                Email:Spicedine@templatetrip.com
              </p>
            </div>
            <div className="address">
              <img src="/src/images/address.png" alt="" />
              <h2>ADDRESS HERE</h2>
              <p>
                7515 Carriage Court, <br />
                Coachella, CA, 92236 USA
              </p>
            </div>
            <div className="time">
              <img src="/src/images//time.png" alt="" />
              <h2>OPEN TIME</h2>
              <p>
                Mon - Fri : 9.00am - 22.00pm <br />
                Saturday : 11.00 - 23.00 Sunday : Close
              </p>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d68400.13510028234!2d-74.14935246335048!3d40.74250179664903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25153abefda67%3A0x8971e805835b3a5b!2sFlyNYON%20Helicopter%20Tours!5e0!3m2!1sru!2sus!4v1701599686881!5m2!1sru!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            async
            defer
          ></iframe>
        </div>
        <ContactMessage />
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default Contact;
