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
import Brochure from "./Brochure";

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
        <div className="s-banner-wrapper" style={{transform:"translateY(135px)"}}>
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
      <div className="homeInfoContainer" style={{ marginTop: "135px" }}>
        <div className="heading">
          <p>
            Our Journey and <br /> Values
          </p>
          <img src={LogoVector}></img>
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
      <div className="homeInfoLogoContainer">
        <img src={Staad}></img>
        <img src={Tekla}></img>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            Visionary <br /> Future Ahead
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
            <img src={VissionIMG}></img>
          </div>
        </div>
      </div>
      <div
        className="homeInfoContainer"
        style={{ padding: "80px 0px 80px 0px" }}
      >
        <div className="heading" style={{ padding: "0px 160px" }}>
          <p>
            Robust Infrastructure <br /> Solutions
          </p>
          <span>
            Lorem ipsum dolor sit amet consectetur. Egestas non pellentesque
            eget adipiscing euismod sed. Egestas lorem orci enim at. Vitae etiam
            arcu.
          </span>
        </div>
        <div
          className="homeInfoDetails"
          style={{ flexDirection: "column", gap: "48px" }}
        >
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
            Lorem ipsum dolor sit amet consectetur. Egestas non pellentesque
            eget adipiscing euismod sed. Egestas lorem orci enim at. Vitae etiam
            arcu.
          </span>
        </div>
        <div className="homeInfoDetails aisc">
          <div className="homeInfoDetailSet">
            <sub>AISC</sub>
            <p>American Welding Society for Welding standards and Process.</p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>AISC</sub>
            <p>American Welding Society for Welding standards and Process.</p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>AISC</sub>
            <p>American Welding Society for Welding standards and Process.</p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>AISC</sub>
            <p>American Welding Society for Welding standards and Process.</p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>AISC</sub>
            <p>American Welding Society for Welding standards and Process.</p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>AISC</sub>
            <p>American Welding Society for Welding standards and Process.</p>
          </div>
          <div className="homeInfoDetailSet">
            <sub>AISC</sub>
            <p>American Welding Society for Welding standards and Process.</p>
          </div>
        </div>
      </div>
      <div className="homeBrochure">
        <Brochure />
      </div>
    </div>
  );
}

export default About;
