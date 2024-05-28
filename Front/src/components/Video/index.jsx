import React, { useState } from "react";
import "./style.scss";

function Video() {
  const [videoShow, setVideoShow] = useState(false);

  function playVideo() {
    setVideoShow(true);
  }

  function closeVideo() {
    setVideoShow(false);
  }
  return (
    <>
      <div className={`video ${videoShow ? "video-show" : ""}`}>
        {!videoShow && (
          <div className="play" onClick={playVideo}>
            <div className="border">
              <h2>
                Play <br /> Video
              </h2>
            </div>
          </div>
        )}

        {videoShow && (
          <>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xPPLbEFbCAo?si=S9TRGgvSz3qFVaVH"
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

export default Video;
