import React from "react";
import { styled, keyframes } from "@mui/material";
import LazyImageWrap from "./lazyImage/LazyImageWrap";

const bounceAnimation = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    transform: translateY(-40px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
`;

interface AnimatedImageProps {
  src: string;
  alt: string;
  show: boolean;
  left: string | number;
  top: string | number;
  width: string;
  height: string;
  animationDuration: number;
  blur?: boolean; // Add blur prop
}

const StyledAnimatedImage = styled("img")<AnimatedImageProps>(
  ({ show, left, top, width, height, animationDuration, blur }) => ({
    position: "absolute",
    left,
    top,
    width,
    height,
    pointerEvents: "none",
    opacity: show ? 1 : 0,
    animation: show
      ? `${bounceAnimation} ${animationDuration}ms ease-in-out`
      : "none",
    filter: blur ? "blur(1px)" : "none",
    transition: "filter 1s ease-in-out",
  })
);

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  show,
  left,
  top,
  width,
  height,
  animationDuration,
  blur = false, // Default to false
}) => {
  return (
    <LazyImageWrap
      imageComp={
        <StyledAnimatedImage
          src={src}
          alt={alt}
          show={show}
          left={left}
          top={top}
          width={width}
          height={height}
          animationDuration={animationDuration}
          blur={blur}
        />
      }
    />
  );
};

export default AnimatedImage;
