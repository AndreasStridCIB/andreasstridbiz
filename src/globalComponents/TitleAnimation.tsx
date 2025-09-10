import React, { useEffect, useState } from "react";
import {
  Typography,
  TypographyProps,
  Box,
  useTheme,
  styled,
  keyframes,
} from "@mui/material";
import { WHITE } from "../modules/CatInBox/utils/constants";
import { RED } from "../modules/Comedy/utils/constants";

interface TitleAnimationProps extends TypographyProps {
  title: string;
  stagger?: number;
  backgroundColor?: string;
  triggerY?: number;
}

const getAnimationKeyframes = (forward: boolean) => keyframes`
  from {
    opacity: ${forward ? 0 : 1};
    transform: translateY(${forward ? "50px" : "0"}) scale(${
  forward ? 0.8 : 1
});
  }
  to {
    opacity: ${forward ? 1 : 0};
    transform: translateY(${forward ? "0" : "50px"}) scale(${
  forward ? 1 : 0.8
});
  }
`;

const StyledTypography = styled(Typography)<{ shouldRender: boolean }>(
  ({ shouldRender }) => ({
    display: "flex",
    flexWrap: "wrap",
    fontWeight: 900,
    color: RED,

    "& span": {
      display: "inline-block",
      opacity: shouldRender ? 0 : 1, // Set initial state properly
      animation: shouldRender
        ? `${getAnimationKeyframes(true)} 0.66s forwards`
        : `${getAnimationKeyframes(false)} 0.66s forwards`,

      "&.space-char": {
        whiteSpace: "pre",
      },
    },
  })
);

const TitleAnimation: React.FC<TitleAnimationProps> = ({
  title,
  stagger = 100,
  backgroundColor = WHITE,
  triggerY = 100,
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log("scrollY:", scrollY);

      if (scrollY >= triggerY) {
        setShouldRender(true);
      } else {
        setShouldRender(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerY]);

  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        display: "grid",
        placeItems: "start",
        width: "100%",
        minHeight: "fit-content",
        padding: theme.spacing(4, 8),

        [theme.breakpoints.down("md")]: {
          padding: theme.spacing(2, 4),
        },
      }}
    >
      <StyledTypography shouldRender={shouldRender} variant="h1">
        {title.split("").map((char, index) => (
          <span
            key={index}
            style={{
              animationDelay: shouldRender
                ? `${index * stagger}ms`
                : `${(title.length - 1 - index) * stagger}ms`, // Reverse order for exit
            }}
          >
            {char}
          </span>
        ))}
      </StyledTypography>
    </Box>
  );
};

export default TitleAnimation;
