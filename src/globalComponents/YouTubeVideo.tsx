import React from "react";
import { styled } from "@mui/material/styles";

interface YouTubeVideoProps {
  youtubeId: string;
  width?: string | number;
  height?: string | number;
  title?: string;
}

const StyledIframe = styled("iframe")({
  aspectRatio: "9 / 16",
  width: "100%",
  border: "none",
  frameBorder: 0,

  maxWidth: "clamp(300px, 30vw, 500px)",
});

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  youtubeId,
  title = "YouTube video player",
}) => {
  return (
    <StyledIframe
      // Use youtube-nocookie.com for privacy-enhanced mode
      src={`https://www.youtube-nocookie.com/embed/${youtubeId}?si=7NokVQw3ZJzBQFof&rel=0&modestbranding=1&vq=hd1080`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
};

export default YouTubeVideo;
