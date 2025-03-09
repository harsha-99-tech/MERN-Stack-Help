import React from "react";
import PhotoCollage from "./PhotoCollage";
import Slider from "./Slider";
import ImageSlider from "./ImageSlider";

const Test = () => {
  return (
    <div>
      <div>
        <PhotoCollage />
      </div>
      <div>
        <Slider />
      </div>
      <div>
        <ImageSlider />
      </div>
    </div>
  );
};

export default Test;
