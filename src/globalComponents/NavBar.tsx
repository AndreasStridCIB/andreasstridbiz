import React, { useContext, useState } from "react";
import {
  AppBar,
  IconButton,
  styled,
  Typography,
  useTheme,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NAVBAR_HEIGHT } from "./constants";
import { NavBarItem } from "../modules/CatInBox/utils/types";
import AnimationWrapper, { StyledMenuItem } from "./style/AnimationWrapper";
import { navigateInPage } from "../utils/globalFunctions";
import { GlobalContext } from "../utils/globalContextTemplate";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr auto", // Changed to accommodate hamburger
  gridGap: theme.spacing(2),
  gridArea: "navbar",
  alignItems: "center",
  justifyItems: "start",
  height: NAVBAR_HEIGHT,
  position: "sticky",
  width: "inherit",
  zIndex: 3,
  padding: `0 ${theme.spacing(2)}`,
  [theme.breakpoints.down("md")]: {
    height: NAVBAR_HEIGHT / 2,
    padding: `0 ${theme.spacing(0)}`,
  },
}));

const DesktopMenu = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, fit-content(100%))",
  gridGap: theme.spacing(8),
  justifySelf: "end",
  [theme.breakpoints.down("md")]: {
    display: "none", // Hide on mobile
    gridGap: theme.spacing(4),
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  justifySelf: "end",
  color: theme.palette.custom.white,
  [theme.breakpoints.down("md")]: {
    display: "flex", // Show on mobile
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 280,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.custom.white,
    padding: theme.spacing(2),
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

interface NavbarProps {
  navBarItems: NavBarItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navBarItems }) => {
  const theme = useTheme();
  const { navigateToUrl } = useContext(GlobalContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if we're on mobile
  const handleNavigation = (item: NavBarItem) => {
    if (item.yCoordinate !== undefined) {
      // Navigate to specific Y coordinate
      navigateInPage(item.url, item.yCoordinate);
    } else {
      // Original behavior - navigate to element ID
      navigateInPage(item.url);
    }
    setMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // const handleMobileMenuItemClick = (url: string) => {
  //   navigateInPage(url);
  //   setMobileMenuOpen(false); // Close menu after navigation
  // };

  const menueItems = () => {
    return (
      <>
        {navBarItems.map((item) => (
          <StyledMenuItem
            key={item.label}
            onClick={() => handleNavigation(item)}
            disabled={false}
          >
            <Typography variant="h5">{item.label}</Typography>
          </StyledMenuItem>
        ))}
      </>
    );
  };

  return (
    <>
      <StyledAppBar id="navbar">
        <AnimationWrapper onClick={() => navigateToUrl("/")}>
          <ArrowBackIcon
            sx={{
              height: "32px",
              width: "32px",
              marginRight: "8px",
              [theme.breakpoints.down("md")]: {
                height: "20px",
                width: "20px",
                marginLeft: "8px",
              },
            }}
          />

          <Typography
            variant="h5"
            sx={{
              // Responsive font size for mobile
              justifySelf: "start",

              [theme.breakpoints.down("md")]: {
                fontSize: "1rem",
              },
            }}
          >
            AndreasStrid.com
          </Typography>
        </AnimationWrapper>

        {/* Desktop Menu */}
        <DesktopMenu>{menueItems()}</DesktopMenu>

        {/* Mobile Hamburger Menu Button */}
        <MobileMenuButton onClick={handleMobileMenuToggle}>
          <MenuIcon />
        </MobileMenuButton>
      </StyledAppBar>

      {/* Mobile Drawer Menu */}
      <StyledDrawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
      >
        <DrawerHeader>
          <Typography variant="h6"></Typography>
          <IconButton
            onClick={handleMobileMenuToggle}
            sx={{ color: theme.palette.custom.white }}
          >
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        {menueItems()}
      </StyledDrawer>
    </>
  );
};

export default Navbar;
