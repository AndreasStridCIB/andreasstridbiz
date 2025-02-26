import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import { SECTION_CLOSE_HEIGHT } from "../utils/constants";
import SlideItem from "./SlideItem";

const SliderContainer = styled(Box)({
  display: "flex",
  height: `calc(${SECTION_CLOSE_HEIGHT} - 50px)`, // Adjust the height as needed
  width: "900px",
  justifyContent: "center",
  margin: 0,
  padding: 0,

  maskImage:
    "linear-gradient(to right, transparent, black 5% 95%, transparent)",
  // "&:hover": {
  //   "& > *": {
  //     animationPlayState: "paused", // Pause animation for all children
  //   },
  // },
});

interface ImageSliderProps {
  images: string[];
  setHoveredImage: (image: string | null) => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  setHoveredImage,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <SliderContainer
      id="slidecontainer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {images.map((image, index) => (
        <SlideItem
          key={index}
          image={image}
          index={index}
          isHovered={isHovered}
          setHoveredImage={setHoveredImage}
          totalImageNbr={images.length}
        />
      ))}
    </SliderContainer>
  );
};

export default ImageSlider;
