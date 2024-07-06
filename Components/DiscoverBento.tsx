"use client";

import React, { useEffect, useState } from "react";

const Discover = () => {
    // const ref = useRef<HTMLDivElement>(null);

    const [count, updateCount] = useState({
        client: "98,000",
        project: "1,12,000",
        retention: 82,
    });

    useEffect(() => {
        const cards = document.querySelectorAll(".intersectionObs");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "opacity-100",
                            "translate-y-0"
                        );
                        entry.target.classList.remove(
                            "opacity-0",
                            "translate-y-20"
                        );
                        // let upto = 0;
                        // let counts = setInterval(() => {
                        //     updateCount({
                        //         ...count,
                        //         client: upto++ ,
                        //     });
                        //     if (upto === count.client + 1) {
                        //         clearInterval(counts);
                        //     }
                        // });
                        // observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: "-20px",
            }
        );

        cards.forEach((card) => {
            observer.observe(card);
        });
    }, []);

    return (
        <div className="grid grid-cols-[repeat(2,45vw)] grid-rows-[repeat(8,_minmax(0,_1fr))] gap-2 lg:grid-cols-[repeat(2,minmax(0,20vw))]">
            <div className="intersectionObs transition-all duration-700 opacity-0 translate-y-20 rounded-2xl w-auto h-auto bg-[#D7EAFF] p-6 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center item1">
                <p className="text-center text-[1.7rem] font-bold my-auto text-black">
                    {count.client}+ <br />
                    <span className="font-medium text-[1.5rem]">
                        Active Retailers
                    </span>
                </p>
            </div>
            <div className="intersectionObs transition-all duration-700 opacity-0 translate translate-y-20 rounded-2xl w-auto h-auto bg-[#56695A] p-6 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center item2">
                <p className="text-center text-[1.7rem] font-bold text-white my-auto">
                    {count.project}+ <br />
                    <span className="font-medium text-[1.5rem]">
                        Onboarded Clients
                    </span>
                </p>
            </div>
            <div className="intersectionObs transition-all duration-700 opacity-0 translate-y-20 rounded-2xl w-auto h-auto bg-[#081121] p-6 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center item3">
                <p className="text-center text-[1.7rem] font-medium text-white my-auto">
                    Expert Team
                </p>
            </div>
            <div className="intersectionObs transition-all duration-700 opacity-0 translate-y-20 rounded-2xl w-auto h-auto bg-[#113884] p-6 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] flex items-start justify-center item4">
                <p className="text-center text-[1.7rem] font-bold text-white my-auto">
                    {count.retention}%+ <br />
                    <span className="font-medium text-[1.5rem]">
                        Clients Retention Rate
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Discover;
