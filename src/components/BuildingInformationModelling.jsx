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

import MarqueeImg1 from "../assets/BIM/banner BIM/3-Focus-Points-BIM-Modeling-Services-Use-For-Creating-Accurate-Models-min.jpg";
import MarqueeImg2 from "../assets/BIM/banner BIM/6d-bim-services-img.webp";
import MarqueeImg3 from "../assets/BIM/banner BIM/bim banner ne structures-min.jpg";
import MarqueeImg4 from "../assets/BIM/banner BIM/BIM banner ne-min.jpeg";
import MarqueeImg5 from "../assets/BIM/banner BIM/BIM banner-min.jpeg";
import MarqueeImg6 from "../assets/BIM/banner BIM/BIM banner.webp";
import MarqueeImg7 from "../assets/BIM/banner BIM/BIM PEB banner.webp";
import MarqueeImg8 from "../assets/BIM/banner BIM/BIM-E-Guide-Feature-Photo banner-min.jpg";
import MarqueeImg9 from "../assets/BIM/banner BIM/BIM-min.jpeg";
import MarqueeImg10 from "../assets/BIM/banner BIM/bim-proektirovanie-molniezashhityi-i-zazemleniya-zandz-min.jpg";
import MarqueeImg11 from "../assets/BIM/banner BIM/National-BIM-Structural-BIM-Services-min.jpg";

import KeyChallenges from "../assets/BIM/bim-clash-detection-Challeneges BIM NE Strutures.jpg"
import BIMforIndia from "../assets/BIM/Architectural-BIM-Modeling-Services-for-Healthcare-Project-in-Boston.jpg"

import ImageSlider from "./ImageSlider";
import HorizontalSlider from "./HorizontalSlider";

import SESimg from "../assets/Service/service2.webp";
import BIMimg from "../assets/Service/service1.webp";

function BuildingInformationModelling() {
  return (
    <div className="product BIM">
      <Helmet>
        <title>BIM Services for Enhanced Coordination | NE Structures</title>
        <meta
          name="description"
          content="NE Structures offers advanced BIM solutions like CAD to BIM, clash detection, and Revit family creation. Improve project coordination and efficiency."
        />
      </Helmet>
      <div className="homeBanner">
        <div className="homeBannerContent">
          <sub>BUILDING INFORMATION MODELLING</sub>
          <div className="heading">
            <h1>
              Transforming Design with
              <br />
              <span> Advanced BIM Solutions </span>
            </h1>
            <sub>
              NE Structures deliver precise Building Information Modeling (BIM)
              services, optimizing design, coordination, and project management
              for architects, engineers, and construction professionals.
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
          </div>
        </div>
      </div>
      <div className="homeInfoContainer bannerDownDiv">
        <div className="heading">
          <p>
            Switch to <span>BIM </span> the Right Way <br /> With Our BIM
            Services
          </p>
        </div>
        <div className="homeInfoDetails">
          <div className="s-left">
            <h2>What is BIM?</h2>
            <p>
              Building Information Modeling (BIM) is a digital process that
              generates detailed 3D models integrating architectural,
              structural, and MEP designs. <br />
              <br /> The process involves creating, managing, and analyzing
              these models to enhance coordination and decision-making.
              <br />
              <br /> Examples include managing complex skyscraper designs,
              optimizing industrial facility layouts, and improving
              infrastructure projects with real-time data and accurate
              simulations.
            </p>
          </div>
          <div className="s-right">
            <img src={BIMimg}></img>
          </div>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>Our BIM Services</p>
        </div>
        <div className="homeInfoDetails bim">
          <div className="homeInfoDetailSet">
            <h2>CAD to BIM Services</h2>
            <p>
              Converting CAD to BIM involves transforming 2D drawings into
              detailed 3D models, integrating comprehensive data for enhanced
              visualization, accurate coordination, and overall project
              efficiency.
            </p>
          </div>
          <div className="homeInfoDetailSet">
            <h2>BIM Co-ordination Services</h2>
            <p>
              BIM Coordination Services streamline project workflows by
              synchronizing 3D models and data across all disciplines, ensuring
              clash detection and effective, seamless collaboration throughout
              the project lifecycle.
            </p>
          </div>
          <div className="homeInfoDetailSet">
            <h2>Clash Detection Services</h2>
            <p>
              Clash Detection Services identify and resolve conflicts between
              building systems in 3D models, ensuring seamless integration,
              preventing costly errors, rework, and project delays.
            </p>
          </div>
          <div className="homeInfoDetailSet">
            <h2>Revit Family Creation</h2>
            <p>
              Revit Family Creation involves designing and customizing 3D models
              for building components, ensuring accurate representation and
              integration into BIM projects for efficient construction and
              planning.
            </p>
          </div>
          <div className="homeInfoDetailSet">
            <h2>Scan to BIM Services</h2>
            <p>
              Revit Family Creation involves designing and customizing 3D models
              for building components, ensuring accurate representation,
              integration into BIM projects, and enhanced project efficiency.
            </p>
          </div>
          <div className="homeInfoDetailSet">
            <h2>As Built Documentaion</h2>
            <p>
              As-Built Documentation involves creating detailed records of a
              building's completed state, capturing all changes and deviations
              from the original plans, ensuring accurate project reference and
              future maintenance.
            </p>
          </div>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            Every Construction Firm Faces <br /> Some Key Challenges
          </p>
        </div>
        <div className="homeInfoDetails">
          <div className="s-left" style={{ gap: "40px" }}>
            <p>
              Construction firms often encounter problems such as design
              conflicts between different building systems, inaccurate project
              documentation, and misalignment between planning and actual
              construction. These issues can lead to costly delays, rework, and
              increased project expenses. Additionally, poor communication among
              stakeholders can result in misunderstandings and errors, further
              impacting project timelines and budgets.
            </p>
            <div className="helpQuestions">
              <div className="heading">How can NE Structures help?</div>
              <div className="helpQuestionsContainer">
                <div className="helpQuestionsSet">
                  <sub>01.</sub>
                  <p>
                    Our advanced BIM services provide detailed 3D models and
                    clash detection to identify and address conflicts before
                    construction begins, ensuring smoother project execution.
                  </p>
                </div>
                <div className="helpQuestionsSet">
                  <sub>02.</sub>
                  <p>
                    BIM streamlines communication between architects, engineers,
                    and contractors, improving coordination and reducing errors,
                    which leads to more efficient project management and timely
                    completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="s-right helpQuestionsIMG">
            <img src={KeyChallenges} alt="NE Structures Key Challenges"></img>
          </div>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <h2>BIM Services for India </h2>
        </div>
        <div className="homeInfoDetails">
          <div className="s-left" style={{ gap: "32px" }}>
            <p>
              Our BIM services in India empower construction firms with
              cutting-edge technology and precision. We streamline project
              workflows, enhance collaboration, and reduce costly errors. Trust
              us to deliver comprehensive BIM solutions that drive efficiency
              and accuracy across all stages of your projects.
            </p>
            <div className="bimServices ServicesBIM">
              <div className="bimServicesSet">
                <sub>Urban Development Projects</sub>
                <p>
                  Offering BIM solutions for high-rise buildings and commercial
                  complexes in major cities.
                </p>
              </div>
              <div className="bimServicesSet">
                <sub>Infrastructure Projects</sub>
                <p>
                  Supporting roads, bridges, and transportation hubs with
                  precise BIM modeling across.
                </p>
              </div>
              <div className="bimServicesSet">
                <sub>Industrial Zones</sub>
                <p>
                  Providing BIM services for factories and manufacturing units
                  in industrial regions.
                </p>
              </div>
              <div className="bimServicesSet">
                <sub>Educational and Healthcare</sub>
                <p>
                  Delivering BIM expertise for the construction of schools,
                  universities, and hospitals.
                </p>
              </div>
            </div>
          </div>
          <div className="s-right helpQuestionsIMG">
            <img
              src={BIMforIndia}
              alt="NE Structures BIM Services for India"
            ></img>
          </div>
        </div>
      </div>
      <div className="exploreServices">
        <div className="exploreServicesInfo">
          <div className="heading">
            <sub>
              Explore Our
              <br /> Structural Engineering
              <br /> Services
            </sub>
            <img src={SESimg} className="mobile"></img>
            <p>
              Enhance your projects with NE Structures’ Structural Engineering
              services. We conduct detailed load analysis, precise material
              selection, and advanced connection design, ensuring every
              structure meets top standards of safety and performance. Trust us
              for reliable, efficient engineering solutions.
            </p>
          </div>
          <div className="homeInfoContainer" style={{ padding: "0" }}>
            <div className="navbarContact">
              <Link
                to="/StructuralEngineeringServices"
                style={{ background: "transparent" }}
              >
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
        <img src={SESimg} className="notMobile"></img>
      </div>
      <div className="homeBrochure">
        <div className="product brochure">
          <div className="p-brochure-main">
            <div className="p-our-brochure-container">
              <div className="p-download-label">
                <p>Need More Details?</p>
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

export default BuildingInformationModelling;
