import React, { useContext } from "react";
import { AppBar, styled, Typography, useTheme } from "@mui/material";
import { BOLD, NAVBAR_HEIGHT, SEMI_BOLD } from "../utils/constants";
import CatInBoxLogoBlack from "assets/logos/CatInBox_Logo_Black.webp";
import "modules/CatInBox/fonts.css";
import { GlobalContext } from "../../../GlobalContext";
import { MenuItemWrap } from "../../../style/MenuItemWrap";
import LazyImageWrap from "../../../globalComponents/lazyImage/LazyImage";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, fit-content(100%))",
  gridGap: theme.spacing(2),
  gridArea: "navbar",
  alignItems: "center",
  height: NAVBAR_HEIGHT,
  position: "sticky",
  width: "inherit",
}));

const Navbar: React.FC = () => {
  const theme = useTheme();
  const { navigateInPage } = useContext(GlobalContext);

  return (
    <StyledAppBar id="navbar">
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
      <MenuItemWrap onClick={() => navigateInPage("navbar")} isActive={false}>
        <Typography variant="h6">Design</Typography>
      </MenuItemWrap>
      <MenuItemWrap onClick={() => navigateInPage("navbar")} isActive={false}>
        <Typography variant="h6">Code</Typography>
      </MenuItemWrap>
      <MenuItemWrap onClick={() => navigateInPage("navbar")} isActive={false}>
        <Typography variant="h6">Media</Typography>
      </MenuItemWrap>
    </StyledAppBar>
  );
};

export default Navbar;
