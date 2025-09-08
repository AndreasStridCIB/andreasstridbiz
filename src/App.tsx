import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import { lazy, Suspense } from "react";
import { GlobalProvider } from "./GlobalContext";
import ThemeWrapper from "./ThemeWrapper";

const CatInBoxPage = lazy(() => import("./modules/CatInBox/CatInBoxPage"));
const ComedyPage = lazy(() => import("./modules/Comedy/ComedyPage"));

// Component that logs screen size and uses useLocation to get current theme
function ThemedApp() {
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
