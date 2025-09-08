import React, { useContext } from "react";
import {
  Box,
  Grid,
  hexToRgb,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProfileImg from "@/assets/photo/Profile.webp";
import { LIGHT_BROWN, RED, WHITE } from "../../utils/constants";
import LazyImageWrap from "../../../../globalComponents/lazyImage/LazyImageWrap";
import PhotoSlider from "../../../../globalComponents/imageSlider/PhotoSlider";
import TitleAnimation from "../../../../globalComponents/TitleAnimation";

import BulletPoint from "./BulletPoint";
import { MenuItemWrap } from "../../../../style/MenuItemWrap";
import TeaserComp from "./TeaserComp";

import MicIcon from "@mui/icons-material/Mic";
import TheatersIcon from "@mui/icons-material/Theaters";

import SocialMediaTab from "./SocialMediaTab";

import { GlobalContext } from "../../../../GlobalContext";

const standupPoints = [
  "Performing Internationaly 🌍",
  "Standup both in English and Swedish 🇸🇪🇬🇧",
  "Accents & Impressions 🎭",
  "Dark edgy humor 😈",
  "Silly goofy humor 🤡",
];

const sketchesPoints = [
  "Sketches With Green Screen 🟩",
  "Sketches With Multiple Characters 🎭",
  "Sketches About Cultures Around The Globe 🌍",
  "Dark edgy humor 😈",
  "Silly goofy humor 🤡",
];

const InfoBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 8, 4, 8),
  display: "grid",
  justifyContent: "center",
  backgroundColor: WHITE,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2, 4),
  },
}));

const StandupSectionDiv = styled(Box)(({ theme }) => ({
  display: "grid",
  // padding: theme.spacing(SMALL_PAD), MAYBE
  gridTemplateRows: "repeat(3, fit-content(100%))",
  backgroundColor: RED,
  height: "100%",

  zIndex: 2,
}));

const ContentGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  justifySelf: "center",
  gridTemplateRows: "repeat(3, fit-content(100%))",
  width: "100%",

  marginTop: "55%",
  backgroundColor: RED,
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

const ContentChild = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

const StandupSketchesSection: React.FC = () => {
  const theme = useTheme();
  const { isMobile } = useContext(GlobalContext);

  return (
    <StandupSectionDiv id="standupSection">
      <ContentGrid id="contentGrid">
        <SocialMediaTab />

        <ContentChild id="middle">
          <Box id="left" sx={{ backgroundColor: WHITE }}>
            <TitleAnimation title="STANDUP" triggerY={isMobile ? 25 : 300} />
            <InfoBox id="standupTextMe">
              <Typography
                sx={{
                  fontSize: theme.body1,
                  paddingBottom: theme.spacing(4),
                }}
              >
                Andreas is a Swedish comedian that does standup and sketches in
                English. He travelled all over the world and made friends with
                people with different culture and realise comedy is not tied to
                one country it is a human trait in all of us. He jokes about
                gender, culture, countries, religion, daily situations and
                sometimes he accept his inner spirit animal the silly silly
                goose and let it out on stage 🪿🤡! *
              </Typography>
              {standupPoints.map((point, index) => (
                <BulletPoint key={index} text={point} Icon={MicIcon} />
              ))}
            </InfoBox>
          </Box>
          <Box id="right">
            <TeaserComp label="TEASER" videoUrl="Pm4MTbKIAus" />
          </Box>
        </ContentChild>

        <ContentChild id="bottom" sx={{ backgroundColor: RED }}>
          {!isMobile && (
            <Box id="left">
              <TeaserComp label="TEASER" videoUrl="5bYxH1fXgkY" />
            </Box>
          )}
          <Box id="right" sx={{ backgroundColor: WHITE }}>
            <TitleAnimation title="SKETCHES" triggerY={1300} />
            <InfoBox id="standupTextMe">
              <Typography
                sx={{
                  fontSize: theme.body1,
                  paddingBottom: theme.spacing(4),
                }}
              >
                As a Comedian Andreas also act! "Try to act..." in sketches. He
                write, direct and edit himself. He loves to experiment with
                different styles and genres such as short 10 second reaction
                sketches. 2 minutes sketches with green screen and special
                effects.
              </Typography>
              {sketchesPoints.map((point, index) => (
                <BulletPoint key={index} text={point} Icon={TheatersIcon} />
              ))}
            </InfoBox>
            {isMobile && (
              <Box id="left">
                <TeaserComp label="TEASER" videoUrl="5bYxH1fXgkY" />
              </Box>
            )}
          </Box>
        </ContentChild>

        {/* // STOCKHOLM TIMES */}
      </ContentGrid>
    </StandupSectionDiv>
  );
};

export default StandupSketchesSection;
