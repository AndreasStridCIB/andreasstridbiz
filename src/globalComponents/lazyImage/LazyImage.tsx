interface LazyImageProps {
  imageComp: React.ReactElement;
}

const LazyImageWrap: React.FC<LazyImageProps> = ({ imageComp }) => {
  return imageComp;
};

export default LazyImageWrap;
