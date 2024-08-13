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
import Brochure from "./Brochure";

function StructuralEngineeringServices() {
  return (
    <div className="product">
      <div className="homeBanner">
        <div className="homeBannerContent">
          <sub>STRUCTURAL ENGINEERING SERVICES</sub>
          <div className="heading">
            <p>
              Building the Future with <br></br>
              <span>Precision and Excellence</span>
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
            Our Journey and <br /> Values
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
                  Pennar offers a quick, error – free complete line of detailing
                  services using the latest version of Tekla Software, XDS and
                  AutoCAD. We understand and visualize the complexity of
                  projects, specific real-time fabrication issues, and adopt in
                  detailing of shop & GA drawings to enhance the efficacy of the
                  project managers/fabricators to complete the projects
                  successfully within the scheduled time.
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
                  Pennar offers a quick, error – free complete line of detailing
                  services using the latest version of Tekla Software, XDS and
                  AutoCAD. We understand and visualize the complexity of
                  projects, specific real-time fabrication issues, and adopt in
                  detailing of shop & GA drawings to enhance the efficacy of the
                  project managers/fabricators to complete the projects
                  successfully within the scheduled time.
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
                  Pennar Offers Design of Pre Engineered steel Buildings with
                  AISC, MBMA, AISI, AWS, ASD and LRFD standards and practices.
                  Pennar can design, detail, PEB of simple to complex buildings
                  by using Software’s like Staad Pro, MBS and EDS etc.
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
                <sub>PEB Design</sub>
                <div className="ourServicesImg mobile">
                  <img src={IMG9}></img>
                </div>
                <p>
                  Pennar Offers Design of Pre Engineered steel Buildings with
                  AISC, MBMA, AISI, AWS, ASD and LRFD standards and practices.
                  Pennar can design, detail, PEB of simple to complex buildings
                  by using Software’s like Staad Pro, MBS and EDS etc.
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
        <img src={IMG1}></img>
      </div>
      <div className="homeBrochure">
        <Brochure />
      </div>
    </div>
  );
}

export default StructuralEngineeringServices;
