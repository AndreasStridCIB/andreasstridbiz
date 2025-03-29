import React, { useRef } from "react";
import { MenuItemWrap } from "../../../style/MenuItemWrap";
import { Typography } from "@mui/material";

interface SectionItemProps {
  title: string;
  isActive: boolean;
  handleClick: () => void;
}

const SectionItem: React.FC<SectionItemProps> = ({
  title,
  isActive,
  handleClick,
}) => {
  const menuItemRef = useRef<HTMLDivElement>(null);

  return (
    <MenuItemWrap onClick={handleClick} isActive={isActive} ref={menuItemRef}>
      <Typography variant="h4">{title}</Typography>
    </MenuItemWrap>
  );
};

export default SectionItem;
