import React, { useContext } from "react";
import { Box, Typography, useTheme, styled } from "@mui/material";
import TitleAnimation from "../../../../globalComponents/TitleAnimation";
import SocialMediaTab from "./SocialMediaTab";
import AndreasStridComedyLogo from "@/assets/logos/AndreasStridComedyLogo.png";
import LazyImageWrap from "../../../../globalComponents/lazyImage/LazyImage";
import { GlobalContext } from "../../../../utils/globalContextTemplate";

const ContactContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.custom.red,
  display: "grid",
  gridTemplateColumns: "auto auto",
  gap: theme.spacing(2),
  justifyContent: "start",
  alignContent: "start",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    padding: theme.spacing(2),
  },
}));

const StyledLogoImage = styled(LazyImageWrap)(({ theme }) => ({
  "& img": {
    border: `8px solid ${theme.palette.custom.lightBrown}`,
    borderRadius: "16px",
    objectFit: "contain",
    maxWidth: "500px",
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      width: "64px",
      height: "64px",
    },
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.lightBrown,
  paddingLeft: theme.spacing(4),

  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(2),
  },
}));

const ContactGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridArea: "contact",
  gridTemplateRows: "auto auto auto",
  backgroundColor: theme.palette.custom.lightBrown,
  height: "100%",
  overflowX: "hidden",
  zIndex: 2,
  position: "relative",
}));

const Contact: React.FC = () => {
  const theme = useTheme();
  const { isMobile } = useContext(GlobalContext);

  return (
    <ContactGrid>
      <TitleAnimation
        title="CONTACT"
        backgroundColor={theme.palette.custom.lightBrown}
        triggerY={2000}
      />

      <ContactContent>
        {!isMobile && (
          <StyledLogoImage
            imageComp={
              <img
                src={AndreasStridComedyLogo}
                alt="Temp"
                style={{
                  border: `8px solid ${theme.palette.custom.lightBrown}`,
                  borderRadius: "16px",
                  objectFit: "contain",
                  maxWidth: "500px",
                  [theme.breakpoints.down("md")]: {
                    width: "64px",
                    height: "64px",
                  },
                }}
              />
            }
          />
        )}
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "repeat(4, fit-content(100%))",
          }}
        >
          <StyledTypography variant="body1" sx={{ fontWeight: "bold" }}>
            Let's Connect!
          </StyledTypography>
          <StyledTypography variant="body1">
            Want to book me for an standup event/show?
          </StyledTypography>
          <StyledTypography variant="body1">
            Want to hire me to create a sketch for a commercial?
          </StyledTypography>
          <StyledTypography variant="body1">Send an email :)!</StyledTypography>

          {/* This will render as vertical layout with text */}
          <SocialMediaTab isContactPage={true} />
        </Box>
        {isMobile && (
          <LazyImageWrap
            imageComp={
              <img
                src={AndreasStridComedyLogo}
                width={"100%"}
                height={"auto"}
                alt="Temp"
                style={{
                  border: `8px solid ${theme.palette.custom.lightBrown}`,
                  borderRadius: "16px",
                  objectFit: "contain",
                  maxWidth: "400px",
                  [theme.breakpoints.down("md")]: {
                    width: "64px",
                    height: "64px",
                  },
                }}
              />
            }
          />
        )}
      </ContactContent>
    </ContactGrid>
  );
};

export default Contact;
