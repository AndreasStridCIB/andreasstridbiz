import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import { ORANGE, SECTION_CLOSE_HEIGHT } from "../utils/constants";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { KeyBoardArrowIconWithBackground } from "../../../globalComponents/KeyBoardArrowIcon";

import SlideItem from "./SlideItem";
import ImageSlider from "./ImageSlider";
import HoverImageZoom from "./HoveringImageZoom";

interface StyledDoubleArrowIconProps {
  direction: "up" | "down" | "left" | "right";
}

const getRotation = (direction: string) => {
  switch (direction) {
    case "up":
      return "rotate(90deg)";
    case "down":
      return "rotate(270deg)";
    case "left":
      return "rotate(180deg)";
    case "right":
    default:
      return "rotate(0deg)";
  }
};

const Container = styled(Box)({
  display: "grid",
  gridTemplateColumns: `fit-content(100%) auto fit-content(100%)`,
  alignItems: "center",
  justifyItems: "center",
  height: `calc(${SECTION_CLOSE_HEIGHT} - 50px)`, // Adjust the height as needed
  overflow: "visible",
});

const StyledDoubleArrowIcon = styled(
  DoubleArrowIcon
)<StyledDoubleArrowIconProps>(({ direction }) => ({
  color: ORANGE,
  width: 128,
  height: 128,

  position: "relative",
  transform: getRotation(direction),
}));

// Import all images from the assets/photo directory ``
const images = import.meta.glob("/src/assets/photo/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
});

const imagePaths = Object.values(images).map((image: any) => image.default);

const ImageSliderContainer: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  return (
    <Container>
      <HoverImageZoom image={hoveredImage} setHoveredImage={setHoveredImage} />
      <StyledDoubleArrowIcon direction="right" />

      <ImageSlider images={imagePaths} setHoveredImage={setHoveredImage} />

      <StyledDoubleArrowIcon direction="right" />
    </Container>
  );
};

export default ImageSliderContainer;
