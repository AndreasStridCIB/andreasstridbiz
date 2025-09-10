import { styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import LazyImageWrap from "../lazyImage/LazyImageWrap";
import { useDelayRender } from "../../hooks/useDelayRender";
import { BASE_DELAY } from "../constants";

interface PhotoSliderProps {
  photos: string[];
}

const SLIDE_DURATION = 5000; // 5 seconds
const ANIMATION_DURATION = 1000; // ms

const PhotoSliderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "380px", // 1080 540, 220
  height: "506px", // 1350 675, 275
  overflow: "hidden",
  margin: theme.spacing(2),
  position: "relative",
}));

const PhotoSlider: React.FC<PhotoSliderProps> = ({ photos }) => {
  const [activeIndexes, setActiveIndexes] = useState([0, 1, 2]);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const shouldRender = useDelayRender(BASE_DELAY * 3);

  useEffect(() => {
    if (!shouldRender) return;
    timeoutRef.current = setTimeout(() => {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
        setActiveIndexes((prev) => {
          const nextIndex = (prev[2] + 1) % photos.length;
          return [prev[1], prev[2], nextIndex];
        });
      }, ANIMATION_DURATION);
    }, SLIDE_DURATION);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndexes, photos.length, shouldRender]);

  useEffect(() => {
    setActiveIndexes([0, 1, 2]);
  }, [photos]);

  if (!shouldRender) return null;

  return (
    <PhotoSliderContainer>
      {activeIndexes.map((idx, i) => {
        // Animation logic:
        // i === 0: current image, slides right out (0 -> 100%)
        // i === 1: next image, slides in from left (-100% -> 0)
        // i === 2: waiting offscreen left (-100%)
        let transform = "translateX(0)";
        if (animating) {
          if (i === 0) transform = "translateX(100%)"; // slide out right
          if (i === 1) transform = "translateX(0)"; // slide in to center
          if (i === 2) transform = "translateX(100%)"; // stay offscreen left
        } else {
          if (i === 0) transform = "translateX(-100%)"; // offscreen left (after animation)
          if (i === 1) transform = "translateX(0)"; // center
          if (i === 2) transform = "translateX(100%)"; // offscreen right
        }

        return (
          <LazyImageWrap
            key={idx}
            imageComp={
              <img
                src={photos[idx]}
                alt={`slide-${idx}`}
                style={{
                  flex: "1 0 100%",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1), opacity ${ANIMATION_DURATION}ms `,
                  opacity: i === 1 ? 1 : 0.7, // center image fully visible, others slightly faded
                  zIndex: i === 1 ? 2 : 1,
                  transform,
                  pointerEvents: i === 1 ? "auto" : "none",
                }}
              />
            }
          />
        );
      })}
    </PhotoSliderContainer>
  );
};

export default PhotoSlider;
