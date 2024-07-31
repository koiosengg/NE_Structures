import React from "react";
import ImageSlider from "./ImageSlider";
import HorizontalSlider from "./HorizontalSlider";
const Brochure = () => {
  return (
    <>
      <div className="p-brochure-main">
        <div className="p-our-brochure-container">
          <div className="p-download-label">
            <p>
              Download Our <br /> Brochures
            </p>
          </div>
          <div className="p-subtext-div">
            <p>
              Lorem ipsum dolor sit amet consectetur. Dignissim lectus nulla
              felis tempor tellus. Aenean enim aliquet massa feugiat erat
              rhoncus commodo vulputate morbi. Maecenas volutpat non{" "}
            </p>
            <div className="p-submit" style={{ width: "fit-content" }}>
              <button type="submit" name="submit">
                Download Now
              </button>
            </div>
          </div>
        </div>
        <div className="p-image-gallery-container">
          <ImageSlider />
          <HorizontalSlider />
        </div>
      </div>
    </>
  );
};

export default Brochure;
