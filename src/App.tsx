import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import { lazy, Suspense } from "react";
import { GlobalProvider } from "./GlobalContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BLACK, ORANGE, WHITE } from "./modules/CatInBox/utils/constants";
import { CssBaseline } from "@mui/material";
import { LIGHT_BROWN, RED } from "./modules/Comedy/utils/constants";

// Extend the custom palette to include all custom colors you use
declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      orange: string;
      darkBrown: string;
      lightBrown: string;
      hoverColor: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      orange?: string;
      darkBrown?: string;
      lightBrown?: string;
      hoverColor?: string;
    };
  }
}

export const catInBoxTheme = createTheme({
  palette: {
    primary: { main: BLACK },
    secondary: { main: WHITE },
    text: { primary: WHITE, secondary: BLACK },
    custom: { orange: ORANGE },
  },
  typography: { fontFamily: '"Sarpanch", serif' },
});

export const comedyTheme = createTheme({
  palette: {
    primary: { main: RED },
    secondary: { main: WHITE },
    text: { primary: BLACK, secondary: RED },
    custom: {
      lightBrown: LIGHT_BROWN,
      darkBrown: LIGHT_BROWN,
      hoverColor: LIGHT_BROWN,
    },
  },
  typography: { fontFamily: '"Roboto", serif' },
});

const CatInBoxPage = lazy(() => import("./modules/CatInBox/CatInBoxPage"));
const ComedyPage = lazy(() => import("./modules/Comedy/ComedyPage"));

// if url is /catinbox, use CatInBoxPage, if /comedy, use ComedyPage
const theme = window.location.pathname.includes("/comedy")
  ? comedyTheme
  : catInBoxTheme;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/catinbox"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <CatInBoxPage />
                </Suspense>
              }
            />
            <Route
              path="/comedy"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ComedyPage />
                </Suspense>
              }
            />
          </Routes>
        </GlobalProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
