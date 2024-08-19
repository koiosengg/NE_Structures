import React from "react";
import { Link } from "react-router-dom";
import IMG1 from "../assets/HomeBanner/IMG1.png";
import IMG2 from "../assets/HomeBanner/IMG2.jpg";
import IMG3 from "../assets/HomeBanner/IMG3.png";
import IMG4 from "../assets/HomeBanner/IMG4.png";
import IMG5 from "../assets/HomeBanner/IMG5.jpg";
import IMG6 from "../assets/HomeBanner/IMG6.jpg";
import IMG7 from "../assets/HomeBanner/IMG7.jpg";
import IMG8 from "../assets/HomeBanner/IMG8.jpg";
import ImageSlider from "./ImageSlider";
import HorizontalSlider from "./HorizontalSlider";

function BuildingInformationModelling() {
  return (
    <div className="product BIM">
      <div className="homeBanner">
        <div className="homeBannerContent">
          <sub>BUILDING INFORMATION MODELLING</sub>
          <div className="heading">
            <p>
              Transforming Construction with
              <br />
              <span> Digital Precision </span>
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
      <div className="homeInfoContainer bannerDownDiv">
        <div className="heading">
          <p>
            Switch to BIM the Right Way <br /> With Our BIM Services
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
          </div>
          <div className="s-right">
            <img src={IMG3}></img>
          </div>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>Our BIM Services</p>
        </div>
        <div className="homeInfoDetails bim">
          <div className="homeInfoDetailSet">
            <sub>CAD to BIM Services</sub>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia etiam
              porta sed. At volutpat scelerisque pulvinar tincidunt id interdum
              viverra odio tpat lacinia etiam porta sed.
            </p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>BIM Co-ordination Services</sub>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia etiam
              porta sed. At volutpat scelerisque pulvinar tincidunt id interdum
              viverra odio tpat lacinia etiam porta sed.
            </p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>Clash Detection Services</sub>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia etiam
              porta sed. At volutpat scelerisque pulvinar tincidunt id interdum
              viverra odio tpat lacinia etiam porta sed.
            </p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>Revit Family Creation</sub>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia etiam
              porta sed. At volutpat scelerisque pulvinar tincidunt id interdum
              viverra odio tpat lacinia etiam porta sed.
            </p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>Scan to BIM Services</sub>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia etiam
              porta sed. At volutpat scelerisque pulvinar tincidunt id interdum
              viverra odio tpat lacinia etiam porta sed.
            </p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>As Built Documentaion</sub>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia etiam
              porta sed. At volutpat scelerisque pulvinar tincidunt id interdum
              viverra odio tpat lacinia etiam porta sed.
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
              Lorem ipsum dolor sit amet consectetur. Dignissim lectus nulla
              felis tempor tellus. Aenean enim aliquet massa feugiat erat
              rhoncus commodo vulputate morbi. Maecenas volutpat non curabitur
              varius facilisi. Tortor vulputate bibendum ornare laoreet
              scelerisque vulputate est vitae sociis. Nibh purus nunc tellus
              iaculis non malesuada viverra. Bibendum vitae egestas mi iaculis
              orci fermentum pellentesque.
            </p>
            <div className="helpQuestions">
              <div className="heading">How can we help?</div>
              <div className="helpQuestionsContainer">
                <div className="helpQuestionsSet">
                  <sub>01.</sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Dignissim lectus
                    nulla felis tempor tellus. Aenean enim aliquet massa feugiat
                    erat rhoncus commodo vulputate morbi. Maecenas volutpat{" "}
                  </p>
                </div>
                <div className="helpQuestionsSet">
                  <sub>02.</sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Dignissim lectus
                    nulla felis tempor tellus. Aenean enim aliquet massa feugiat
                    erat rhoncus commodo vulputate morbi. Maecenas volutpat{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="s-right helpQuestionsIMG">
            <img src={IMG3}></img>
          </div>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>BIM Services for India </p>
        </div>
        <div className="homeInfoDetails">
          <div className="s-left" style={{ gap: "32px" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia etiam
              porta sed. At volutpat scelerisque pulvinar tincidunt id interdum
              viverra odio tpat lacinia etiam porta sed. Lorem ipsum dolor sit
              amet consectetur. Nam volutpat lacinia etiam porta sed. At
              volutpat scelerisque pulvinar tincidunt id interdum viverra odio
              tpat lacinia etiam porta sed.
            </p>
            <div className="bimServices ServicesBIM">
              <div className="bimServicesSet">
                <sub>Pre engineered building</sub>
                <p>
                  structures offer quick installation and easy erection with
                  lightweight construction
                </p>
              </div>
              <div className="bimServicesSet">
                <sub>Pre engineered building</sub>
                <p>
                  structures offer quick installation and easy erection with
                  lightweight construction
                </p>
              </div>
              <div className="bimServicesSet">
                <sub>Pre engineered building</sub>
                <p>
                  structures offer quick installation and easy erection with
                  lightweight construction
                </p>
              </div>
              <div className="bimServicesSet">
                <sub>Pre engineered building</sub>
                <p>
                  structures offer quick installation and easy erection with
                  lightweight construction
                </p>
              </div>
            </div>
          </div>
          <div className="s-right helpQuestionsIMG">
            <img src={IMG3}></img>
          </div>
        </div>
      </div>
      <div className="exploreServices">
        <div className="exploreServicesInfo">
          <div className="heading">
            <sub>
              Explore Our
              <br />
              Building information <br /> Modelling Services
            </sub>
            <img src={IMG1} className="mobile"></img>
            <p>
              Lorem ipsum dolor sit amet consectetur. Dignissim lectus nulla
              felis tempor tellus. Aenean enim aliquet massa feugiat erat
              rhoncus commodo vulputate morbi. Maecenas volutpat non curabitur
              varius facilisi. Tortor Lorem ipsum dolor sit amet consectetur.
              Dignissim lectus nulla felis tempor tellus.
            </p>
          </div>
          <div className="homeInfoContainer" style={{ padding: "0" }}>
            <div className="navbarContact">
              <Link to="/about" style={{ background: "transparent" }}>
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
        <img src={IMG1} className="notMobile"></img>
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
