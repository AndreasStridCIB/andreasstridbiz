import React from "react";
import { Box, styled } from "@mui/material";
import SlideItem from "./SlideItem";
import { SECTION_CLOSE_HEIGHT } from "../../modules/CatInBox/utils/constants";

const SliderContainer = styled(Box)({
  display: "flex",
  height: `calc(${SECTION_CLOSE_HEIGHT} - 50px)`, // Adjust the height as needed
  width: "calc(50vw - 100px)",
  justifyContent: "center",
  maskImage:
    "linear-gradient(to right, transparent, black 5% 95%, transparent)",
});

interface ImageSliderProps {
  images: string[];
  hoveredImage: string | null;
  setHoveredImage: (image: string | null) => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  setHoveredImage,
  hoveredImage,
}) => {
  return (
    <SliderContainer id="slidecontainer">
      {images.map((image, index) => (
        <SlideItem
          key={index}
          image={image}
          index={index}
          hoveredImage={hoveredImage}
          setHoveredImage={setHoveredImage}
          totalImageNbr={images.length}
        />
      ))}
    </SliderContainer>
  );
};

export default ImageSlider;
