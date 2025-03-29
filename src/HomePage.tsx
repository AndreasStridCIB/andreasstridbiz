import React, { useContext } from "react";
import CatInBoxLogoBlack from "./assets/logos/CatInBox_Logo_Black.webp";
import { GlobalContext } from "./GlobalContext";
import { Box } from "@mui/material";
import LazyImageWrap from "./globalComponents/lazyImage/LazyImage";

// 100dvh instead of vh

const HomePage: React.FC = () => {
  const { navigateToUrl } = useContext(GlobalContext);

  return (
    <Box
      style={{
        backgroundColor: "lightblue",
        height: "100vh",
      }}
    >
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
    </Box>
  );
};

export default HomePage;
