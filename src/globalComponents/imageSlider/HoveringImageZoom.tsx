import { Box, keyframes, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import LazyImageWrap from "../lazyImage/LazyImage";
import { getImageName } from "@/utils/globalFunctions";

// fix
// 1APA image that have not started yet should not show uptime.
// 2APA The hovered image should pop up center of screen

const openAnimation = (isClosing: boolean) => keyframes`
    0% {
        transform: translate(-50%, -50%) scale(${isClosing ? 1 : 0});
        opacity: ${isClosing ? 1 : 0};
      
    }
    100% {
        transform: translate(-50%, -50%) scale(${isClosing ? 0 : 1});
        opacity: ${isClosing ? 0 : 1};
    }
`;

const Image = styled("img")({
  width: "auto",
  height: "900px",
  aspectRatio: "3/4",
  objectFit: "cover",
});

const ModalOverlay = styled(Box)<{
  top: number;
  left: number;
  isClosing: boolean;
}>(({ top, left, isClosing }) => ({
  position: "fixed",
  top: top,
  left: left,
  width: "800px",
  height: "1000px",
  background:
    "radial-gradient(circle, rgba(0, 0, 0, 0.6) 50%, transparent 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  transform: "translate(-50%, -50%)",
  animation: `${openAnimation(isClosing)} 0.66s ease-in-out`,
}));

interface HoverImageZoomProps {
  image: string | null;
  setHoveredImage: (image: string | null) => void;
}

const HoverImageZoom: React.FC<HoverImageZoomProps> = ({
  image,
  setHoveredImage,
}) => {
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (image) {
      const imageElement = document.getElementById(
        `slideitem-${getImageName(image)}`
      );
      if (imageElement) {
        const rect = imageElement.getBoundingClientRect();
        setModalPosition({
          top: rect.top + rect.height / 2,
          left: rect.left + rect.width / 2,
        });
      }
    }
  }, [image, isClosing]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setHoveredImage(null);
    }, 500); // Match the duration of the close animation
  };

  return (
    <>
      {/* Modal - show when there is an active image */}
      {image && (
        <ModalOverlay
          sx={{}}
          id="HoverImageZoom"
          top={modalPosition.top}
          left={modalPosition.left}
          isClosing={isClosing}
          onMouseLeave={handleClose}
          onClick={handleClose}
        >
          <LazyImageWrap imageComp={<Image src={image} />} />
        </ModalOverlay>
      )}
    </>
  );
};

export default HoverImageZoom;
