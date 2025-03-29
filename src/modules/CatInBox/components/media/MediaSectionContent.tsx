import React from "react";
import { styled } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { ORANGE } from "../../utils/constants";
import { MediaSectionPages } from "../../utils/types";

import { GridContainer } from "../../../../style/GridContainer";
import { getRotation } from "../../../../utils/functions";
import ImageSlider from "../../../../globalComponents/imageSlider/ImageSlider";

// Import all images from the assets/photo directory ``
const photos = import.meta.glob("/src/assets/photo/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
});

const photosPath = Object.values(photos).map((photo: any) => photo.default);

// Remove?
const StyledDoubleArrowIcon = styled(DoubleArrowIcon)<{ direction: string }>(
  ({ direction }) => ({
    color: ORANGE,
    width: `min(96px, calc(50vw - 100px))`,
    height: `min(96px, calc(50vw - 100px))`,

    position: "relative",
    transform: getRotation(direction),
  })
);

interface DesignSectionContentProps {
  activeSection: MediaSectionPages;
}

const MediaSectionContent: React.FC<DesignSectionContentProps> = ({
  activeSection,
}) => {
  return (
    <>
      {activeSection === MediaSectionPages.PHOTOS && (
        <GridContainer direction="row" rows={3} spaceType="1fr">
          <StyledDoubleArrowIcon
            direction="right"
            sx={{ alignSelf: "center" }}
          />
          <ImageSlider images={photosPath} />
          <StyledDoubleArrowIcon
            direction="right"
            sx={{ alignSelf: "center" }}
          />
        </GridContainer>
      )}
      {activeSection === MediaSectionPages.THUMBNAILS && (
        <GridContainer direction="row" rows={1} spaceType="1fr">
          <ImageSlider images={photosPath} />
        </GridContainer>
      )}
    </>
  );
};

export default MediaSectionContent;
