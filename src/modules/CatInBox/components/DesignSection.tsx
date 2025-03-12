import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import {
  BLACK,
  ORANGE,
  SECTION_CLOSE_HEIGHT,
  SECTION_OPEN_HEIGHT,
} from "../utils/constants";
import SectionMenu from "./SectionMenu";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { KeyBoardArrowIconWithBackgroundAbsolute } from "../../../globalComponents/KeyBoardArrowIcon";
import ImageSliderContainer from "../../../globalComponents/imageSlider/ImageSliderContainer";

interface StyledDoubleArrowIconProps {
  direction: "up" | "down" | "left" | "right";
}

const getRotation = (direction: string) => {
  switch (direction) {
    case "up":
      return "rotate(90deg)";
    case "down":
      return "rotate(270deg)";
    case "left":
      return "rotate(180deg)";
    case "right":
    default:
      return "rotate(0deg)";
  }
};

const StyledDoubleArrowIcon = styled(
  DoubleArrowIcon
)<StyledDoubleArrowIconProps>(({ direction }) => ({
  color: ORANGE,
  width: `min(128px, calc(50vw - 100px))`,
  height: `min(128px, calc(50vw - 100px))`,

  position: "relative",
  transform: getRotation(direction),
}));

const SectionDiv = styled(Box)<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  display: "grid",
  gridArea: "design",
  marginTop: theme.spacing(8),
  gridTemplateColumns: "repeat(2, 1fr)",
  backgroundColor: BLACK,
  gridGap: theme.spacing(2),
  height: isOpen ? SECTION_OPEN_HEIGHT : SECTION_CLOSE_HEIGHT,
  width: "inherit",
  transition: "height 0.3s ease-in-out",

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
      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: "1fr 1fr 1fr",
          height: "inherit",
        }}
      >
        <StyledDoubleArrowIcon direction="right" sx={{ alignSelf: "center" }} />
        <ImageSliderContainer />
        <StyledDoubleArrowIcon direction="right" sx={{ alignSelf: "center" }} />
      </Box>

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
