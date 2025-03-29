import { Box, styled } from "@mui/material";

interface GridContainerProps {
  direction: "row" | "column"; // Required
  rows: number; // Required
  spaceType: "1fr" | "auto" | "100%" | "fit-content(100%)" | string; // Required
}

export const GridContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "direction" && prop !== "rows" && prop !== "spaceType",
})<GridContainerProps>(({ direction, rows, spaceType }) => ({
  display: "grid",
  gridTemplateColumns:
    direction === "row" ? `repeat(${rows}, ${spaceType})` : spaceType,
  gridTemplateRows:
    direction === "column" ? `repeat(${rows}, ${spaceType})` : spaceType,
  height: "inherit",
}));
