import React, { useMemo, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BLACK, ORANGE, WHITE } from "./modules/CatInBox/utils/constants";
import { LIGHT_BROWN, RED } from "./modules/Comedy/utils/constants";

declare module "@mui/material/styles" {
  interface Theme {
    h1: string; // Single responsive value
    h2: string;
    body1: string;
  }

  interface ThemeOptions {
    h1?: string;
    h2?: string;
    body1?: string;
  }

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
      hoverColor: ORANGE,
    },
  },
  typography: { fontFamily: '"Sarpanch", serif' },
  h1: "clamp(3rem, 6vw + 1rem, 10rem)", // Scales from 48px to 160px
  h2: "clamp(2rem, 4vw + 0.5rem, 8rem)", // Scales from 32px to 128px
  body1: "clamp(1rem, 2vw + 0.5rem, 1.75rem)", // Scales from 16px to 28px
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
    // Add font weight mappings
    h1: {
      fontWeight: 900, // Extra bold
    },
    h2: {
      fontWeight: 800, // Bold
    },
    h3: {
      fontWeight: 700,
    },
    body1: {
      fontWeight: 400, // Normal weight for body text
      fontFamily: '"Avenir", "Helvetica Neue", Arial, sans-serif', // Use regular Avenir
    },
  },
  h1: "clamp(3rem, 6vw + 1rem, 10rem)", // Scales from 48px to 160px
  h2: "clamp(2rem, 6vw , 8rem)", // Scales from 32px to 128px
  body1: "clamp(1rem, 2vw, 1.75rem)", // Scales from 16px to 28px
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
