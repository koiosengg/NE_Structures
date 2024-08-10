import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import IMG1 from "../assets/HomeBanner/IMG1.png";
import IMG2 from "../assets/HomeBanner/IMG2.jpg";
import IMG3 from "../assets/HomeBanner/IMG3.png";
import IMG4 from "../assets/HomeBanner/IMG4.png";
import IMG5 from "../assets/HomeBanner/IMG5.jpg";
import IMG6 from "../assets/HomeBanner/IMG6.jpg";
import IMG7 from "../assets/HomeBanner/IMG7.jpg";
import IMG8 from "../assets/HomeBanner/IMG8.jpg";
import IMG9 from "../assets/HomeBanner/IMG9.jpg";
import Advantages from "../assets/HomeBanner/Advantages.png";
import AdvantagesSmall from "../assets/HomeBanner/AdvantagesSmall.png";
import Staad from "../assets/AboutIMG/Staad.png";
import Tekla from "../assets/AboutIMG/Tekla.png";
import Leading from "../assets/HomeBanner/Leading.png";
import LeadingSmall from "../assets/HomeBanner/LeadingSmall.png";
import ClearSpanImage from "../assets/HomeBanner/ClearSpanImage.png";
import DoubleBayImage from "../assets/HomeBanner/DoubleBayImage.png";
import TripleBayImage from "../assets/HomeBanner/TripleBayImage.png";
import FourBaysImage from "../assets/HomeBanner/FourBaysImage.png";
import MultiGableImage from "../assets/HomeBanner/MultiGableImage.png";
import SingleSlopeImage from "../assets/HomeBanner/SingleSlopeImage.png";
import HomeGallery from "./HomeGallery";
import Brochure from "./Brochure";

function Home() {
  const [activeOption, setActiveOption] = useState("Clear Span");
  const galleryRef = useRef(null);
  const handleScroll = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const options = [
    {
      name: "Clear Span",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vel magna curabitur tellus porta euismod sed. Blandit vitae duis tempor imperdiet, lacus malesuada egestas ipsum. Imperdiet mattis elit ut donec eu etiam. Semper ut risus pulvinar nisl a odio turpis diam vitae. Lorem ipsum dolor sit amet consectetur. Vel magna curabitur tellus porta euismod sed. Blandit vitae duis tempor imperdiet lacus malesuada egestas ipsum. Imperdiet mattis elit ut donec eu etiam. Semper ut risus pulvinar nisl a odio turpis ",
      image: ClearSpanImage,
    },
    {
      name: "Double Bay, Single Ridge",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vel magna curabitur tellus porta euismod sed. Blandit vitae duis tempor imperdiet, lacus malesuada egestas ipsum. Imperdiet mattis elit ut donec eu etiam. Semper ut risus pulvinar nisl a odio turpis diam vitae. Lorem ipsum dolor sit amet consectetur. Vel magna curabitur tellus porta euismod sed. Blandit vitae duis tempor imperdiet lacus malesuada egestas ipsum. Imperdiet mattis elit ut donec eu etiam. Semper ut risus pulvinar nisl a odio turpis ",
      image: DoubleBayImage,
    },
    {
      name: "Triple Bay, Single Ridge",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vel magna curabitur tellus porta euismod sed. Blandit vitae duis tempor imperdiet, lacus malesuada egestas ipsum. Imperdiet mattis elit ut donec eu etiam. Semper ut risus pulvinar nisl a odio turpis diam vitae. Lorem ipsum dolor sit amet consectetur. Vel magna curabitur tellus porta euismod sed. Blandit vitae duis tempor imperdiet lacus malesuada egestas ipsum. Imperdiet mattis elit ut donec eu etiam. Semper ut risus pulvinar nisl a odio turpis ",
      image: TripleBayImage,
    },
    {
      name: "Four Bays, Single Ridge",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vel magna curabitur tellus porta euismod sed. Blandit vitae duis tempor imperdiet, lacus malesuada egestas ipsum. Imperdiet mattis elit ut donec eu etiam. Semper ut risus pulvinar nisl a odio turpis diam vitae. Lorem ipsum dolor sit amet consectetur. Vel magna curabitur tellus porta euismod sed. Blandit vitae duis tempor imperdiet lacus malesuada egestas ipsum. Imperdiet mattis elit ut donec eu etiam. Semper ut risus pulvinar nisl a odio turpis ",
      image: FourBaysImage,
    },
    {
      name: "Multi Gable",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vel magna curabitur tellus porta euismod sed. Blandit vitae duis tempor imperdiet, lacus malesuada egestas ipsum. Imperdiet mattis elit ut donec eu etiam. Semper ut risus pulvinar nisl a odio turpis diam vitae. Lorem ipsum dolor sit amet consectetur. Vel magna curabitur tellus porta euismod sed. Blandit vitae duis tempor imperdiet lacus malesuada egestas ipsum. Imperdiet mattis elit ut donec eu etiam. Semper ut risus pulvinar nisl a odio turpis ",
      image: MultiGableImage,
    },
    {
      name: "Single Slope",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vel magna curabitur tellus porta euismod sed. Blandit vitae duis tempor imperdiet, lacus malesuada egestas ipsum. Imperdiet mattis elit ut donec eu etiam. Semper ut risus pulvinar nisl a odio turpis diam vitae. Lorem ipsum dolor sit amet consectetur. Vel magna curabitur tellus porta euismod sed. Blandit vitae duis tempor imperdiet lacus malesuada egestas ipsum. Imperdiet mattis elit ut donec eu etiam. Semper ut risus pulvinar nisl a odio turpis ",
      image: SingleSlopeImage,
    },
  ];

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const activeContent = options.find((option) => option.name === activeOption);

  return (
    <div>
      <div className="homeBanner">
        <div className="homeBannerContent">
          <div className="heading">
            <p>
              Tailored Aircraft Shelters for <span>Superior Protection</span>
            </p>
            <sub>
              Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia etiam
              porta sed. At volutpat scelerisque pulvinar tincidunt id interdum
              viverra odio
            </sub>
            <div className="bannerButton">
              <Link to="/about">
                <sup>Let’s Get Started</sup>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_1114_1803"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1114_1803)">
                    <path
                      d="M7.01732 16.6668L5.83398 15.4835L11.3173 10.0002L5.83398 4.51683L7.01732 3.3335L13.684 10.0002L7.01732 16.6668Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="s-banner-wrapper" onClick={handleScroll}>
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
            Get To Know <br />
            Us Better
          </p>
        </div>
        <div className="homeInfoDetails">
          <div className="s-left">
            <sub>Lorem Ipsum</sub>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dignissim lectus nulla
              felis tempor tellus. Aenean enim aliquet massa feugiat erat
              rhoncus commodo vulputate morbi. Maecenas volutpat non curabitur
              varius facilisi. Tortor vulputate bibendum ornare laoreet
              scelerisque vulputate est vitae sociis. Nibh purus nunc tellus
              iaculis non malesuada viverra. Bibendum vitae egestas mi iaculis
              orci fermentum pellentesque.
            </p>
            <div className="navbarContact">
              <Link to="/about">
                <p>Read More</p>
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
          <div className="s-right">
            <img src={IMG3}></img>
          </div>
        </div>
      </div>
      <div className="homeInfoContainer" style={{ alignItems: "center" }}>
        <div className="heading">
          <p>
            Adhering to
            <br /> Premier Industry Standards
          </p>
          <span>
            Lorem ipsum dolor sit amet consectetur. Egestas non pellentesque
            eget adipiscing euismod sed. Egestas lorem orci enim at. Vitae etiam
            arcu.
          </span>
        </div>
        <div className="homeInfoDetails advantages">
          <div className="dotPosition1">
            <div className="advantagesDots">
              <div className="outerDiv"></div>
              <div className="innerDiv"></div>
            </div>
          </div>
          <div className="dotPosition2">
            <div className="advantagesDots">
              <div className="outerDiv"></div>
              <div className="innerDiv"></div>
            </div>
          </div>
          <div className="dotPosition3">
            <div className="advantagesDots">
              <div className="outerDiv"></div>
              <div className="innerDiv"></div>
            </div>
          </div>
          <div className="dotPosition4">
            <div className="advantagesDots">
              <div className="outerDiv"></div>
              <div className="innerDiv"></div>
            </div>
          </div>
          <div className="dotPosition5">
            <div className="advantagesDots">
              <div className="outerDiv"></div>
              <div className="innerDiv"></div>
            </div>
          </div>
          <div className="dotPosition6">
            <div className="advantagesDots">
              <div className="outerDiv"></div>
              <div className="innerDiv"></div>
            </div>
          </div>
          <picture className="advantagesImg">
            <source media="(max-width: 1200px)" srcSet={AdvantagesSmall} />
            <img src={Advantages}></img>
            <div className="mobileDot1">
              <div className="advantagesDots">
                <div className="outerDiv"></div>
                <div className="innerDiv"></div>
              </div>
            </div>
            <div className="mobileDot2">
              <div className="advantagesDots">
                <div className="outerDiv"></div>
                <div className="innerDiv"></div>
              </div>
            </div>
            <div className="mobileDot3">
              <div className="advantagesDots">
                <div className="outerDiv"></div>
                <div className="innerDiv"></div>
              </div>
            </div>
            <div className="mobileDot4">
              <div className="advantagesDots">
                <div className="outerDiv"></div>
                <div className="innerDiv"></div>
              </div>
            </div>
            <div className="mobileDot5">
              <div className="advantagesDots">
                <div className="outerDiv"></div>
                <div className="innerDiv"></div>
              </div>
            </div>
            <div className="mobileDot6">
              <div className="advantagesDots">
                <div className="outerDiv"></div>
                <div className="innerDiv"></div>
              </div>
            </div>
          </picture>
        </div>
      </div>
      <div className="homeInfoLogoContainer">
        <img src={Staad}></img>
        <img src={Tekla}></img>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            Innovative <br />
            Aircraft Shelters
          </p>
          <span>
            Lorem ipsum dolor sit amet consectetur. Egestas non pellentesque
            eget adipiscing euismod sed. Egestas lorem orci enim at. Vitae etiam
            arcu.
          </span>
        </div>
        <div
          className="homeInfoDetails"
          style={{ gap: "24px", flexDirection: "column" }}
        >
          <div className="homeInfoheading">Our Products</div>
          <div className="homeInfoSetContainer">
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img src={IMG1}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Pre Engineered Building</sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia
                    etiam porta sed. At volutpat scelerisque pulvinar tincidunt
                    id interdum viverra odio tpat lacinia etiam porta sed.
                  </p>
                </div>
                <div className="navbarContact">
                  <Link to="/PreEngineeredBuildings">
                    <p>View More</p>
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
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img src={IMG5}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>High Raise Steel Structures </sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia
                    etiam porta sed. At volutpat scelerisque pulvinar tincidunt
                    id interdum viverra odio tpat lacinia etiam porta sed.
                  </p>
                </div>
                <div className="navbarContact">
                  <Link to="/HighRaiseSteelStructures">
                    <p>View More</p>
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
          </div>
          <div className="homeInfoheading">Our Services</div>
          <div className="homeInfoSetContainer">
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img src={IMG6}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Structural Engineering Services</sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia
                    etiam porta sed. At volutpat scelerisque pulvinar tincidunt
                    id interdum viverra odio tpat lacinia etiam porta sed.
                  </p>
                </div>
                <div className="navbarContact">
                  <Link to="/StructuralEngineeringServices">
                    <p>View More</p>
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
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img src={IMG9}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Building Information Modelling</sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia
                    etiam porta sed. At volutpat scelerisque pulvinar tincidunt
                    id interdum viverra odio tpat lacinia etiam porta sed.
                  </p>
                </div>
                <div className="navbarContact">
                  <Link to="/BuildingInformationModelling">
                    <p>View More</p>
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
          </div>
        </div>
      </div>
      <div className="homeLeading">
        <picture>
          <source media="(max-width: 1200px)" srcSet={LeadingSmall} />
          <img src={Leading} alt="Responsive" />
        </picture>
        <div className="heading">
          <sub>
            Leading Provider of
            <br />
            Pre-Engineered Building
            <br /> Steel Structures
          </sub>
          <div className="navbarContact">
            <Link to="/PreEngineeredBuildings">
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
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            Versatile Solutions <br />
            for Every Need
          </p>
        </div>
        <div className="optionsContainer">
          <div className="options">
            {options.map((option) => (
              <p
                key={option.name}
                className={option.name === activeOption ? "active" : ""}
                onClick={() => handleOptionClick(option.name)}
              >
                {option.name}
              </p>
            ))}
          </div>
          <div className="optionsInfoContainer">
            <div className="s-left">
              <sub>{activeContent.name}</sub>
              <p>{activeContent.content}</p>
            </div>
            <div className="s-right">
              <img src={activeContent.image} alt={activeContent.name} />
            </div>
          </div>
        </div>
      </div>
      <HomeGallery ref={galleryRef} />
      <div className="homeBrochure">
        <Brochure />
      </div>
    </div>
  );
}

export default Home;
