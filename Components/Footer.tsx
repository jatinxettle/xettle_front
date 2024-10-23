import React from "react";
import "./footer.css";

import Image from "next/image";
import Link from "next/link";
import Logo from "app/logo-wt.png";

export const Footer = () => {
    return (
        <main>
            <footer className="bg-[#081121]">
                <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex justify-center text-teal-300 sm:justify-start">
                                <Image src={Logo} alt="logo" width={180} />
                            </div>

                            <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left">
                                This is the place where quality meets
                                innovation. Discover revolutionary solutions
                                that will transform the way you deliver value to
                                your customers, quickly and easily.
                            </p>

                            <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
                                <li>
                                    <Link
                                        href="https://www.facebook.com/XettleTechnologies"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-white transition hover:text-white/75"
                                    >
                                        <span className="sr-only">
                                            Facebook
                                        </span>
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <g>
                                                <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="https://www.instagram.com/xettle_technologies/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-white transition hover:text-white/75"
                                    >
                                        <span className="sr-only">
                                            Instagram
                                        </span>
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <g>
                                                <path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z" />
                                                <path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" />
                                                <circle
                                                    cx="18.406"
                                                    cy="5.594"
                                                    r="1.44"
                                                />
                                            </g>
                                        </svg>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="https://twitter.com/Xettle_tech"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-white transition hover:text-white/75"
                                    >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="m18.9,1.153h3.682l-8.042,9.189,9.46,12.506h-7.405l-5.804-7.583-6.634,7.583H.469l8.6-9.831L0,1.153h7.593l5.241,6.931,6.065-6.931Zm-1.293,19.494h2.039L6.482,3.239h-2.19l13.314,17.408Z" />
                                        </svg>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="https://www.linkedin.com/company/xettle-technologies"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-white transition hover:text-white/75"
                                    >
                                        <span className="sr-only">
                                            Linkedin
                                        </span>
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <g>
                                                <path
                                                    id="Path_2520"
                                                    d="M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908   V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065   c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745   C6.26,7.284,5.479,8.065,4.515,8.065L4.515,8.065 M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497   C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245   c-0.012-0.819-0.685-1.474-1.503-1.463"
                                                />
                                            </g>
                                        </svg>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="https://in.pinterest.com/Xettletechnologies/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-white transition hover:text-white/75"
                                    >
                                        <span className="sr-only">
                                            Pintrest
                                        </span>
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <g>
                                                <path d="M12.01,0C5.388,0,0.02,5.368,0.02,11.99c0,5.082,3.158,9.424,7.618,11.171c-0.109-0.947-0.197-2.408,0.039-3.444   c0.217-0.938,1.401-5.961,1.401-5.961s-0.355-0.72-0.355-1.776c0-1.668,0.967-2.911,2.171-2.911c1.026,0,1.52,0.77,1.52,1.688   c0,1.026-0.651,2.566-0.997,3.997c-0.286,1.194,0.602,2.171,1.776,2.171c2.132,0,3.77-2.25,3.77-5.487   c0-2.872-2.062-4.875-5.013-4.875c-3.414,0-5.418,2.556-5.418,5.201c0,1.026,0.395,2.132,0.888,2.734   C7.52,14.615,7.53,14.724,7.5,14.842c-0.089,0.375-0.296,1.194-0.336,1.362c-0.049,0.217-0.178,0.266-0.405,0.158   c-1.5-0.701-2.438-2.882-2.438-4.648c0-3.78,2.743-7.253,7.924-7.253c4.155,0,7.391,2.961,7.391,6.928   c0,4.135-2.605,7.461-6.217,7.461c-1.214,0-2.359-0.632-2.743-1.382c0,0-0.602,2.289-0.75,2.852   c-0.266,1.046-0.997,2.349-1.49,3.148C9.562,23.812,10.747,24,11.99,24c6.622,0,11.99-5.368,11.99-11.99C24,5.368,18.632,0,12.01,0   z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-3 pt-4">
                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">
                                    Services
                                </p>

                                <nav className="mt-5">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <Link
                                                className="text-white transition hover:text-white/75"
                                                href="/services/aeps"
                                            >
                                                AePS Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-white transition hover:text-white/75"
                                                href="/services/utility-payments"
                                            >
                                                Utility Payment Solutions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-white transition hover:text-white/75"
                                                href="/services/domestic-money-transfer"
                                            >
                                                Domestic Money Transfer
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-white transition hover:text-white/75"
                                                href="/services/micro-atm"
                                            >
                                                Micro ATM
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-white transition hover:text-white/75"
                                                href="/services/fintech-software"
                                            >
                                                Fin-Tech Software
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-white transition hover:text-white/75"
                                                href="/services/payout-solutions"
                                            >
                                                Payout Solutions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-white transition hover:text-white/75"
                                                href="/services/kyc-and-validation"
                                            >
                                                KYC and Validation
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">
                                    Helpful Links
                                </p>

                                <nav className="mt-5">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <Link
                                                className="text-white transition hover:text-white/75"
                                                href="/about-us"
                                            >
                                                About Us
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                className="text-white transition hover:text-white/75"
                                                href="/contact-us"
                                            >
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">
                                    Contact
                                </p>

                                <ul className="mt-5 space-y-4 text-sm">
                                    <li>
                                        <Link
                                            className="flex items-center justify-center sm:justify-start gap-1.5 group text-white transition group-hover:text-white/75"
                                            href="mailto:letstalk@xettle.net"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-white shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                            letstalk@xettle.net
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="flex items-center justify-center sm:justify-start gap-1.5 group text-white transition group-hover:text-white/75"
                                            href="tel:+919654607040"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-white shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                            +91 9654607040
                                        </Link>
                                    </li>

                                    <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                                        <Link
                                            className="flex items-center justify-center sm:justify-start gap-1.5 group text-white transition group-hover:text-white/75"
                                            href="https://maps.app.goo.gl/oPRdRUA73JYx1amj8"
                                            target="_blank"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-white shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>

                                            <address className="-mt-0.5 not-italic text-white">
                                                44 IIND FLOOR REGAL BUILDING, CONNAUGHT PLACE, NEWDELHI
                                            </address>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 mt-12 border-t border-gray-800">
                        <div className="text-center sm:flex sm:justify-between sm:text-left">
                            <p className="text-sm text-gray-400">
                                <span className="block sm:inline">
                                    All rights reserved.
                                </span>

                                <Link
                                    className="inline-block text-gray-400 underline transition hover:text-white/75"
                                    href="/terms"
                                >
                                    {" "}
                                    Terms & Conditions{" "}
                                </Link>

                                <span>&middot;</span>

                                <Link
                                    className="inline-block text-gray-400 underline transition hover:text-white/75"
                                    href="/privacy"
                                >
                                    {" "}
                                    Privacy Policy{" "}
                                </Link>
                                <span>&middot;</span>

                                <Link
                                    className="inline-block text-gray-400 underline transition hover:text-white/75"
                                    href="/grievances"
                                >
                                    {" "}
                                    Customer Grievances{" "}
                                </Link>
                            </p>

                            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                                &copy; 2024 Xettle Technologies
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
};
