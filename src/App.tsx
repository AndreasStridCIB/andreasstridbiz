import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import { lazy, Suspense, useEffect } from "react";
import { GlobalProvider } from "./GlobalContext";
import ThemeWrapper from "./ThemeWrapper";
import { useTheme, useMediaQuery } from "@mui/material";

const CatInBoxPage = lazy(() => import("./modules/CatInBox/CatInBoxPage"));
const ComedyPage = lazy(() => import("./modules/Comedy/ComedyPage"));

// Component that logs screen size and uses useLocation to get current theme
function ThemedApp() {
  const theme = useTheme();

  // Media queries for each breakpoint
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  // Determine current breakpoint
  const getCurrentBreakpoint = () => {
    if (isXl) return "xl";
    if (isLg) return "lg";
    if (isMd) return "md";
    if (isSm) return "sm";
    return "xs";
  };

  const currentBreakpoint = getCurrentBreakpoint();

  useEffect(() => {
    console.log(`Current screen size: ${currentBreakpoint}`);
    console.log(
      `Window dimensions: ${window.innerWidth}x${window.innerHeight}`
    );
  }, [currentBreakpoint]);

  return (
    <ThemeWrapper>
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
    </ThemeWrapper>
  );
}

function App() {
  return (
    <Router>
      <ThemedApp />
    </Router>
  );
}

export default App;
