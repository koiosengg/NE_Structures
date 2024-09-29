import React, { useState } from "react";
import { Link } from "react-router-dom";
import NELogo from "../assets/NELogo.png";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true); // Mark that the user has toggled the menu
  };

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
            <Link to="/PreEngineeredBuildings">Pre Engineered Buildings</Link>
            <Link to="/HighRiseSteelStructures">
              High Rise Steel Structures
            </Link>
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
            <Link to="/StructuralEngineeringServices">
              Structural Engineering Services
            </Link>
            <Link to="/BuildingInformationModelling">
              Building Information Modelling
            </Link>
          </div>
        </div>
        <div className="navbarTabSet">
          <div className="navbarTabSetHeading">
            <p>
              <Link to="/Infrastructure">Infrastructure</Link>
            </p>
          </div>
        </div>
        <div className="navbarTabSet">
          <div className="navbarTabSetHeading">
            <p>
              <Link to="/about">About Us</Link>
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
      <div className="mobileNavbarButton" onClick={toggleMobileNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="mobileNavbarOpen"
          style={{ display: isMobileNavOpen ? "none" : "block" }}
        >
          <path
            d="M8 8H24M8 16H24M8 24H24"
            stroke="#111111"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={`mobileNavbar ${
          isMobileNavOpen
            ? "activeMobileNavbar"
            : hasToggled
            ? "nonactiveMobileNavbar"
            : ""
        }`}
      >
        <div className="mobileNavbarHeading">
          <Link to="/" onClick={toggleMobileNav}>
            <img src={NELogo} />
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="mobileNavbarClose"
            onClick={toggleMobileNav}
            style={{ display: isMobileNavOpen ? "block" : "none" }}
          >
            <path
              d="M8.00006 24L16.0001 16L24.0001 24M24.0001 8L15.9985 16L8.00006 8"
              stroke="#111111"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="mobileNavbarContainer">
          <div className="mobileNavbarTab">
            <div className="heading">
              <sub>Products</sub>
              <div className="set">
                <Link to="/PreEngineeredBuildings" onClick={toggleMobileNav}>
                  Pre Engineered Buildings
                </Link>
                <Link to="/HighRiseSteelStructures" onClick={toggleMobileNav}>
                  High Raise Steel Buildings
                </Link>
              </div>
            </div>
            <div className="heading">
              <sub>Services</sub>
              <div className="set">
                <Link
                  to="/StructuralEngineeringServices"
                  onClick={toggleMobileNav}
                >
                  Structural Engineering Services
                </Link>
                <Link
                  to="/BuildingInformationModelling"
                  onClick={toggleMobileNav}
                >
                  Building Information Modelling
                </Link>
              </div>
            </div>
            <div className="heading">
              <Link to="/about" onClick={toggleMobileNav}>
                <sub> About Us</sub>
              </Link>
            </div>
          </div>
          <div className="mobileNavbarContact" style={{ width: "100%" }}>
            <Link to="/contact" onClick={toggleMobileNav}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
