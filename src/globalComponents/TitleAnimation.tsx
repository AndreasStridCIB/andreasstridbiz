import React, { useEffect, useState } from "react";
import { Typography, TypographyProps, Box } from "@mui/material";
import { WHITE } from "../modules/CatInBox/utils/constants";
import { useDelayRender } from "../hooks/useDelayRender";
import { BASE_DELAY } from "./constants";
import { RED } from "../modules/Comedy/utils/constants";

interface TitleAnimationProps extends TypographyProps {
  title: string;
  stagger?: number; // Delay between each character in ms
}

const fadeInUpKeyframes = (
  <style>
    {`
      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `}
  </style>
);

const TitleAnimation: React.FC<TitleAnimationProps> = ({
  title,
  stagger = 100,
  ...props
}) => {
  const [showBorder, setShowBorder] = useState(false);
  const shouldRender = useDelayRender(BASE_DELAY);

  useEffect(() => {
    if (!shouldRender) return;
    const timeout = setTimeout(
      () => setShowBorder(true),
      stagger * title.length + 800 // border appears after all chars animate
    );
    return () => clearTimeout(timeout);
  }, [shouldRender, stagger, title.length]);

  if (!shouldRender) return null;

  return (
    <Box sx={{ margin: 2, textAlign: "center" }}>
      {fadeInUpKeyframes}
      <Typography
        {...props}
        aria-label={title}
        color={RED}
        fontWeight={400}
        variant="h1"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          ...props.sx,
        }}
      >
        {title.split("").map((char, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              opacity: 0,
              transform: "translateY(50px) scale(0.8)",
              animation: "fadeInUp 0.8s forwards",
              animationDelay: `${index * stagger}ms`,
              whiteSpace: char === " " ? "pre" : "normal",
            }}
          >
            {char}
          </span>
        ))}
      </Typography>
      <Box
        sx={{
          height: 6,
          width: showBorder ? "450px" : 0,
          background: RED,
          transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </Box>
  );
};

export default TitleAnimation;
