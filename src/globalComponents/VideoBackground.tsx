import React, { useRef, useEffect } from "react";
import email from "../../assets/email-icon.svg";

interface VideoBackgroundProps {
  youtubeId: string;
  position?: "left" | "right";
  style?: React.CSSProperties;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  youtubeId,
  position = "right",
  style,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleMouseEnter = () => {
      // Send message to YouTube player to unmute
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"unMute","args":""}',
        "*"
      );
    };

    const handleMouseLeave = () => {
      // Send message to YouTube player to mute
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"mute","args":""}',
        "*"
      );
    };

    iframe.addEventListener("mouseenter", handleMouseEnter);
    iframe.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      iframe.removeEventListener("mouseenter", handleMouseEnter);
      iframe.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&vq=hd720&hd=1&enablejsapi=1`}
      style={{
        aspectRatio: "0.66", // 677width / 1204 height = 0.66
        width: "100%",
        maxWidth: "600px",
        minHeight: "600px",
        justifySelf: position === "left" ? "end" : "start",
        border: "none",
        ...style,
      }}
      allow="autoplay; encrypted-media"
      title={`YouTube video ${youtubeId}`}
    />
  );
};

export default VideoBackground;
