"use client";

import React from "react";
import Lottie from "lottie-react";
import lottieanimation from "./fintech-img.json";

const fintechlottie = () => {
  return (
    <Lottie
      animationData={lottieanimation}
      height={1000}
      width={1000}
      loop={true}
    />
  );
};

export default fintechlottie;
