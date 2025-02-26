import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import {
  BLACK,
  SECTION_CLOSE_HEIGHT,
  SECTION_OPEN_HEIGHT,
} from "../utils/constants";
import SectionMenu from "./SectionMenu";
import { KeyBoardArrowIconWithBackgroundAbsolute } from "../../../globalComponents/KeyBoardArrowIcon";
import ImageSliderContainer from "./ImageSliderContainer";

const SectionDiv = styled(Box)<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  display: "grid",
  gridArea: "design",
  marginTop: theme.spacing(8),
  gridTemplateColumns: "repeat(2, 1fr)",
  backgroundColor: BLACK,
  gridGap: theme.spacing(2),
  height: isOpen ? SECTION_OPEN_HEIGHT : SECTION_CLOSE_HEIGHT,
  transition: "height 0.3s ease-in-out",
  overflow: "visible",
  "& > *": {
    margin: theme.spacing(4), // Apply margin to all direct children
  },
}));

const DesignSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SectionDiv id="design" isOpen={isOpen}>
      <ImageSliderContainer />
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
