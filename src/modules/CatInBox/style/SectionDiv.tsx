import { Box, styled } from "@mui/material";
import { BLACK, SECTION_OPEN_HEIGHT } from "../utils/constants";

export const SectionDiv = styled(Box)(({ theme }) => ({
  display: "grid",
  gridArea: "media",
  margin: `${theme.spacing(2)} ${theme.spacing(0)}`, // Top-Bottom and Left-Right margins
  gridTemplateColumns: "1fr fit-content(100%)",
  backgroundColor: BLACK,

  height: SECTION_OPEN_HEIGHT,
  width: "inherit",
  transition: "height 0.3s ease-in-out",

  "& > *": {
    margin: `${theme.spacing(4)} ${theme.spacing(4)}`, // Top-Bottom and Left-Right margins for children
  },
}));
