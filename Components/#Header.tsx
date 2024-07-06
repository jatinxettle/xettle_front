"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import "./header.css";

import Logo from "app/logo.png";
import betting from "./betting.png";
import casino from "./casino.png";
import crypto from "./crypto.png";
import fintech from "./fintech.png";
import game from "./game.png";
import payment from "./payment.png";
import token from "./token.png";
import ecom from "./ecom.png";
import api from "./api-l.png";
import kyc from "./kyc-l.png";
import reg from "./regt.png";
import edu from "./edu.png";
import Ham from "@/Components/ham";
import X from "@/Components/x";

import { Roboto } from "next/font/google";
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["500", "700"],
});

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [header, setHeader] = useState(false);

    const scrollHeader = () => {
        if (window.scrollY >= 30) {
            setHeader(true);
            console.log(setHeader);
        } else {
            console.log(setHeader);
            setHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHeader);
        return () => {
            window.addEventListener("scroll", scrollHeader);
        };
    }, []);

    return (
        <main className="bg-transparent">
            <header
                className={
                    header
                        ? "lg:h-[8vh] h-[7vh] flex justify-center items-center fixed w-[100vw] z-[9999] bg-white transition-all duration-500 shadow-[0px_4px_35px_0px_rgba(0,0,0,0.15)]"
                        : "lg:h-[8vh] h-[7vh] flex justify-center items-center fixed w-[100vw] z-[9999] bg-transparent transition-all duration-500"
                }
            >
                <nav className="flex items-center justify-between w-[95%] md:w-[82%] ">
                    <div
                        id="logo"
                        className="scale-[0.85] lg:scale-100 relative z-[100]"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <div className="lg:h-[8vh] h-[7vh] relative w-[130px]">
                                <Image
                                    src={Logo}
                                    alt="logo"
                                    // width={130}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </Link>
                    </div>
                    <div
                        id="links"
                        className="flex items-center justify-between"
                    >
                        <ul
                            className={`nav-links fixed gap-[0.5vw] transition-all duration-500 block lg:static lg:inline-flex lg:h-auto lg:w-auto lg:max-w-none left-0 h-[100vh] w-[100%] max-w-[350px} overflow-y-auto lg:top-0 ${
                                navbar ? "lgnav" : "top-[-110vh] "
                            }`}
                        >
                            <li className="rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all text-[2rem] lg:text-[1rem]">
                                <Link
                                    href="/"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="rounded-lg lg:hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all text-[2rem] lg:text-[1rem]">
                                <p className="cursor-pointer whitespace-nowrap">
                                    Services &#8595;
                                </p>
                                <div className="static hidden transition-all opacity-0 dropdown ">
                                    <div className="absolute lg:h-10 lg:w-[40rem] lg:translate-x-[-30%] transition-all"></div>

                                    <div className={roboto.className}>
                                        <div className=" bg-transparent relative transition-all shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] lg:absolute lg:min-w-[40rem] lg:min-h-[10rem] lg:translate-x-[-45%] lg:flex lg:justify-evenly lg:items-center lg:gap-10 lg:rounded-2xl lg:mt-10 lg:bg-white px-4">
                                            <ul className="lg:w-[40%]">
                                                {/* <li className="flex items-center jus
                                                tify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem]">
                          <Image
                            src={crypto}
                            alt="crypto"
                            width={45}
                            className="hidden lg:block"
                          />
                          <Link
                            href="/crypto-excng"
                            className="px-3"
                            onClick={() => setNavbar(!navbar)}
                          >
                            Crypto Exchange Development
                          </Link>
                        </li> */}
                                                <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem] hover:scale-105">
                                                    <Image
                                                        src={fintech}
                                                        alt="fintech"
                                                        width={45}
                                                        className="hidden lg:block"
                                                    />
                                                    <Link
                                                        href="/fintech"
                                                        className="px-3"
                                                        onClick={() =>
                                                            setNavbar(!navbar)
                                                        }
                                                    >
                                                        Fin-Tech Software
                                                    </Link>
                                                </li>
                                                <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem] hover:scale-105">
                                                    <Image
                                                        src={api}
                                                        alt="api"
                                                        width={45}
                                                        className="hidden lg:block"
                                                    />
                                                    <Link
                                                        href="/api-development"
                                                        className="px-3"
                                                        onClick={() =>
                                                            setNavbar(!navbar)
                                                        }
                                                    >
                                                        API Development
                                                    </Link>
                                                </li>
                                                <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem] hover:scale-105">
                                                    <Image
                                                        src={reg}
                                                        alt="api"
                                                        width={45}
                                                        className="hidden lg:block"
                                                    />
                                                    <Link
                                                        href="/regulated-tech-compliance"
                                                        className="px-3"
                                                        onClick={() =>
                                                            setNavbar(!navbar)
                                                        }
                                                    >
                                                        RegTech Solutions
                                                    </Link>
                                                </li>
                                                {/* <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem]">
                          <Image
                            src={game}
                            alt="game"
                            width={45}
                            className="hidden lg:block"
                          />
                          <Link
                            href="/games"
                            className="px-3"
                            onClick={() => setNavbar(!navbar)}
                          >
                            Games of Skill And Chances
                          </Link>
                        </li> */}
                                                {/* <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem]">
                          <Image
                            src={casino}
                            alt="casino"
                            width={45}
                            className="hidden lg:block"
                          />
                          <Link
                            href="/casino"
                            className="px-3"
                            onClick={() => setNavbar(!navbar)}
                          >
                            Crypto Casino Development
                          </Link>
                        </li> */}
                                            </ul>
                                            <ul className="lg:w-[40%]">
                                                {/* <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem]">
                          <Image
                            src={betting}
                            alt="bettng"
                            width={45}
                            className="hidden lg:block"
                          />
                          <Link
                            href="/betting"
                            className="px-3"
                            onClick={() => setNavbar(!navbar)}
                          >
                            Sports / fantasy betting Softwares
                          </Link>
                        </li> */}
                                                {/* <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem]">
                          <Image
                            src={token}
                            alt="token"
                            width={40}
                            className="hidden lg:block"
                          />
                          <Link
                            href="/crypto-token"
                            className="px-3"
                            onClick={() => setNavbar(!navbar)}
                          >
                            Crypto Project / Token development
                          </Link>
                        </li> */}
                                                <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem] hover:scale-105">
                                                    <Image
                                                        src={ecom}
                                                        alt="ecom"
                                                        width={50}
                                                        className="hidden lg:block"
                                                    />
                                                    <Link
                                                        href="/ecommerce-development"
                                                        className="px-3"
                                                        onClick={() =>
                                                            setNavbar(!navbar)
                                                        }
                                                    >
                                                        E-Commerce development
                                                    </Link>
                                                </li>
                                                <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem] hover:scale-105">
                                                    <Image
                                                        src={kyc}
                                                        alt="kyc"
                                                        width={60}
                                                        className="hidden lg:block"
                                                    />
                                                    <Link
                                                        href="/kyc"
                                                        className="px-3"
                                                        onClick={() =>
                                                            setNavbar(!navbar)
                                                        }
                                                    >
                                                        KYC and Validation
                                                    </Link>
                                                </li>
                                                <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem] hover:scale-105">
                                                    <Image
                                                        src={edu}
                                                        alt="edu"
                                                        width={60}
                                                        className="hidden lg:block"
                                                    />
                                                    <Link
                                                        href="/financial-education-and-literacy-platforms"
                                                        className="px-3"
                                                        onClick={() =>
                                                            setNavbar(!navbar)
                                                        }
                                                    >
                                                        Financial Literacy and
                                                        Education
                                                    </Link>
                                                </li>
                                                {/* <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem]">
                          <Image
                            src={payment}
                            alt="payment"
                            width={45}
                            className="hidden lg:block"
                          />
                          <Link
                            href="/payment"
                            className="px-3"
                            onClick={() => setNavbar(!navbar)}
                          >
                            Payment Gateway
                          </Link>
                        </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* <li className="rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all text-[2rem] lg:text-[1rem]">
                <Link
                  href="https://xettleapi.readme.io"
                  rel="preload"
                  onClick={() => setNavbar(!navbar)}
                  target="_blank"
                >
                  Dev Api
                </Link>
              </li> */}
                            <li className="rounded-lg lg:hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all text-[2rem] lg:text-[1rem]">
                                <p className="cursor-pointer whitespace-nowrap">
                                    Company &#8595;
                                </p>
                                <div className="static hidden transition-all opacity-0 dropdown ">
                                    <div className="absolute lg:h-10 lg:w-[40rem] lg:translate-x-[-30%] transition-all"></div>

                                    <div className={roboto.className}>
                                        <div className=" bg-transparent relative transition-all shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] lg:absolute lg:min-w-[15rem] lg:min-h-[15rem] lg:translate-x-[-45%] lg:flex lg:justify-evenly lg:items-center lg:gap-10 lg:rounded-2xl lg:mt-10 lg:bg-white">
                                            <ul className="lg:w-[75%]">
                                                <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem] hover:scale-105">
                                                    <Link
                                                        href="/contact-us"
                                                        rel="preload"
                                                        onClick={() =>
                                                            setNavbar(!navbar)
                                                        }
                                                        className="px-3"
                                                        target="_blank"
                                                    >
                                                        Contact Us
                                                    </Link>
                                                </li>
                                                <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem] hover:scale-105">
                                                    <Link
                                                        href="/about"
                                                        className="px-3"
                                                        onClick={() =>
                                                            setNavbar(!navbar)
                                                        }
                                                    >
                                                        About Us
                                                    </Link>
                                                </li>
                                                <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem] hover:scale-105">
                                                    <Link
                                                        href="/privacy"
                                                        className="px-3"
                                                        onClick={() =>
                                                            setNavbar(!navbar)
                                                        }
                                                    >
                                                        Privacy Policy
                                                    </Link>
                                                </li>
                                                <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem] hover:scale-105">
                                                    <Link
                                                        href="/grievances"
                                                        className="px-3"
                                                        onClick={() =>
                                                            setNavbar(!navbar)
                                                        }
                                                    >
                                                        Customer Grievances
                                                    </Link>
                                                </li>
                                                <li className="flex items-center justify-start rounded-lg hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all my-3 text-[1rem] hover:scale-105">
                                                    <Link
                                                        href="/terms"
                                                        className="px-3"
                                                        onClick={() =>
                                                            setNavbar(!navbar)
                                                        }
                                                    >
                                                        Terms & Conditions
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="rounded-lg lg:hover:bg-[rgba(216,_216,_216,_0.59)] lg:px-[1.4rem] lg:py-[0.2rem] transition-all text-[2rem] lg:text-[1rem] ">
                                <Link
                                    href="https://medium.com/@xettletechnologies"
                                    target="_blank"
                                >
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div id="cta" className="flex items-center">
                        <Link
                            className="w-32 h-10 bg-[#0872e9] text-white rounded-[0.5rem] scale-[0.85] lg:scale-100 flex items-center justify-center"
                            href="/contact-us"
                        >
                            Book a Demo
                        </Link>
                        {/* <Link
              href="https://dashboard.xettle.net/"
              className="relative flex w-[7rem] h-[2.5rem] items-center justify-center text-white mx-auto rounded-lg bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)]"
            >
              Log in
            </Link> */}
                        <button
                            onClick={() => setNavbar(!navbar)}
                            id="menu-icon"
                            className="relative inline-flex z-[1000]"
                        >
                            {navbar ? <X /> : <Ham />}
                        </button>
                    </div>
                </nav>
            </header>
        </main>
    );
};

export default Header;
