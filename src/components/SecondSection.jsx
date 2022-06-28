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
             poster={"//cdn-cf-east.streamable.com/image/4ta720_first.jpg?Expires=1656712980&Signature=Ik1Sk~Y3mbXUrZkwyPkkQM~~~bREjxr3hTc~gRTf16-UCNorPQNgUi0RmBK8N0QpsnCb5o~kBeWKOYEcq0UlMs55i9LvPGrzdtaAHAUcNicEXgKTl8H7SH14fvgGPmYxUXKR7pU2EbjuU1KuKxOUtYhdVND2I5m3zAgfbKEDWe14lbT88SXBGW4R0oRQ8zpiI6b4JL9CnYm9tDfHA00KIEZwa0UIs-P6k4UGSlY70HUt~tdcgAJjHj8nwpe~O0r3N961DXFjdhLfZfzB9tBEEsc14fDD~rgwY0QjW26byU8ibWofsmh9IktxIQWYFMG-SlLQa7j4DrfzI4oS7JIzTA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"}
              lt="best video editor"
              width="801"
              height="440"
              muted={true}
              loop={true}
            >
              <source  src={"//cdn-cf-east.streamable.com/video/mp4/4ta720.mp4?Expires=1656712980&Signature=NaKhx4FEc-DXxkF6hEGdhNE1nkRr5p0rfECPlMO2cjyvF3tgEMr78jxM3-7EG7pQ2R-74ghaEcL01H3ksl91gkpRTw-a1sMQQoNEovjcfDA2swcO~g-VUNXhQfWVrWnKd416TJfu0JzBQLSmAeAScZxuN06kIh2mFfUP10GYVFfwT158jPwe5XBefcjXTXmZvN6s2kexRLyVpCMRDE-NBvVRXGTY69Pb9pfpLLPPr3lklhQTaG1Zh0bO4CwbtRLQjcOHccbcDGqR-Q-cOadCOWxrw5JKvFl576N-KpKlSCRYtBhAYdjBJuNjJVRT~V8ZC2efq5l1c~cgr29MX1GYPw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"} type="video/mp4" />
            </video>
          </a>
        </div>
      </div>
    </div>
  );
}
