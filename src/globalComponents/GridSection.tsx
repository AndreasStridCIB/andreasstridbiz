import React from "react";
import { Box, styled } from "@mui/material";

interface GridSectionProps {
  direction: "rows" | "columns";
  nbrItems: number;
  sectionSize?: string; // e.g. "1fr", "auto", "100%"
  children?: React.ReactNode;
}

const StyledGridSection = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "direction" && prop !== "nbrItems" && prop !== "sectionSize",
})<GridSectionProps>(({ direction, nbrItems, sectionSize = "1fr" }) => ({
  display: "grid",
  width: "100%",
  height: "100%",
  backgroundColor: "inherit",
  zIndex: 1,
  //gap: 16,
  ...(direction === "rows"
    ? { gridTemplateRows: `repeat(${nbrItems}, ${sectionSize})` }
    : { gridTemplateColumns: `repeat(${nbrItems}, ${sectionSize})` }),
}));

const GridSection: React.FC<GridSectionProps> = ({
  direction,
  nbrItems,
  sectionSize = "1fr",
  children,
}) => (
  <StyledGridSection
    direction={direction}
    nbrItems={nbrItems}
    sectionSize={sectionSize}
  >
    {children}
  </StyledGridSection>
);

export default GridSection;
