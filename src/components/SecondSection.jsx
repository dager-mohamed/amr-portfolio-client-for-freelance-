import React from "react";
import Logo from "../LOGO.png";
import "./SecondSection.css";
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
             poster={"https://cdn.veed.io/render/0fe7a7fb-588f-4655-be03-0d21ab5a98e2.mp4#t=0.001"}
              lt="best video editor"
              width="801"
              height="440"
              muted={true}
              loop={true}
            >
              <source  src={"https://cdn.veed.io/render/0fe7a7fb-588f-4655-be03-0d21ab5a98e2.mp4#t=0.001"} type="video/mp4" />
            </video>
          </a>
        </div>
      </div>
    </div>
  );
}
