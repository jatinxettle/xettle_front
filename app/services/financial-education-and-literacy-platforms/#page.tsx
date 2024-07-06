import React from "react";
import Link from "next/link";
import Educationlottie from "@/Components/educationlottie";
import Paymentserverlottie from "@/Components/paymentserverlottie";
import uiux from "./uiux.png";
import tailored from "./tailored.png";
import Image from "next/image";

export const metadata = {
    title: "Financial Literacy and Education | Xettle.net",
};

const Page = () => {
    return (
        <section className="mx-auto w-[100vw] flex flex-col items-center bg-white text-black gap-8 sm:gap-16 min-h-[90vh] pt-[16%] px-[3%] md:pt-[3%] md:px-[8%] pb-16">
            <section className="text-center w-full max-w-[1920px] sm:w-[60%] flex flex-col min-h-[95vh] justify-center pt-0 md:pt-[3%]">
                <h1 className="text-[2.5rem] font-bold text-center">
                    Platforms for{" "}
                    <span className="text-[#015dfd]">Financial Literacy</span>{" "}
                    <br /> and <span className="text-[#015dfd]">Education</span>{" "}
                    <br />
                </h1>
                <div className="self-center w-[18rem] h-[18rem] sm:w-[28rem] sm:h-[28rem]">
                    {" "}
                    <Educationlottie />
                </div>
                <p className="pt-[2rem] text-center font-medium lg:px-[10%]">
                    The significance of financial education and literacy in the
                    intricate and dynamic financial landscape of today cannot be
                    emphasized. For people to make wise financial decisions and
                    maintain their own financial security, they must be equipped
                    with the necessary information and abilities. Xettle
                    Technologies has emerged as a frontrunner in creating
                    cutting-edge financial education platforms with the goal of
                    augmenting financial literacy and advancing financial
                    inclusion, having identified this necessity.
                </p>
                <Link
                    href="/#"
                    className="get-started px-[0.7rem] py-[0.7rem] text-white mt-8 mx-auto"
                >
                    Get Started
                </Link>
            </section>

            <section className="w-[100vw] px-[5%] pt-4 lg:px-[8%] bg-transparent relative">
                <h1 className="text-[2rem] font-medium z-[1] relative">
                    The{" "}
                    <span className="text-[#015dfd] relative ">
                        Advantage of Xettle
                    </span>
                </h1>
                <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:grid-rows-[repeat(2,_minmax(35vh,1fr))]">
                    <div className="relative ecomitem1">
                        <h1 className="text-[1.6rem] font-medium pt-4">
                            Closing the Financial Literacy Gap
                        </h1>
                        <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%]">
                            Xettle Technologies is unique because of its
                            consistent dedication to financial education
                            innovation, impact, and diversity. Xettle&apos;s
                            platforms transcend conventional financial literacy
                            campaigns by catering to the distinct requirements
                            and obstacles encountered by people from diverse
                            demographic segments, socioeconomic backgrounds, and
                            life phases. Additionally, financial institutions,
                            employers, and educational institutions can use the
                            platform&apos;s capabilities to improve their own
                            financial education initiatives because
                            Xettle&apos;s financial education platforms are made
                            to seamlessly integrate with current financial
                            services and ecosystems. With the help of Xettle,
                            organizations may effectively impact the lives of
                            their stakeholders by cooperating with banks to
                            offer financial wellness programs or with schools to
                            incorporate financial literacy into the curriculum.
                        </p>
                    </div>
                    <div className="relative p-[10%] xl:w-[35vw] ecomitem2">
                        <Image src={tailored} width={1000} alt="img" />
                    </div>
                    <div className="relative ecomitem3">
                        <h1 className="text-[1.6rem] font-medium">
                            <span className="text-[#015dfd]">
                                Looking Ahead:{" "}
                            </span>
                            Creating a Future with Financial Empowerment
                        </h1>
                        <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%]">
                            The need for easily accessible, interesting, and
                            successful financial education platforms will only
                            increase as technological innovation picks up speed
                            and the financial landscape changes even more.
                            Organizations may use technology to achieve positive
                            behavior change, enhance financial results, and
                            promote a resilient and empowered financial culture
                            by collaborating with Xettle Technologies.
                        </p>
                    </div>
                    <div className="relative p-[10%] xl:w-[35vw] ecomitem4">
                        <Image src={uiux} width={1000} alt="img" />
                    </div>
                </div>
            </section>

            <section className="w-full sm:w-[85%]">
                <div className="flex flex-col w-full gap-6">
                    <h1 className="text-[2rem] font-medium">
                        Comprehending{" "}
                        <span className="text-[#015dfd] relative z-[1]">
                            Platforms for Financial Education
                        </span>
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-content-center">
                        <div>
                            <div className="flex flex-col">
                                {/* <h3 className="text-lg font-semibold text-gray-600">
                                    Seamless Checkout and Global Card Saving
                                </h3> */}
                                <p className="py-3 pb-6 text-gray-500">
                                    Financial education platforms comprise an
                                    extensive array of digital resources,
                                    instruments, and interactive modules that
                                    aim to instruct people on diverse facets of
                                    personal finance, such as debt management,
                                    retirement planning, investing, saving, and
                                    budgeting. These platforms employ technology
                                    to give customers individualized learning
                                    experiences, give them financial control,
                                    and enhance their overall financial
                                    literacy.
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-gray-600">
                                    Xettle Technologies: Transforming Education
                                    in the Financial Sector
                                </h3>
                                <p className="py-3 pb-6 text-gray-500">
                                    Xettle Technologies is dedicated to
                                    democratizing financial literacy and
                                    enabling people to become financially
                                    independent from all backgrounds. Xettle
                                    uses behavioral insights, state-of-the-art
                                    technology, and instructional best practices
                                    in conjunction with its extensive portfolio
                                    of financial education platforms to create
                                    memorable and powerful learning experiences.
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-gray-600">
                                    The accessibility and inclusion
                                </h3>
                                <p className="py-3 pb-6 text-gray-500">
                                    Xettle&apos;s financial education platforms
                                    is one of their main advantages. By
                                    providing web, mobile app, and interactive
                                    content access across many channels, Xettle
                                    guarantees that consumers may interact with
                                    the platform on any device, at any time, and
                                    from any location. Furthermore, in order to
                                    improve engagement and retention,
                                    Xettle&apos;s platforms are made to
                                    accommodate a variety of learning
                                    preferences and styles. These features
                                    include interactive simulations,
                                    gamification components, and real-world case
                                    studies.
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-gray-600">
                                    Personalized learning experiences
                                </h3>
                                <p className="py-3 pb-6 text-gray-500">
                                    Xettle&apos;s platforms leverage machine
                                    learning algorithms and powerful analytics
                                    to dynamically modify information and
                                    recommendations according to the aims,
                                    preferences, and behaviors of its users.
                                    This tailored strategy improves user
                                    engagement and pleasure while also
                                    increasing relevance and efficacy.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="get-started px-[0.7rem] py-[0.7rem] text-white mt-8 mx-auto"
                            >
                                Get Started
                            </Link>
                        </div>
                        <div>
                            <div className="my-auto">
                                <Paymentserverlottie />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-h-[30vh] w-[100vw] px-[5%] pt-16 xl:px-[10%]">
                <h1 className="text-[2rem] font-medium text-center">
                    Ready to Get Started?
                </h1>
                <p className="py-3 opacity-75 lg:text-[1.1rem] text-center">
                    The future of financial education is bright, promising, and
                    full of chances for expansion and wealth, especially with
                    Xettle Technologies leading the way.
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
        </section>
    );
};

export default Page;
