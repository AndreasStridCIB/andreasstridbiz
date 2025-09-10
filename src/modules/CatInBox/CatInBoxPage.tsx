import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { DARK_BROWN } from "./utils/constants";
import "../../fonts.css"; // Importing global fonts
import AndreasSection from "./components/AndreasSection";
import MediaSection from "./components/media/MediaSection";
import EngineeringIcon from "@mui/icons-material/Engineering";
import Navbar from "../../globalComponents/NavBar";

// styled component extend div
const CatInBoxPageGrid = styled(Box)`
  display: grid;
  background-color: ${DARK_BROWN};
  grid-template-areas:
    "navbar"
    "andreas"
    "designTitle"
    "design"
    "mediaTitle"
    "media";
  height: 100%;
  width: 100%;
`;

const CatInBoxPage: React.FC = () => {
  return (
    <CatInBoxPageGrid>
      <Navbar navBarItems={[]} />
      <Box
        sx={{
          gridArea: "andreas",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <EngineeringIcon
          sx={{
            fontSize: 120,
            color: "white",
          }}
        />
        <Typography
          sx={{
            color: "white",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: 48,
            marginLeft: 2,
          }}
        >
          Under Construction
        </Typography>
      </Box>
      {/* <AndreasSection /> */}
      {/* <Typography
          sx={{
            gridArea: "designTitle",
            height: 200,
            alignContent: "end",
            marginLeft: 2,
          }}
          variant="h1"
        >
          Design
        </Typography>
        <DesignSection /> */}
      {/* <Typography
        sx={{
          gridArea: "mediaTitle",
          height: 200,
          alignContent: "end",
          marginLeft: 2,
        }}
        variant="h1"
      >
        Media
      </Typography> */}
      {/* <MediaSection /> */}
    </CatInBoxPageGrid>
  );
};

export default CatInBoxPage;
