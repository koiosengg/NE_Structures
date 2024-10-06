import React from "react";
import Rectangle1 from "../assets/Download/download1.jpg";
import Rectangle2 from "../assets/Download/download2.jpg";
import Rectangle3 from "../assets/Download/download3.jpg";
import Rectangle4 from "../assets/Download/download4.jpg";
import Rectangle5 from "../assets/Download/download5.jpg";
import Rectangle6 from "../assets/Download/download6.jpg";
import Rectangle7 from "../assets/Download/download7.jpg";
import Rectangle8 from "../assets/Download/download8.jpg";
import Rectangle9 from "../assets/Download/download9.jpg";
import Rectangle10 from "../assets/Download/download10.jpg";
import Rectangle11 from "../assets/Download/download11.jpg";
import Rectangle12 from "../assets/Download/download12.jpg";

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
    Rectangle1,
    Rectangle2,
    Rectangle3,
    Rectangle4,
    Rectangle5,
    Rectangle7,
    Rectangle8,
    Rectangle9,
    Rectangle10,
    Rectangle11,
    Rectangle12
  ];

  const images2 = [
    Rectangle12,
Rectangle11,
Rectangle10,
Rectangle9,
Rectangle8,
Rectangle7,
Rectangle5,
Rectangle4,
Rectangle3,
Rectangle2,
Rectangle1

  ];

  return (
    <div className="p-gallery-slider">
      <ImageSlider imageUrls={images1} />
      <ImageSlider imageUrls={images2} reverse />
    </div>
  );
};

export default App;
