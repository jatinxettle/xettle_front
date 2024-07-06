"use client";
import React, { useRef, useEffect, useState } from "react";

import "./terminal.css";
import Typewriter from "typewriter-effect";

const Terminal = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [terminalVisibility, SetTerminalVisibility] = useState(false);

    console.log("terminalVisibility", terminalVisibility);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (!entry.isIntersecting) {
                return;
            }
            // console.log(entry);
            SetTerminalVisibility(entry.isIntersecting);
        });
        observer.observe(ref.current!);
    }, []);

    return (
        <div className="containerhome mx-auto mt-3 w-[90%] md:w-[40vw] lg:w-[30vw]">
            <div className="terminal_toolbar">
                <div className="butt">
                    <button className="btn bg-[#ed1c6f]"></button>
                    <button className="btn bg-[#e8e925]"></button>
                    <button className="btn bg-[#74c54f]"></button>
                </div>
                <p className="user">xettle@admin: ~</p>
                <div className="add_tab border-[0px]"></div>
            </div>
            <div className="terminal_body" ref={ref}>
                <div className="terminal_promt text-black">
                    <span className="terminal_user">xettle@admin:</span>
                    <span className="terminal_location">~</span>
                    <span className="terminal_bling">$</span>
                    {terminalVisibility ? (
                        <Typewriter
                            options={{
                                cursor: "|",
                                delay: 20,
                                // strings: [
                                //     `curl --request GET
                                //         --url https://dashboard.xettle.net/v1/service/upi/status/SM8989
                                //         --header 'accept: application/json`,
                                // ],
                                // autoStart: terminalVisibilityFinal,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(
                                        `curl --request GET
                                        --url https://dashboard.xettle.net/v1/service/***
                                        --header 'accept: application/json`
                                    )
                                    .callFunction(() => {
                                        console.log("String typed out!");
                                    })
                                    .pauseFor(2500)
                                    .start();
                            }}
                        />
                    ) : (
                        ""
                    )}

                    {/* <span className="terminal_cursor"></span> */}
                </div>
            </div>
        </div>
    );
};

export default Terminal;
