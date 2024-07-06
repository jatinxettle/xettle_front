"use client";

import React from "react";
import Lottie from "lottie-react";
import lottieanimation from "./paymentserver.json";

const paymentserverlottie = () => {
  return (
    <Lottie
      animationData={lottieanimation}
      height={1000}
      width={1000}
      loop={true}
    />
  );
};

export default paymentserverlottie;
