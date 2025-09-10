import { Box, styled } from "@mui/material";

export const SectionMenuContainer = styled(Box)<{ sectionCount: number }>(
  ({ sectionCount }) => ({
    display: "grid",
    justifySelf: "end",
    justifyItems: "start",
    gridTemplateRows: `repeat(${sectionCount}, fit-content(100%))`,
  })
);
