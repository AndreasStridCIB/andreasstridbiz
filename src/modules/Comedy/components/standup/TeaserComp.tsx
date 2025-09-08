import React, { useState } from "react";
import { Box, Typography, useTheme, styled, keyframes } from "@mui/material";
import YouTubeVideo from "../../../../globalComponents/YouTubeVideo";
import RightArrow from "@/assets/logos/Right_Arrow.webp";
import LeftArrow from "@/assets/logos/Left_Arrow.webp";
import { SCALE_DURATION } from "../../../../style/styledCss";

interface TeaserCompProps {
  label: string;
  videoUrl: string;
}

const ROTATION = 45; // degrees
// Create responsive movement values

// Keyframes for the scale increase animation
const arrowAnimation = (
  isClosing: boolean,
  isRight: boolean,
  Y: string | number, // Accept both string and number
  X: string | number // Accept both string and number
) => keyframes`
    0% {
     transform: ${
       isClosing
         ? `scale(1.1) rotate(${
             isRight ? ROTATION : -ROTATION
           }deg) translateY(${
             typeof Y === "string" ? Y : Y + "px"
           }) translateX(${
             isRight
               ? typeof X === "string"
                 ? X
                 : X + "px"
               : typeof X === "string"
               ? `calc(-1 * ${X})`
               : -X + "px"
           })`
         : "scale(1) rotate(0deg) translateY(0px) translateX(0px)"
     };
     opacity: ${isClosing ? 1 : 0};
    }
    100% {
            transform: ${
              isClosing
                ? "scale(1) rotate(0deg) translateY(0px) translateX(0px)"
                : `scale(1.1) rotate(${
                    isRight ? ROTATION : -ROTATION
                  }deg) translateY(${
                    typeof Y === "string" ? Y : Y + "px"
                  }) translateX(${
                    isRight
                      ? typeof X === "string"
                        ? X
                        : X + "px"
                      : typeof X === "string"
                      ? `calc(-1 * ${X})`
                      : -X + "px"
                  })`
            };
            opacity: ${isClosing ? 0 : 1};
    }
`;

// Keyframes for the scale increase animation
const teaserAnimation = (isClosing: boolean) => keyframes`
  0% {
   transform: ${isClosing ? "scale(1.25)" : "scale(1)"};
 
  }
  100% {
      transform: ${isClosing ? "scale(1)" : "scale(1.25)"};s
  }
`;

const TeaserContainer = styled(Box)(({ theme }) => ({
  display: "grid",

  justifyItems: "center",
  alignItems: "center",
  alignContent: "center",
  backgroundColor: theme.palette.custom.red,
  paddingBottom: "128px",
  paddingTop: theme.spacing(4),
  width: "100%",
  //hoverEffect
}));

const TeaserLabel = styled(Typography)<{ isHovered: boolean }>(
  ({ isHovered, theme }) => ({
    color: isHovered
      ? theme.palette.custom.lightBrown
      : theme.palette.custom.white,

    animation: `${teaserAnimation(
      !isHovered
    )} ${SCALE_DURATION} ease-in-out forwards`,
  })
);

const ArrowContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%", // Adapts to browser width
  height: "100%", // Fixed height for consistency
});

const StyledArrowImage = styled("img")<{
  isHovered: boolean;
  isRight: boolean;
}>(({ theme, isHovered, isRight }) => ({
  marginTop: "150px",
  width: "clamp(128px, 20vw, 500px)", // Responsive width using clamp
  height: "clamp(96px, 15vw, 500px)", // Responsive height using clamp
  position: "absolute",
  // filter: isHovered ? "brightness(0) invert(1)" : "none",
  //objectFit: "contain", // Maintain aspect ratio
  animation: `${arrowAnimation(
    !isHovered,
    isRight,
    "clamp(25px, 6vh, 200px)", // CSS clamp for Y movement
    "clamp(125px, 10vw, 300px)" // CSS clamp for X movement
  )} 1s ease-in-out forwards`,
}));

const TeaserComp: React.FC<TeaserCompProps> = ({ label, videoUrl }) => {
  const theme = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (state: boolean) => {
    setIsHovered(state);
    //throttledCallback(() => setIsHovered(state));
  };
  //const throttledCallback = useDelay(1000);

  return (
    <TeaserContainer
      onMouseEnter={() => handleMouseMove(true)}
      onMouseLeave={() => handleMouseMove(false)}
    >
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          gap: theme.spacing(4),
          alignItems: "start",
        }}
      >
        <ArrowContainer>
          <StyledArrowImage
            src={LeftArrow}
            alt="Left Arrow"
            isHovered={isHovered}
            isRight={false}
          />
        </ArrowContainer>

        <TeaserLabel
          isHovered={isHovered}
          sx={{ fontSize: theme.h2, fontWeight: 900 }}
        >
          {label}
        </TeaserLabel>
        <ArrowContainer>
          <StyledArrowImage
            src={RightArrow}
            alt="Right Arrow"
            isHovered={isHovered}
            isRight={true}
          />
        </ArrowContainer>
      </Box>

      <YouTubeVideo youtubeId={videoUrl} />
    </TeaserContainer>
  );
};

export default TeaserComp;
