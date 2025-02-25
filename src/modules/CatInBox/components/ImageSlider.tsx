import React from "react";
import { styled } from "@mui/material";
import { SECTION_CLOSE_HEIGHT } from "../utils/constants";

import { KeyBoardArrowIconWithBackground } from "../../../globalComponents/KeyBoardArrowIcon";

import SlideItem from "./SlideItem";

// Import all images from the assets/photo directory ``
const images = import.meta.glob("/src/assets/photo/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
});

const imagePaths = Object.values(images).map((image: any) => image.default);

const ImageSliderContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: `repeat(${3}, auto)`,
  alignItems: "center",
  height: SECTION_CLOSE_HEIGHT, // Adjust the height as needed
  margin: 0,
  padding: 0,
});

const SliderContainer = styled("div")({
  display: "flex",
  //gridTemplateColumns: `repeat(${imagePaths.length}, fit-content(100%))`,
  height: `calc(${SECTION_CLOSE_HEIGHT} - 50px)`, // Adjust the height as needed
  width: "600px",
  justifyContent: "center",
  backgroundColor: "red",
  margin: 0,
  padding: 0,
  marginLeft: 256,
  paddingLeft: 256,
  overflow: "hidden",
  maskImage:
    "linear-gradient(to right, transparent, black 5% 95%, transparent)",
});

const ImageSlider: React.FC = () => {
  return (
    <ImageSliderContainer>
      {/* <KeyBoardArrowIconWithBackground
        direction={0}
        handleClick={nextSlideLeft}
      /> */}

      <SliderContainer id="slidecontainer">
        {imagePaths.map((image, index) => (
          <SlideItem
            key={index}
            image={image}
            index={index}
            totalImageNbr={imagePaths.length}
          />
        ))}
      </SliderContainer>
      {/* <KeyBoardArrowIconWithBackground
        direction={180}
        handleClick={nextSlideRight}
      /> */}
    </ImageSliderContainer>
  );
};

export default ImageSlider;
