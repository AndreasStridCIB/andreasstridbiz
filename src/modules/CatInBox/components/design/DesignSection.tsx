import { Typography } from "@mui/material";
import React from "react";

const DesignSection: React.FC = () => {
  return (
    <div style={{ gridArea: "design" }}>
      {" "}
      <>
        <Typography variant="h3">Logos</Typography>
        <Typography>
          I always been a creative person. When other talent I found in myself
          is to create logos. I like to understand the story, purpose and role
          of the company and then create a logo that represents it. Here is some
          of the Logos I have created.
        </Typography>
      </>
    </div>
  );
};

export default DesignSection;
