import React, { useMemo, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BLACK, ORANGE, WHITE } from "./modules/CatInBox/utils/constants";
import { LIGHT_BROWN, RED } from "./modules/Comedy/utils/constants";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      orange: string;
      darkBrown: string;
      lightBrown: string;
      white: string;
      black: string;
      hoverColor: string;
      red: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      orange?: string;
      darkBrown?: string;
      lightBrown?: string;
      white?: string;
      black?: string;
      hoverColor?: string;
      red?: string;
    };
  }
}

const catInBoxTheme = createTheme({
  palette: {
    primary: { main: BLACK },
    secondary: { main: WHITE },
    text: { primary: WHITE, secondary: BLACK },
    custom: {
      orange: ORANGE,
      darkBrown: BLACK,
      lightBrown: WHITE,
      white: WHITE,
      black: BLACK,
      red: RED,
      hoverColor: ORANGE,
    },
  },
  typography: {
    fontFamily: '"Sarpanch", serif',
  },
});

const comedyTheme = createTheme({
  palette: {
    primary: { main: RED },
    secondary: { main: WHITE },
    text: { primary: BLACK, secondary: RED },
    custom: {
      orange: RED,
      lightBrown: LIGHT_BROWN,
      white: WHITE,
      black: BLACK,
      red: RED,
      hoverColor: LIGHT_BROWN,
    },
  },
  typography: {
    fontFamily: '"Avenir Black", sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: "clamp(3rem, 6vw + 1rem, 10rem)", // Scales from 48px to 160px
    },
    h2: {
      fontWeight: 800,
      fontSize: "clamp(2rem, 6vw, 8rem)", // Scales from 32px to 128px
    },
    h3: {
      fontWeight: 700,
    },
    body1: {
      fontSize: "clamp(1rem, 2vw, 1.75rem)", // Scales from 16px to 28px
      fontWeight: 400,
      fontFamily: '"Avenir", "Helvetica Neue", Arial, sans-serif',
    },
  },
});

interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const location = useLocation();

  const theme = useMemo(() => {
    const isComedyPage = location.pathname.includes("/comedy");
    console.log(
      "Theme changed to:",
      isComedyPage ? "Comedy Theme" : "CatInBox Theme"
    );
    return isComedyPage ? comedyTheme : catInBoxTheme;
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
