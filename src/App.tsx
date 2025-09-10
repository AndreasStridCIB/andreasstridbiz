import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";
import ThemeWrapper from "./ThemeWrapper";
import { GlobalProvider } from "./GlobalContextProvider";

const HomePage = lazy(() => import("./HomePage"));
const CatInBoxPage = lazy(() => import("./modules/CatInBox/CatInBoxPage"));
const ComedyPage = lazy(() => import("./modules/Comedy/ComedyPage"));

// Component that logs screen size and uses useLocation to get current theme
function ThemedApp() {
  return (
    <ThemeWrapper>
      <GlobalProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading CatInBox</div>}>
                <HomePage />
              </Suspense>
            }
          />

          <Route
            path="/catinbox"
            element={
              <Suspense fallback={<div>Loading CatInBox</div>}>
                <CatInBoxPage />
              </Suspense>
            }
          />
          <Route
            path="/comedy"
            element={
              <Suspense fallback={<div>Loading Comedy</div>}>
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
