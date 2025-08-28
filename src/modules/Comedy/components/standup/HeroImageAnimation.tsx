import React, { useEffect, useState } from "react";
import { styled, keyframes } from "@mui/material";
import baseImageSrc from "@/assets/photo/WebSite_Hero_Image_Empty.webp";
import outie from "@/assets/photo/Ouite.webp";
import meCat from "@/assets/photo/Me_Cat.webp";
import doflamingo from "@/assets/photo/Doflamingo.webp";
import meGirl from "@/assets/photo/Me_Girl.webp";
import AnimatedImage from "../../../../globalComponents/AnimatedImage";
import meWaiter from "@/assets/photo/Me_Waiter.webp";
import mePolice from "@/assets/photo/Me_Police.webp";
import meMasked from "@/assets/photo/Me_Masked.webp";

import standup1 from "@/assets/photo/Standup1.webp";
import standup2 from "@/assets/photo/Standup2.webp";
import standup3 from "@/assets/photo/Standup3.webp";
import standup4 from "@/assets/photo/Standup4.webp";
import { clear } from "console";

const ANIMATION_DURATION = 3000; // ms
const altBase = "Base Hero Image";
const altOverlay = "Overlay Hero Image";

const ANIMATION_DIFF = 300; // ms

export const HeroImageAnimation: React.FC = () => {
  const [showOutie, setShowOutie] = useState(false);
  const [showMeCat, setShowMeCat] = useState(false);
  const [showMePolice, setShowMePolice] = useState(false);
  const [showMeWaiter, setShowMeWaiter] = useState(false);
  const [showMeGirl1, setShowMeGirl1] = useState(false);
  const [showDoflamingo, setShowDoflamingo] = useState(false);

  const [showStandupOne, setShowStandupOne] = useState(false);
  const [showStandupTwo, setShowStandupTwo] = useState(false);
  const [showStandupThree, setShowStandupThree] = useState(false);
  const [showStandupFour, setShowStandupFour] = useState(false);
  const [blurImages, setBlurImages] = useState(false);

  useEffect(() => {
    // First wave: outie and meCat at 2000ms
    const timer1 = setTimeout(() => setShowOutie(true), ANIMATION_DIFF * 2);
    const timer2 = setTimeout(() => setShowMeCat(true), ANIMATION_DIFF * 3);
    const timer3 = setTimeout(() => setShowMePolice(true), ANIMATION_DIFF * 4);
    const timer4 = setTimeout(() => setShowMeWaiter(true), ANIMATION_DIFF * 5);
    const timer5 = setTimeout(() => setShowMeGirl1(true), ANIMATION_DIFF * 6);
    const timer6 = setTimeout(
      () => setShowDoflamingo(true),
      ANIMATION_DIFF * 7
    );

    const timer7 = setTimeout(
      () => setShowStandupOne(true),
      ANIMATION_DIFF * 8
    );
    const timer8 = setTimeout(
      () => setShowStandupTwo(true),
      ANIMATION_DIFF * 9
    );
    const timer9 = setTimeout(
      () => setShowStandupThree(true),
      ANIMATION_DIFF * 10
    );
    const timer10 = setTimeout(
      () => setShowStandupFour(true),
      ANIMATION_DIFF * 11
    );
    const timerBlurOff = setTimeout(
      () => setBlurImages(true),
      ANIMATION_DIFF * 20
    ); // Turn off blur after 12 seconds

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(timer8);
      clearTimeout(timer9);
      clearTimeout(timer10);
      clearTimeout(timerBlurOff);
    };
  }, []);

  const renderLeftSide = () => {
    return (
      <>
        <AnimatedImage
          src={mePolice}
          alt={altOverlay}
          show={showMePolice}
          left="-4%" // Instead of 80px
          top="-1%" // Instead of 120px
          width="25%"
          height="65%"
          animationDuration={ANIMATION_DURATION}
          blur={blurImages} // Pass the blur state
        />
        <AnimatedImage
          src={meWaiter}
          alt={altOverlay}
          show={showMeWaiter}
          left="7%" // Instead of 80px
          top="-1%" // Instead of 120px
          width="35%"
          height="70%"
          animationDuration={ANIMATION_DURATION}
          blur={blurImages} // Pass the blur state
        />
        <AnimatedImage
          src={meGirl}
          alt={altOverlay}
          show={showMeGirl1}
          left="-5%" // Instead of 80px
          top="20%" // Instead of 120px
          width="25%"
          height="65%"
          animationDuration={ANIMATION_DURATION}
          blur={blurImages} // Pass the blur state
        />
        <AnimatedImage
          src={doflamingo}
          alt={altOverlay}
          show={showDoflamingo}
          left="6%" // Instead of 80px
          top="15%" // Instead of 120px
          width="30%"
          height="80%"
          animationDuration={ANIMATION_DURATION}
          blur={blurImages} // Pass the blur state
        />
        <AnimatedImage
          src={outie}
          alt={altOverlay}
          show={showOutie}
          left="2%" // Instead of -1px
          top="55%" // Instead of 480px
          width="40%"
          height="50%"
          animationDuration={ANIMATION_DURATION}
          blur={blurImages} // Pass the blur state
        />
        <AnimatedImage
          src={meCat}
          alt={altOverlay}
          show={showMeCat}
          left="-5%" // Instead of -100px
          top="59%" // Instead of 520px
          width="22%"
          height="50%"
          animationDuration={ANIMATION_DURATION}
          blur={blurImages} // Pass the blur state
        />
      </>
    );
  };

  const renderRightSide = () => {
    return (
      <>
        <AnimatedImage
          src={standup4}
          alt={altOverlay}
          show={showStandupFour}
          left="70%" // Instead of 80px
          top="-22%" // Instead of 120px
          width="30%"
          height="100%"
          animationDuration={ANIMATION_DURATION}
          blur={blurImages} // Pass the blur state
        />
        <AnimatedImage
          src={standup3}
          alt={altOverlay}
          show={showStandupThree}
          left="47%" // Instead of 80px
          top="-25%" // Instead of 120px
          width="75%"
          height="150%"
          animationDuration={ANIMATION_DURATION}
          blur={blurImages} // Pass the blur state
        />
        <AnimatedImage
          src={standup2}
          alt={altOverlay}
          show={showStandupTwo}
          left="60%" // Instead of 80px
          top="10%" // Instead of 120px
          width="40%"
          height="90%"
          animationDuration={ANIMATION_DURATION}
          blur={blurImages} // Pass the blur state
        />
        <AnimatedImage
          src={standup1}
          alt={altOverlay}
          show={showStandupOne}
          left="75%" // Instead of 80px
          top="40%" // Instead of 120px
          width="30%"
          height="60%"
          animationDuration={ANIMATION_DURATION}
          blur={blurImages} // Pass the blur state
        />
      </>
    );
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img
        src={baseImageSrc}
        alt={altBase}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          filter: blurImages ? "blur(2px)" : "none",
          //aspectRatio: "1.77", // or "2560 / 1440" or "16 / 9" (approximately the same)
        }}
      />
      {renderLeftSide()}
      {renderRightSide()}

      <AnimatedImage
        src={meMasked}
        alt={altOverlay}
        show
        left="0%" // Instead of -100px
        top="0%" // Instead of 520px
        width="100%"
        height="100%"
        animationDuration={0}
      />
    </div>
  );
};
