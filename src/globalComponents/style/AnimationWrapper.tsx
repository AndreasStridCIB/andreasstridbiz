import React, { ReactNode } from "react";
import { Box, styled } from "@mui/material";
import { NAVBAR_HEIGHT } from "../constants";

interface AnimationWrapperProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const DURATION = "0.5s";
const HOVER_SCALE = 1.1;

const StyledWrapper = styled(Box)<{
  disabled: boolean;
}>(({ theme, disabled }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: disabled ? "default" : "pointer",
  transform: "scale(1)",
  transition: `all ${DURATION} ease-in-out`,
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? "none" : "auto",

  "&:hover, &:focus": {
    transform: disabled ? "scale(1)" : `scale(${HOVER_SCALE})`,
    color: disabled ? "inherit" : theme.palette.custom?.hoverColor,
  },

  "&:active": {
    transform: disabled ? "scale(1)" : `scale(${HOVER_SCALE * 0.95})`,
  },
}));

export const StyledMenuItem = styled(StyledWrapper)(() => ({
  height: NAVBAR_HEIGHT,
}));

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  className,
  onClick,
  disabled = false,
}) => {
  return (
    <StyledWrapper
      disabled={disabled}
      className={className}
      onClick={disabled ? undefined : onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
    >
      {children}
    </StyledWrapper>
  );
};

export default AnimationWrapper;
