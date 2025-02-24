import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import { lazy, Suspense } from "react";
import { GlobalProvider } from "./GlobalContext";

const CatInBoxPage = lazy(() => import("./modules/CatInBox/CatInBoxPage"));

function App() {
  return (
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
        </Routes>
      </GlobalProvider>
    </Router>
  );
}

export default App;
