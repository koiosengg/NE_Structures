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
import ImageSlider from "./ImageSlider";
import HorizontalSlider from "./HorizontalSlider";

function StructuralEngineeringServices() {
  return (
    <div className="product">
      <div className="homeBanner">
        <div className="homeBannerContent">
          <sub>STRUCTURAL ENGINEERING SERVICES</sub>
          <div className="heading">
            <p>
              <span>Engineering Excellence </span> <br></br>In Every Steel
              Structure
            </p>
            <sub>
              Our SES combine precision, innovation, and expertise to create
              robust, reliable solutions for your structural detailing, PEB, PEB
              and conceptual design.
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
            Expert SES Design – <span>Precision Engineering </span> <br /> That
            Makes Projects Shine.
          </p>
        </div>
        <div className="homeInfoDetails">
          <div className="s-left">
            <sub>What are Structural Engineering Services?</sub>
            <p>
              Structural Engineering services involve designing and analyzing
              the structural framework of buildings and infrastructure to ensure
              safety, stability, and functionality. <br />
              <br /> This process includes detailed load analysis, material
              selection, and connection design, using advanced software for
              precise modeling and simulations. <br />
              <br />
              Examples include designing high-rise buildings, optimizing
              industrial structures, and ensuring the integrity of bridges and
              other critical infrastructure projects.
            </p>
          </div>
          <div className="s-right">
            <img src={IMG3}></img>
          </div>
        </div>
      </div>
      <div className="ourServices">
        <div className="ourServicesHeading">
          Our Structural Engineering <br />
          Services Include
        </div>
        <div className="ourServicesContainer">
          <div className="ourServicesSet">
            <div className="ourServicesInfo">
              <div className="heading">
                <sub>Structural Detailing</sub>
                <div className="ourServicesImg mobile">
                  <img src={IMG4}></img>
                </div>
                <p>
                  NE Structures provides a fast, accurate range of detailing
                  services using the latest versions of Tekla Software, XDS, and
                  AutoCAD. Our expertise allows us to fully understand and
                  visualize the complexities of each project, including
                  real-time fabrication challenges. We incorporate these
                  insights into our detailing of shop and GA drawings, enhancing
                  the efficiency of project managers and fabricators, ensuring
                  that projects are completed successfully and on schedule.
                </p>
              </div>
              <div className="ourServicesList">
                <div className="heading">Detailing Includes:</div>
                <div className="ourServicesListContainer">
                  <div className="ourServicesSetContainer">
                    <div className="ourServicesListSet">
                      <sub>3D Models</sub>
                      <div className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <mask
                            id="mask0_1221_1568"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1221_1568)">
                            <path
                              d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                              fill="#606060"
                            />
                          </g>
                        </svg>
                        <p>For Co-ordination & Understanding</p>
                      </div>
                    </div>
                    <div className="ourServicesListSet">
                      <sub>Integration with NC & CNC</sub>
                      <div className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <mask
                            id="mask0_1221_1568"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1221_1568)">
                            <path
                              d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                              fill="#606060"
                            />
                          </g>
                        </svg>
                        <p>NC Files</p>
                      </div>
                      <div className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <mask
                            id="mask0_1221_1568"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1221_1568)">
                            <path
                              d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                              fill="#606060"
                            />
                          </g>
                        </svg>
                        <p>KISS Files</p>
                      </div>
                      <div className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <mask
                            id="mask0_1221_1568"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1221_1568)">
                            <path
                              d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                              fill="#606060"
                            />
                          </g>
                        </svg>
                        <p>DSTV Files</p>
                      </div>
                      <div className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <mask
                            id="mask0_1221_1568"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1221_1568)">
                            <path
                              d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                              fill="#606060"
                            />
                          </g>
                        </svg>
                        <p>DXF Files</p>
                      </div>
                      <div className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <mask
                            id="mask0_1221_1568"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1221_1568)">
                            <path
                              d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                              fill="#606060"
                            />
                          </g>
                        </svg>
                        <p>MIS Inputs</p>
                      </div>
                      <div className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <mask
                            id="mask0_1221_1568"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1221_1568)">
                            <path
                              d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                              fill="#606060"
                            />
                          </g>
                        </svg>
                        <p>EJE Files</p>
                      </div>
                    </div>
                  </div>
                  <div className="ourServicesSetContainer">
                    <div className="ourServicesListSet">
                      <sub>2D Models</sub>
                      <div className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <mask
                            id="mask0_1221_1568"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1221_1568)">
                            <path
                              d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                              fill="#606060"
                            />
                          </g>
                        </svg>
                        <p>Anchor Bolt Plans</p>
                      </div>
                      <div className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <mask
                            id="mask0_1221_1568"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1221_1568)">
                            <path
                              d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                              fill="#606060"
                            />
                          </g>
                        </svg>
                        <p>Embed Plan</p>
                      </div>
                      <div className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <mask
                            id="mask0_1221_1568"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1221_1568)">
                            <path
                              d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                              fill="#606060"
                            />
                          </g>
                        </svg>
                        <p>GA Plans</p>
                      </div>
                      <div className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <mask
                            id="mask0_1221_1568"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1221_1568)">
                            <path
                              d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                              fill="#606060"
                            />
                          </g>
                        </svg>
                        <p>Shop Drawings</p>
                      </div>
                    </div>
                    <div className="ourServicesListSet">
                      <sub>Reports</sub>
                      <div className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <mask
                            id="mask0_1221_1568"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1221_1568)">
                            <path
                              d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                              fill="#606060"
                            />
                          </g>
                        </svg>
                        <p>Bolt List</p>
                      </div>
                      <div className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <mask
                            id="mask0_1221_1568"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1221_1568)">
                            <path
                              d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                              fill="#606060"
                            />
                          </g>
                        </svg>
                        <p>Assembly List</p>
                      </div>
                      <div className="list">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <mask
                            id="mask0_1221_1568"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_1221_1568)">
                            <path
                              d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                              fill="#606060"
                            />
                          </g>
                        </svg>
                        <p>BOM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ourServicesImg notMobile">
              <img src={IMG4} style={{ height: "632px" }}></img>
            </div>
          </div>
          <div className="ourServicesSet">
            <div className="ourServicesInfo">
              <div className="heading">
                <sub>PEB Services</sub>
                <div className="ourServicesImg mobile">
                  <img src={IMG9}></img>
                </div>
                <p>
                  NE Structures specializes in the Design and Detailing of
                  Pre-Engineered Buildings, ensuring high-quality detailing
                  drawings for all our clients. Our experienced team of
                  detailers and checkers is adept at managing complex PEB
                  projects, fully versed in international standards such as ASD,
                  LRFD, AISI, and MBMA. <br /> <br /> Our engineering services
                  also include comprehensive connection design and miscellaneous
                  design projects, including stairs, handrails, ladders, and
                  more, all tailored to meet the highest industry standards.
                </p>
              </div>
              <div className="ourServicesList">
                <div className="ourServicesListContainer">
                  <div className="ourServicesListSet">
                    <sub>Submittals</sub>
                    <div className="list">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <mask
                          id="mask0_1221_1568"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1221_1568)">
                          <path
                            d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                            fill="#606060"
                          />
                        </g>
                      </svg>
                      <p>Design Reports & Calculations</p>
                    </div>
                    <div className="list">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <mask
                          id="mask0_1221_1568"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1221_1568)">
                          <path
                            d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                            fill="#606060"
                          />
                        </g>
                      </svg>
                      <p>MBS Outputs</p>
                    </div>
                    <div className="list">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <mask
                          id="mask0_1221_1568"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1221_1568)">
                          <path
                            d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                            fill="#606060"
                          />
                        </g>
                      </svg>
                      <p>Approval Drawings</p>
                    </div>
                    <div className="list">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <mask
                          id="mask0_1221_1568"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1221_1568)">
                          <path
                            d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                            fill="#606060"
                          />
                        </g>
                      </svg>
                      <p>Shop Drawings</p>
                    </div>
                    <div className="list">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <mask
                          id="mask0_1221_1568"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1221_1568)">
                          <path
                            d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                            fill="#606060"
                          />
                        </g>
                      </svg>
                      <p>Construction Drawings</p>
                    </div>
                    <div className="list">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <mask
                          id="mask0_1221_1568"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1221_1568)">
                          <path
                            d="M9.33268 12L8.39935 11.0333L10.766 8.66667H2.66602V7.33333H10.766L8.39935 4.96667L9.33268 4L13.3327 8L9.33268 12Z"
                            fill="#606060"
                          />
                        </g>
                      </svg>
                      <p>BOM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ourServicesImg notMobile">
              <img src={IMG9} style={{ height: "493px" }}></img>
            </div>
          </div>
          <div className="ourServicesSet">
            <div className="ourServicesInfo">
              <div className="heading">
                <sub>PEB Design</sub>
                <div className="ourServicesImg mobile">
                  <img src={IMG7}></img>
                </div>
                <p>
                  NE Structures offers expert design services for Pre-Engineered
                  Steel Buildings, adhering to industry standards such as AISC,
                  MBMA, AISI, AWS, ASD, and LRFD. <br /> <br /> We specialize in
                  designing and detailing PEBs, from simple warehouses to
                  complex industrial plants and commercial structures, utilizing
                  advanced software like STAAD Pro, MBS, and EDS.
                  <br /> <br /> Our commitment to precision and efficiency
                  ensures that every project meets global standards and exceeds
                  client expectations.
                </p>
              </div>
            </div>
            <div className="ourServicesImg notMobile">
              <img src={IMG7}></img>
            </div>
          </div>
          <div className="ourServicesSet">
            <div className="ourServicesInfo">
              <div className="heading">
                <sub>Connection Design</sub>
                <div className="ourServicesImg mobile">
                  <img src={IMG9}></img>
                </div>
                <p>
                  NE Structures provides comprehensive structural steel
                  connection design and engineering support, delivering detailed
                  drawings for a wide range of projects worldwide. <br />
                  <br /> From high-rise commercial buildings to industrial
                  facilities and large-scale infrastructure projects, our
                  expertise ensures that every connection is designed for
                  maximum strength and reliability, meeting global standards and
                  client needs.
                </p>
              </div>
            </div>
            <div className="ourServicesImg notMobile">
              <img src={IMG9}></img>
            </div>
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
            <p>
              Streamline your projects with NE Structures’ Building Information
              Modeling services. From intricate structural designs to MEP
              coordination, we deliver precision and efficiency in every phase.
              Ensure seamless execution and superior outcomes with our
              cutting-edge BIM expertise.
            </p>
          </div>
          <div className="homeInfoContainer" style={{ padding: "0" }}>
            <div className="navbarContact">
              <Link
                to="/BuildingInformationModelling"
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
        <img src={IMG1}></img>
      </div>
      <div className="homeBrochure">
        <div className="product brochure">
          <div className="p-brochure-main">
            <div className="p-our-brochure-container">
              <div className="p-download-label">
                <p>Questions About Our Work?</p>
              </div>
              <div className="p-subtext-div">
                <p>
                  Explore our detailed brochure to learn more about our projects
                  and services. Discover how we can turn your designs into
                  Sustainable buildings.
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

export default StructuralEngineeringServices;
