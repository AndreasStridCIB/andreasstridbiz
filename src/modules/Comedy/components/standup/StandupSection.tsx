import React from "react";
import { Box, Grid, styled, Typography, useTheme } from "@mui/material";
import ProfileImg from "@/assets/photo/Profile.webp";
import { LIGHT_BROWN, WHITE } from "../../utils/constants";
import LazyImageWrap from "../../../../globalComponents/lazyImage/LazyImageWrap";
import PhotoSlider from "../../../../globalComponents/imageSlider/PhotoSlider";
import TitleAnimation from "../../../../globalComponents/TitleAnimation";
import GridSection from "../../../../globalComponents/GridSection";
import VideoBackground from "../../../../globalComponents/VideoBackground";
import { HeroImageAnimation } from "./HeroImageAnimation";
import tempMic from "@/assets/logos/tempMic.png";

// Import all images from the assets/photo directory ``
const photos = import.meta.glob("/src/assets/photo/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
});

const photosPath = Object.values(photos).map((photo: any) => photo.default);

const FixedBackgroundSection = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "black", // Light brown background
  // marginTop: theme.spacing(8),

  pointerEvents: "none", // Prevent interaction
  // background: "rgba(255,224,188,0.3)", // transparent overlay
}));

const StandupSectionDiv = styled(Box)(({ theme }) => ({
  display: "grid",
  gridArea: "standup",

  height: "100%",
  //marginTop: "80vh",
  gridTemplateRows: "repeat(3, auto)",
  // backgroundColor: "rgba(255,255,255,0.1)",
  // backgroundColor: "rgba(255,255,255,0.1)",
  backgroundColor: WHITE,
  //backgroundColor: LIGHT_BROWN,
  zIndex: 10,
  // gridGap: theme.spacing(2),
  // marginTop: "500px",
  // position: "relative",
  // zIndex: 1,

  // "& > *": {
  //   margin: `${theme.spacing(4)} 0`, // Apply margin to all direct children
  // },
}));

const StandupSection: React.FC = () => {
  const theme = useTheme();

  return (
    <div id="standup">
      {/* <FixedBackgroundSection>
        <TitleAnimation title="STANDUP" />
    
        <VideoBackground youtubeId="0x12LHQi4cg" />
      </FixedBackgroundSection> */}

      <StandupSectionDiv>
        <HeroImageAnimation />
        <GridSection
          direction={"columns"}
          nbrItems={2}
          sectionSize="fit-content(100%)"
        >
          <TitleAnimation title="STANDUP" />
          <LazyImageWrap
            imageComp={
              <img
                src={tempMic}
                alt="Microphone"
                style={{
                  width: "128px",
                  height: "128px",
                }}
              />
            }
          />
        </GridSection>
      </StandupSectionDiv>
    </div>
  );
};

export default StandupSection;
