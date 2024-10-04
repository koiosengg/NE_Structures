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
import ProductImg1 from "../assets/AboutIMG/NE Structures CNC Plasma Cutting Machine.jfif";
import ProductImg2 from "../assets/AboutIMG/NE Structures Roofing Machine.jfif";
import ProductImg3 from "../assets/AboutIMG/NE Structures Anchor Bolt Threading.jfif";
import ProductImg4 from "../assets/AboutIMG/NE Structures CNC Purlin Line.jfif";
import HomeGallery from "./HomeGallery";
import Gallery from "./Gallery";
import ImageSlider from "./ImageSlider";
import HorizontalSlider from "./HorizontalSlider";

function Infrastructure() {
  return (
    <div className="Infrastructure">
      <div className="homeBanner">
        <div className="homeBannerContent">
          <sub>INFRASTRUCTURE</sub>
          <div className="heading">
            <p>
              Building Structures with <br></br>{" "}
              <span> Unmatched Precision</span> and <span>Strength</span>
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
        <div className="aboutNewSection">
          <div className="aboutNewSectionSet">
            <img src={ProductImg1}></img>
            <div className="heading">
              <h3>CNC Plasma Cutting Machine</h3>
              <p>
                NE Structures Pre-Engineered Buildings are designed, fabricated
                & commissioned matching exact customer’s requirement satisfying
                all the aspects involved, ensuring it serves to best of its
                design extent.
              </p>
            </div>
          </div>
          <div className="aboutNewSectionSet">
            <img src={ProductImg2}></img>
            <div className="heading">
              <h3>Roofing Machine </h3>
              <p>
                NE Structures High-Rise Steel Structures offer unmatched
                strength and flexibility, designed to support the most ambitious
                architectural visions. Built for durability and safety, these
                structures are engineered to stand tall in any skyline.
              </p>
            </div>
          </div>
          <div className="aboutNewSectionSet">
            <img src={ProductImg3}></img>
            <div className="heading">
              <h3>Anchor Bolt Threading</h3>
              <p>
                NE Structures Roofing Sheets are designed, fabricated, and
                installed to meet specific customer needs. Our premium roofing
                solutions ensure durability, weather resistance, and energy
                efficiency, providing optimal protection and look.
              </p>
            </div>
          </div>
          <div className="aboutNewSectionSet">
            <img src={ProductImg4}></img>
            <div className="heading">
              <h3>CNC Purlin Line</h3>
              <p>
                NE Structures CZ Purlins are engineered and manufactured to meet
                precise customer specifications. Our high-quality purlins
                provide robust support, ensuring structural integrity and
                reliability for various applications.
              </p>
            </div>
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
