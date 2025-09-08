import React, { useContext } from "react";
import { Box, Typography, useTheme, styled } from "@mui/material";
import { LIGHT_BROWN, RED } from "../../utils/constants";
import TitleAnimation from "../../../../globalComponents/TitleAnimation";
import SocialMediaTab from "./SocialMediaTab";
import AndreasStridComedyLogo from "@/assets/logos/AndreasStridComedyLogo.png";
import LazyImageWrap from "../../../../globalComponents/lazyImage/LazyImage";
import { FILLER_HEIGHT } from "../../../CatInBox/utils/constants";
import { GlobalContext } from "../../../../GlobalContext";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.body1,
  color: LIGHT_BROWN,
  paddingLeft: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(2),
  },
}));

const ContactGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridArea: "contact",
  gridTemplateRows: "auto auto auto",
  backgroundColor: LIGHT_BROWN,
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
        backgroundColor={LIGHT_BROWN}
        triggerY={2000}
      />

      <Box
        sx={{
          padding: theme.spacing(4),
          backgroundColor: RED,
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: theme.spacing(2),
          justifyContent: "start",
          alignContent: "start",
          [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "1fr",
            padding: theme.spacing(2),
          },
        }}
      >
        {!isMobile && (
          <LazyImageWrap
            imageComp={
              <img
                src={AndreasStridComedyLogo}
                width={"100%"}
                height={"auto"}
                alt="Temp"
                style={{
                  border: `8px solid ${LIGHT_BROWN}`,
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
          <StyledTypography sx={{ fontWeight: "bold" }}>
            Let's Connect!
          </StyledTypography>
          <StyledTypography>
            Want to book me for an standup event/show?
          </StyledTypography>
          <StyledTypography>
            Want to hire me to create a sketch for a commercial?
          </StyledTypography>
          <StyledTypography>Send an email :)!</StyledTypography>

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
                  border: `8px solid ${LIGHT_BROWN}`,
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
      </Box>
    </ContactGrid>
  );
};

export default Contact;
