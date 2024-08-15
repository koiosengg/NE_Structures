import React from "react";
import ImageSlider from "./ImageSlider";
import HorizontalSlider from "./HorizontalSlider";
import IMG1 from "../assets/HomeBanner/IMG1.png";
import IMG2 from "../assets/HomeBanner/IMG2.jpg";
import IMG3 from "../assets/HomeBanner/IMG3.png";
import IMG4 from "../assets/HomeBanner/IMG4.png";
import IMG5 from "../assets/HomeBanner/IMG5.jpg";
import IMG6 from "../assets/HomeBanner/IMG6.jpg";
import IMG7 from "../assets/HomeBanner/IMG7.jpg";
import IMG8 from "../assets/HomeBanner/IMG8.jpg";

const Brochure = () => {
  return (
    <div className="product brochure">
      <div className="p-brochure-main">
        <div className="p-our-brochure-container">
          <div className="p-download-label">
            <p>
              Download Our <br /> Brochures
            </p>
          </div>
          <div className="p-subtext-div">
            <p>
              Lorem ipsum dolor sit amet consectetur. Dignissim lectus nulla
              felis tempor tellus. Aenean enim aliquet massa feugiat erat
              rhoncus commodo vulputate morbi. Maecenas volutpat non{" "}
            </p>
            <div className="p-submit">
              <a>Download Now</a>
            </div>
          </div>
        </div>
        <div className="p-image-gallery-container notMobile">
          <ImageSlider />
          <HorizontalSlider />
        </div>
        <div className="homeInfoDetails">
          <div className="s-banner-wrapper">
            <div className="s-banner-marquee">
              <div className="s-banner-marquee-set">
                <img src={IMG1} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG2} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG3} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG4} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG5} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG6} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG7} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG8} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG1} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG2} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG3} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG4} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG5} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG6} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG7} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG8} />
              </div>
            </div>
          </div>
          <div className="s-banner-wrapper reverse-marquee">
            <div className="s-banner-marquee">
              <div className="s-banner-marquee-set">
                <img src={IMG1} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG2} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG3} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG4} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG5} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG6} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG7} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG8} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG1} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG2} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG3} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG4} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG5} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG6} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG7} />
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG8} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
