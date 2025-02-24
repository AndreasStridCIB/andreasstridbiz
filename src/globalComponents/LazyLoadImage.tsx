interface LazyLoadImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

const LazyLoadImage: React.FC<LazyLoadImageProps> = ({
  src,
  alt,
  width,
  height,
  onClick,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    />
  );
};

export default LazyLoadImage;
