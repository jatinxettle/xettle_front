import React from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "@/Components/ecomlottie";
import "./ecom.css";
import Contour from "@/Components/contour";
import commerce from "./commerce.png";
import security from "./security.png";
import inventory from "./inventory.png";
import uiux from "./uiux.png";
import tailored from "./tailored.png";

export const metadata = {
    title: "E-Commerce Developement | Xettle.net",
};

const payment = () => {
    return (
        <main className="bg-[#ffffff]">
            <div className="flex flex-col justify-center items-center mb-20 lg:py-8 pb-[1rem] lg:pt-[5rem] min-h-screen">
                <h2 className="lg:text-[50px] md:text-[40px] text-[28px] font-bold flex items-center justify-center w-screen space-x-2 mt-10 ">
                    <p className="text-center">
                        <span className={`text-[#252BBF] mx-1 md:mx-3`}>
                            E-Commerce
                        </span>
                        Softwares
                    </p>
                </h2>
                <div className="text-center max-w-[900px] w-[18rem] md:w-auto md:max-w-[1054px] space-y-4 lg:text-[18px] md:text-xl text-[12px] md:font-medium mx-auto lg:my-[20px] my-6">
                    <p className="">
                        Unlock the Future of Shopping with E-Commerce Software
                        Solutions. <br />
                        Welcome to Xettle&apos;s E-commerce Development
                        Services! At Xettle, we specialize in creating robust
                        and user-friendly e-commerce solutions tailored to your
                        unique business needs. Whether you&apos;re launching a
                        new online store or looking to enhance an existing one,
                        our team of experts is here to assist you every step of
                        the way.
                    </p>
                </div>
                <div className="md:w-[30%] w-[80%]">
                    <Lottie />
                </div>
            </div>
            <section className="min-h-[100vh] w-[100vw] px-[5%] pt-4 lg:px-[8%] bg-transparent relative">
                <div className="w-[100%] h-[100%] absolute z-[0] top-0 left-0 invert">
                    <Contour />
                </div>
                <h1 className="text-[2rem] font-medium z-[1] relative">
                    Our{" "}
                    <span className="text-[#015dfd] relative ">Services</span>
                </h1>
                <div className="grid grid-cols-[1fr] gap-[1rem] pt-8 lg:grid-cols-5 xl:p-[5%]">
                    <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] lg:h-[100%] eitem1">
                        <h2 className="text-[1.5rem] font-medium">
                            Mobile Commerce
                        </h2>
                        <p className="py-3 opacity-75 ">
                            In today&apos;s mobile-driven world, we ensure that
                            your e-commerce website is mobile-responsive and
                            optimized for smartphones and tablets. This approach
                            extends your reach to a broader audience.
                        </p>
                        <Link
                            href="/contact-us"
                            className=" px-[0.7rem] py-[0.7rem] rounded-lg text-[#015dfd] mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] eitem2">
                        <div className="md:w-[70%]">
                            <h2 className="text-[1.5rem] font-medium ">
                                E-Commerce Website Development:
                            </h2>
                            <p className="text-0.92rem py-3 opacity-75">
                                Our team is proficient in building e-commerce
                                platforms from scratch or revamping existing
                                ones. We work with various platforms, including
                                Shopify, WooCommerce, Magento, and more, to
                                provide a seamless online shopping experience
                                for your customers.
                            </p>
                            <Link
                                href="/contact-us"
                                className=" px-[0.7rem] py-[0.7rem] rounded-lg text-[#015dfd] mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
                            >
                                Get Started
                            </Link>
                        </div>
                        <Image
                            src={commerce}
                            width={150}
                            className="hidden object-contain md:block "
                            alt="img"
                        />
                    </div>
                    <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] eitem3">
                        <div className="md:w-[70%]">
                            <h2 className="text-[1.5rem] font-medium">
                                Inventory Management
                            </h2>
                            <p className="py-3 opacity-75 ">
                                Efficiently manage your product inventory, track
                                stock levels, and automate inventory updates to
                                ensure that your customers always have access to
                                the products they want.
                            </p>
                            <Link
                                href="/contact-us"
                                className=" px-[0.7rem] py-[0.7rem] rounded-lg mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%) text-[#015dfd]"
                            >
                                Get Started
                            </Link>
                        </div>
                        <Image
                            src={inventory}
                            width={150}
                            className="hidden object-contain md:block"
                            alt="img"
                        />
                    </div>
                    <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] lg:h-[100%] eitem4">
                        <h2 className="text-[1.5rem] font-medium">
                            Payment Gateway Integration
                        </h2>
                        <p className="py-3 opacity-75 ">
                            We integrate secure and reliable payment gateways,
                            allowing you to accept payments smoothly and provide
                            your customers with a secure transaction experience.
                        </p>
                        <Link
                            href="/contact-us"
                            className=" px-[0.7rem] py-[0.7rem] rounded-lg text-[#015dfd] mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] eitem5">
                        <div className="md:w-[70%]">
                            <h2 className="text-[1.5rem] font-medium">
                                Security Measures
                            </h2>
                            <p className="py-3 opacity-75 ">
                                Your customers&apos; trust is paramount. We
                                implement top-notch security features, including
                                SSL certificates, encryption, and regular
                                security audits, to protect sensitive customer
                                data.
                            </p>
                            <Link
                                href="/contact-us"
                                className=" px-[0.7rem] py-[0.7rem] rounded-lg text-[#015dfd] mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
                            >
                                Get Started
                            </Link>
                        </div>
                        <Image
                            src={security}
                            width={130}
                            className="hidden object-contain md:block"
                            alt="img"
                        />
                    </div>
                </div>
            </section>
            <section className="w-[100vw] px-[5%] pt-4 lg:px-[8%] bg-transparent relative">
                <h1 className="text-[2rem] font-medium z-[1] relative">
                    Why <span className="text-[#015dfd] relative ">Us?</span>
                </h1>
                <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:grid-rows-[repeat(2,_minmax(35vh,1fr))]">
                    <div className="relative ecomitem1">
                        <h1 className="text-[2rem] font-medium">
                            Tailored E-Commerce{" "}
                            <span className="text-[#015dfd]">Solutions</span>
                        </h1>
                        <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%]">
                            Our primary goal is to understand your unique
                            business needs and create custom e-commerce
                            solutions that align perfectly with your goals.
                            Whether you&apos;re a startup or an established
                            enterprise, we tailor our services to meet your
                            specific requirements.
                        </p>
                    </div>
                    <div className="relative p-[10%] xl:w-[35vw] ecomitem2">
                        <Image src={tailored} width={1000} alt="img" />
                    </div>
                    <div className="relative ecomitem3">
                        <h1 className="text-[2rem] font-medium">
                            Stunning Design and User{" "}
                            <span className="text-[#015dfd]">Experience</span>
                        </h1>
                        <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%]">
                            We believe that a visually appealing and
                            user-friendly website is essential for success in
                            the e-commerce world. Our designers and developers
                            work in harmony to create beautiful, responsive, and
                            intuitive websites that captivate visitors and
                            convert them into customers.
                        </p>
                    </div>
                    <div className="relative p-[10%] xl:w-[35vw] ecomitem4">
                        <Image src={uiux} width={1000} alt="img" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default payment;
