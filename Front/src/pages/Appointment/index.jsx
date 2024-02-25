import React from "react";
import BookingTable from "../../components/BookingTable";
import "./style.scss";
import Mode from "../../components/Mode";
import Scroll from "../../components/Scroll";
import Cursor from "../../components/Cursor";
import { Helmet } from "react-helmet-async";

function Appointment() {
  return (
    <>
      <Helmet>
        <title>SpiceDine - Appointment</title>
        <link
          rel="icon"
          href="https://png.pngitem.com/pimgs/s/530-5308172_restaurant-gastronomique-icone-hd-png-download.png"
        />
      </Helmet>
      <div className="appointment">
        <div className="appointmentPage">
          <div className="headers">
            <h2>BOOK A TABLE</h2>
            <p>
              Book a table to enjoy the luxury of food, music and service from
              brochette restaurant
            </p>
          </div>
        </div>
        <BookingTable />
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default Appointment;
