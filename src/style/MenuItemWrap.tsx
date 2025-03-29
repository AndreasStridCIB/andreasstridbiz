import { Box, css, styled } from "@mui/material";
import { hoverEffect } from "./styledCss";
import { SEMI_BOLD } from "../modules/CatInBox/utils/constants";

export const MenuItemWrap = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{
  isActive: boolean;
}>(
  ({ theme, isActive }) => css`
    font-weight: ${SEMI_BOLD};
    width: 100%;
    padding: ${theme.spacing(2)};
    cursor: pointer;
    ${hoverEffect(theme, isActive)}
    ${isActive &&
    css`
      background-color: ${theme.palette.action.selected};
    `}
  `
);
