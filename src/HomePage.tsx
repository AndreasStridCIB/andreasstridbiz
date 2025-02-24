import React, { lazy, Suspense, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CatInBoxLogoBlack from "./assets/logos/CatInBox_Logo_Black.webp";
import LazyImageWrap from "globalComponents/LazyImageWrap";
import { GlobalContext } from "./GlobalContext";

const HomePage: React.FC = () => {
  const { navigateToUrl } = useContext(GlobalContext);

  return (
    <div style={{ backgroundColor: "lightblue", height: "100vh" }}>
      <h1>Home Page</h1>

      <LazyImageWrap
        imageComp={
          <img
            src={CatInBoxLogoBlack}
            width={128}
            height={168}
            onClick={() => navigateToUrl("catinbox")}
            alt="Temp"
          />
        }
      />
    </div>
  );
};

export default HomePage;
