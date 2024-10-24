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

import MarqueeImg1 from "../assets/Roofing Sheets/roofing sheets banner images/roof-roofing-flat-roof-red-min.jpg";
import MarqueeImg2 from "../assets/Roofing Sheets/roofing sheets banner images/roofing sheets banner ne structures.webp";
import MarqueeImg3 from "../assets/Roofing Sheets/roofing sheets banner images/roofing sheets NE Structures 1-min.jpg";
import MarqueeImg4 from "../assets/Roofing Sheets/roofing sheets banner images/roofing sheets NE Structures 2-min.jpg";
import MarqueeImg5 from "../assets/Roofing Sheets/roofing sheets banner images/roofing sheets NE Structures 3-min.jpg";
import MarqueeImg6 from "../assets/Roofing Sheets/roofing sheets banner images/roofing sheets NE Structures 4-min.jpg";
import MarqueeImg7 from "../assets/Roofing Sheets/roofing sheets banner images/roofing sheets NE Structures 5-min.jpg";
import MarqueeImg8 from "../assets/Roofing Sheets/roofing sheets banner images/roofing sheets NE Structures 6-min.jpg";
import MarqueeImg9 from "../assets/Roofing Sheets/roofing sheets banner images/roofing sheets NE Structures 7-min.jpg";
import MarqueeImg10 from "../assets/Roofing Sheets/roofing sheets banner images/roofing sheets ne structures banner-min.jpg";
import MarqueeImg11 from "../assets/Roofing Sheets/roofing sheets banner images/roofing sheets ne structures metal-min.jpg";
import MarqueeImg12 from "../assets/Roofing Sheets/roofing sheets banner images/roofing sheets products ne structures 1-min.jpg";

import RoofingSheetImg from "../assets/Roofing Sheets/grid-roofing-ibr-roof-sheeting whata re roofing sheets ne structures-min.jpg";

import WallCladding from "../assets/Roofing Sheets/types of roofing sheets/Roof and Wall Cladding ne structures.png";
import WallCladdingStructure from "../assets/Roofing Sheets/types of roofing sheets/Roof, Wall Cladding and Structural Solutions ne structures-min.jpg";
import AlloyImg from "../assets/Roofing Sheets/types of roofing sheets/55percent AI-Zn Alloy Coated Steel Coils ne structures-min.jpg";
import ColourCoated from "../assets/Roofing Sheets/types of roofing sheets/Color Coated Steel Coils ne structures-min.jpg";
import SmartBuilding from "../assets/Roofing Sheets/types of roofing sheets/Smart Building Solutions ne structures-min.jpg";
import PEBRoofing from "../assets/Roofing Sheets/types of roofing sheets/Pre Engineered Buildings roofing sheets ne structures-min.jpg";
import Solar from "../assets/Roofing Sheets/types of roofing sheets/Solar Module Mounting Solutions ne structures-min.jpg";

import Gallery from "./Gallery";

import CZPurlineLinkImg from "../assets/Roofing Sheets/z-c-purlins-inerlinking banner.jpg";

import ImageSlider from "./ImageSlider";
import HorizontalSlider from "./HorizontalSlider";

function RoofingSheets() {
  return (
    <div className="product PEB">
      <Helmet>
        <title>High-Quality Durable Roofing Solutions | NE Structures</title>
        <meta
          name="description"
          content="NE Structures offers high-quality, weather-resistant roofing sheets for industrial, commercial, and residential use. Durable and easy-to-install."
        />
      </Helmet>
      <div className="homeBanner">
        <div className="homeBannerContent">
          <sub>ROOFING SHEETS</sub>
          <div className="heading">
            <h1>
              <span> High-Quality Roofing </span> <br />
              Solutions for Every Need
            </h1>
            <sub>
              NE Structures offers durable, weather-resistant roofing solutions
              tailored for industrial, commercial, and residential projects.
              Engineered for efficiency and reliability, our roofing products
              ensure maximum longevity and value.
            </sub>
          </div>
        </div>
        <div className="s-banner-wrapper">
          <div className="s-banner-marquee">
            <img src={MarqueeImg1} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg2} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg3} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg4} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg5} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg6} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg7} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg8} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg9} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg10} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg11} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg12} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg2} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg3} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg4} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg5} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg6} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg7} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg8} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg9} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg10} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg11} alt="NE Structures Marquee Img" />
            <img src={MarqueeImg12} alt="NE Structures Marquee Img" />
          </div>
        </div>
      </div>
      <div className="productFeatures bannerDownDiv">
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
                d="M12.5932 23.2579L12.5822 23.2599L12.5112 23.2949L12.4912 23.2989L12.4772 23.2949L12.4062 23.2599C12.3955 23.2566 12.3875 23.2583 12.3822 23.2649L12.3782 23.2749L12.3612 23.7029L12.3662 23.7229L12.3762 23.7359L12.4802 23.8099L12.4952 23.8139L12.5072 23.8099L12.6112 23.7359L12.6232 23.7199L12.6272 23.7029L12.6102 23.2759C12.6075 23.2653 12.6018 23.2593 12.5932 23.2579ZM12.8582 23.1449L12.8452 23.1469L12.6602 23.2399L12.6502 23.2499L12.6472 23.2609L12.6652 23.6909L12.6702 23.7029L12.6782 23.7099L12.8792 23.8029C12.8918 23.8063 12.9015 23.8036 12.9082 23.7949L12.9122 23.7809L12.8782 23.1669C12.8748 23.1549 12.8682 23.1476 12.8582 23.1449ZM12.1432 23.1469C12.1388 23.1443 12.1335 23.1434 12.1285 23.1445C12.1234 23.1456 12.119 23.1487 12.1162 23.1529L12.1102 23.1669L12.0762 23.7809C12.0768 23.7929 12.0825 23.8009 12.0932 23.8049L12.1082 23.8029L12.3092 23.7099L12.3192 23.7019L12.3232 23.6909L12.3402 23.2609L12.3372 23.2489L12.3272 23.2389L12.1432 23.1469Z"
                fill="#0D85DE"
              />
              <path
                d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11.0001 12.2652 11.1055 12.5195 11.293 12.707L14.293 15.707C14.4816 15.8892 14.7342 15.99 14.9964 15.9877C15.2586 15.9854 15.5094 15.8802 15.6948 15.6948C15.8802 15.5094 15.9854 15.2586 15.9877 14.9964C15.99 14.7342 15.8892 14.4816 15.707 14.293L13 11.586V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6Z"
                fill="#0D85DE"
              />
            </svg>
            <sub>Superior Durability</sub>
          </div>
          <p>
            Engineered to withstand extreme weather, offering long-lasting
            performance and protection.
          </p>
        </div>
        <div className="productFeatureSet">
          <div className="heading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5199 3C10.2614 3 8.20386 3.746 6.98636 4.3555C6.87636 4.4105 6.77369 4.46417 6.67836 4.5165C6.48936 4.6195 6.32836 4.7155 6.20036 4.8L7.58536 6.839L8.23736 7.0985C10.7854 8.384 14.2024 8.384 16.7509 7.0985L17.4909 6.7145L18.8004 4.8C18.5288 4.62355 18.2468 4.46376 17.9559 4.3215C16.7444 3.7185 14.7359 3 12.5204 3M9.29936 5.308C8.80903 5.21572 8.32466 5.09417 7.84886 4.944C8.98936 4.4375 10.6889 3.9 12.5204 3.9C13.7889 3.9 14.9884 4.158 15.9804 4.485C14.8179 4.6485 13.5774 4.926 12.3954 5.2675C11.4654 5.5365 10.3784 5.5075 9.29936 5.308ZM17.2794 7.84L17.1564 7.902C14.3534 9.316 10.6354 9.316 7.83236 7.902L7.71586 7.843C3.50436 12.4635 0.289357 20.9985 12.5199 20.9985C24.7504 20.9985 21.4574 12.305 17.2794 7.84ZM12.0004 12C11.7351 12 11.4808 12.1054 11.2933 12.2929C11.1057 12.4804 11.0004 12.7348 11.0004 13C11.0004 13.2652 11.1057 13.5196 11.2933 13.7071C11.4808 13.8946 11.7351 14 12.0004 14V12ZM13.0004 11V10.5H12.0004V11C11.4699 11 10.9612 11.2107 10.5861 11.5858C10.2111 11.9609 10.0004 12.4696 10.0004 13C10.0004 13.5304 10.2111 14.0391 10.5861 14.4142C10.9612 14.7893 11.4699 15 12.0004 15V17C11.5654 17 11.1949 16.7225 11.0569 16.3335C11.0364 16.2699 11.0034 16.211 10.9597 16.1603C10.9161 16.1097 10.8627 16.0683 10.8028 16.0386C10.7429 16.0089 10.6777 15.9916 10.6109 15.9875C10.5442 15.9835 10.4774 15.9929 10.4143 16.0152C10.3513 16.0375 10.2934 16.0721 10.244 16.1172C10.1946 16.1622 10.1547 16.2167 10.1267 16.2775C10.0988 16.3382 10.0833 16.4039 10.0811 16.4707C10.079 16.5376 10.0903 16.6041 10.1144 16.6665C10.2522 17.0565 10.5076 17.3942 10.8454 17.633C11.1832 17.8719 11.5867 18.0001 12.0004 18V18.5H13.0004V18C13.5308 18 14.0395 17.7893 14.4146 17.4142C14.7896 17.0391 15.0004 16.5304 15.0004 16C15.0004 15.4696 14.7896 14.9609 14.4146 14.5858C14.0395 14.2107 13.5308 14 13.0004 14V12C13.4354 12 13.8059 12.2775 13.9439 12.6665C13.9643 12.7301 13.9974 12.789 14.041 12.8397C14.0846 12.8903 14.138 12.9317 14.1979 12.9614C14.2578 12.9911 14.323 13.0084 14.3898 13.0125C14.4565 13.0165 14.5234 13.0071 14.5864 12.9848C14.6494 12.9625 14.7074 12.9279 14.7568 12.8828C14.8062 12.8378 14.846 12.7833 14.874 12.7225C14.902 12.6618 14.9175 12.5961 14.9196 12.5293C14.9217 12.4624 14.9104 12.3959 14.8864 12.3335C14.7485 11.9435 14.4931 11.6058 14.1553 11.367C13.8175 11.1281 13.414 10.9999 13.0004 11ZM13.0004 15V17C13.2656 17 13.5199 16.8946 13.7075 16.7071C13.895 16.5196 14.0004 16.2652 14.0004 16C14.0004 15.7348 13.895 15.4804 13.7075 15.2929C13.5199 15.1054 13.2656 15 13.0004 15Z"
                fill="#0D85DE"
              />
            </svg>
            <sub>Cost Effective</sub>
          </div>
          <p>
            Optimized design reduces material waste, leading to reduced overall
            project expenses and superior cost cuttings.
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
              <mask
                id="mask0_1755_6574"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="1"
                y="0"
                width="22"
                height="24"
              >
                <path
                  d="M20.701 5.7755L18.1675 2.5H5.83447L3.29297 5.7755"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 6.5C3 6.23478 3.10536 5.98043 3.29289 5.79289C3.48043 5.60536 3.73478 5.5 4 5.5H20C20.2652 5.5 20.5196 5.60536 20.7071 5.79289C20.8946 5.98043 21 6.23478 21 6.5V20C21 20.3978 20.842 20.7794 20.5607 21.0607C20.2794 21.342 19.8978 21.5 19.5 21.5H4.5C4.10218 21.5 3.72064 21.342 3.43934 21.0607C3.15804 20.7794 3 20.3978 3 20V6.5Z"
                  fill="white"
                  stroke="white"
                  stroke-width="4"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 13.5L12 17.5L8 13.5M11.996 9.5V17.5"
                  stroke="black"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </mask>
              <g mask="url(#mask0_1755_6574)">
                <path d="M0 0H24V24H0V0Z" fill="#0D85DE" />
              </g>
            </svg>
            <sub>Easy Installation</sub>
          </div>
          <p>
            Lightweight and precisely fabricated for quick and hassle-free setup
            across various roofing projects.
          </p>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            Roofing Sheets – <br />
            <span> Durable, Innovative Solutions </span>
            for Ultimate Protection.
          </p>
        </div>
        <div className="homeInfoDetails">
          <div className="s-left">
            <h2>What are Roofing Sheets</h2>
            <p>
              Roofing sheets are durable, lightweight materials used to cover
              and protect the tops of buildings, providing shelter from weather
              elements and enhancing aesthetic appeal. <br /> <br /> The
              manufacturing process includes shaping materials like metal,
              fiberglass, or PVC into sheets that are engineered for strength,
              insulation, and weather resistance.
              <br /> <br /> Examples include residential homes, commercial
              buildings, and industrial facilities, where roofing sheets deliver
              longevity, energy efficiency, and cost savings.
            </p>
          </div>
          <div className="s-right">
            <img
              src={RoofingSheetImg}
              alt="NE Structures What are Roofing Sheets Img"
            ></img>
          </div>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            Discover the Range of
            <br /> <span>Premium Roofing Sheets</span>{" "}
          </p>
          <span>
            Discover the features that make our roofing sheets stand out and why
            NE Structures is the superior choice for your construction needs.
            Our sheets are durable, weather-resistant, and designed for easy
            installation.
          </span>
        </div>
        <div className="newProductSection">
          <div className="newProductSet">
            <img
              src={WallCladding}
              alt="NE Structures Roof and Wall Cladding"
            ></img>
            <div className="setInfo">
              <h2>Roof and Wall Cladding</h2>
              <p>
                Provides protective, weather-resistant coverage and enhances the
                building's appearance, offering thermal insulation and
                durability, ensuring long-lasting performance.
              </p>
            </div>
          </div>
          <div className="newProductSet">
            <img
              src={WallCladdingStructure}
              alt="NE Structures Roof, Wall Cladding and Structural Solutions"
            ></img>
            <div className="setInfo">
              <h2>Roof, Wall Cladding and Structural Solutions</h2>
              <p>
                Our Roof, Wall Cladding, and Structural Solutions offer
                protection, aesthetics, and structural integrity. They ensure
                durability and insulation, for diverse construction needs.
              </p>
            </div>
          </div>
          <div className="newProductSet">
            <img
              src={AlloyImg}
              alt="NE Structures 55% AI-Zn Alloy Coated Steel Coils"
            ></img>
            <div className="setInfo">
              <h2>55% AI-Zn Alloy Coated Steel Coils</h2>
              <p>
                provide exceptional corrosion resistance and durability. Their
                unique coating enhances longevity while maintaining structural
                integrity for various applications.
              </p>
            </div>
          </div>
          <div className="newProductSet">
            <img
              src={ColourCoated}
              alt="NE Structures Color Coated Steel Coils"
            ></img>
            <div className="setInfo">
              <h2>Color Coated Steel Coils</h2>
              <p>
                We offer aesthetic appeal and robust protection for various
                structures. Their vibrant finishes enhance visual impact while
                ensuring resistance to corrosion and weathering.
              </p>
            </div>
          </div>
          <div className="newProductSet">
            <img
              src={SmartBuilding}
              alt="NE Structures Smart Building Solutions"
            ></img>
            <div className="setInfo">
              <h2>Smart Building Solutions</h2>
              <p>
                We utilize advanced technology to enhance efficiency and user
                comfort. These systems optimize energy management and streamline
                operations for improved performance.
              </p>
            </div>
          </div>
          <div className="newProductSet">
            <img
              src={PEBRoofing}
              alt="NE Structures Pre Engineered Buildings"
            ></img>
            <div className="setInfo">
              <h2>Pre Engineered Buildings</h2>
              <p>
                NE Structures ensure durability and energy efficiency. Our
                advanced systems are designed to optimize performance while
                providing superior protection against the elements.
              </p>
            </div>
          </div>
          <div className="newProductSet">
            <img
              src={Solar}
              alt="NE Structures Solar Module Mounting Solutions"
            ></img>
            <div className="setInfo">
              <h2>Solar Module Mounting Solutions</h2>
              <p>
                We provide reliable and efficient support for solar energy
                systems. Our robust designs ensure optimal positioning and
                stability, maximizing energy capture while withstanding
                environmental conditions.
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
              CZ Purlin
              <br /> Products
            </sub>
            <img
              src={CZPurlineLinkImg}
              alt="NE Structures Explore CZ Purlin Img"
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
          src={CZPurlineLinkImg}
          alt="NE Structures Explore  CZ Purlin Img"
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

export default RoofingSheets;
