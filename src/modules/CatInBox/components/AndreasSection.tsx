import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { BLACK, SEMI_BOLD } from "../utils/constants";
import ProfileImg from "@/assets/photo/Profile.webp";
import LazyImageWrap from "../../../globalComponents/lazyImage/LazyImage";

const SectionDiv = styled(Box)(({ theme }) => ({
  display: "grid",
  gridArea: "andreas",
  marginTop: theme.spacing(8),
  gridTemplateColumns: "repeat(2, 1fr)",
  backgroundColor: BLACK,
  gridGap: theme.spacing(2),
  overflow: "hidden",
  height: 1000,
  "& > *": {
    margin: theme.spacing(4), // Apply margin to all direct children
  },
}));

const ImageContainer = styled(Box)({
  width: "min(50vw, 100%)",
  maxHeight: "900px",
  maxWidth: "900px",

  overflow: "hidden",
});

const ProfileImage = styled("img")({
  transition: "transform 0.3s ease-in-out",
  width: "inherit",
  objectFit: "contain",
  //objectPosition: "-50px -100px",
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
