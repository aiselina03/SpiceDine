import React from "react";
import "./style.scss";

function RoomServices() {
  return (
    <>
      <div className="roomServices">
        <div className="rooms">
          <div className="room1">
            <div className="diningRoom">
              <div className="head">
                <div className="kv1"></div>
                <h2>THE PRIVATE DINING ROOM</h2>
                <div className="kv2"></div>
              </div>
              <p>Seats up to 24 , 12.9m x 4.2m</p>
              <p className="text">
                Our main Private Room is particularly popular for working
                breakfasts, lunches, presentations, celebratory teas and
                birthday dinners. Simul per omittantur voluptatibus viderer vero
                nam.
              </p>
            </div>
          </div>
          <div className="room2">
            <div className="cornerRoom">
              <div className="head">
                <div className="kv1"></div>
                <h2>THE CORNER ROOM</h2>
                <div className="kv2"></div>
              </div>
              <p>Seats up to 10 , 5.3m x 4.2m</p>
              <p className="text">
                Our main Private Room is particularly popular for working
                breakfasts, lunches, presentations, celebratory teas and
                birthday dinners. Simul per omittantur voluptatibus viderer vero
                nam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomServices;
