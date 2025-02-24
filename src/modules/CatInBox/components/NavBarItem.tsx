import React from "react";
import { styled, Typography } from "@mui/material";
import { SEMI_BOLD } from "../utils/constants";

interface NavBarItemProps {
  onClick: () => void;
  label: string;
}

const StyledTypography = styled(Typography)`
  font-weight: ${SEMI_BOLD};
  cursor: pointer;
  &:hover {
    color: #ff5722; /* Change this to your desired hover color */
  }
`;

const NavBarItem: React.FC<NavBarItemProps> = ({ onClick, label }) => {
  return <StyledTypography onClick={onClick}>{label}</StyledTypography>;
};

export default NavBarItem;
