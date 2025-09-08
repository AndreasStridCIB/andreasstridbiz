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
import Navbar from "../../globalComponents/NavBar";
import { NavBarItem } from "../CatInBox/utils/types";
// import CatInBoxLogoBlack from "assets/logos/CatInBox_Logo_Black.webp";

import StandupSketchesSection from "./components/standup/StandupSketchesSection";

import { HeroImageAnimation } from "./components/standup/HeroImageAnimation";

import Contact from "./components/standup/Contact";

// styled component extend div
const ComedyPageGrid = styled(Box)``;

// When creating your navBarItems
const navBarItems: NavBarItem[] = [
  {
    label: "Home",
    url: "navbar",
    yCoordinate: 0, // Scroll to top
  },
  {
    label: "Standup",
    url: "about",
    yCoordinate: 900, // Scroll to 800px from top
  },
  {
    label: "Sketches",
    url: "services",
    yCoordinate: 2100, // Scroll to 1600px from top
  },
  {
    label: "Contact",
    url: "contact", // No yCoordinate - will use element ID
    yCoordinate: 3200, // Scroll to 1600px from top
  },
];
// logo={AndreasStridComedyLogo}
const CatInBoxPage: React.FC = () => {
  return (
    <ComedyPageGrid>
      <Navbar navBarItems={navBarItems} />
      <HeroImageAnimation />
      <StandupSketchesSection />
      {/* <Shows /> */}
      <Contact />
    </ComedyPageGrid>
  );
};

export default CatInBoxPage;
