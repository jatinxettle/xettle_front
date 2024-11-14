import Image from 'next/image'
import React from 'react'
import './fintech.css'
// import hero from "./fintech-hero.png";
// import herom from "./fintech-herom.png";
import cross from './cross.webp'
import tick from './tick.webp'
import aeps from './aeps.webp'
import recharge from './recharge.webp'
import pan from './pan.webp'
import Contour from '@/Components/contour'
import cart from './cart.webp'
import Fintechlottie from '@/Components/fintechlottie'
import Link from 'next/link'

export const metadata = {
    title: 'Fin-tech Software Development | Xettle',
    description:
        'Simplify your financial operations with Xettle user-friendly fintech software. Focus on what matters most - growing your business.',
}

const fintech = () => {
    return (
        <main className="bg-[#f9fbff]">
            <section
                id="hero"
                className="mx-auto min-h-[90vh] w-[100vw] max-w-[1920px] pt-[16%] px-[3%] flex flex-col items-center md:pt-[6%] md:px-[8%] pb-16"
            >
                <h1 className="text-[2.5rem] font-bold text-center">
                    <span className="text-[#015dfd]">Fin-Tech</span> <br />{' '}
                    Softwares
                </h1>
                <div className="text-[#3c3d40]">
                    <h3 className="text-center pt-[2rem] font-bold text-[1.2rem]">
                        Unlock the Future of Finance with Fintech Software
                        Solutions
                    </h3>
                </div>
                {/* <Image
          src={hero}
          width={1000}
          className="mx-auto pt-[2rem] hidden md:block"
          quality={100}
        />
        <Image
          src={herom}
          width={1000}
          className="mx-auto pt-[2rem] block md:hidden"
          quality={100}
        /> */}
                <div className="w-[85vw] sm:w-[60vw] md:w-[40vw] xl:mt-[-10%] min-h-[20vh]">
                    <Fintechlottie />
                </div>
                <div className="text-[#3c3d40]">
                    <p className="pt-[2rem] text-center font-medium lg:px-[10%] xl:mt-[-6%]">
                        At Xettle, we are dedicated to the development of new
                        solutions in the sphere of finance. Our innovative
                        software products in the field of financial technologies
                        help organizations and people to thrive in the modern
                        world of finance.
                    </p>
                </div>

                <Link
                    href="/contact-us"
                    className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)]"
                >
                    Get Started
                </Link>
            </section>
            <section
                id="services"
                className="min-h-[100vh] w-[100vw] px-[5%] pt-4 lg:px-[8%] bg-transparent relative"
            >
                <div className="w-[100%] h-[100%] absolute z-[0] top-0 left-0 invert">
                    <Contour />
                </div>
                {/* <div className="absolute h-[100%] w-[100%] z-[1] opacity-90">
          <Image src={contour} width={2800} className="transform translate-y-[-10%] translate-x-[-5%] absolute"/>
        </div> */}
                <h1 className="text-[2rem] font-medium">
                    <span className="text-[#015dfd] relative z-[1]">
                        Comprehensive Fintech Services
                    </span>
                </h1>
                <div className="grid grid-cols-[1fr] gap-[1rem] pt-8 lg:grid-cols-5 xl:p-[5%]">
                    <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] fitem1">
                        <div className="md:w-[70%]">
                            <h2 className="text-[1.5rem] font-medium ">
                                AEPS Solutions
                            </h2>
                            <p className="text-0.92rem py-3 opacity-75">
                                Being an AEPS service provider, we provide a
                                strong platform for secure AEPS transactions
                                with the help of Aadhaar. Our services enable
                                business entities to effectively perform their
                                banking needs such as financial transactions,
                                balance checks and among others. Partner with us
                                to diversify your services portfolio and improve
                                access to financial services.
                            </p>
                            <Link
                                href="/contact-us"
                                className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
                            >
                                Get Started
                            </Link>
                        </div>
                        <Image
                            src={aeps}
                            width={150}
                            className="hidden object-contain md:block "
                            alt="img"
                        />
                    </div>
                    <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] lg:h-[100%] fitem2">
                        <h2 className="text-[1.5rem] font-medium">
                            BBPS Integration
                        </h2>
                        <p className="py-3 opacity-75 ">
                            We provide various BBPS services that help consumers
                            and corporates to pay their bills easily. We offer a
                            complete solution for payments of different bills
                            that include electricity, water, gas, telephone, and
                            many others. Become our partner and help your
                            customers to pay bills easily and in one place which
                            will increase your revenue.
                        </p>
                        <Link
                            href="/contact-us"
                            className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] fitem3">
                        <div>
                            <h2 className="text-[1.5rem] font-medium">
                                DMT Services
                            </h2>
                            <p className="py-3 opacity-75 ">
                                Domestic Money Transfer (DMT) services are
                                convenient and safe methods through which people
                                can transfer money within the country. We offer
                                a friendly interface that can be used by
                                customers to transfer and receive money within a
                                short span of time to facilitate financial
                                transactions. Become our partner to diversify
                                your financial services and meet the increasing
                                need for domestic money transfers.
                            </p>
                            <Link
                                href="/contact-us"
                                className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] fitem4">
                        <div className="md:w-[70%]">
                            <h2 className="text-[1.5rem] font-medium">
                                Recharge Services
                            </h2>
                            <p className="py-3 opacity-75 ">
                                Our recharge services are very easy and
                                convenient for people to recharge their mobile
                                phones, DTH services, data cards, etc. Our
                                service enables customers to recharge their
                                prepaid services easily and securely so that
                                they can continue to use those services. Partner
                                with us to increase the range of your services
                                and meet the increasing needs of customers in
                                the sphere of mobile and DTH recharges.
                            </p>
                            <Link
                                href="/contact-us"
                                className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
                            >
                                Get Started
                            </Link>
                        </div>
                        <Image
                            src={recharge}
                            width={150}
                            className="hidden object-contain md:block"
                            alt="img"
                        />
                    </div>
                    <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] fitem5">
                        <div className="md:w-[70%]">
                            <h2 className="text-[1.5rem] font-medium">
                                Aadhaar and PAN Verification
                            </h2>
                            <p className="py-3 opacity-75 ">
                                The Aadhaar/PAN verification services offered by
                                us are efficient and effective methods of
                                verifying people and companies. We provide a
                                strong platform for instant Aadhaar and PAN card
                                checks, for compliance, eliminating frauds and
                                establishing credibility for your financial
                                dealings or business operations. Choose us to
                                get the best verification solutions that you can
                                rely on.
                            </p>
                            <Link
                                href="/contact-us"
                                className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
                            >
                                Get Started
                            </Link>
                        </div>
                        <Image
                            src={pan}
                            width={130}
                            className="hidden object-contain md:block"
                            alt="img"
                        />
                    </div>
                </div>
            </section>
            <section
                id="packages"
                className="min-h-[100vh] w-[100vw] px-[5%] pt-16 md:px-[8%]"
            >
                <h1 className="text-[2rem] font-medium">
                    <span className="text-[#015dfd]">Packages</span>
                </h1>
                <div id="b2b">
                    <div>
                        <h2 className="text-[1.5rem] font-medium pt-4">B2B</h2>
                        <div className="grid grid-cols-1 gap-[1rem] pt-4 md:grid-cols-2">
                            <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] m-auto">
                                <h2 className="text-[1.5rem] font-medium text-center opacity-70 pb-3">
                                    Standard
                                </h2>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            AEPS
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            BBPS
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Account Opening
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Ofline Market Share
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            UPI Collection
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            PAN-UTI Software
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            NSDL Portal
                                        </span>
                                        <Image
                                            src={cross}
                                            width={30}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Domestic Money Transfer{' '}
                                        </span>
                                        <Image
                                            src={cross}
                                            width={30}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Hotel Booking Portal
                                        </span>
                                        <Image
                                            src={cross}
                                            width={30}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Bus Booking Portal
                                        </span>
                                        <Image
                                            src={cross}
                                            width={30}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Flight Booking Portal
                                        </span>
                                        <Image
                                            src={cross}
                                            width={30}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Account Opening
                                        </span>
                                        <Image
                                            src={cross}
                                            width={30}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Multi Recharge
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] m-auto">
                                <h2 className="text-[1.5rem] font-medium text-center text-[#F6A122] pb-3">
                                    Premium
                                </h2>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            AEPS
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            BBPS
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Account Opening
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Ofline Market Share
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            UPI Collection
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            PAN-UTI Software
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            NSDL Portal
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Domestic Money Transfer{' '}
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Hotel Booking Portal
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Bus Booking Portal
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Flight Booking Portal
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Account Opening
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Multi Recharge
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Reseller">
                    <div>
                        <h2 className="text-[1.5rem] font-medium pt-8">
                            Reseller
                        </h2>
                        <div className="grid grid-cols-1 gap-[1rem] pt-4 md:grid-cols-2">
                            <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                                <h2 className="text-[1.5rem] font-medium text-center opacity-70 pb-3">
                                    Standard
                                </h2>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            BBPC
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            EPS
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Account Opening
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Ofline Market Share
                                        </span>
                                        <Image
                                            src={cross}
                                            width={30}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            UPI Collection
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            PAN-UTI Software
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            NSDL Portal
                                        </span>
                                        <Image
                                            src={cross}
                                            width={30}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Domestic Money Transfer
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Hotel Booking Portal
                                        </span>
                                        <Image
                                            src={cross}
                                            width={30}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Bus Booking Portal
                                        </span>
                                        <Image
                                            src={cross}
                                            width={30}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Flight Booking Portal
                                        </span>
                                        <Image
                                            src={cross}
                                            width={30}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                                <h2 className="text-[1.5rem] font-medium text-center text-[#F6A122] pb-3">
                                    Premium
                                </h2>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            BBPC
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            EPS
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Account Opening
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Ofline Market Share
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            UPI Collection
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            PAN-UTI Software
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            NSDL Portal
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Domestic Money Transfer
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Hotel Booking Portal
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Bus Booking Portal
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Flight Booking Portal
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="B2C" className="pb-16">
                    <div>
                        <h2 className="text-[1.5rem] font-medium pt-8">B2C</h2>
                        <div className="grid grid-cols-1 gap-[1rem] pt-4 md:grid-cols-2">
                            <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            BBPC
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Hotel Booking Portal
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Bus Booking Portal
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Flight Booking Portal
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <span className="text-[1.2rem] leading-[200%] font-semibold">
                                            Multi Recharge
                                        </span>
                                        <Image
                                            src={tick}
                                            width={35}
                                            alt="img"
                                        />
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div className="items-center justify-center hidden md:flex md:flex-row">
                                <div className="items-center justify-center hidden md:flex md:flex-col pr-[10%]">
                                    <Link
                                        href="/contact-us"
                                        className="bg-[#015dfd] w-[8.5rem] h-[2.9rem] text-white mt-[2rem] rounded-lg flex justify-center items-center"
                                    >
                                        Purchase Now
                                    </Link>
                                    <Link
                                        href="mailto:sales@xettle.net"
                                        className="bg-[#202020] w-[8.5rem] h-[2.9rem] text-white mt-[2rem] rounded-lg flex justify-center items-center"
                                    >
                                        Contact Sales
                                    </Link>
                                </div>
                                <Image src={cart} width={200} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-evenly md:hidden">
                        <Link
                            href="mailto:sales@xettle.net"
                            className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[#015dfd]"
                        >
                            Contact Sales
                        </Link>

                        <Link
                            href="/contact-us"
                            className=" px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)"
                        >
                            Purchase Now
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default fintech
