import React from "react";
import { Box } from "@mui/material";
import { MediaSectionPages } from "../utils/types";

interface ActiveSectionProps {
  activeSection: MediaSectionPages;
}

const ActiveSectionText: React.FC<ActiveSectionProps> = ({ activeSection }) => {
  return (
    <Box>
      {activeSection === MediaSectionPages.PHOTOS && (
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "1fr 1fr 1fr",
            height: "inherit",
          }}
        ></Box>
      )}
    </Box>
  );
};

export default ActiveSectionText;
