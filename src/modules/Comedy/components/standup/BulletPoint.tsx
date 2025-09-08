import React from "react";
import { Box, Typography, useTheme, SvgIconProps } from "@mui/material";
interface BulletPointProps {
  text: string;
  Icon: React.ComponentType<SvgIconProps>;
}

const BulletPoint: React.FC<BulletPointProps> = ({ text, Icon }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(2, 0),
        [theme.breakpoints.down("md")]: {
          padding: theme.spacing(1, 0),
        },
        // Vertical padding between bullet points
      }}
    >
      <Icon
        sx={{
          color: theme.palette.custom.red,
          width: { xs: "24px", sm: "36px" },
          height: { xs: "24px", sm: "36px" },
          marginRight: theme.spacing(1),
          flexShrink: 0,
        }}
      />

      <Typography
        sx={{
          fontSize: theme.body1,
          fontWeight: 500, // Normal weight
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default BulletPoint;
