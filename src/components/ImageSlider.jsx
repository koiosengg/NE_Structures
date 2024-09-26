import React from "react";
import Rectangle from "../assets/Gallery/Image 1.png";
import Rectangle2 from "../assets/Gallery/Image 2.png";
import Rectangle3 from "../assets/Gallery/Image 3.png";
import Rectangle4 from "../assets/Gallery/Image 4.png";
import Rectangle5 from "../assets/Gallery/Image 5.jpeg";
import Rectangle7 from "../assets/Gallery/Image 7.png";
const ImageSlider = ({ imageUrls, reverse }) => {
  return (
    <div className={`logos-vertical ${reverse ? "reverse" : ""}`}>
      <div className="logo_items-vertical">
        {imageUrls.map((url, index) => (
          <img
            src={url}
            alt="NE Structures Marquee Img"
            key={`logo-top-${index}`}
          />
        ))}
      </div>
      <div className="logo_items-vertical">
        {imageUrls.map((url, index) => (
          <img
            src={url}
            alt={`Logo ${index + 1}`}
            key={`logo-bottom-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const images1 = [
    Rectangle,
    Rectangle2,
    Rectangle3,
    Rectangle4,
    Rectangle5,
    Rectangle7,
  ];

  const images2 = [
    Rectangle7,
    Rectangle5,
    Rectangle4,
    Rectangle3,
    Rectangle2,
    Rectangle,
  ];

  return (
    <div className="p-gallery-slider">
      <ImageSlider imageUrls={images1} />
      <ImageSlider imageUrls={images2} reverse />
    </div>
  );
};

export default App;
