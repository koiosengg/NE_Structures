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
import IMG9 from "../assets/HomeBanner/IMG9.jpg";
import ProductImg1 from "../assets/PEB/prefabricated-multi-storey-steel-building ne structures.webp";
import ProductImg2 from "../assets/PEB/cold storage facility ne structures.jpg"
import ProductImg3 from "../assets/PEB/prefabricated-warehouse.webp"
import ProductImg4 from "../assets/PEB/Industrial-Shed-Manufacturer NE Structures.webp"
import ProductImg5 from "../assets/PEB/factory shed manufacturers ne structures.webp"
import ProductImg6 from "../assets/PEB/industrial closure manufacturers NE Structures.webp"
import Leading from "../assets/HomeBanner/Leading.png";
import LeadingSmall from "../assets/HomeBanner/LeadingSmall.png";
import Advantages from "../assets/HomeBanner/Advantages.png";
import AdvantagesSmall from "../assets/HomeBanner/AdvantagesSmall.png";
import ProductGalleryPEB from "./ProductGalleryPEB";
import Brochure from "./Brochure";

function PreEngineeredBuildings() {
  return (
    <div className="product PEB">
      <div className="homeBanner">
        <div className="homeBannerContent">
          <sub>PRE ENGINEERED BUILDINGS</sub>
          <div className="heading">
            <p>
              <span> Expertly Crafted Structures</span> <br /> Tailored to Your
              Needs
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
              <g clipPath="url(#clip0_1244_2595)">
                <path
                  d="M6.40078 11.9998L11.2008 15.9998L17.6008 7.9998M12.0008 23.1998C10.53 23.1998 9.07357 22.9101 7.71473 22.3473C6.35588 21.7844 5.1212 20.9594 4.08119 19.9194C3.04117 18.8794 2.21618 17.6447 1.65333 16.2859C1.09048 14.927 0.800781 13.4706 0.800781 11.9998C0.800781 10.529 1.09048 9.0726 1.65333 7.71375C2.21618 6.3549 3.04117 5.12022 4.08119 4.08021C5.1212 3.04019 6.35588 2.21521 7.71473 1.65235C9.07357 1.0895 10.53 0.799805 12.0008 0.799805C14.9712 0.799805 17.82 1.9798 19.9204 4.08021C22.0208 6.18062 23.2008 9.02938 23.2008 11.9998C23.2008 14.9702 22.0208 17.819 19.9204 19.9194C17.82 22.0198 14.9712 23.1998 12.0008 23.1998Z"
                  stroke="#0D85DE"
                  strokeWidth="1.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_1244_2595">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <sub>Unmatched Quality</sub>
          </div>
          <p>
            Our pre-engineered buildings use top-quality materials for unmatched
            durability and performance in all conditions.
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
                d="M15.9286 0.856934V11.1426L22.0829 18.9769C22.3827 19.3563 22.5694 19.8125 22.6217 20.2932C22.674 20.7738 22.5897 21.2595 22.3785 21.6945C22.1673 22.1294 21.8377 22.496 21.4276 22.7522C21.0175 23.0083 20.5435 23.1436 20.06 23.1426H4.94003C4.45651 23.1436 3.98252 23.0083 3.57243 22.7522C3.16235 22.496 2.83279 22.1294 2.62158 21.6945C2.41038 21.2595 2.32608 20.7738 2.37836 20.2932C2.43064 19.8125 2.61739 19.3563 2.91717 18.9769L9.07145 11.1426V0.856934M6.50003 0.856934H18.5"
                stroke="#0D85DE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <sub>Customized Solutions</sub>
          </div>
          <p>
            Our team of experts works closely with clients to design and develop
            tailor-made building solutions.
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
                d="M12.596 2.04309C13.671 2.11909 14.655 2.32409 15.339 2.99909C16.037 3.68709 16.259 4.69509 16.259 5.94009C16.259 6.37209 16.202 6.89509 16.142 7.37809L16.066 7.95009L16.01 8.37909H18.06C18.812 8.37909 19.506 8.48709 20.096 8.78309C20.708 9.08909 21.158 9.57009 21.451 10.2141C22.002 11.4281 21.993 13.2221 21.674 15.6081L21.623 15.9981C21.489 17.0081 21.375 17.8701 21.227 18.5781C21.061 19.3731 20.833 20.0741 20.411 20.6281C19.521 21.7961 18.016 22.0001 15.828 22.0001C13.497 22.0001 11.748 21.5821 10.284 21.1761L9.682 21.0061C8.659 20.7161 7.83 20.4801 6.992 20.4201C6.94977 20.8528 6.74799 21.2543 6.42597 21.5463C6.10395 21.8384 5.68475 22.0002 5.25 22.0001H3.75C3.28587 22.0001 2.84075 21.8157 2.51256 21.4875C2.18437 21.1593 2 20.7142 2 20.2501V9.75009C2 8.78409 2.784 8.00009 3.75 8.00009H5.25C5.69386 8.00011 6.12113 8.16879 6.4453 8.47198C6.76947 8.77517 6.96632 9.19022 6.996 9.63309C7.17545 9.61323 7.35138 9.56916 7.519 9.50209C8.48 9.08709 10.293 7.96809 10.293 5.30209V4.24909C10.293 3.02909 11.295 1.95109 12.596 2.04309ZM7 18.9181C8.059 18.9821 9.079 19.2731 10.118 19.5701L10.686 19.7301C12.092 20.1201 13.692 20.5001 15.828 20.5001C18.105 20.5001 18.832 20.2261 19.218 19.7191C19.434 19.4361 19.606 19.0011 19.758 18.2711C19.894 17.6211 20 16.8211 20.137 15.7941L20.187 15.4101C20.507 13.0101 20.44 11.6151 20.085 10.8351C19.925 10.4831 19.71 10.2671 19.425 10.1241C19.12 9.97109 18.685 9.87909 18.06 9.87909H15.69C15.009 9.87909 14.397 9.30909 14.479 8.55109C14.505 8.30809 14.544 8.01409 14.584 7.71709L14.654 7.19009C14.714 6.70809 14.759 6.26909 14.759 5.94009C14.759 4.81509 14.546 4.32309 14.286 4.06709C14.011 3.79709 13.512 3.61209 12.491 3.53909C12.14 3.51509 11.793 3.81309 11.793 4.24909V5.30209C11.793 8.85209 9.305 10.3651 8.113 10.8791C7.741 11.0391 7.359 11.1111 7 11.1391V18.9181ZM3.75 20.5001H5.25C5.3163 20.5001 5.37989 20.4737 5.42678 20.4269C5.47366 20.38 5.5 20.3164 5.5 20.2501V9.75009C5.5 9.68378 5.47366 9.62019 5.42678 9.57331C5.37989 9.52643 5.3163 9.50009 5.25 9.50009H3.75C3.6837 9.50009 3.62011 9.52643 3.57322 9.57331C3.52634 9.62019 3.5 9.68378 3.5 9.75009V20.2501C3.5 20.3881 3.612 20.5001 3.75 20.5001Z"
                fill="#0D85DE"
              />
            </svg>
            <sub>Customer Satisfaction</sub>
          </div>
          <p>
            Our commitment to excellence and customer satisfaction shines
            through our extensive portfolio and positive client feedback.
          </p>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            Lorem Ipsum Dolor
            <br /> Sitor
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
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            Pre Engineered <br />
            Products
          </p>
        </div>
        <div
          className="homeInfoDetails"
          style={{ gap: "24px", flexDirection: "column" }}
        >
          <div className="homeInfoSetContainer">
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img src={ProductImg1}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>
                    Prefabricated Multi Storey Building <br></br> Manufacturer
                  </sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia
                    etiam porta sed. At volutpat scelerisque pulvinar tincidunt
                    id interdum viverra odio tpat lacinia etiam porta sed.
                  </p>
                </div>
              </div>
            </div>
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img src={ProductImg2}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>
                    Cold Storage<br></br> Manufacturer{" "}
                  </sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia
                    etiam porta sed. At volutpat scelerisque pulvinar tincidunt
                    id interdum viverra odio tpat lacinia etiam porta sed.
                  </p>
                </div>
              </div>
            </div>
            <div className="homeInfoSet mobile">
              <div className="homeInfoSetImg">
                <img src={ProductImg3}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Warehouse</sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia
                    etiam porta sed. At volutpat scelerisque pulvinar tincidunt
                    id interdum viverra odio tpat lacinia etiam porta sed.
                  </p>
                </div>
              </div>
            </div>
            <div className="homeInfoSet mobile">
              <div className="homeInfoSetImg">
                <img src={ProductImg4}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Industrial Shed</sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia
                    etiam porta sed. At volutpat scelerisque pulvinar tincidunt
                    id interdum viverra odio tpat lacinia etiam porta sed.
                  </p>
                </div>
              </div>
            </div>
            <div className="homeInfoSet mobile">
              <div className="homeInfoSetImg">
                <img src={ProductImg5}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Factory Building</sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia
                    etiam porta sed. At volutpat scelerisque pulvinar tincidunt
                    id interdum viverra odio tpat lacinia etiam porta sed.
                  </p>
                </div>
              </div>
            </div>
            <div className="homeInfoSet mobile">
              <div className="homeInfoSetImg">
                <img src={ProductImg6}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Industrial Enclosures</sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia
                    etiam porta sed. At volutpat scelerisque pulvinar tincidunt
                    id interdum viverra odio tpat lacinia etiam porta sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="homeInfoSetContainer notMobile">
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img src={ProductImg3}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Warehouse</sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia
                    etiam porta sed. At volutpat scelerisque pulvinar tincidunt
                    id interdum viverra odio tpat lacinia etiam porta sed.
                  </p>
                </div>
              </div>
            </div>
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img src={ProductImg4}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Industrial Shed</sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia
                    etiam porta sed. At volutpat scelerisque pulvinar tincidunt
                    id interdum viverra odio tpat lacinia etiam porta sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="homeInfoSetContainer notMobile">
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img src={ProductImg5}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Factory Building</sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia
                    etiam porta sed. At volutpat scelerisque pulvinar tincidunt
                    id interdum viverra odio tpat lacinia etiam porta sed.
                  </p>
                </div>
              </div>
            </div>
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img src={ProductImg6}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Industrial Enclosures</sub>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Nam volutpat lacinia
                    etiam porta sed. At volutpat scelerisque pulvinar tincidunt
                    id interdum viverra odio tpat lacinia etiam porta sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            Benefits of
            <br /> Pre Engineered Buildings
          </p>
          <span>
            Lorem ipsum dolor sit amet consectetur. Egestas non pellentesque
            eget adipiscing euismod sed. Egestas lorem orci enim at. Vitae etiam
            arcu.
          </span>
        </div>
        <div className="homeInfoDetails">
          <div className="s-left" style={{ width: "100%" }}>
            <div className="bimServices">
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
        </div>
      </div>
      <ProductGalleryPEB />
      <div className="exploreServices">
        <div className="exploreServicesInfo">
          <div className="heading">
            <sub>
              Explore Our <br />
              High Rise
              <br /> Steel Buildings Products
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
              <Link
                to="/HighRiseSteelStructures"
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
        <img src={IMG1} className="notMobile"></img>
      </div>
      <div className="homeBrochure">
        <Brochure />
      </div>
    </div>
  );
}

export default PreEngineeredBuildings;
