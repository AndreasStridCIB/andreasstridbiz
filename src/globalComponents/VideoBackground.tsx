import React, { useEffect, useRef } from "react";
import { useDelayRender } from "../hooks/useDelayRender";
import { BASE_DELAY } from "./constants";

interface VideoBackgroundProps {
  youtubeId: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ youtubeId }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const shouldRender = useDelayRender(BASE_DELAY * 3);

  if (!shouldRender) return null;
  // Prevent pausing by re-focusing the iframe if needed

  return (
    <div
      style={{
        background: "black",
        display: "grid",
        // gridArea: "videoBackground",
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        ref={iframeRef}
        title="YouTube Video Background"
        width="315"
        height="560"
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&showinfo=0&rel=0&disablekb=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen={false}
        style={{
          pointerEvents: "none", // Prevent user interaction

          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default VideoBackground;
