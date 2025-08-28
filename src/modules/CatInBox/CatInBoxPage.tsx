import {
  Box,
  createTheme,
  CssBaseline,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import { BLACK, DARK_BROWN, ORANGE, WHITE } from "./utils/constants";
import "../../fonts.css"; // Importing global fonts
import AndreasSection from "./components/AndreasSection";
import DesignSection from "./components/design/DesignSection";
import MediaSection from "./components/media/MediaSection";
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
      <Navbar navBarItems={[]} logo={""} />
      <AndreasSection />
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
      <Typography
        sx={{
          gridArea: "mediaTitle",
          height: 200,
          alignContent: "end",
          marginLeft: 2,
        }}
        variant="h1"
      >
        Media
      </Typography>
      <MediaSection />
    </CatInBoxPageGrid>
  );
};

export default CatInBoxPage;
