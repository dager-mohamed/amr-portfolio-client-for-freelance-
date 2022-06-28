import React from "react";
import Bg from "../background.jpg";
import "./Home.css";
import video from "../VIDEO-EDITING.png";
export function Home() {
  return (
    <div>
      <div id="home" className="content-landing">
        <div className="landing-content">
          <div className="landing-first-section">
            <h1>The Best choice for making videos and motion graphics</h1>
            <div className="btn-landing">
              <p>
                Creative Studio is your best choice for creating videos and
                motion graphics, as for more than 5 years we have dealt with
                major companies around the world and we have obtained the
                satisfaction of all our customers
              </p>
            </div>
          </div>
          <div className="landing-second-section">
            <img src={video} />
          </div>
        </div>
      </div>
    </div>
  );
}
