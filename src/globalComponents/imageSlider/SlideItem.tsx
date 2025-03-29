import React from "react";
import { Box, keyframes, styled } from "@mui/material";
import {
  DELAY_INDEX,
  SLIDE_WIDTH,
} from "../../modules/CatInBox/utils/constants";
import { getImageName } from "../../utils/functions";
import useDelay from "../../hooks/useDelay";
import LazyImageWrap from "../lazyImage/LazyImage";

const sliding = () => keyframes`
   0% {
    transform: translateX(-${SLIDE_WIDTH}px) translateY(0);
    opacity: 1;
  }
  25% {
    transform: translateX(${SLIDE_WIDTH}px) translateY(0);
      opacity: 1;
  }
  50% {
    transform: translateX(${SLIDE_WIDTH}px) translateY(${SLIDE_WIDTH}px);
     opacity: 0;
  }
  75% {
    transform: translateX(-${SLIDE_WIDTH}px) translateY(${SLIDE_WIDTH}px);
     opacity: 0;
  }
  100% {
    transform: translateX(-${SLIDE_WIDTH}px) translateY(0px);
     opacity: 0;
  }
`;
const SlideItemContainer = styled(Box)<{
  quantity: number;
  delay: number;
  isHovered: boolean;
}>(({ quantity, delay, isHovered }) => ({
  display: "grid",
  height: "inherit",
  justifyItems: "center",
  alignItems: "center",
  animation: `${sliding()} ${quantity * DELAY_INDEX}s linear infinite`,
  animationDelay: `${delay * DELAY_INDEX}s`,
  position: "absolute",
  opacity: 0, // Initially hidden
  // bottom: 0,
  // right: 0,

  animationPlayState: isHovered ? "paused" : "running",
}));

const Image = styled("img")({
  width: "auto",
  height: "inherit",
  aspectRatio: "3/4",
  objectFit: "cover",
  marginLeft: 16,
  marginRight: 16,
});

interface SlideItemProps {
  index: number;
  totalImageNbr: number;
  hoveredImage: string | null;
  setHoveredImage: (image: string | null) => void;
  image: string;
}

const SlideItem: React.FC<SlideItemProps> = ({
  index,
  totalImageNbr,
  image,
  hoveredImage,
  setHoveredImage,
}) => {
  const handleMouseMove = () => {
    throttledCallback(() => setHoveredImage(image));
  };

  const throttledCallback = useDelay(1000);

  return (
    <SlideItemContainer
      id={`slideitem-${getImageName(image)}`}
      key={index}
      quantity={totalImageNbr}
      delay={index}
      isHovered={!!hoveredImage}
      onMouseMove={handleMouseMove}
    >
      <LazyImageWrap key={index} imageComp={<Image src={image} />} />
    </SlideItemContainer>
  );
};

export default SlideItem;
