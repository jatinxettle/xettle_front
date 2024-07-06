"use client";

import React from "react";
import Lottie from "lottie-react";
import lottieanimation from "./education.json";

const educationlottie = () => {
    return (
        <Lottie
            animationData={lottieanimation}
            height={1000}
            width={1000}
            loop={true}
        />
    );
};

export default educationlottie;
