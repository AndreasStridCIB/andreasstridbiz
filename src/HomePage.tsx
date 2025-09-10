import React, { useContext, useState, useEffect, Suspense } from "react";
import CatInBoxLogoBlack from "@/assets/logos/CatInBox_Logo_Black.webp";
import ProfileImg from "@/assets/photo/Profile.webp";
import AndreasStridComedyLogo from "@/assets/logos/AndreasStridComedyLogo.png";
import { Box, Skeleton, Typography, styled } from "@mui/material";
import { RED, WHITE, LIGHT_BROWN } from "./modules/Comedy/utils/constants";
import { ORANGE, DARK_BROWN, BLACK } from "./modules/CatInBox/utils/constants";
import { GlobalContext } from "./utils/globalContextTemplate";

const DARK_BLUE = "#0a0a1a";
const MIDDLE_BLUE = "#1a1a3e";
const PURPLE = "#2d1b69";

const DURATION = 1.33; // seconds

enum WebSites {
  CatInBox = "programming",
  Comedy = "comedy",
  Coach = "coach",
  Profile = "profile",
}

interface DisplayTheme {
  website: WebSites;
  titleColor: string;
  menuColor: string;
}

const getTheme = (type: WebSites): DisplayTheme => {
  if (type === WebSites.CatInBox) {
    return {
      website: WebSites.CatInBox,
      titleColor: BLACK,
      menuColor: WHITE,
    };
  } else if (type === WebSites.Comedy) {
    return {
      website: WebSites.Comedy,
      titleColor: WHITE,
      menuColor: RED,
    };
  } else {
    return {
      website: WebSites.Profile,
      titleColor: WHITE,
      menuColor: WHITE,
    };
  }
};

const HomePageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: DARK_BLUE,
  height: "100vh",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  padding: "64px",
  position: "relative",
  background: `linear-gradient(135deg, ${DARK_BLUE} 0%, ${MIDDLE_BLUE} 50%, ${PURPLE} 100%)`,

  [theme.breakpoints.down("md")]: {
    padding: "16px",
    gridTemplateColumns: "fit-content(100%)",
    justifyContent: "center",
    justifyItems: "center",
  },
}));

const LeftSection = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateRows: "1fr 2fr",
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    padding: "16px",
    gridTemplateRows: "fit-content(100%)",
  },
}));

const RightSection = styled(Box)({
  display: "grid",
  gridTemplateRows: "1fr",
  justifyContent: "center",
  gap: "20px",
  height: "100%",
  zIndex: 2,
});

const MainTitle = styled(Typography)<{ titleColor: string }>(
  ({ titleColor }) => ({
    fontSize: "clamp(3rem, 8vw, 8rem)",
    fontWeight: 900,

    color: titleColor,
    lineHeight: 0.9,
    letterSpacing: "-0.02em",
    margin: 0,
    transition: `color ${DURATION}s ease-in-out`,
    zIndex: 2,
  })
);

const NavigationList = styled(Box)({
  display: "grid",
  height: "100%",
  gridTemplateRows: "repeat(3, auto)",
  gap: "24px",
  alignContent: "end",
  alignItems: "end",
  alignSelf: "end",
  zIndex: 2,
});

const NavigationItem = styled(Box)<{
  titleColor: string;
}>(({ titleColor }) => ({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  alignItems: "baseline",
  cursor: "pointer",
  transition: "all 0.3s ease",
  borderBottom: `1px solid ${titleColor}`,
  paddingBottom: "8px",

  "&:hover": {
    transform: "translateX(10px)",

    "& .title": {
      color: titleColor,
    },
  },
  zIndex: 2,
}));

const NavigationTitle = styled(Typography)<{ titleColor: string }>(
  ({ titleColor }) => ({
    fontSize: "clamp(2rem, 4vw, 4rem)",
    fontWeight: 400,
    color: titleColor,
    lineHeight: 1,
    transition: `color ${DURATION}s ease-in-out`,
    fontFamily: "Addington CF Regular",
    zIndex: 2,
  })
);

const NavigationNumber = styled(Typography)<{ titleColor: string }>(
  ({ titleColor }) => ({
    fontSize: "clamp(1rem, 2vw, 1.5rem)",
    fontWeight: 300,
    color: titleColor,
    fontFamily: "monospace",
    transition: `color ${DURATION}s ease-in-out`,
  })
);

const ImageContainer = styled(Box)<{ isVisible?: boolean }>(
  ({ theme, isVisible = true }) => ({
    position: "absolute", // Make all images stack
    top: 0,
    paddingLeft: "64px",
    [theme.breakpoints.down("md")]: {
      padding: "16px 0px",
    },
    "& img": {
      borderRadius: "12px",
      width: "clamp(256px, 25vw, 532px)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      opacity: isVisible ? 1 : 0,
      transition: `all ${DURATION}s ease-in-out`,
      zIndex: 2,
    },
  })
);

const ComedyOverlay = styled(Box)<{ show: boolean }>(({ show }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(135deg, ${RED} 0%, ${LIGHT_BROWN} 50%, ${WHITE} 100%)`,
  opacity: show ? 1 : 0,
  transition: `opacity ${DURATION}s ease-in-out`,
  zIndex: 0,
  pointerEvents: "none",
}));

const CatInBoxOverlay = styled(Box)<{ show: boolean }>(({ show }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `radial-gradient(circle at top left, ${ORANGE}, ${DARK_BROWN}, ${BLACK})`,
  opacity: show ? 1 : 0,
  transition: `opacity ${DURATION}s ease-in-out`,
  zIndex: 0,
  pointerEvents: "none",
}));

const ImageStack = styled(Box)(() => ({
  position: "relative",
  width: "clamp(128px, 25vw, 532px)",
  height: "clamp(128px, 25vw, 532px)",
}));

const HomePage: React.FC = () => {
  const { navigateToUrl, isMobile } = useContext(GlobalContext);

  const [displayTheme, setDisplayTheme] = useState<DisplayTheme>({
    website: WebSites.Profile,
    titleColor: WHITE,
    menuColor: WHITE,
  });

  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

  // Before changing theme, set imageVisible to false
  const handleChangeTheme = (type: WebSites) => {
    // Clear any pending leave timeout when entering a new item
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }

    setTimeout(() => {
      setDisplayTheme(getTheme(type));
    }, 333);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    // Clear any existing timeout
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
    }

    const timeoutId = setTimeout(() => {
      handleChangeTheme(WebSites.Profile);
      setLeaveTimeout(null);
    }, 333);

    setLeaveTimeout(timeoutId);
  };

  // Clean up timeout on component unmount
  useEffect(() => {
    return () => {
      if (leaveTimeout) {
        clearTimeout(leaveTimeout);
      }
    };
  }, [leaveTimeout]);

  const renderImages = () => {
    return (
      <Suspense
        fallback={
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
            sx={{ borderRadius: "12px" }}
          />
        }
      >
        <ImageStack id="imageStack">
          <ImageContainer isVisible={displayTheme.website === WebSites.Profile}>
            <img src={ProfileImg} alt={"Profile"} loading="lazy" />
          </ImageContainer>
          <ImageContainer
            isVisible={displayTheme.website === WebSites.CatInBox}
          >
            <img src={CatInBoxLogoBlack} alt={"CatInBox"} loading="lazy" />
          </ImageContainer>
          <ImageContainer isVisible={displayTheme.website === WebSites.Comedy}>
            <img
              src={AndreasStridComedyLogo}
              alt={"Andreas Strid Comedy"}
              loading="lazy"
            />
          </ImageContainer>
        </ImageStack>
      </Suspense>
    );
  };

  return (
    <HomePageContainer>
      <ComedyOverlay show={displayTheme.website === WebSites.Comedy} />
      <CatInBoxOverlay show={displayTheme.website === WebSites.CatInBox} />
      <LeftSection>
        <MainTitle titleColor={displayTheme.titleColor}>
          Andreas
          <br />
          Strid
        </MainTitle>

        {isMobile && renderImages()}

        <NavigationList>
          <NavigationItem
            titleColor={displayTheme.menuColor}
            onClick={() => navigateToUrl("catinbox")}
            onMouseEnter={() => handleChangeTheme(WebSites.CatInBox)}
            onMouseLeave={handleMouseLeave} // Use new handler
          >
            <NavigationTitle
              className="title"
              titleColor={displayTheme.menuColor}
            >
              Programming & Design
            </NavigationTitle>
            <NavigationNumber titleColor={displayTheme.menuColor}>
              01
            </NavigationNumber>
          </NavigationItem>

          <NavigationItem
            titleColor={displayTheme.menuColor}
            onClick={() => navigateToUrl("comedy")}
            onMouseEnter={() => handleChangeTheme(WebSites.Comedy)}
            onMouseLeave={handleMouseLeave} // Use new handler
          >
            <NavigationTitle
              className="title"
              titleColor={displayTheme.menuColor}
            >
              Comedy
            </NavigationTitle>
            <NavigationNumber titleColor={displayTheme.menuColor}>
              02
            </NavigationNumber>
          </NavigationItem>
        </NavigationList>
      </LeftSection>
      {!isMobile && <RightSection>{renderImages()} </RightSection>}
    </HomePageContainer>
  );
};

export default HomePage;
