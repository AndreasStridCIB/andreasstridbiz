import React, { useContext } from "react";
import { AppBar, styled, Typography, useTheme } from "@mui/material";
import { NAVBAR_HEIGHT } from "./constants";
import { GlobalContext } from "../GlobalContext";
import LazyImageWrap from "./lazyImage/LazyImageWrap";
import { MenuItemWrap } from "../style/MenuItemWrap";
import { NavBarItem } from "../modules/CatInBox/utils/types";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: theme.spacing(2),
  gridArea: "navbar",
  alignItems: "center",
  justifyItems: "start",
  height: NAVBAR_HEIGHT,
  position: "sticky",
  width: "inherit",
  zIndex: 3,
}));

interface NavbarProps {
  navBarItems: NavBarItem[];
  logo: string;
}

const Navbar: React.FC<NavbarProps> = ({ navBarItems, logo }) => {
  const theme = useTheme();
  const { navigateInPage } = useContext(GlobalContext);

  return (
    <StyledAppBar id="navbar">
      <LazyImageWrap
        imageComp={
          <img
            src={logo}
            width={64}
            height={64}
            onClick={() => navigateInPage("navbar")}
            style={{
              marginLeft: theme.spacing(2),
              marginRight: theme.spacing(2),
            }}
          />
        }
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, fit-content(100%))",
          justifyItems: "end",
          justifyContent: "end",
        }}
      >
        {navBarItems.map((item) => (
          <MenuItemWrap
            key={item.label}
            onClick={() => navigateInPage(item.url)}
            isActive={item.isActive ?? false}
          >
            <Typography variant="h6">{item.label}</Typography>
          </MenuItemWrap>
        ))}
      </div>
    </StyledAppBar>
  );
};

export default Navbar;
