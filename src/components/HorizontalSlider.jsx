import React from "react";
import Rectangle from "../assets/Gallery/Image 1.webp";
import Rectangle2 from "../assets/Gallery/Image 2.webp";
import Rectangle3 from "../assets/Gallery/Image 3.webp";
import Rectangle4 from "../assets/Gallery/Image 4.webp";
import Rectangle5 from "../assets/Gallery/Image 5.webp";
import Rectangle7 from "../assets/Gallery/Image 7.webp";

// Component for horizontal image slider
const HorizontalSlider = ({ imageUrls, reverse }) => {
  // Create a duplicated array to ensure seamless scrolling
  const extendedImageUrls = [...imageUrls, ...imageUrls];

  return (
    <div className={`images-horizontal ${reverse ? "reverse" : ""}`}>
      <div className="image_items-horizontal">
        {extendedImageUrls.map((url, index) => (
          <img
            src={url}
            alt="NE Structures Marquee Img"
            key={`image-${index}`}
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
    <div className="p-slider-cover">
      <div className="gallery-slider-horizontal">
        <HorizontalSlider imageUrls={images1} />
        <HorizontalSlider imageUrls={images2} reverse />
      </div>
    </div>
  );
};

export default App;
