import React from "react";
import Link from "next/link";
import "./crypto.css";
import exchange from "./exchange.png";
import liquidity from "./liquidity.png";
import rules from "./rules.png";
import Image from "next/image";
import innovation from "./innovation.png";
import staking from "./staking.png";
import Lottie from "@/Components/apilottie";
import ot from "./optionstrading.png";
import ft from "./futuretrading.png";
import Bg from "@/Components/blockbg";

export const metadata = {
    title: "API Development | Xettle.net",
};

const page = () => {
    return (
        <main className="bg-[#ffffff] relative z-[-9999]">
            <div className="bg-[#FFFFFF]">
                <section
                    id="hero"
                    className="relative z-[2] bg-transparent min-h-[100vh] w-[100vw] pt-[20%] px-[3%] grid grid-cols-1 md:pt-[10%] lg:grid-cols-2 lg:place-content-center lg:pt-[5%] xl:px-[10%]"
                >
                    {/* <div className="absolute h-[100%] w-[100%] z-[-1] blur-[65px] opacity-90 object-cover md:h-[100%] md:w-[100%]">
                    <Herobg />
                    </div> */}
                    <div className="w-[100%] h-[100%] absolute z-[-1] blur-[15px] top-0 left-0">
                        <Bg />
                    </div>
                    <div className="flex items-center">
                        <div>
                            <h1 className="text-[2.3rem] text-center lg:text-left lg:text-[3rem]">
                                <span className="whitespace-nowrap text-[#015EFE]">
                                    API{" "}
                                </span>
                                Development and{" "}
                                <span className="whitespace-nowrap text-[#015EFE]">
                                    Integration
                                </span>
                            </h1>
                            <p className="text-center text-[rgba(0,_0,_0,_0.70)] pt-3 lg:text-left lg:text-[1.1rem]">
                                In the rapidly evolving landscape of digital
                                connectivity, Application Programming Interfaces
                                (APIs) have emerged as the linchpin of seamless
                                integration and efficient communication between
                                disparate systems. As businesses strive for
                                agility, scalability, and innovation, the role
                                of API development and integration has become
                                paramount. Among the pioneers driving this
                                transformation is Xettle Technologies,
                                spearheading a new era of connectivity and
                                interoperability.
                            </p>
                        </div>
                    </div>
                    <div>
                        <Lottie />
                    </div>
                </section>
                <div className="relative py-8 bg-transparent gradient-bg">
                    {/* <div className="w-[100%] h-[100%] absolute top-0 left-0 z-[-1] gradient-bg"></div> */}
                    <h2 className="md:text-[40px] text-[24px] font-medium space-x-2 flex items-center xl:w-[80%] w-[90%] mx-auto pb-8">
                        <p className="text-[#fff]">Services</p>
                        <p>Included</p>
                    </h2>
                    {/* mobile responsive cards start */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col card w-[90vw] mx-auto md:hidden bg-white rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                            <h2 className="font-medium text-[15px] p-5">
                                API Development: Building Bridges in the Digital
                                Sphere
                            </h2>
                            <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                                <p className="text-[15px] font-medium opacity-75">
                                    At the core of modern software architecture
                                    lies the APIs, that allows different
                                    software applications to communicate with
                                    each other. API development involves the
                                    creation and maintenance of these
                                    interfaces, ensuring that data and
                                    functionality can be shared across
                                    platforms, devices, and ecosystems.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col card w-[90vw] mx-auto md:hidden bg-white rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                            <h2 className="font-medium text-[15px] p-5">
                                Safety and Security
                            </h2>
                            <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                                <p className="text-[15px] font-medium opacity-75">
                                    Our API safety and security ensure data
                                    integrity, confidentiality, and access
                                    control through authentication, encryption,
                                    and authorization mechanisms.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col card w-[90vw] mx-auto md:hidden bg-white rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                            <h2 className="font-medium text-[15px] p-5">
                                Integration: Fostering Harmony Among Systems
                            </h2>

                            <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                                <p className="text-[15px] font-medium opacity-75">
                                    Integration is the process of connecting
                                    disparate systems and applications to enable
                                    them to work together cohesively. Whether
                                    it&apos;s linking internal systems within an
                                    organization or integrating with external
                                    services and platforms, effective
                                    integration is crucial.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col card w-[90vw] mx-auto md:hidden bg-white rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                            <h2 className="font-medium text-[15px] p-5">
                                The Xettle Advantage
                            </h2>

                            <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                                <p className="text-[15px] font-medium opacity-75">
                                    What sets Xettle Technologies apart is its
                                    unwavering commitment to innovation and
                                    excellence. By combining technical expertise
                                    with a customer-centric approach, Xettle
                                    empowers businesses to embrace digital
                                    transformation with confidence.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col card w-[90vw] mx-auto md:hidden bg-white rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                            <h2 className="font-medium text-[15px] p-5">
                                Regulatory Compliance
                            </h2>

                            <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                                <p className="text-[15px] font-medium opacity-75">
                                    Stay on the right side of the law with
                                    compliance features that help you navigate
                                    the evolving regulatory landscape.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col card w-[90vw] mx-auto md:hidden bg-white rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                            <h2 className="font-medium text-[15px] p-5">
                                24/7 Help and Support
                            </h2>

                            <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                                <p className="text-[15px] font-medium opacity-75">
                                    Our dedicated support team is here around
                                    the clock to assist you and your users with
                                    any queries or issues.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* mobile responsive card ends */}
                    <div className="xl:w-[80%] w-[90%] mx-auto md:flex hidden justify-between mb-4">
                        <div className="flex card lg:w-[69%] w-[49%] rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] bg-white">
                            <div className="h-[339px] xl:w-[50%] lg:w-[60%] mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                                <h2 className="font-medium lg:text-2xl text-xl max-w-xs lg:max-w-[18rem]">
                                    API Development
                                </h2>
                                <p className="text-xl font-medium opacity-75 mt-4">
                                    Building Bridges in the Digital Sphere At
                                    the core of modern software architecture
                                    lies the APIs, that allows different
                                    software applications to communicate with
                                    each other. API development involves the
                                    creation and maintenance of these
                                    interfaces, ensuring that data and
                                    functionality can be shared across
                                    platforms, devices, and ecosystems.
                                </p>
                            </div>
                            <Image
                                src={exchange}
                                width="982"
                                height="464"
                                className="w-[40%] lg:flex hidden m-auto"
                                alt="img"
                            />
                        </div>
                        <div className="card lg:w-[30%] w-[49%] h-full rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] bg-white">
                            <div className="h-[339px] w-full mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                                <h2 className="font-medium lg:text-2xl text-xl max-w-[14rem] lg:max-w-[16rem]">
                                    Safety and Security
                                </h2>
                                <p className="xl:max-w-[20rem] max-w-[18rem] text-xl font-medium opacity-75">
                                    Our API safety and security ensure data
                                    integrity, confidentiality, and access
                                    control through authentication, encryption,
                                    and authorization mechanisms.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-[80%] w-[90%] mx-auto md:flex flex-row-reverse hidden justify-between mb-4">
                        <div className="flex card lg:w-[69%] w-[49%] rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] bg-white">
                            <div className="h-[339px] xl:w-[50%] lg:w-[60%] mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                                <h2 className="font-medium lg:text-2xl text-xl max-w-xs lg:max-w-[18rem]">
                                    Integration: Fostering Harmony Among Systems
                                </h2>
                                <p className="text-xl font-medium opacity-75">
                                    Integration is the process of connecting
                                    disparate systems and applications to enable
                                    them to work together cohesively. Whether
                                    it&apos;s linking internal systems within an
                                    organization or integrating with external
                                    services and platforms, effective
                                    integration is crucial.
                                </p>
                            </div>
                            <Image
                                src={liquidity}
                                width="982"
                                height="464"
                                className="w-[40%] lg:flex hidden m-auto"
                                alt="img"
                            />
                        </div>
                        <div className="card lg:w-[30%] w-[49%] h-full rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] bg-white">
                            <div className="h-[339px] w-full mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                                <h2 className="font-medium lg:text-2xl text-xl max-w-[14rem] lg:max-w-[16rem]">
                                    The Xettle Advantage
                                </h2>
                                <p className="xl:max-w-[20rem] max-w-[18rem] text-xl font-medium opacity-75">
                                    What sets Xettle Technologies apart is its
                                    unwavering commitment to innovation and
                                    excellence. By combining technical expertise
                                    with a customer-centric approach, Xettle
                                    empowers businesses to embrace digital
                                    transformation with confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-[80%] w-[90%] mx-auto md:flex hidden justify-between mb-4">
                        <div className="flex card lg:w-[69%] w-[49%] rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] bg-white">
                            <div className="h-[339px] xl:w-[50%] lg:w-[60%] mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                                <h2 className="font-medium lg:text-2xl text-xl max-w-xs lg:max-w-[18rem]">
                                    Regulatory Compliance
                                </h2>
                                <p className="text-xl font-medium opacity-75">
                                    Stay on the right side of the law with
                                    compliance features that help you navigate
                                    the evolving regulatory landscape.
                                </p>
                            </div>
                            <Image
                                src={rules}
                                width="982"
                                height="464"
                                className="w-[40%] lg:flex hidden m-auto"
                                alt="img"
                            />
                        </div>
                        <div className="card lg:w-[30%] w-[49%] h-full rounded-2xl shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] bg-white">
                            <div className="h-[339px] w-full mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                                <h2 className="font-medium lg:text-2xl text-xl max-w-[14rem] lg:max-w-[16rem]">
                                    24/7 Help and Support
                                </h2>
                                <p className="xl:max-w-[20rem] max-w-[18rem] text-xl font-medium opacity-75">
                                    Our dedicated support team is here around
                                    the clock to assist you and your users with
                                    any queries or issues.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-20 w-[80%] mx-auto">
                    <h2 className="md:text-[50px] text-[38px] font-extralight pb-[20px] md:pb-[73px]">
                        Specialities
                    </h2>
                    <div className="grid gap-6 md:grid-cols-3 md:gap-12">
                        <div>
                            {/* <h2 className="md:text-3xl text-[20px] font-extralight">
                                How Secure is the exchange?
                            </h2> */}
                            <p className="md:text-xxl text-[15px] font-extralight py-3">
                                Xettle prioritizes security and compliance,
                                embedding robust safeguards and encryption
                                protocols into its API development and
                                integration processes. This proactive approach
                                not only protects sensitive data but also
                                instills trust and confidence among users and
                                stakeholders.
                            </p>
                        </div>
                        <div>
                            {/* <h2 className="md:text-3xl text-[20px] font-extralight">
                                Is your platform user-friendly?
                            </h2> */}
                            <p className="md:text-xxl text-[15px] font-extralight py-3">
                                We specializes in seamless integration solutions
                                that streamline workflows, and unlock the full
                                potential of data and resources. By
                                understanding the unique requirements and
                                objectives of each client, Xettle develops
                                tailored integration strategies that align with
                                business goals and drive tangible outcomes.
                                Through meticulous planning, agile development
                                methodologies, and rigorous testing, Xettle
                                ensures smooth implementation and uninterrupted
                                operation.
                            </p>
                        </div>
                        <div>
                            {/* <h2 className="md:text-3xl text-[20px] font-extralight lg:whitespace-nowrap">
                                Can I customize my exchange?
                            </h2> */}
                            <p className="md:text-xxl text-[15px] font-extralight py-3">
                                We understands that successful API development
                                and integration extend beyond
                                technology—it&apos;s about fostering
                                collaboration, driving efficiency, and fueling
                                innovation across the entire organization.
                                Through comprehensive training, documentation,
                                and support services, Xettle empowers clients to
                                harness the full potential of their
                                interconnected systems and drive sustainable
                                growth in a digital-first world.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:pt-16 py-20 text-center flex flex-col justify-center items-center space-y-10 md:space-y-[31px]">
                    <p className="md:text-[20px] text-[15px] font-base max-w-[18rem] md:max-w-[50rem]">
                        In conclusion, API development and integration are the
                        cornerstones of modern digital ecosystems, enabling
                        seamless communication, collaboration, and innovation.
                        With Xettle Technologies at the helm, businesses can
                        navigate this complex landscape with confidence,
                        leveraging the power of connectivity to unlock new
                        opportunities and drive sustainable growth.
                    </p>
                    <Link
                        href="/contact-us"
                        className="relative flex w-[8.5rem] h-[2.9rem] items-center justify-center text-white mt-3 mx-auto rounded-lg bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)]"
                    >
                        Contact Us Now!
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default page;
