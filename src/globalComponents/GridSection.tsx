import React from "react";
import { Box, styled } from "@mui/material";

interface GridSectionProps {
  direction: "rows" | "columns";
  nbrItems: number;
  sectionSize?: string; // e.g. "1fr", "auto", "100%"
  children?: React.ReactNode;
  justifyContent?: string; // e.g. "center", "start", "end", "space-between"
  alignItems?: string; // e.g. "center", "start", "end",
}

const StyledGridSection = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "direction" && prop !== "nbrItems" && prop !== "sectionSize",
})<GridSectionProps>(
  ({
    direction,
    nbrItems,
    sectionSize = "1fr",
    justifyContent = "start",
    alignItems = "start",
  }) => ({
    display: "grid",
    width: "100%",
    height: "100%",
    // backgroundColor: "inherit",
    backgroundColor: WHITE,
    zIndex: 1,
    justifyContent: justifyContent,
    justifyItems: justifyContent,
    alignItems: alignItems,
    //gap: 16,
    ...(direction === "rows"
      ? { gridTemplateRows: `repeat(${nbrItems}, ${sectionSize})` }
      : { gridTemplateColumns: `repeat(${nbrItems}, ${sectionSize})` }),
  })
);

const GridSection: React.FC<GridSectionProps> = ({
  direction,
  nbrItems,
  sectionSize = "1fr",
  justifyContent = "start",
  alignItems = "start",
  children,
}) => (
  <StyledGridSection
    direction={direction}
    nbrItems={nbrItems}
    sectionSize={sectionSize}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    {children}
  </StyledGridSection>
);

export default GridSection;
