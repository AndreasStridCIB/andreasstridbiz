import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { BLACK, SEMI_BOLD } from "../utils/constants";
import LazyImageWrap from "../../../globalComponents/LazyImage";
import ProfileImg from "assets/photo/Profile.webp";

const SectionDiv = styled(Box)(({ theme }) => ({
  display: "grid",
  gridArea: "andreas",
  marginTop: theme.spacing(8),
  gridTemplateColumns: "repeat(2, 1fr)",
  backgroundColor: BLACK,
  gridGap: theme.spacing(2),
  height: 1000,
  "& > *": {
    margin: theme.spacing(4), // Apply margin to all direct children
  },
}));

const ImageContainer = styled(Box)({
  height: 900,
  width: 800,
  alignSelf: "center",
  overflow: "hidden",
});

const ProfileImage = styled("img")({
  transition: "transform 0.3s ease-in-out",
  width: "1050px",
  objectFit: "contain",
  objectPosition: "-150px -100px",
  //   "&:hover": {
  //     transform: "scale(1.2)", // Adjust the scale value as needed
  //   },
});

const AndreasSection: React.FC = () => {
  return (
    <SectionDiv id="andreas">
      <ImageContainer>
        <LazyImageWrap imageComp={<ProfileImage src={ProfileImg} />} />
      </ImageContainer>
      <Box>
        <Typography sx={{ fontWeight: SEMI_BOLD }} variant="h2">
          {" "}
          Andreas Strid
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </Typography>
      </Box>
    </SectionDiv>
  );
};

export default AndreasSection;
