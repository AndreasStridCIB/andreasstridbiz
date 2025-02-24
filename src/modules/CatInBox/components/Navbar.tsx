import React from "react";
import { AppBar } from "@mui/material";
import { NAVBAR_HEIGHT } from "../utils/constants";
import CatInBoxLogoBlack from "assets/logos/CatInBox_Logo_Black.webp";
import LazyLoadImage from "globalComponents/LazyLoadImage";

const Navbar: React.FC = () => {
  const navigateToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AppBar
      style={{ gridArea: "navbar", height: NAVBAR_HEIGHT }}
      position="sticky"
    >
      <LazyLoadImage
        src={CatInBoxLogoBlack}
        width={32}
        height={42}
        alt="Cat In Box Logo"
        onClick={navigateToTop}
      />
    </AppBar>
  );
};

export default Navbar;
