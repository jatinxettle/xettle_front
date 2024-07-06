import Image from "next/image";
import React from "react";
import Contour from "@/Components/contour";

import "./game.css";

import himg from "./bg.png";
import bbpsh from "./bbpsh.png";
import dth from "./dth.png";
import bbp1 from "./bbps1.png";
import Link from "next/link";

export const metadata = {
    title: "Utility And Bill Payment | Xettle.net",
};

const page = () => {
    return (
        <main className="bg-[#f9fbff]">
            <section
                id="hero"
                className="bg-transparent gradient-bg relative z-[2] min-h-[100vh] w-[100vw] pt-[20%] px-[3%] grid grid-cols-1 md:pt-[10%] lg:grid-cols-2 lg:place-content-center lg:pt-[5%] xl:px-[10%]"
            >
                {/* <div className="w-[100%] h-[100%] absolute z-[-1] blur-[1px] top-0 left-0">
                    <Image
                        src={himg}
                        alt="hero-image"
                        className="h-full"
                        object-fit="cover"
                    />
                </div> */}
                <div className="w-[100%] h-[100%] absolute z-[-1] blur-[1px] top-0 left-0 invert">
                    <Contour />
                </div>
                <div className="flex items-center">
                    <div>
                        <h1 className="text-[2.3rem] text-center lg:text-left lg:text-[3rem]">
                            Utility{" "}
                            <span className="whitespace-nowrap text-[#015EFE]">
                                Bill Payment{" "}
                            </span>
                            And{" "}
                            <span className="whitespace-nowrap text-[#015EFE]">
                                Recharge
                            </span>
                        </h1>
                        <p className="text-center text-[rgba(0,_0,_0,_0.70)] pt-3 lg:text-left lg:text-[1.1rem]">
                            <span className="font-semibold">
                                Transform your shop into a convenient bill
                                payment and recharge center with Xettle&apos;s
                                BBPS and Utility Services.
                            </span>
                            <br />
                            Merchants can help customers to pay utility bills
                            and mobile/DTH connections, especially in those
                            areas where there are no other options. Consumers
                            can get these basic services locally without having
                            to wait for long, while the merchants get
                            commissions on each sale.
                        </p>
                    </div>
                </div>
                <div>
                    <Image src={bbpsh} width={900} alt="img" />
                </div>
            </section>
            <section
                id="description"
                className="min-h-[100vh] w-[100vw] px-[5%] pt-16 xl:px-[10%]"
            >
                <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:grid-rows-[repeat(2,_minmax(35vh,1fr))]">
                    <div className="relative gitem1">
                        <h1 className="text-[2rem] font-medium">
                            Xettle&apos;s{" "}
                            <span className="text-[#015dfd]">BBPS</span> &
                            Recharge Services
                        </h1>
                        <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%]">
                            <span className="font-black text-black">
                                High Commissions
                            </span>
                            <br />
                            Make attractive commissions on each bill payment and
                            recharge transaction. The competitive commission
                            structure boosts your income and offers a stable
                            source of income for your business.
                        </p>
                        <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%]">
                            <span className="font-black text-black">
                                Comprehensive Service Range
                            </span>
                            <br />
                            Pay utility bills, mobile recharges, DTH recharges
                            and other services across the globe. Offer your
                            customers a solution so that they can come back to
                            you time and again, increasing overall revenue.
                        </p>
                    </div>
                    <div className="relative p-[10%] xl:w-[35vw] gitem2">
                        <Image
                            className="s scale-125"
                            src={bbp1}
                            width={1000}
                            alt="img"
                        />
                    </div>
                    <div className="relative gitem3">
                        <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%]">
                            <span className="font-black text-black">
                                Increased Profitability
                            </span>
                            <br />
                            Working with Xettle means that you receive high
                            commission rates that will improve your revenues as
                            you provide valuable services to your community.
                        </p>
                        <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%]">
                            <span className="font-black text-black">
                                Expand Your Offerings
                            </span>
                            <br />
                            Offer these basic services to attract more clients
                            and set your business as a one-stop shop for all
                            your customers&apos; needs.
                        </p>
                    </div>
                    <div className="relative p-[10%] xl:w-[35vw] gitem4">
                        <Image src={dth} width={900} alt="img" />
                    </div>
                </div>
            </section>
            <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#777afa]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                                {/* <h2 className="text-dark text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                                    With Xettle&apos;s AePS Services
                                </h2> */}
                                {/* <p className="text-body-color text-base dark:text-dark-6">
                                        Making Payments Easier
                                    </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                                <div className="bg-[#056fe3] mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-8 w-9"
                                        color="#fff"
                                        fill="none"
                                    >
                                        <path
                                            d="M3 13.3333C3 13.3333 4.5 14 6.5 17C6.5 17 6.78485 16.5192 7.32133 15.7526M17 6C14.7085 7.14577 12.3119 9.55181 10.3879 11.8223"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M8 13.3333C8 13.3333 9.5 14 11.5 17C11.5 17 17 8.5 22 6"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                                    Instant Confirmation
                                </h4>
                                <p className="text-body-color dark:text-dark-6">
                                    Get confirmation for all the bills and
                                    recharges on the same page to make the
                                    transaction process fast and secure.
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-8 w-9"
                                        color="#fff"
                                        fill="none"
                                    >
                                        <path
                                            d="M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        />
                                        <path
                                            d="M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        />
                                        <path
                                            d="M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        />
                                        <path
                                            d="M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        />
                                        <path
                                            d="M20 6V18M18 20H6M18 4H6M4 6V18"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M16.5 9C16.5 8.53406 16.5 8.30109 16.4239 8.11732C16.3224 7.87229 16.1277 7.67761 15.8827 7.57612C15.6989 7.5 15.4659 7.5 15 7.5H9C8.53406 7.5 8.30109 7.5 8.11732 7.57612C7.87229 7.67761 7.67761 7.87229 7.57612 8.11732C7.5 8.30109 7.5 8.53406 7.5 9C7.5 9.46594 7.5 9.69891 7.57612 9.88268C7.67761 10.1277 7.87229 10.3224 8.11732 10.4239C8.30109 10.5 8.53406 10.5 9 10.5H15C15.4659 10.5 15.6989 10.5 15.8827 10.4239C16.1277 10.3224 16.3224 10.1277 16.4239 9.88268C16.5 9.69891 16.5 9.46594 16.5 9Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M16.5 15C16.5 14.5341 16.5 14.3011 16.4239 14.1173C16.3224 13.8723 16.1277 13.6776 15.8827 13.5761C15.6989 13.5 15.4659 13.5 15 13.5H9C8.53406 13.5 8.30109 13.5 8.11732 13.5761C7.87229 13.6776 7.67761 13.8723 7.57612 14.1173C7.5 14.3011 7.5 14.5341 7.5 15C7.5 15.4659 7.5 15.6989 7.57612 15.8827C7.67761 16.1277 7.87229 16.3224 8.11732 16.4239C8.30109 16.5 8.53406 16.5 9 16.5H15C15.4659 16.5 15.6989 16.5 15.8827 16.4239C16.1277 16.3224 16.3224 16.1277 16.4239 15.8827C16.5 15.6989 16.5 15.4659 16.5 15Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                                    All Bill Payments & Recharges Under One Roof
                                </h4>
                                <p className="text-body-color dark:text-dark-6">
                                    Manage utility bills, mobile recharges, and
                                    DTH services in one place with the help of
                                    BBPS offered by Xettle.
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="h-8 w-9"
                                        color="#fff"
                                        fill="none"
                                    >
                                        <path
                                            d="M2 12C2 7.52166 2 5.28249 3.39124 3.89124C4.78249 2.5 7.02166 2.5 11.5 2.5C15.9783 2.5 18.2175 2.5 19.6088 3.89124C21 5.28249 21 7.52166 21 12C21 16.4783 21 18.7175 19.6088 20.1088C18.2175 21.5 15.9783 21.5 11.5 21.5C7.02166 21.5 4.78249 21.5 3.39124 20.1088C2 18.7175 2 16.4783 2 12Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12.3638 7.72209L13.2437 9.49644C13.3637 9.74344 13.6837 9.98035 13.9536 10.0257L15.5485 10.2929C16.5684 10.4643 16.8083 11.2103 16.0734 11.9462L14.8335 13.1964C14.6236 13.4081 14.5086 13.8164 14.5736 14.1087L14.9285 15.6562C15.2085 16.8812 14.5636 17.355 13.4887 16.7148L11.9939 15.8226C11.7239 15.6613 11.2789 15.6613 11.004 15.8226L9.50913 16.7148C8.43925 17.355 7.78932 16.8761 8.06929 15.6562L8.42425 14.1087C8.48925 13.8164 8.37426 13.4081 8.16428 13.1964L6.92442 11.9462C6.1945 11.2103 6.42947 10.4643 7.44936 10.2929L9.04419 10.0257C9.30916 9.98035 9.62912 9.74344 9.74911 9.49644L10.629 7.72209C11.109 6.7593 11.8889 6.7593 12.3638 7.72209Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                                    Attractive Commission Rates
                                </h4>
                                <p className="text-body-color dark:text-dark-6">
                                    Competitive Commission rates on each
                                    recharge and bill payment through
                                    Xettle&apos;s BBPS services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="games"
                className="min-h-[30vh] w-[100vw] px-[5%] pt-16 xl:px-[10%] pb-8"
            >
                {/* <h1 className="text-[2rem] font-medium text-center">
                    Ready to Get Started?
                </h1> */}
                <p className="py-3 opacity-75 lg:text-[1.1rem] text-center">
                    Get started with Xettle&apos;s BBPS and Recharge Services
                    today and start earning with our easy-to-use platform!
                </p>
                <div className="text-center">
                    <Link
                        href="/contact-us"
                        className="relative flex w-[8.5rem] h-[2.9rem] items-center justify-center text-white mt-3 mx-auto rounded-lg bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)]"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default page;
