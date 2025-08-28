import {
  Box,
  createTheme,
  CssBaseline,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import "../../fonts.css";
import { BLACK, LIGHT_BROWN, RED, WHITE } from "./utils/constants";
import Navbar from "../../globalComponents/NavBar";
import { NavBarItem } from "../CatInBox/utils/types";
// import CatInBoxLogoBlack from "assets/logos/CatInBox_Logo_Black.webp";
import AndreasStridComedyLogo from "@/assets/logos/AndreasStridComedyLogo.png";
import StandupSection from "./components/standup/StandupSection";
import VideoBackground from "../../globalComponents/VideoBackground";
import PhotoSlider from "../../globalComponents/imageSlider/PhotoSlider";

// styled component extend div
const ComedyPageGrid = styled(Box)`
  display: grid;
  background-color: ${WHITE};

  grid-template-areas:
    "navbar"
    "standup"
    "designTitle"
    "design"
    "mediaTitle"
    "media";
  height: 100%;
  width: 100%;
`;

const navBarItems: NavBarItem[] = [
  { label: "Standup", url: "1" },
  { label: "Sketches", url: "2" },
  { label: "Satire News", url: "3" },
  { label: "Standup", url: "4" },
];

const CatInBoxPage: React.FC = () => {
  return (
    <ComedyPageGrid>
      <Navbar logo={AndreasStridComedyLogo} navBarItems={navBarItems} />
      {/* <VideoBackground youtubeId="0yyNrQ3FjY4" /> */}

      <StandupSection />
    </ComedyPageGrid>
  );
};

export default CatInBoxPage;
