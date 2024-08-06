import React, { useState, forwardRef } from "react";
import IMG1 from "../assets/HomeBanner/IMG1.png";
import IMG2 from "../assets/HomeBanner/IMG2.jpg";
import IMG3 from "../assets/HomeBanner/IMG3.png";
import IMG4 from "../assets/HomeBanner/IMG4.png";
import IMG5 from "../assets/HomeBanner/IMG5.jpg";
import IMG6 from "../assets/HomeBanner/IMG6.jpg";
import IMG7 from "../assets/HomeBanner/IMG7.jpg";
import IMG8 from "../assets/HomeBanner/IMG8.jpg";

const setHeight = 714;
const gap = 20;

const gallerySets = [
  {
    heading: "Advanced Modular Solutions for Your Building Needs",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum pretium tortor nulla. Ut at fermentum.",
    images: [IMG4, IMG8, IMG5, IMG2],
  },
  {
    heading: "Lorem Ipsum 456",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum pretium tortor nulla. Ut at fermentum.",
    images: [IMG7, IMG3, IMG8, IMG1],
  },
  {
    heading: "Lorem Ipsum 123",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum pretium tortor nulla. Ut at fermentum.",
    images: [IMG6, IMG1, IMG5, IMG2],
  },
  {
    heading: "Lorem Ipsum 789",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum pretium tortor nulla. Ut at fermentum.",
    images: [IMG8, IMG5, IMG2, IMG7],
  },
];

const ProductGallery = forwardRef((props, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleUpClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleDownClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, gallerySets.length - 1)
    );
  };

  return (
    <div className="homeInfoContainer" ref={ref} id="home-gallery">
      <div className="homeGalleryContainer">
        <div className="homeGalleryControl">
          <svg
            onClick={handleUpClick}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="galleryUp"
            style={{ opacity: currentIndex === 0 ? 0.3 : 1 }}
          >
            <mask
              id="mask0_989_13453"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect
                x="24"
                width="24"
                height="24"
                transform="rotate(90 24 0)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_989_13453)">
              <path
                d="M4 16L12 8L20 16L18.58 17.42L12 10.84L5.42 17.42L4 16Z"
                fill="#111111"
              />
            </g>
          </svg>
          <div className="galleryIndicatorDiv">
            {gallerySets.map((_, index) => (
              <div
                key={index}
                className={`galleryIndicatorDot ${
                  currentIndex === index ? "active" : ""
                }`}
              ></div>
            ))}
          </div>
          <svg
            onClick={handleDownClick}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="galleryDown"
            style={{
              opacity: currentIndex === gallerySets.length - 1 ? 0.3 : 1,
            }}
          >
            <mask
              id="mask0_989_13453"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect
                x="24"
                width="24"
                height="24"
                transform="rotate(90 24 0)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_989_13453)">
              <path
                d="M4 16L12 8L20 16L18.58 17.42L12 10.84L5.42 17.42L4 16Z"
                fill="#111111"
              />
            </g>
          </svg>
        </div>
        <div
          className="homeGallerySetContainer"
          style={{
            transform: `translateY(-${currentIndex * (setHeight + gap)}px)`,
          }}
        >
          {gallerySets.map((set, index) => (
            <div className="homeGallerySet" key={index}>
              <div className="heading">
                <sub>{set.heading}</sub>
                <p>{set.description}</p>
              </div>
              {set.images.map((image, idx) => (
                <div key={idx} className={`position${idx + 1}`}>
                  <img src={image} alt={set.heading}></img>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProductGallery;
