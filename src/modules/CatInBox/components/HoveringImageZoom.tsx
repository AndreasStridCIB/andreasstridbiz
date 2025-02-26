import { Box, keyframes, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import LazyImageWrap from "../../../globalComponents/LazyImageWrap";
import { getImageName } from "../../../utils/functions";
import { NAVBAR_HEIGHT } from "../utils/constants";

// top: isClosing: ${top}px;
// left:${left}px;
//  top: 50%;
//     left: 50%;

const openAnimation = (
  isClosing: boolean,
  top: number,
  left: number
) => keyframes`
    0% {
        transform: translate(-50%, -50%) scale(${isClosing ? 1 : 0});
      
    }
    100% {
        transform: translate(-50%, -50%) scale(${isClosing ? 0 : 1});
   
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
  //   top: !isClosing ? `${top}px` : "50%",
  //   left: !isClosing ? `${left}px` : "50%",
  //   top: "50%",
  //   left: "50%",
  top: top,
  left: left,
  width: "900px",
  height: "900px",
  background:
    "radial-gradient(circle, rgba(0, 0, 0, 0.6) 50%, transparent 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  transform: "translate(-50%, -50%)",
  animation: `${openAnimation(isClosing)} 1s linear`,
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

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setHoveredImage(null);
      setIsClosing(false);
    }, 1000); // Match the duration of the close animation
  };

  console.log(
    "HoverImageZoom.tsx: modalPosition:",
    modalPosition,
    image,
    image !== null
  );

  return (
    <>
      {/* Modal - show when there is an active image */}
      {image && (
        <ModalOverlay
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
