import React, { useState } from "react";
import { styled } from "@mui/material";
import {
  BLACK,
  SECTION_CLOSE_HEIGHT,
  SECTION_OPEN_HEIGHT,
} from "../utils/constants";
import SectionMenu from "./SectionMenu";
import ImageSlider from "./ImageSlider";
import { KeyBoardArrowIconWithBackgroundAbsolute } from "../../../globalComponents/KeyBoardArrowIcon";

const SectionDiv = styled("div")<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  display: "grid",
  gridArea: "design",
  marginTop: theme.spacing(8),
  gridTemplateColumns: "repeat(2, 1fr)",
  backgroundColor: BLACK,
  gridGap: theme.spacing(2),
  height: isOpen ? SECTION_OPEN_HEIGHT : SECTION_CLOSE_HEIGHT,
  position: "relative",
  transition: "height 0.3s ease-in-out",
  "& > *": {
    margin: theme.spacing(4), // Apply margin to all direct children
  },
}));

const DesignSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SectionDiv id="design" isOpen={isOpen}>
      <ImageSlider />
      <SectionMenu />
      <KeyBoardArrowIconWithBackgroundAbsolute
        isOpen={isOpen}
        handleClick={toggleSection}
        direction={90}
      />
    </SectionDiv>
  );
};

export default DesignSection;
