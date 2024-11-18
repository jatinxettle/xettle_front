import React, { lazy } from 'react'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['500', '700'],
})

import Image from 'next/image'

import './landing.css'
import dynamic from 'next/dynamic'

import gateway from './gateway.webp'
import stop from './stop.webp'
import tailored from './tailored.webp'
import Contour from '@/Components/contourimg'
const Herolottie = dynamic(() => import('../Components/herolottie'), {
    ssr: false, // Disable server-side rendering for this component if it's client-only
    loading: () => <></>, // Optional loading state
})
const Herobg = dynamic(() => import('../Components/herobg'), {
    ssr: false, // Disable server-side rendering for this component if it's client-only
    loading: () => <></>, // Optional loading state
})
const Terminal = dynamic(() => import('../Components/Terminal'), {
    ssr: false, // Disable server-side rendering for this component if it's client-only
    loading: () => <></>, // Optional loading state
})
import DiscoverBento from '@/Components/DiscoverBento'

// export const metadata = {
//     title: 'Home | Xettle.net',
// }

const page = () => {
    return (
        <main className="bg-[#f9fbff] relative z-[-9999]">
            <section
                id="hero"
                className="relative min-h-[100vh] mx-auto w-[100vw] max-w-[2400px] pt-[20%] px-[3%] grid grid-cols-1 md:pt-[10%] lg:grid-cols-2 lg:place-content-center lg:pt-[5%] xl:px-[10%]"
            >
                {/* <video
          className="absolute h-[100%] w-[100%] z-[-1] object-cover blur-[150px] opacity-90 md:opacity-70 md:h-[100%] md:w-[100%]"
          src="https://cdn.discordapp.com/attachments/928251442127601694/1159538074812960808/Untitled_online-video-cutter.com.mp4?ex=653162fc&is=651eedfc&hm=9bc91ed98ae28da3e3d0ecacc58fb23500c2ec395856b9524cadc6714a930679&"
          autoPlay
          muted
          loop
        ></video> */}
                <div className="absolute h-[100%] w-[100%] z-[-1] blur-[65px] opacity-90 object-cover md:h-[100%] md:w-[100%]">
                    <Herobg />
                </div>
                <div className="flex items-center">
                    <div className={roboto.className}>
                        <h1 className="text-[2.3rem] text-center lg:text-left lg:text-[3rem]">
                            <span className="whitespace-nowrap text-[#015EFE]">
                                Software
                            </span>
                            ,{' '}
                            <span className="whitespace-nowrap text-[#015EFE]">
                                Fin-Tech
                            </span>
                            , and{' '}
                            <span className="whitespace-nowrap beyond">
                                Beyond.
                            </span>
                        </h1>
                        <p className="text-justify text-[rgba(0,_0,_0,_0.70)] pt-3 lg:text-[1.1rem] font-medium">
                            The mission of Xettle Technologies is to advance
                            financial inclusion through secure and efficient
                            digital solutions. With services such as Micro ATMs,
                            KYC, and Identity Verification, Xettle enables
                            individuals and businesses to conveniently access
                            banking and financial services.
                        </p>
                        <div className="mt-8 text-center lg:text-left h-fit">
                            <Link
                                href="/contact-us"
                                className="get-started px-[0.7rem] py-[0.7rem] rounded-lg text-white mt-8 mx-auto bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)] transition-all duration-500 hover:shadow-[0px_12px_20px_3px_#3445e58a]"
                            >
                                Get Started
                            </Link>
                            {/* <Link
                                href="https://xettle.net/xettle_profile.pdf"
                                className="ml-[20px] px-[0.7rem] py-[0.45rem] rounded-lg text-black mt-8 mx-auto border-solid border-4 border-[#015efe] transition-all duration-500 hover:text-white hover:shadow-[inset_0px_0px_0px_50px_#015efe]"
                            >
                                Download Profile
                            </Link> */}
                        </div>
                    </div>
                </div>
                <div>
                    <Herolottie />
                </div>
            </section>
            <section
                id="usp"
                className="min-h-[100vh] w-[100vw] px-[5%] pt-16 xl:px-[10%]"
            >
                <div className="grid grid-cols-[repeat(1,_minmax(0,_1.5fr))] place-items-center md:grid-cols-2 md:grid-rows-[repeat(3,_minmax(35vh,1fr))]">
                    <div className="w-[90%] pt-[67.5%] relative flex justify-center items-center">
                        <div className="h-[80%] w-[90%] absolute translate-y-[-55%] usp-card flex justify-center">
                            <Image
                                src={gateway}
                                width={500}
                                quality={100}
                                className="object-cover"
                                alt="img"
                            />
                        </div>
                    </div>
                    <div className="w-[90%] pt-[65%] relative flex justify-center items-center">
                        <div className="h-[80%] w-[90%] absolute translate-y-[-60%] flex items-center">
                            <div>
                                <h2 className="text-[1.4rem] font-medium lg:text-[2rem] pt-4">
                                    Streamlined Payment Solutions
                                </h2>
                                <div className={roboto.className}>
                                    <p className="py-3 opacity-75 lg:text-[1.1rem] text-justify">
                                        We have ensured that accepting payments
                                        is as easy as can be. Whether you are an
                                        online business or a physical store, our
                                        system ensures that the transactions are
                                        seamless and safe.
                                    </p>
                                    <Link
                                        href="/contact-us"
                                        className="text-[#015EFE] text-[1.1rem]"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[90%] pt-[67.5%] relative flex justify-center items-center">
                        <div className="h-[80%] w-[90%] absolute translate-y-[-55%] usp-card flex justify-center">
                            <Image
                                src={stop}
                                width={500}
                                quality={100}
                                className="object-cover scale-90"
                                alt="img"
                            />
                        </div>
                    </div>
                    <div className="w-[90%] pt-[65%] relative flex justify-center items-center">
                        <div className="h-[80%] w-[90%] absolute translate-y-[-60%] flex items-center">
                            <div>
                                <h2 className="text-[1.4rem] font-medium lg:text-[2rem] pt-4">
                                    Everything in One Place
                                </h2>
                                <div className={roboto.className}>
                                    <p className="py-3 opacity-75 lg:text-[1.1rem] text-justify">
                                        Managing a business is not a joke. That
                                        is why we have developed a single
                                        platform for all your software and
                                        financial requirements. Fewer problems,
                                        more concentration on the essentials.
                                    </p>
                                    <Link
                                        href="/contact-us"
                                        className="text-[#015EFE] text-[1.1rem]"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[90%] pt-[67.5%] relative flex justify-center items-center">
                        <div className="h-[80%] w-[90%] absolute translate-y-[-55%] usp-card flex justify-center ">
                            <Image
                                src={tailored}
                                width={500}
                                quality={100}
                                className="scale-90 object-cover"
                                alt="img"
                            />
                        </div>
                    </div>
                    <div className="w-[90%] pt-[65%] relative flex justify-center items-center">
                        <div className="h-[80%] w-[90%] absolute translate-y-[-60%] flex items-center">
                            <div>
                                <h2 className="text-[1.4rem] font-medium lg:text-[2rem] pt-4">
                                    Built for Your Business
                                </h2>
                                <div className={roboto.className}>
                                    <p className="py-3 opacity-75 lg:text-[1.1rem] text-justify">
                                        Every company is unique. Our services
                                        are custom-made to meet your needs and
                                        objectives, guaranteeing you the
                                        assistance you need to excel.
                                    </p>
                                    <Link
                                        href="/contact-us"
                                        className="text-[#015EFE] text-[1.1rem] object-cover"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="dev"
                className="min-h-[50vh] w-[100vw] px-[5%] pt-16 xl:px-[10%] py-[10%] pb-[5%] mt-[7%] relative flex flex-wrap"
            >
                <div className="w-[100%] h-[100%] absolute z-[-1] top-0 left-0">
                    <Contour />
                </div>
                <div className="my-auto grid grid-cols-1 text-white place-items-center md:grid-cols-2 md:grid-rows-1">
                    <div>
                        <h2 className="text-[2rem] font-bold text-center md:text-left">
                            Developer-Friendly
                        </h2>
                        <p className="py-3 text-center opacity-75 md:text-left w-[90%] lg:text-[1.1rem] font-medium">
                            For the tech-savvy, we provide well-documented APIs
                            with clear documentation. Easy to build and
                            integrate with - and we&apos;ll talk your language.
                        </p>
                    </div>
                    <div className="w-[100%]">
                        <Terminal />
                    </div>
                </div>
            </section>
            <section
                id="discover"
                className="min-h-[50vh] w-[100vw] px-[5%] py-16 xl:px-[10%] relative"
            >
                <div className="w-[100%] h-[100%] absolute z-[-1] top-0 left-0 blur-[65px]">
                    <Herobg />
                </div>
                <div className="grid grid-cols-1 text-black place-items-center lg:grid-cols-2">
                    <div>
                        <h3 className="text-[2rem] font-bold">
                            Why
                            <span className="text-[#015dfd]"> Xettle?</span>
                        </h3>
                        <div className="py-3 opacity-75 w-[90%] lg:text-[1.1rem] font-medium">
                            <ul className="list-disc">
                                <li>
                                    Working experience in software and finance
                                    for years
                                </li>
                                <li>
                                    Solutions that are easy for the users to
                                    implement while solving complicated issues
                                </li>
                                <li>
                                    Services that can change with your business
                                    as it grows.
                                </li>
                            </ul>
                        </div>
                        <h3 className="text-[2rem] font-bold mt-4">
                            Let&apos;s Work Together
                        </h3>
                        <p className="py-3 opacity-75 w-[90%] lg:text-[1.1rem] font-medium">
                            Are you ready to level up your business? We would
                            like to discuss with you the features that will
                            allow Xettle to meet your objectives.
                        </p>
                    </div>
                    <div>
                        <DiscoverBento />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page
