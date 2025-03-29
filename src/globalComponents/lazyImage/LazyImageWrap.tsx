import { lazy, Suspense } from "react";

interface LazyImageWrapProps {
  imageComp: React.ReactElement;
}

const LazyImage = lazy(() => import("./LazyImage"));

const LazyImageWrap: React.FC<LazyImageWrapProps> = ({ imageComp }) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LazyImage imageComp={imageComp} />
    </Suspense>
  );
};

export default LazyImageWrap;
