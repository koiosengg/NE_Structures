import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import IMG1 from "../assets/HomeBanner/IMG1.png";
import IMG2 from "../assets/HomeBanner/IMG2.jpg";
import IMG3 from "../assets/HomeBanner/IMG3.png";
import IMG4 from "../assets/HomeBanner/IMG4.png";
import IMG5 from "../assets/HomeBanner/IMG5.jpg";
import IMG6 from "../assets/HomeBanner/IMG6.jpg";
import IMG7 from "../assets/HomeBanner/IMG7.jpg";
import IMG8 from "../assets/HomeBanner/IMG8.jpg";
import IMG9 from "../assets/HomeBanner/IMG9.jpg";
import MarqueeImg1 from "../assets/CZpurlins/CZ purlins Banner images/c-purlins-z-purlins ne structures banner-min.jpg";
import MarqueeImg2 from "../assets/CZpurlins/CZ purlins Banner images/cz prlins ne strucyures banner image.webp";
import MarqueeImg3 from "../assets/CZpurlins/CZ purlins Banner images/cz purlin banner ne structures.webp";
import MarqueeImg4 from "../assets/CZpurlins/CZ purlins Banner images/cz purlin ne structures banner-min.jpg";
import MarqueeImg5 from "../assets/CZpurlins/CZ purlins Banner images/CZ Purlin Ne structures Banner-min.png";
import MarqueeImg6 from "../assets/CZpurlins/CZ purlins Banner images/CZ purlins ne structures 1-min.jpg";
import MarqueeImg7 from "../assets/CZpurlins/CZ purlins Banner images/CZpurlins ne structures banner products-min.jpg";
import MarqueeImg8 from "../assets/CZpurlins/CZ purlins Banner images/CZpurlins ne structures products banner-min.jpg";
import MarqueeImg9 from "../assets/CZpurlins/CZ purlins Banner images/CZpurlins ne structures.jpg";
import MarqueeImg10 from "../assets/CZpurlins/CZ purlins Banner images/CZpurlins ne structures.jpg";
import MarqueeImg11 from "../assets/CZpurlins/CZ purlins Banner images/purlins C-Z Ne structures-min.jpg";

import MainImg from "../assets/CZpurlins/what are C and Z purlins ne structures.png";
import RoofingImg from "../assets/CZpurlins/roofing sheets c z purlins interlinking banner-min.jpg";

import HeavyDuty from "../assets/CZpurlins/types of purlins/heavy duty purlins purlins type ne structures.jpg";
import Sleeved from "../assets/CZpurlins/types of purlins/sleeved Purlins type of purlins ne structures.webp";
import Cpurlin from "../assets/CZpurlins/types of purlins/C-Purlin-ne structures - types of purlins.jpg";
import Zpurlin from "../assets/CZpurlins/types of purlins/z-purlins-ne structures purlins types.webp";
import LippedC from "../assets/CZpurlins/types of purlins/lipped c Purlins ne structures types.webp";
import LippedZ from "../assets/CZpurlins/types of purlins/lipped z Purlins-nestructures-mild-steel-z-purlin-.webp";

import Gallery from "./Gallery";

import ImageSlider from "./ImageSlider";
import HorizontalSlider from "./HorizontalSlider";

function CZPurlins() {
  return (
    <div className="product PEB">
      <Helmet>
        <title>High-Quality & Versatile Steel Purlins | NE Structures</title>
        <meta
          name="description"
          content="Explore precision-engineered CZ purlins from NE Structures. Durable, cost-effective for superior roof and wall support in industrial and warehouse applications."
        />
      </Helmet>
      <div className="homeBanner">
        <div className="homeBannerContent">
          <sub>CZ PURLINS</sub>
          <div className="heading">
            <h1>
              <span>Versatile CZ Purlins </span> <br /> for Strong Structures
            </h1>
            <sub>
              NE Structures provides high-quality CZ purlins designed for
              superior strength and stability in various construction
              applications. Our precision-engineered purlins enhance structural
              integrity, ensuring your projects meet the highest standards.
            </sub>
          </div>
        </div>
        <div className="s-banner-wrapper">
          <div className="s-banner-marquee">
            <img src={MarqueeImg1} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg2} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg3} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg4} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg5} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg6} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg7} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg8} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg9} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg10} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg11} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg1} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg2} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg3} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg4} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg5} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg6} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg7} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg8} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg9} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg10} alt="NE Structures CZ Purlin Marquee Img" />
            <img src={MarqueeImg11} alt="NE Structures CZ Purlin Marquee Img" />
          </div>
        </div>
      </div>
      <div className="productFeatures bannerDownDiv">
        <div className="productFeatureSet">
          <div className="heading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
            >
              <path
                d="M11.9845 0.75C7.64246 0.75 3.42415 2.16 0 4.75C4.15642 9.81 7.74559 14.12 11.9845 19.25C16.1925 14.17 20.483 8.99 24 4.75C20.5655 2.16 16.3369 0.75 11.9845 0.75Z"
                fill="#0D85DE"
              />
            </svg>
            <sub>Superior Strength</sub>
          </div>
          <p>
            Durable and lightweight, ensuring excellent load-bearing capacity
            with minimal material usage.
          </p>
        </div>
        <div className="productFeatureSet">
          <div className="heading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
            >
              <path
                d="M23.3 0H1.7C1.03738 0 0.5 0.597083 0.5 1.33333V14.6667C0.5 15.4029 1.03738 16 1.7 16H23.3C23.9626 16 24.5 15.4029 24.5 14.6667V1.33333C24.5 0.597083 23.9626 0 23.3 0ZM2.3 14V11.3333C3.62563 11.3333 4.7 12.5271 4.7 14H2.3ZM2.3 4.66667V2H4.7C4.7 3.47292 3.62563 4.66667 2.3 4.66667ZM12.5 12C10.8429 12 9.5 10.2087 9.5 8C9.5 5.79083 10.8433 4 12.5 4C14.1568 4 15.5 5.79083 15.5 8C15.5 10.2096 14.1564 12 12.5 12ZM22.7 14H20.3C20.3 12.5271 21.3744 11.3333 22.7 11.3333V14ZM22.7 4.66667C21.3744 4.66667 20.3 3.47292 20.3 2H22.7V4.66667Z"
                fill="#0D85DE"
              />
            </svg>
            <sub>Cost Efficiency</sub>
          </div>
          <p>
            Rely on NE Structures team of experts for strong, safe buildings
            crafted with high-quality, durable materials.
          </p>
        </div>
        <div className="productFeatureSet">
          <div className="heading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23 10C23 9.46957 22.7893 8.96086 22.4142 8.58579C22.0391 8.21071 21.5304 8 21 8H14.68L15.64 3.43C15.66 3.33 15.67 3.22 15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9V19C7 19.5304 7.21071 20.0391 7.58579 20.4142C7.96086 20.7893 8.46957 21 9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10ZM1 21H5V9H1V21Z"
                fill="#0D85DE"
              />
            </svg>
            <sub>Versatile Application</sub>
          </div>
          <p>
            Ideal for roofing, walling, and structural support across diverse
            construction projects, increasing flexibility.
          </p>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            C/Z Purlin Solutions – <br />
            <span> Strong, Versatile Support</span> for Modern Structures
          </p>
        </div>
        <div className="homeInfoDetails">
          <div className="s-left">
            <h2>What are CZ Purlins?</h2>
            <p>
              CZ Purlins are structural steel members designed for use in
              various construction applications, providing support for roofs and
              walls in buildings. <br /> <br /> The fabrication process involves
              cold-formed steel techniques that enhance strength while
              minimizing weight, ensuring optimal performance and
              cost-effectiveness.
              <br /> <br /> Examples include warehouses, agricultural
              structures, and industrial buildings, where CZ Purlins offer
              durability, design flexibility, and quick installation.
            </p>
          </div>
          <div className="s-right">
            <img src={MainImg} alt="NE Structures Get to Know Img"></img>
          </div>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            Versatile Types of <br /> <span> C/Z Purlins Solutions</span>
          </p>
          <span>
            Explore our diverse range of C/Z Purlins, engineered for strength
            and adaptability in all construction projects. Designed for enhanced
            durability and flexible installation.
          </span>
        </div>
        <div className="newProductSection">
          <div className="newProductSet">
            <img src={Cpurlin} alt="Standard C Purlins"></img>
            <div className="setInfo">
              <h2>Standard C Purlins</h2>
              <p>
                Used for supporting roof and wall cladding, providing
                lightweight yet strong structural support, ensuring efficient
                load distribution.
              </p>
            </div>
          </div>
          <div className="newProductSet">
            <img src={Zpurlin} alt="Z Purlins"></img>
            <div className="setInfo">
              <h2>Z Purlins</h2>
              <p>
                Perfect for spanning longer distances in roofing applications
                due to their overlapping design, enhancing overall structural
                stability and durability.
              </p>
            </div>
          </div>
          <div className="newProductSet">
            <img src={LippedC} alt="Lipped C Purlins"></img>
            <div className="setInfo">
              <h2>Lipped C Purlins</h2>
              <p>
                Designed with extra lips for added strength, commonly used in
                heavy-duty structures where greater load-bearing is needed.
              </p>
            </div>
          </div>
          <div className="newProductSet">
            <img src={LippedZ} alt="Lipped Z Purlins"></img>
            <div className="setInfo">
              <h2> Lipped Z Purlins</h2>
              <p>
                Offers additional load-bearing capacity while maintaining
                flexibility for various construction needs, ensuring optimal
                structural performance always.
              </p>
            </div>
          </div>
          <div className="newProductSet">
            <img src={Sleeved} alt="Sleeved Purlins"></img>
            <div className="setInfo">
              <h2>Sleeved Purlins</h2>
              <p>
                Designed to join two purlins end-to-end, increasing the span and
                structural strength, especially in longer-span building
                projects.
              </p>
            </div>
          </div>
          <div className="newProductSet">
            <img src={HeavyDuty} alt="Heavy-Duty Purlins"></img>
            <div className="setInfo">
              <h2>Heavy-Duty Purlins</h2>
              <p>
                Thicker and stronger for industrial applications, capable of
                bearing greater loads, ideal for supporting heavier roofing
                systems effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <ProductGalleryPEB /> */}
      <Gallery />
      <div className="exploreServices">
        <div className="exploreServicesInfo">
          <div className="heading">
            <sub>
              Explore Our <br />
              Roofing Sheets
              <br /> Solutions
            </sub>
            <img
              src={RoofingImg}
              alt="NE Structures Explore Img"
              className="mobile"
            ></img>
            <p>
              Elevate your projects with our High-Rise Steel Buildings,
              engineered for superior load-bearing and seismic resilience.
              Whether it’s skyscrapers or towering office complexes, our
              precision-designed steel structures guarantee unmatched strength
              and flexibility.
            </p>
          </div>
          <div className="homeInfoContainer" style={{ padding: "0" }}>
            <div className="navbarContact">
              <Link to="/CZPurlins" style={{ background: "transparent" }}>
                <p>Explore Now</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_1040_1041"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1040_1041)">
                    <path
                      d="M7.01732 16.6668L5.83398 15.4835L11.3173 10.0002L5.83398 4.51683L7.01732 3.3335L13.684 10.0002L7.01732 16.6668Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <svg
                  className="navbarContactHoverSvg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_1044_5987"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1044_5987)">
                    <path
                      d="M13.4791 10.8333H3.33331V9.16667H13.4791L8.81248 4.5L9.99998 3.33333L16.6666 10L9.99998 16.6667L8.81248 15.5L13.4791 10.8333Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <img
          src={RoofingImg}
          alt="NE Structures Explore Img"
          className="notMobile"
        ></img>
      </div>
      <div className="homeBrochure">
        <div className="product brochure">
          <div className="p-brochure-main">
            <div className="p-our-brochure-container">
              <div className="p-download-label">
                <p>In-Depth about PEB?</p>
              </div>
              <div className="p-subtext-div">
                <p>
                  Explore our advanced BIM and Pre-Engineered Building services.
                  Download the brochure to see how we can streamline your
                  project.
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

export default CZPurlins;
