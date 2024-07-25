import React from "react";
import { Link } from "react-router-dom";
import NELogo from "../assets/NELogo.png";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbarLogo">
        <Link to="/">
          <img src={NELogo} />
        </Link>
      </div>
      <div className="navbarTab">
        <div className="navbarTabSet">
          <div className="navbarTabSetHeading">
            <p>Products</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_1040_1024"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect
                  y="16"
                  width="16"
                  height="16"
                  transform="rotate(-90 0 16)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1040_1024)">
                <path
                  d="M14.1839 5.71029L7.51725 12.377L0.850586 5.71029L2.03392 4.52695L7.51725 10.0103L13.0006 4.52695L14.1839 5.71029Z"
                  fill="#606060"
                />
              </g>
            </svg>
          </div>
          <div className="navbarTabSetDropdown">
            <Link to="/">Pre Engineered Buildings</Link>
            <Link to="/">High Rise Steel Structures</Link>
          </div>
        </div>
        <div className="navbarTabSet">
          <div className="navbarTabSetHeading">
            <p>Services</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_1040_1024"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect
                  y="16"
                  width="16"
                  height="16"
                  transform="rotate(-90 0 16)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1040_1024)">
                <path
                  d="M14.1839 5.71029L7.51725 12.377L0.850586 5.71029L2.03392 4.52695L7.51725 10.0103L13.0006 4.52695L14.1839 5.71029Z"
                  fill="#606060"
                />
              </g>
            </svg>
          </div>
          <div className="navbarTabSetDropdown">
            <Link to="/">Structural Engineering Services</Link>
            <Link to="/">Building Information Modelling</Link>
          </div>
        </div>
        <div className="navbarTabSet">
          <div className="navbarTabSetHeading">
            <p>
              <Link to="/">About Us</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="navbarContact">
        <Link to="/contact">
          <p>Contact Us</p>
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
  );
}

export default Navbar;
