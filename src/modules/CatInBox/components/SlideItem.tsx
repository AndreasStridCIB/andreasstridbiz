import React from "react";
import { keyframes, styled } from "@mui/material";
import LazyImageWrap from "../../../globalComponents/LazyImage";

const DELAY_INDEX = 4;
const Slide_Width = 282 * 2;

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
const SlideItemContainer = styled("div")<{
  quantity: number;
  delay: number;
}>(({ quantity, delay }) => ({
  display: "grid",
  height: "inherit",
  justifyItems: "center",
  alignItems: "center",
  animation: `${sliding()} ${quantity * DELAY_INDEX}s linear infinite`,
  animationDelay: `${delay * DELAY_INDEX}s`,
  position: "absolute",
  opacity: 0, // Initially hidden
}));

const Image = styled("img")({
  width: "auto",
  height: "inherit",
  aspectRatio: "3/4",
  objectFit: "cover",
  marginLeft: 16,
  marginRight: 16,
  zIndex: 999,
});

interface SlideItemProps {
  index: number;
  totalImageNbr: number;
  image: any;
}

const SlideItem: React.FC<SlideItemProps> = ({
  index,
  totalImageNbr,
  image,
}) => {
  console.log("SlideItem", index, totalImageNbr, image);
  return (
    <SlideItemContainer key={index} quantity={totalImageNbr} delay={index}>
      <LazyImageWrap key={index} imageComp={<Image src={image} />} />
    </SlideItemContainer>
  );
};

export default SlideItem;
