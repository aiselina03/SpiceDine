import React, { useState } from "react";
import "./style.scss";

function VideoAbout() {
  const [videoShowed, setVideoShowed] = useState(false);

  function playVideo() {
    setVideoShowed(true);
  }

  function closeVideo() {
    setVideoShowed(false);
  }
  return (
    <>
      <div className={`videoAbout ${videoShowed ? "video-showed" : ""}`}>
        {!videoShowed && (
          <div className="play" onClick={playVideo}>
            <div className="border">
              <h2>
                Play <br /> Video
              </h2>
            </div>
          </div>
        )}

        {videoShowed && (
          <>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kRCH8kD1GD0?si=euGciO9oPgkV0f00"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="close" onClick={closeVideo}>
              <i className="fa-light fa-times"></i>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default VideoAbout;
