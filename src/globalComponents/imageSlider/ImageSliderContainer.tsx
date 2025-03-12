import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import ImageSlider from "./ImageSlider";
import HoverImageZoom from "./HoveringImageZoom";
import { SECTION_CLOSE_HEIGHT } from "../../modules/CatInBox/utils/constants";

const Container = styled(Box)({
  display: "grid",
  gridTemplateColumns: `fit-content(100%) auto fit-content(100%)`,
  alignItems: "center",
  justifyItems: "center",
  height: `calc(${SECTION_CLOSE_HEIGHT} - 50px)`, // Adjust the height as needed
});

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

      <ImageSlider
        images={imagePaths}
        hoveredImage={hoveredImage}
        setHoveredImage={setHoveredImage}
      />
    </Container>
  );
};

export default ImageSliderContainer;
