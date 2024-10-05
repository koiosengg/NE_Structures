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
import TalankeyMarqueeImg11 from "../assets/Marquee/Talankey Marquee Img  (11).jpg";
import TalankeyMarqueeImg12 from "../assets/Marquee/Talankey Marquee Img  (12).png";
import TalankeyMarqueeImg13 from "../assets/Marquee/Talankey Marquee Img  (13).webp";
import TalankeyMarqueeImg14 from "../assets/Marquee/Talankey Marquee Img  (14).jpeg";
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
import Img1 from "../assets/AboutIMG/plasma.jpg";
import Img2 from "../assets/AboutIMG/Roof Sheet machine-min.jpg";
import Img3 from "../assets/AboutIMG/anchr bolt threading machine.webp";
import Img9 from "../assets/AboutIMG/ptw.jpg"
import Img5 from "../assets/AboutIMG/Ironworker NE Structures-min.jpg";
import Img8 from "../assets/AboutIMG/Press Brake Machine-min.jpg";
import Img7 from "../assets/AboutIMG/Shearing machine.jpg";
import Img6 from "../assets/AboutIMG/Shot Blasting Machine.jpg";
import Img4 from "../assets/AboutIMG/CZ purlin machine NE structures.jpg";
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
            <img src={TalankeyMarqueeImg1} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg2} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg3} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg4} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg5} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg6} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg7} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg8} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg9} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg10} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg11} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg12} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg13} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg14} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg1} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg2} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg3} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg4} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg5} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg6} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg7} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg8} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg9} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg10} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg11} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg12} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg13} alt="NE Structures Marquee Img" />
            <img src={TalankeyMarqueeImg14} alt="NE Structures Marquee Img" />
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
            <img src={Img1}></img>
            <div className="heading">
              <h3> CNC Plasma Cutting Machine</h3>
              <p>
              NE Structures uses advanced CNC Plasma Cutting Machines for precise, high-speed cutting of steel plates and sheets. This ensures accurate dimensions and smooth edges, enhancing the quality and efficiency of our fabrication process.
              </p>
            </div>
          </div>
          <div className="aboutNewSectionSet">
            <img src={Img2}></img>
            <div className="heading">
              <h3>Roofing Sheet Machine  </h3>
              <p>
              Our Roofing Sheet Machines are engineered to produce a variety of profiles with consistent thickness and shape, delivering top-quality roofing solutions for various construction needs.
              </p>
            </div>
          </div>
          <div className="aboutNewSectionSet">
            <img src={Img3}></img>
            <div className="heading">
              <h3>Anchor Bolt Threading Machine</h3>
              <p>
              We employ specialized Anchor Bolt Threading Machines to manufacture custom-length bolts with accurate threading, ensuring secure and reliable anchorage in steel structures.
              </p>
            </div>
          </div>
          <div className="aboutNewSectionSet">
            <img src={Img4}></img>
            <div className="heading">
              <h3>CZ Purlin Machine</h3>
              <p>
              The CZ Purlin Machine at NE Structures manufactures C and Z profiles with high precision, supporting the construction of lightweight and durable purlin systems for roofing and cladding applications.
              </p>
            </div>
          </div>
          <div className="aboutNewSectionSet">
            <img src={Img5}></img>
            <div className="heading">
              <h3>Iron Worker Machine</h3>
              <p>
              Our Iron Worker Machine is a versatile tool used for shearing, punching, and bending operations, reducing production time and ensuring uniformity in steel components.
              </p>
            </div>
          </div>
          <div className="aboutNewSectionSet">
            <img src={Img6}></img>
            <div className="heading">
              <h3>Shot Blasting Machine </h3>
              <p>
              We utilize Shot Blasting Machines to clean and polish steel surfaces, removing rust and contaminants, which improves paint adhesion and overall structural longevity.
              </p>
            </div>
          </div>
          <div className="aboutNewSectionSet">
            <img src={Img7}></img>
            <div className="heading">
              <h3>Shearing Machine</h3>
              <p>
              NE Structures’ Shearing Machine enables clean and precise cuts on metal sheets, allowing for faster fabrication while minimizing material wastage.
              </p>
            </div>
          </div>
          <div className="aboutNewSectionSet">
            <img src={Img8}></img>
            <div className="heading">
              <h3> Press Brake Machine </h3>
              <p>
              Our Press Brake Machine is capable of bending metal sheets into various shapes, meeting complex structural requirements with ease and precision.
              </p>
            </div>
          </div>
          <div className="aboutNewSectionSet">
            <img src={Img9}></img>
            <div className="heading">
              <h3>PTW Welding Machine</h3>
              <p>
              We use PTW Welding Machines for consistent and high-quality welds on all steel joints, ensuring the strength and durability of our prefabricated steel structures.
              </p>
            </div>
          </div>
          <div className="aboutNewSectionSet">
            <img src={ProductImg4}></img>
            <div className="heading">
              <h3>Iron Worker Machine</h3>
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
      {/* <HomeGallery /> */}
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
