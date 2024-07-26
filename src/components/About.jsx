import React from 'react'
import IMG1 from "../assets/HomeBanner/IMG1.png";
import IMG2 from "../assets/HomeBanner/IMG2.jpg";
import IMG3 from "../assets/HomeBanner/IMG3.png";
import IMG4 from "../assets/HomeBanner/IMG4.png";
import IMG5 from "../assets/HomeBanner/IMG5.jpg";
import IMG6 from "../assets/HomeBanner/IMG6.jpg";
import IMG7 from "../assets/HomeBanner/IMG7.jpg";
import IMG8 from "../assets/HomeBanner/IMG8.jpg";

function About() {
  return (
    <div>
      <div className="homeBanner">
        <div className="homeBannerContent">
          <sub>ABOUT US</sub>
          <div className="heading">
            <p>
              Leading the Future of <span>Technology</span> and{" "}
              <span>Innovation</span>
            </p>
            <sub>
              Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia etiam
              porta sed. At volutpat scelerisque pulvinar tincidunt id interdum
              viverra odio
            </sub>
          </div>
        </div>
        <div className="s-banner-wrapper">
          <div className="s-banner-marquee">
            <img src={IMG1} />
            <img src={IMG2} />
            <img src={IMG3} />
            <img src={IMG4} />
            <img src={IMG5} />
            <img src={IMG6} />
            <img src={IMG7} />
            <img src={IMG8} />
            <img src={IMG1} />
            <img src={IMG2} />
            <img src={IMG3} />
            <img src={IMG4} />
            <img src={IMG5} />
            <img src={IMG6} />
            <img src={IMG7} />
            <img src={IMG8} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
