import { css, keyframes } from "@mui/material/styles";

const DURATION = "0.66s";

// Keyframes for the border animation
const borderAnimation = (
  theme: any,
  isClosing: boolean,
  isActive: boolean
) => keyframes`
  0% {
    width: ${isClosing ? "100%" : "0"};
    right: 0;
    background-color: ${
      isActive
        ? theme.palette.custom.hoverColor
        : isClosing
        ? theme.palette.custom.hoverColor
        : theme.palette.secondary.main
    };
  }
  100% {
    width: ${isClosing ? "0" : "100%"};
    background-color: ${
      isActive
        ? theme.palette.custom.hoverColor
        : isClosing
        ? theme.palette.secondary.main
        : theme.palette.custom.hoverColor
    };
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

const colorFade = (theme: any, isClosing: boolean) => keyframes`
  0% {
      color: ${
        isClosing
          ? theme.palette.custom.hoverColor
          : theme.palette.secondary.main
      };
   
  }
  100% {
      color: ${
        isClosing
          ? theme.palette.secondary.main
          : theme.palette.custom.hoverColor
      };
  
  }
`;

export const hoverEffect = (theme: any, isActive: boolean) => css`
  position: relative;
  overflow: hidden;
  color: ${isActive
    ? theme.palette.custom.hoverColor
    : theme.palette.secondary.main};
  &:hover,
  &:focus {
    animation: ${scaleAnimation(false)} ${DURATION} ease-in-out forwards,
      ${isActive ? "" : colorFade(theme, false)} ${DURATION} ease-in-out
        forwards;
  }

  &:not(:hover):not(:focus) {
    animation: ${scaleAnimation(true)} ${DURATION} ease-in-out forwards,
      ${isActive ? "" : colorFade(theme, true)} ${DURATION} ease-in-out forwards;
    color: ${isActive
      ? theme.palette.custom.hoverColor
      : theme.palette.secondary.main};
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;

    background-color: ${isActive
      ? theme.palette.custom.hoverColor
      : theme.palette.secondary.main};
    transform: translateX(-50%);
  }

  &:hover::before,
  &:focus::before {
    animation: ${borderAnimation(theme, false, isActive)} ${DURATION}
      ease-in-out forwards;
  }
  &:not(:hover):not(:focus)::before {
    animation: ${borderAnimation(theme, true, isActive)} ${DURATION} ease-in-out
      forwards;
    background-color: ${isActive
      ? theme.palette.custom.hoverColor
      : theme.palette.secondary.main};
  }
`;
