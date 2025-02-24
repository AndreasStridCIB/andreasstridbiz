import React, { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import CatInBoxLogoBlack from "./assets/logos/CatInBox_Logo_Black.webp";

const LazyLoadImage = lazy(() => import("./globalComponents/LazyLoadImage"));

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catinbox");
  };

  return (
    <div style={{ backgroundColor: "lightblue", height: "100vh" }}>
      <h1>Home Page</h1>
      <Suspense fallback={<p> Loading.... </p>}>
        <LazyLoadImage
          src={CatInBoxLogoBlack}
          width={128}
          height={168}
          alt="Cat In Box Logo"
          onClick={handleClick}
        />
      </Suspense>
    </div>
  );
};

export default HomePage;
