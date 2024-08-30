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
import ProductGalleryHRSS from "./ProductGalleryHRSS";

import ImageSlider from "./ImageSlider";
import HorizontalSlider from "./HorizontalSlider";

function HighRiseSteelStructures() {
  const [activeOption, setActiveOption] = useState("Braced Frame");
  const options = [
    {
      name: "Braced Frame",
      content: (
        <>
          A braced frame is a structural system used in high-rise steel
          structures to resist lateral forces like wind or seismic loads.
          <br />
          <br />
          <span>How It’s Made: </span> <br /> It’s constructed by incorporating
          diagonal steel braces into the frame, creating a rigid and stable
          structure that enhances overall strength
          <br /> <br />
          <span>Examples: </span> <br /> Braced frames are commonly used in{" "}
          <span className="bold">
            tall office buildings, skyscrapers, and industrial towers
          </span>
          to ensure stability and safety.
        </>
      ),
      image: IMG1,
      altText: "NE Structures Braced Frame",
    },
    {
      name: "Ridged Frame",
      content: (
        <>
          A rigid frame is a structural system in high-rise steel structures
          where the connections between beams and columns are designed to be
          moment-resistant.
          <br />
          <br />
          <span>How It’s Made: </span> <br /> It’s constructed by welding or
          bolting beams to columns with strong, rigid connections that prevent
          rotation, ensuring a stable and solid frame.
          <br /> <br />
          <span>Examples: </span> <br /> Rigid frames are used in{" "}
          <span className="bold">
            warehouses, factories, and high-rise buildings where open,
            column-free spaces
          </span>{" "}
          are required.
        </>
      ),
      image: IMG2,
      altText: "NE Structures Ridged Frame",
    },
    {
      name: "Concrete Dual",
      content: (
        <>
          A concrete dual system combines a moment-resisting frame with a shear
          wall or braced frame to resist both lateral and vertical loads in
          high-rise structures.
          <br />
          <br />
          <span>How It’s Made: </span> <br /> It’s constructed by integrating
          reinforced concrete shear walls with steel or concrete
          moment-resisting frames, providing enhanced stability and load
          distribution.
          <br /> <br />
          <span>Examples: </span> <br />
          Concrete dual systems are commonly used in{" "}
          <span className="bold">
            high-rise residential towers, mixed-use developments, and commercial
            buildings
          </span>{" "}
          for increased strength and safety.
        </>
      ),
      image: IMG3,
      altText: "NE Structures Concrete Dual",
    },
    {
      name: "Shear Wall",
      content: (
        <>
          A shear wall is a vertical structural element in high-rise buildings
          designed to resist lateral forces such as wind and earthquakes.
          <br />
          <br />
          <span>How It’s Made: </span> <br /> It’s constructed using reinforced
          concrete or steel, spanning vertically throughout the building to
          provide stiffness and stability by distributing lateral loads.
          <br /> <br />
          <span>Examples: </span> <br /> Shear walls are commonly used in{" "}
          <span className="bold">
            residential towers, commercial skyscrapers, and large industrial
            structures
          </span>{" "}
          to ensure rigidity and prevent structural deformation.
        </>
      ),
      image: IMG4,
      altText: "NE Structures Shear Wall",
    },
    {
      name: "Out Rigger",
      content: (
        <>
          An outrigger is a structural system used in high-rise buildings to
          enhance stability by connecting the core to outer columns.
          <br />
          <br />
          <span>How It’s Made: </span> <br /> It’s constructed by extending
          horizontal steel or concrete beams (outriggers) from the central core
          to the perimeter columns, reducing lateral movement and distributing
          loads.
          <br /> <br />
          <span>Examples: </span> <br />
          Outrigger systems are often used in{" "}
          <span className="bold">
            skyscrapers, tall office buildings, and towers
          </span>{" "}
          to minimize sway and increase overall rigidity.
        </>
      ),
      image: IMG5,
      altText: "NE Structures Out Rigger",
    },
    {
      name: "Tube",
      content: (
        <>
          A tube is a structural system in high-rise buildings where the
          exterior walls act as a hollow cylinder to resist lateral forces.
          <br />
          <br />
          <span>How It’s Made: </span> <br /> It’s constructed by closely
          spacing steel or reinforced concrete columns along the building's
          perimeter, creating a stiff, load-bearing shell that reduces the need
          for internal supports.
          <br /> <br />
          <span>Examples: </span> <br />
          Tube systems are commonly used in{" "}
          <span className="bold">
            tall skyscrapers and iconic towers, such as the Willis Tower,
          </span>{" "}
          to provide strength and flexibility while allowing for open interior
          spaces.
        </>
      ),
      image: IMG6,
      altText: "NE Structures Tube",
    },
    {
      name: "Flat Plate and Flat Slab",
      content: (
        <>
          Flat plate and flat slab are structural systems in high-rise buildings
          where the floor slabs are directly supported by columns, with flat
          slabs offering additional reinforcement for heavier loads.
          <br />
          <br />
          <span>How It’s Made: </span> <br /> Both systems are constructed using
          reinforced concrete slabs. Flat plates are directly supported by
          columns, while flat slabs include drop panels or column capitals for
          added support around the columns.
          <br /> <br />
          <span>Examples: </span> <br />
          These systems are often used in{" "}
          <span className="bold">
            residential apartments, hotels, parking garages, and commercial
            buildings
          </span>{" "}
          where unobstructed ceilings and flexibility in layout are essential.
        </>
      ),
      image: IMG7,
      altText: "NE Structures Flat Plate and Flat Slab",
    },
    {
      name: "Coupled Wall",
      content: (
        <>
          A coupled wall system in high-rise buildings consists of two or more
          shear walls connected by horizontal elements, designed to resist
          lateral forces.
          <br />
          <br />
          <span>How It’s Made: </span> <br /> It’s constructed by integrating
          reinforced concrete shear walls with horizontal coupling beams or
          slabs, which work together to enhance the building's stability and
          distribute lateral loads effectively.
          <br /> <br />
          <span>Examples: </span> <br />
          Coupled wall systems are commonly used in{" "}
          <span className="bold">
            high-rise residential towers, office buildings, and
            seismic-resistant structures
          </span>{" "}
          to provide increased stiffness and load-bearing capacity.
        </>
      ),
      image: IMG8,
      altText: "NE Structures Coupled Wall",
    },
    {
      name: "Hybrid",
      content: (
        <>
          A hybrid structural system combines different types of structural
          elements, such as concrete, steel, and composite materials, to
          optimize performance in high-rise buildings.
          <br />
          <br />
          <span>How It’s Made: </span> <br /> It’s constructed by integrating
          various materials and structural systems, such as combining concrete
          cores with steel frameworks or composite floors, to leverage the
          strengths of each material for enhanced stability and efficiency.
          <br /> <br />
          <span>Examples: </span> <br />
          Hybrid systems are commonly used in{" "}
          <span className="bold">
            skyscrapers, mixed-use towers, and high-rise office buildings
          </span>{" "}
          where versatility and superior load-bearing capacity are required.
        </>
      ),
      image: IMG9,
      altText: "NE Structures Hybrid",
    },
  ];

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const activeContent = options.find((option) => option.name === activeOption);

  return (
    <div className="product HRSS">
      <div className="homeBanner">
        <div className="homeBannerContent">
          <sub>HIGH RAISE STEEL STRUCTURES</sub>
          <div className="heading">
            <p>
              <span>Elevated Steel Solutions </span> <br /> Built to Last
            </p>
            <sub>
              NE Structures provides High-Rise Steel Structures with unmatched
              strength and flexibility for skyscrapers and large-scale projects,
              ensuring safety and performance at every level.
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
            <sub>Customized Design</sub>
          </div>
          <p>
            Get personalized solutions from our NE Structures team, perfectly
            matching your needs and vision.
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
            <sub>Superior Integrity</sub>
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
                d="M12.596 2.04309C13.671 2.11909 14.655 2.32409 15.339 2.99909C16.037 3.68709 16.259 4.69509 16.259 5.94009C16.259 6.37209 16.202 6.89509 16.142 7.37809L16.066 7.95009L16.01 8.37909H18.06C18.812 8.37909 19.506 8.48709 20.096 8.78309C20.708 9.08909 21.158 9.57009 21.451 10.2141C22.002 11.4281 21.993 13.2221 21.674 15.6081L21.623 15.9981C21.489 17.0081 21.375 17.8701 21.227 18.5781C21.061 19.3731 20.833 20.0741 20.411 20.6281C19.521 21.7961 18.016 22.0001 15.828 22.0001C13.497 22.0001 11.748 21.5821 10.284 21.1761L9.682 21.0061C8.659 20.7161 7.83 20.4801 6.992 20.4201C6.94977 20.8528 6.74799 21.2543 6.42597 21.5463C6.10395 21.8384 5.68475 22.0002 5.25 22.0001H3.75C3.28587 22.0001 2.84075 21.8157 2.51256 21.4875C2.18437 21.1593 2 20.7142 2 20.2501V9.75009C2 8.78409 2.784 8.00009 3.75 8.00009H5.25C5.69386 8.00011 6.12113 8.16879 6.4453 8.47198C6.76947 8.77517 6.96632 9.19022 6.996 9.63309C7.17545 9.61323 7.35138 9.56916 7.519 9.50209C8.48 9.08709 10.293 7.96809 10.293 5.30209V4.24909C10.293 3.02909 11.295 1.95109 12.596 2.04309ZM7 18.9181C8.059 18.9821 9.079 19.2731 10.118 19.5701L10.686 19.7301C12.092 20.1201 13.692 20.5001 15.828 20.5001C18.105 20.5001 18.832 20.2261 19.218 19.7191C19.434 19.4361 19.606 19.0011 19.758 18.2711C19.894 17.6211 20 16.8211 20.137 15.7941L20.187 15.4101C20.507 13.0101 20.44 11.6151 20.085 10.8351C19.925 10.4831 19.71 10.2671 19.425 10.1241C19.12 9.97109 18.685 9.87909 18.06 9.87909H15.69C15.009 9.87909 14.397 9.30909 14.479 8.55109C14.505 8.30809 14.544 8.01409 14.584 7.71709L14.654 7.19009C14.714 6.70809 14.759 6.26909 14.759 5.94009C14.759 4.81509 14.546 4.32309 14.286 4.06709C14.011 3.79709 13.512 3.61209 12.491 3.53909C12.14 3.51509 11.793 3.81309 11.793 4.24909V5.30209C11.793 8.85209 9.305 10.3651 8.113 10.8791C7.741 11.0391 7.359 11.1111 7 11.1391V18.9181ZM3.75 20.5001H5.25C5.3163 20.5001 5.37989 20.4737 5.42678 20.4269C5.47366 20.38 5.5 20.3164 5.5 20.2501V9.75009C5.5 9.68378 5.47366 9.62019 5.42678 9.57331C5.37989 9.52643 5.3163 9.50009 5.25 9.50009H3.75C3.6837 9.50009 3.62011 9.52643 3.57322 9.57331C3.52634 9.62019 3.5 9.68378 3.5 9.75009V20.2501C3.5 20.3881 3.612 20.5001 3.75 20.5001Z"
                fill="#0D85DE"
              />
            </svg>
            <sub>Efficient Delivery</sub>
          </div>
          <p>
            Enjoy fast, cost-effective project completion with outstanding
            results and dedicated service from our efficient and dedicated team.
          </p>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            High-Rise Steel Solutions –<br />{" "}
            <span>Strong, Innovative Designs</span> for Your Dream Building.
          </p>
        </div>
        <div className="homeInfoDetails">
          <div className="s-left">
            <sub>What are High-Rise structures?</sub>
            <p>
              High-Rise Steel Structures are engineered to support tall
              buildings using steel frameworks that offer strength and
              flexibility. <br />
              <br /> The process involves designing robust frameworks, load
              analysis, and precise detailing to ensure stability and safety.
              <br />
              <br /> Examples include skyscrapers, office towers, and
              multi-story residential buildings, where steel structures provide
              durability and efficient use of space.
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
            Different Types of <br />
            Structural Systems in <br />
            High-Rise buildings
          </p>
          <span>
            Discover the different structural systems for high-rise buildings we
            offer. NE Structures can design and build each type to suit your
            project perfectly.
          </span>
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
              <h3>{activeContent.name}</h3>
              <div className="divInfo">{activeContent.content}</div>
            </div>
            <div className="s-right">
              <img src={activeContent.image} alt={activeContent.altText} />
            </div>
          </div>
        </div>
      </div>
      <div className="homeInfoContainer">
        <div className="heading">
          <p>
            The High Rise Construction
            <br /> Promise
          </p>
        </div>
        <div
          className="homeInfoDetails"
          style={{ gap: "24px", flexDirection: "column" }}
        >
          <div className="homeInfoSetContainer">
            <div className="homeInfoSet">
              <div className="homeInfoSetImg">
                <img src={IMG1}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Engaged Communities & Customers</sub>
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
                <img src={IMG5}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Quality Built Environments</sub>
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
                <img src={IMG6}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Sustainable Projects</sub>
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
                <img src={IMG9}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Collaborative Partnerships</sub>
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
                <img src={IMG6}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Sustainable Projects</sub>
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
                <img src={IMG9}></img>
              </div>
              <div className="homeInfoSetDetails">
                <div className="heading">
                  <sub>Collaborative Partnerships</sub>
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
      <ProductGalleryHRSS />
      <div className="exploreServices">
        <div className="exploreServicesInfo">
          <div className="heading">
            <sub>
              Explore Our <br /> Pre Engineered Building <br /> Products
            </sub>
            <img src={IMG1} className="mobile"></img>
            <p>
              Optimize your projects with our Pre-Engineered Buildings (PEB),
              designed for efficiency and cost-effectiveness. From warehouses to
              manufacturing facilities, our customizable steel structures offer
              rapid construction and durable performance tailored to your needs.
            </p>
          </div>
          <div className="homeInfoContainer" style={{ padding: "0" }}>
            <div className="navbarContact">
              <Link
                to="/PreEngineeredBuildings"
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
        <div className="product brochure">
          <div className="p-brochure-main">
            <div className="p-our-brochure-container">
              <div className="p-download-label">
                <p>More Details for Our Products?</p>
              </div>
              <div className="p-subtext-div">
                <p>
                  Learn how we excel in BIM and Pre-Engineered Buildings. Get
                  our brochure for an in-depth look at our innovative solutions.
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

export default HighRiseSteelStructures;
