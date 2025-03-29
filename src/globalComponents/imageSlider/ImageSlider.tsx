import React, { useState } from "react";
import HoverImageZoom from "./HoveringImageZoom";
import {
  ImageSliderContainer,
  ImageSliderWrap,
} from "../style/ImageSliderContainer";
import SlideItem from "./SlideItem";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  return (
    <ImageSliderContainer>
      <HoverImageZoom image={hoveredImage} setHoveredImage={setHoveredImage} />

      <ImageSliderWrap>
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
      </ImageSliderWrap>

      {/* <ImageSlider
        images={images}
        hoveredImage={hoveredImage}
        setHoveredImage={setHoveredImage}
      /> */}
    </ImageSliderContainer>
  );
};

export default ImageSlider;
