import { css, keyframes } from "@mui/material/styles";
import {
  HOVER_ITEM_COLOR,
  ORANGE,
  WHITE,
} from "../modules/CatInBox/utils/constants";

const DURATION = "0.66s";

// Keyframes for the border animation
const borderAnimation = (isClosing: boolean, isActive: boolean) => keyframes`
  0% {
    width: ${isClosing ? "100%" : "0"};
    right: 0;
    background-color: ${isActive ? ORANGE : isClosing ? ORANGE : WHITE};
  }
  100% {
    width: ${isClosing ? "0" : "100%"};
    background-color: ${isActive ? ORANGE : isClosing ? WHITE : ORANGE};
    right: 0;
  }
`;

// Keyframes for the scale increase animation
const scaleAnimation = (isClosing: boolean) => keyframes`
  0% {
   transform: ${isClosing ? "scale(1.1)" : "scale(1)"};
 
  }
  100% {
      transform: ${isClosing ? "scale(1)" : "scale(1.1)"};s
  }
`;

const colorFade = (isClosing: boolean) => keyframes`
  0% {
      color: ${isClosing ? ORANGE : WHITE};
   
  }
  100% {
      color: ${isClosing ? WHITE : ORANGE};
  
  }
`;

export const hoverEffect = (theme: any, isActive: boolean) => css`
  position: relative;
  overflow: hidden;
  color: ${isActive ? ORANGE : theme.palette.secondary.main};
  &:hover,
  &:focus {
    animation: ${scaleAnimation(false)} ${DURATION} ease-in-out forwards,
      ${isActive ? "" : colorFade(false)} ${DURATION} ease-in-out forwards;
  }

  &:not(:hover):not(:focus) {
    animation: ${scaleAnimation(true)} ${DURATION} ease-in-out forwards,
      ${isActive ? "" : colorFade(true)} ${DURATION} ease-in-out forwards;
    color: ${isActive ? ORANGE : theme.palette.secondary.main};
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;

    background-color: ${isActive ? ORANGE : WHITE};
    transform: translateX(-50%);
  }

  &:hover::before,
  &:focus::before {
    animation: ${borderAnimation(false, isActive)} ${DURATION} ease-in-out
      forwards;
  }
  &:not(:hover):not(:focus)::before {
    animation: ${borderAnimation(true, isActive)} ${DURATION} ease-in-out
      forwards;
    background-color: ${isActive ? ORANGE : WHITE};
  }
`;
