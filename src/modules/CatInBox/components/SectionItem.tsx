import React, { useRef } from "react";
import { Typography } from "@mui/material";
import { StyledMenuItem } from "@/globalComponents/style/AnimationWrapper";

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
    <StyledMenuItem
      onClick={handleClick}
      disabled={!isActive}
      ref={menuItemRef}
    >
      <Typography variant="h4">{title}</Typography>
    </StyledMenuItem>
  );
};

export default SectionItem;
