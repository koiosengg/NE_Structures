import React from "react";
import IMG1 from "../assets/HomeBanner/IMG1.png";
import IMG2 from "../assets/HomeBanner/IMG2.jpg";
import IMG3 from "../assets/HomeBanner/IMG3.png";
import IMG4 from "../assets/HomeBanner/IMG4.png";
import IMG5 from "../assets/HomeBanner/IMG5.jpg";
import IMG6 from "../assets/HomeBanner/IMG6.jpg";
import IMG7 from "../assets/HomeBanner/IMG7.jpg";
import IMG8 from "../assets/HomeBanner/IMG8.jpg";
import LogoVector from "../assets/AboutIMG/LogoVector.png";
import Staad from "../assets/AboutIMG/Staad.png";
import Tekla from "../assets/AboutIMG/Tekla.png";
import VissionIMG from "../assets/AboutIMG/VissionIMG.jpg";
import ImageSlider from "./ImageSlider";
import HorizontalSlider from "./HorizontalSlider";

function About() {
  return (
    <div className="product about">
      <div className="homeBanner">
        <div className="homeBannerContent">
          <sub>ABOUT US</sub>
          <div className="heading">
            <p>
              Leading the Future of <br></br> <span>Engineering</span> and
              <span>Innovation</span>
            </p>
            <sub>
              NE Structures has become a trusted leader in steel construction.
              Our unwavering commitment to quality, innovation, and client
              satisfaction drives us to build stronger, smarter, and more
              sustainable structures.
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
      <div className="homeInfoContainer bannerDownDiv">
        <div className="heading">
          <p>
            <span> Our Materials</span> <br />
            Make the Difference
          </p>
          <img src={LogoVector}></img>
        </div>
        <div className="homeInfoDetails">
          <div className="s-left">
            <sub>Our Commitment to Excellence</sub>
            <p>
              NE Structures is a pre-engineered steel buildings manufacturing
              company. Company founded and headed by 30+ years of experience.
              Our Structural design team having worked across the various types
              of projects around the world building best of the pre-engineered
              buildings. We design the steel structures considering various
              impact loads, dead load, live load, collateral and seismic loads.
            </p>
          </div>
          <div className="s-right">
            <img src={IMG3}></img>
          </div>
        </div>
      </div>
      <div className="homeInfoLogoContainer">
        <img src={Staad}></img>
        <img src={Tekla}></img>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            Visionary <br /> <span>Future Ahead</span>
          </p>
        </div>
        <div className="homeInfoDetails">
          <div className="s-left">
            <sub>Shaping the Future of Steel Construction</sub>
            <p>
              NE Structures aims to revolutionize steel construction with
              cutting-edge, sustainable solutions. We envision setting industry
              benchmarks in quality and innovation, creating durable, efficient
              structures that exceed client expectations and positively impact
              the communities we serve.
            </p>
          </div>
          <div className="s-right">
            <img src={VissionIMG}></img>
          </div>
        </div>
      </div>
      <div className="homeInfoContainer aboutMarquee">
        <div className="heading">
          <p>
            State-of-the-Art
            <br /> <span>Facilities</span>
          </p>
          <span>
            Explore our advanced infrastructure and cutting-edge machinery.
            Discover where precision and quality come together to create
            exceptional steel structures.
          </span>
        </div>
        <div className="homeInfoDetails aboutGallery">
          <div className="s-banner-wrapper">
            <div className="s-banner-marquee">
              <div className="s-banner-marquee-set">
                <img src={IMG1} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG2} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG3} />
                <sub>CNC Plasma Cutting Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG4} />
                <sub>Roofing Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG5} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG6} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG7} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG8} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG1} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG2} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG3} />
                <sub>CNC Plasma Cutting Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG4} />
                <sub>Roofing Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG5} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG6} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG7} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG8} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
            </div>
          </div>
          <div className="s-banner-wrapper reverse-marquee">
            <div className="s-banner-marquee">
              <div className="s-banner-marquee-set">
                <img src={IMG1} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG2} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG3} />
                <sub>CNC Plasma Cutting Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG4} />
                <sub>Roofing Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG5} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG6} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG7} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG8} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG1} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG2} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG3} />
                <sub>CNC Plasma Cutting Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG4} />
                <sub>Roofing Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG5} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG6} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG7} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
              <div className="s-banner-marquee-set">
                <img src={IMG8} />
                <sub>Automatic H-Welding Machine</sub>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            Adhering to
            <br /> Premier Industry Standards
          </p>
          <span>
            We adhere to industry-leading design standards, ensuring every
            structure we build meets the highest levels of quality and
            safety.Our commitment to excellence guarantees reliable, enduring
            solutions for all your construction needs.
          </span>
        </div>
        <div className="homeInfoDetails aisc">
          <div className="homeInfoDetailSet">
            <sub>AISC</sub>
            <p>American Welding Society for Welding standards and Process.</p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>AISI </sub>
            <p>American Iron and Steel Institute.</p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>MBMA</sub>
            <p>Metal Building Manufactures Association.</p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>AWS</sub>
            <p>American Welding Society for Welding standards and Process.</p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>IS 875 Part 1~5</sub>
            <p>
              General Loads & Wind load calculations and Applications in India.
            </p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>IS 1893</sub>
            <p>Indian Code of Practice for Seismic Loads & Design.</p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>IS 816</sub>
            <p> Indian Code for Welding Standards.</p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>IS 800-2007</sub>
            <p> Indian Code of Practice for General Steel Construction.</p>
          </div>
        </div>
      </div>
      <div className="homeBrochure">
        <div className="product brochure">
          <div className="p-brochure-main">
            <div className="p-our-brochure-container">
              <div className="p-download-label">
                <p>Ready to Explore?</p>
              </div>
              <div className="p-subtext-div">
                <p>
                  Uncover the details of our projects and services. Download our
                  brochure for a comprehensive guide to what we offer.
                </p>
                <div className="p-submit">
                  <a>Download Brochure</a>
                </div>
              </div>
            </div>
            <div className="p-image-gallery-container notMobile">
              <ImageSlider />
              <HorizontalSlider />
            </div>
            <div className="homeInfoDetails mobile">
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
      </div>
    </div>
  );
}

export default About;
