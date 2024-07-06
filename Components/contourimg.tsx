import React from "react";
import "./contour.css";
import Image from "next/image";

import cont from "./cont-img.png";

const contour = () => {
    return (
        <main className=" brightness-75 cont-img">
            <Image
                src={cont}
                alt="contour"
                className=" h-[100%] w-[100%] md:h-auto md:w-auto "
            />
        </main>
    );
};

export default contour;
