import React, { useState, useRef, useEffect, forwardRef } from "react";
import NewImg3 from "../assets/NewImgs/newImg3.jpeg";
import IMG1 from "../assets/HomeBanner/IMG1.png";
import IMG2 from "../assets/HomeBanner/IMG2.jpg";
import IMG3 from "../assets/HomeBanner/IMG3.png";
import IMG4 from "../assets/HomeBanner/IMG4.png";
import IMG5 from "../assets/HomeBanner/IMG5.jpg";
import IMG6 from "../assets/HomeBanner/IMG6.jpg";
import IMG7 from "../assets/HomeBanner/IMG7.jpg";
import IMG8 from "../assets/HomeBanner/IMG8.jpg";
import IMG9 from "../assets/HomeBanner/IMG9.jpg";


const Gallery= forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const newGalleryRef = useRef(null);
  const [galleryWidth, setGalleryWidth] = useState(0);

  const images = [
    NewImg3,
    IMG1,
    IMG2,
    IMG3,
    IMG6,
    IMG7,
    IMG9,
  ];

  useEffect(() => {
    if (newGalleryRef.current) {
      setGalleryWidth(newGalleryRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (newGalleryRef.current) {
        setGalleryWidth(newGalleryRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
      className="homeInfoContainer newGalleryContainer"
      style={{ alignItems: "center" }}
      ref={ref}
      id="home-gallery"
    >
      <div className="heading">
        <p>
          Showcasing
          <br /> Our stories
        </p>
        <span>
          At NE Structures, we prioritize clear communication and tailored
          solutions to meet every client's specific needs.
        </span>
      </div>
      <div className="homeInfoDetails">
        <div className="s-left">
          <p>
            NE Structures consistently delivers high-quality, on-time projects
            tailored to our clients' unique requirements. Our expertise in
            design, engineering, and execution ensures every structure meets the
            highest standards of durability and precision. Discover the trusted
            partnerships we've built through successful project delivery.
          </p>
          <div className="galleryNumberDiv">
            <div className="subHeading">
              <p>3000+</p>
              <span>Happy Clients</span>
            </div>
            <div className="subHeading">
              <p>0.5 M Ton</p>
              <span>Tonnage Delivered</span>
            </div>
            <div className="subHeading">
              <p>3600+</p>
              <span>Projects</span>
            </div>
          </div>
        </div>
        <div className="s-right newGallery" ref={newGalleryRef}>
          <div
            className="newGallerySlide"
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * galleryWidth}px)`,
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                style={{ width: "100%", flexShrink: 0 }}
                alt={`NE Structures Gallery Img ${index + 1}`}
              />
            ))}
          </div>
          <div className="newGalleryControls">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="prevImg"
              onClick={prevImage}
              style={{
                cursor: "pointer",
                opacity: currentIndex === 0 ? 0.5 : 1,
              }}
            >
              <mask
                id="mask0_1561_5752"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect
                  y="32"
                  width="32"
                  height="32"
                  transform="rotate(-90 0 32)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1561_5752)">
                <path
                  d="M23.9993 16L15.9993 24L14.1327 22.1333L18.9327 17.3333H6.66602L6.66602 14.6667H18.9327L14.1327 9.86667L15.9993 8L23.9993 16Z"
                  fill="#111111"
                />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="nextImg"
              onClick={nextImage}
              style={{
                cursor: "pointer",
                opacity: currentIndex === images.length - 1 ? 0.5 : 1,
              }}
            >
              <mask
                id="mask0_1561_5752"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect
                  y="32"
                  width="32"
                  height="32"
                  transform="rotate(-90 0 32)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1561_5752)">
                <path
                  d="M23.9993 16L15.9993 24L14.1327 22.1333L18.9327 17.3333H6.66602L6.66602 14.6667H18.9327L14.1327 9.86667L15.9993 8L23.9993 16Z"
                  fill="#111111"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Gallery;