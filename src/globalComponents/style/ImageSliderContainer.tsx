import { Box, styled } from "@mui/material";
import { SECTION_CLOSE_HEIGHT } from "../../modules/CatInBox/utils/constants";

export const ImageSliderContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: `auto`,
  alignItems: "center",
  justifyItems: "center",
  height: `calc(${SECTION_CLOSE_HEIGHT} - 50px)`, // Adjust the height as needed
});

export const ImageSliderWrap = styled(Box)({
  display: "flex",
  height: `calc(${SECTION_CLOSE_HEIGHT} - 50px)`, // Adjust the height as needed
  width: "calc(40vw)",
  justifyContent: "center",
  maskImage:
    "linear-gradient(to right, transparent, black 5% 95%, transparent)",
});
