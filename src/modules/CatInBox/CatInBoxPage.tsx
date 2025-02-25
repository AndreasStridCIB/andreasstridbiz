import { createTheme, CssBaseline, styled, ThemeProvider } from "@mui/material";
import React from "react";
import { BLACK, DARK_BROWN, ORANGE, WHITE } from "./utils/constants";
import "./fonts.css";
import Navbar from "./components/Navbar";
import AndreasSection from "./components/AndreasSection";
import DesignSection from "./components/DesignSection";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      orange: string;
      darkBrown: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      orange?: string;
      darkBrown?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: BLACK,
    },
    secondary: {
      main: WHITE,
    },
    text: {
      primary: WHITE,
      secondary: BLACK,
    },
    custom: {
      orange: ORANGE,
      darkBrown: DARK_BROWN,
    },
  },
  typography: {
    fontFamily: '"Sarpanch", serif',
  },
});

// styled component extend div
const CatInBoxPageGrid = styled("div")`
  display: grid;
  background-color: ${DARK_BROWN};
  grid-template-areas:
    "navbar"
    "andreas"
    "design";
  height: 100%;
  width: 100vw;
`;

const CatInBoxPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CatInBoxPageGrid>
        <Navbar />
        <AndreasSection />
        <DesignSection />
      </CatInBoxPageGrid>
    </ThemeProvider>
  );
};

export default CatInBoxPage;
