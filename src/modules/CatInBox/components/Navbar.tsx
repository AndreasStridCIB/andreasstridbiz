import React, { useContext } from "react";
import { AppBar, styled, Typography, useTheme } from "@mui/material";
import { BOLD, NAVBAR_HEIGHT, SEMI_BOLD } from "../utils/constants";
import CatInBoxLogoBlack from "assets/logos/CatInBox_Logo_Black.webp";
import LazyImageWrap from "globalComponents/LazyImageWrap";
import "modules/CatInBox/fonts.css";
import { GlobalContext } from "../../../GlobalContext";
import NavBarItem from "./NavBarItem";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, fit-content(100%))",
  gridGap: theme.spacing(2),
  gridArea: "navbar",
  alignItems: "center",
  height: NAVBAR_HEIGHT,
  position: "sticky",
}));

const Navbar: React.FC = () => {
  const theme = useTheme();
  const { navigateInPage } = useContext(GlobalContext);

  return (
    <StyledAppBar>
      <LazyImageWrap
        imageComp={
          <img
            src={CatInBoxLogoBlack}
            width={64}
            height={84}
            onClick={() => navigateInPage("navbar")}
            style={{
              marginLeft: theme.spacing(2),
              marginRight: theme.spacing(2),
            }}
          />
        }
      />

      <NavBarItem label="Design" onClick={() => navigateInPage("design")} />
      <NavBarItem label="Code" onClick={() => navigateInPage("code")} />
      <NavBarItem label="Media" onClick={() => navigateInPage("media")} />
    </StyledAppBar>
  );
};

export default Navbar;
