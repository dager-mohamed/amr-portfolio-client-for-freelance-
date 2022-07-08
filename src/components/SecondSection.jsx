import React from "react";
import Logo from "../LOGO.png";
import "./SecondSection.css";
import video from '../WEBSITE-AD.mp4'
export function SecondSection() {
  return (
    <div id="services" className="sec-section">
      <div className="sec-section-c">
        <div className="text-sec">
          <h1> VIDEO EDITING AND CREATION MADE EASY WITH CREATIVE STUDIO</h1>
        </div>
        <div className="video-sec">
          <a>
            <video
              className="video"
              autoPlay={true}
             poster={video}
              lt="best video editor"
              width="801"
              height="440"
              muted={true}
              loop={true}
            >
              <source  src={video} type="video/mp4" />
            </video>
          </a>
        </div>
      </div>
    </div>
  );
}
