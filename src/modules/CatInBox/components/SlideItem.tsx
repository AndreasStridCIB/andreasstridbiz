import React, { useEffect, useState } from "react";
import { Box, keyframes, styled } from "@mui/material";
import LazyImageWrap from "../../../globalComponents/LazyImage";
import HoverImageZoom from "./HoveringImageZoom";
import { getImageName } from "../../../utils/functions";

const DELAY_INDEX = 4;
const Slide_Width = 282 * 3;

const sliding = () => keyframes`
   0% {
    transform: translateX(-${Slide_Width}px) translateY(0);
    opacity: 1;
  }
  25% {
    transform: translateX(${Slide_Width}px) translateY(0);
      opacity: 1;
  }
  50% {
    transform: translateX(${Slide_Width}px) translateY(${Slide_Width}px);
  }
  75% {
    transform: translateX(-${Slide_Width}px) translateY(${Slide_Width}px);
  }
  100% {
    transform: translateX(-${Slide_Width}px) translateY(0px);
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
  overflow: "visible",
  animationPlayState: isHovered ? "paused" : "running",
}));

const Image = styled("img")({
  width: "auto",
  height: "inherit",
  aspectRatio: "3/4",
  objectFit: "cover",
  marginLeft: 16,
  marginRight: 16,
  overflow: "visible",
});

interface SlideItemProps {
  index: number;
  totalImageNbr: number;
  isHovered: boolean;
  setHoveredImage: (image: string | null) => void;
  image: string;
}

const SlideItem: React.FC<SlideItemProps> = ({
  index,
  totalImageNbr,
  image,
  isHovered,
  setHoveredImage,
}) => {
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isInside) {
      interval = setInterval(() => {
        console.log("Mouse is still inside!");
        console.log("isHovered", isHovered);
        if (isHovered) {
          setHoveredImage(image);
        }
      });
    } else {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isInside, isHovered]); // Runs effect whenever `isInside` changes

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  return (
    <SlideItemContainer
      id={`slideitem-${getImageName(image)}`}
      key={index}
      quantity={totalImageNbr}
      delay={index}
      isHovered={isHovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsInside(false)}
    >
      <LazyImageWrap key={index} imageComp={<Image src={image} />} />
    </SlideItemContainer>
  );
};

export default SlideItem;
