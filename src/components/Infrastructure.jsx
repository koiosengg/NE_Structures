import React from "react";
import IMG1 from "../assets/HomeBanner/IMG1.png";
import IMG2 from "../assets/HomeBanner/IMG2.jpg";
import IMG3 from "../assets/HomeBanner/IMG3.png";
import IMG4 from "../assets/HomeBanner/IMG4.png";
import IMG5 from "../assets/HomeBanner/IMG5.jpg";
import IMG6 from "../assets/HomeBanner/IMG6.jpg";
import IMG7 from "../assets/HomeBanner/IMG7.jpg";
import IMG8 from "../assets/HomeBanner/IMG8.jpg";
import IMG9 from "../assets/HomeBanner/IMG9.jpg";
import TalankeyMarqueeImg1 from "../assets/Marquee/Talankey Marquee Img  (1).webp";
import TalankeyMarqueeImg2 from "../assets/Marquee/Talankey Marquee Img  (2).webp";
import TalankeyMarqueeImg3 from "../assets/Marquee/Talankey Marquee Img  (3).webp";
import TalankeyMarqueeImg4 from "../assets/Marquee/Talankey Marquee Img  (4).webp";
import TalankeyMarqueeImg5 from "../assets/Marquee/Talankey Marquee Img  (5).webp";
import TalankeyMarqueeImg6 from "../assets/Marquee/Talankey Marquee Img  (6).webp";
import TalankeyMarqueeImg7 from "../assets/Marquee/Talankey Marquee Img  (7).webp";
import TalankeyMarqueeImg8 from "../assets/Marquee/Talankey Marquee Img  (8).webp";
import TalankeyMarqueeImg9 from "../assets/Marquee/Talankey Marquee Img  (9).webp";
import TalankeyMarqueeImg10 from "../assets/Marquee/Talankey Marquee Img  (10).webp";
import AutomaticHWeldingMachine1 from "../assets/Infrastructure/NE Structures Automatic H-Welding Machine 1.png";
import AutomaticHWeldingMachine2 from "../assets/Infrastructure/NE Structures Automatic H-Welding Machine 2.jfif";
import CNCPlasmaCuttingMachine from "../assets/Infrastructure/NE Structures CNC Plasma Cutting Machine.png";
import RoofingMachine from "../assets/Infrastructure/NE Structures Roofing Machine.jfif";
import CNCShearingMachine from "../assets/Infrastructure/NE Structures CNC Shearing Machine.jfif";
import PressBrake from "../assets/Infrastructure/NE Structures Press Brake.jfif";
import CrimpingMachine from "../assets/Infrastructure/NE Structures Crimping Machine.jfif";
import RadialCNCDrillingMachine from "../assets/Infrastructure/NE Structures Radial CNC Drilling Machine.png";
import RollFormingMachine from "../assets/Infrastructure/NE Structures Roll Forming Machine.png";
import MagneticDrillingMachine from "../assets/Infrastructure/NE Structures Magnetic Drilling Machine.jfif";

import HomeGallery from "./HomeGallery";
import Gallery from "./Gallery";
import ImageSlider from "./ImageSlider";
import HorizontalSlider from "./HorizontalSlider";

function Infrastructure() {
  return (
    <div className="Infrastructure">
      <div className="homeBanner">
        <div className="homeBannerContent">
          <sub>ABOUT US</sub>
          <div className="heading">
            <p>
              Leading the Future of <br className="notMobile"></br>{" "}
              <span>Engineering</span> and <span>Innovation</span>
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
            <img src={IMG1} alt="NE Structures Marquee Img" />
            <img src={IMG2} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg1} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg2} alt="NE Structures Marquee Img" />
            <img src={IMG5} alt="NE Structures Marquee Img" />
            <img src={IMG6} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg3} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg4} alt="NE Structures Marquee Img" />
            <img src={IMG7} alt="NE Structures Marquee Img" />
            <img src={IMG9} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg5} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg6} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg7} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg10} alt="NE Structures Marquee Img" />
          </div>
        </div>
      </div>
      <div className="homeInfoContainer bannerDownDiv">
        <div className="heading">
          <p>
            <span> Our Materials</span> <br />
            Make the Difference
          </p>
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
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            State-of-the-Art <br />
            <span> Facilities</span>
          </p>
          <span>
            Explore our advanced infrastructure and cutting-edge machinery.
            Discover where precision and quality come together to create
            exceptional steel structures.
          </span>
        </div>
        <div className="infraDiv">
          <div className="infraDivSet">
            <img
              src={AutomaticHWeldingMachine2}
              alt="NE Structures Automatic H-Welding Machine"
            ></img>
            <h4>Automatic H-Welding Machine</h4>
          </div>
          <div className="infraDivSet">
            <img
              src={CNCPlasmaCuttingMachine}
              alt="NE Structures CNC Plasma Cutting Machine"
            ></img>
            <h4>CNC Plasma Cutting Machine</h4>
          </div>
          <div className="infraDivSet">
            <img src={RoofingMachine} alt="NE Structures Roofing Machine"></img>
            <h4>Roofing Machine</h4>
          </div>
          <div className="infraDivSet">
            <img
              src={AutomaticHWeldingMachine1}
              alt="NE Structures Automatic H-Welding Machine"
            ></img>
            <h4>Automatic H-Welding Machine</h4>
          </div>
          <div className="infraDivSet">
            <img
              src={AutomaticHWeldingMachine1}
              alt="NE Structures CNC Purlin Line"
            ></img>
            <h4>CNC Purlin Line</h4>
          </div>
          <div className="infraDivSet">
            <img
              src={CNCShearingMachine}
              alt="NE Structures CNC Shearing Machine"
            ></img>
            <h4>CNC Shearing Machine</h4>
          </div>
          <div className="infraDivSet">
            <img src={PressBrake} alt="NE Structures Press Brake"></img>
            <h4>Press Brake</h4>
          </div>
          <div className="infraDivSet">
            <img
              src={CrimpingMachine}
              alt="NE Structures Crimping Machine"
            ></img>
            <h4>Crimping Machine</h4>
          </div>
          <div className="infraDivSet">
            <img
              src={RoofingMachine}
              alt="NE Structures Ulrtrasonic Thickness Detector"
            ></img>
            <h4>Ulrtrasonic Thickness Detector</h4>
          </div>
          <div className="infraDivSet">
            <img
              src={RadialCNCDrillingMachine}
              alt="NE Structures Radial CNC Drilling Machine"
            ></img>
            <h4>Radial CNC Drilling Machine</h4>
          </div>
          <div className="infraDivSet">
            <img
              src={RollFormingMachine}
              alt="NE Structures Roll Forming Machine"
            ></img>
            <h4>Roll Forming Machine</h4>
          </div>
          <div className="infraDivSet">
            <img
              src={CNCShearingMachine}
              alt="NE Structures Crimping Machine"
            ></img>
            <h4>Shot Blasting Machine</h4>
          </div>
          <div className="infraDivSet">
            <img
              src={RoofingMachine}
              alt="NE Structures Multi Nozzle Gas - Cutting Machine"
            ></img>
            <h4>Multi Nozzle Gas - Cutting Machine</h4>
          </div>
          <div className="infraDivSet">
            <img
              src={CNCPlasmaCuttingMachine}
              alt="NE Structures Airless Spray Painting Machine"
            ></img>
            <h4>Airless Spray Painting Machine</h4>
          </div>
          <div className="infraDivSet">
            <img
              src={MagneticDrillingMachine}
              alt="NE Structures Magnetic Drilling Machine"
            ></img>
            <h4>Magnetic Drilling Machine</h4>
          </div>
        </div>
      </div>
      <HomeGallery />
      <Gallery />
      <div className="homeBrochure">
        <div className="product brochure">
          <div className="p-brochure-main">
            <div className="p-our-brochure-container">
              <div className="p-download-label">
                <p>Want to Know More?</p>
              </div>
              <div className="p-subtext-div">
                <p>
                  Get the full story on our projects and services. Download our
                  brochure for a detailed overview of how we can support your
                  next build.
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
                    <img src={IMG1} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG2} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG3} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG4} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG5} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG6} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG7} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG8} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG1} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG2} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG3} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG4} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG5} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG6} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG7} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG8} alt="NE Structures Marquee Img" />
                  </div>
                </div>
              </div>
              <div className="s-banner-wrapper reverse-marquee">
                <div className="s-banner-marquee">
                  <div className="s-banner-marquee-set">
                    <img src={IMG1} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG2} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG3} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG4} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG5} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG6} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG7} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG8} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG1} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG2} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG3} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG4} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG5} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG6} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG7} alt="NE Structures Marquee Img" />
                  </div>
                  <div className="s-banner-marquee-set">
                    <img src={IMG8} alt="NE Structures Marquee Img" />
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

export default Infrastructure;