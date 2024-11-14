import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import './game.css'
import './betting.css'

import skill from './gameskill.png'
import chances from './gamechances.png'
import carrom from './carrom.png'
import chess from './chess.png'
import horse from './horse.png'
import patti from './patti.png'
import rummy from './rummy.png'
import jack from './jack.png'
import roulette from './roulette.png'
import bingo from './bingo.png'
import Gamelottie from '@/Components/verificationlottie'
import { Description } from '@radix-ui/react-dialog'

export const metadata = {
    title: 'KYC And Verification | Xettle',
    description:
        'Secure and quick identity verification is guaranteed by Xettle KYC solution. Obtain compliance and establish credibility for modern business with quick, trustworthy verification.',
}

const page = () => {
    return (
        <main className="bg-[#f9fbff]">
            <section
                id="hero"
                className="relative bg-transparent min-h-[100vh] w-[100vw] pt-[20%] px-[3%] grid grid-cols-1 md:pt-[10%] lg:grid-cols-2 lg:place-content-center lg:pt-[5%] xl:px-[10%]"
            >
                {/* <div className="absolute h-[100%] w-[100%] z-[-1] blur-[65px] opacity-90 object-cover md:h-[100%] md:w-[100%]">
          <Herobg />
        </div> */}
                <div className="flex items-center">
                    <div>
                        <h1 className="text-[2.3rem] text-center lg:text-left lg:text-[3rem]">
                            <span className="whitespace-nowrap text-[#015EFE]">
                                KYC{' '}
                            </span>
                            And{' '}
                            <span className="whitespace-nowrap text-[#015EFE]">
                                Identity Verification.
                            </span>
                        </h1>
                        <p className=" text-[rgba(0,_0,_0,_0.70)] pt-3 lg:text-[1.1rem] text-justify">
                            Security and trust are two of the most important
                            aspects people look for in the modern world. Xettle
                            Technologies offers innovative solutions in KYC and
                            identity verification, which are critical in
                            enhancing trust, managing risks, and addressing
                            compliance issues.
                        </p>
                    </div>
                </div>
                <div>
                    {/* <Image src={heroimg} width={1000} quality={100} /> */}

                    <Gamelottie />
                </div>
            </section>
            <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#777afa] mt-10">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                                <h2 className="text-dark text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                                    With Xettle&apos;s AePS Services
                                </h2>
                                {/* <p className="text-body-color text-base dark:text-dark-6">
                                        Making Payments Easier
                                    </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap">
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
                                            d="M12 22L10 16H2L4 22H12ZM12 22H16"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 13V12.5C12 10.6144 12 9.67157 11.4142 9.08579C10.8284 8.5 9.88562 8.5 8 8.5C6.11438 8.5 5.17157 8.5 4.58579 9.08579C4 9.67157 4 10.6144 4 12.5V13"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M19 13C19 14.1046 18.1046 15 17 15C15.8954 15 15 14.1046 15 13C15 11.8954 15.8954 11 17 11C18.1046 11 19 11.8954 19 13Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            d="M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            d="M14 17.5H20C21.1046 17.5 22 18.3954 22 19.5V20C22 21.1046 21.1046 22 20 22H19"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                                    Dedicated Customer Support
                                </h4>
                                <p className="text-body-color dark:text-dark-6">
                                    Benefit from 24/7 customer support, ensuring
                                    all your queries and issues are resolved
                                    promptly and efficiently.
                                </p>
                            </div>
                        </div>
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
                                            d="M12 2V6M8 4L8 6M16 4V6"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M19 6.5C19.7745 6.66593 20.3588 6.94287 20.8284 7.40508C22 8.55821 22 10.4141 22 14.126C22 17.8378 22 19.6938 20.8284 20.8469C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8469C2 19.6938 2 17.8378 2 14.126C2 10.4141 2 8.55821 3.17157 7.40508C3.64118 6.94287 4.2255 6.66593 5 6.5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M18.5 14H18.491"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M5.50996 14H5.50098"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14.5 14C14.5 15.3807 13.3807 16.5 12 16.5C10.6193 16.5 9.5 15.3807 9.5 14C9.5 12.6193 10.6193 11.5 12 11.5C13.3807 11.5 14.5 12.6193 14.5 14Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </div>
                                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                                    High Commission
                                </h4>
                                <p className="text-body-color dark:text-dark-6">
                                    Earn competitive commissions on every
                                    transaction, maximizing your profits and
                                    providing a lucrative opportunity for your
                                    business growth.
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
                                            d="M18.9349 13.9453L18.2646 10.2968C17.9751 8.72096 17.8303 7.93303 17.257 7.46651C16.6837 7 15.8602 7 14.2132 7H9.78685C8.1398 7 7.31628 7 6.74298 7.46651C6.16968 7.93303 6.02492 8.72096 5.73538 10.2968L5.06506 13.9453C4.46408 17.2162 4.16359 18.8517 5.08889 19.9259C6.01419 21 7.72355 21 11.1423 21H12.8577C16.2765 21 17.9858 21 18.9111 19.9259C19.8364 18.8517 19.5359 17.2162 18.9349 13.9453Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M12 10.5V17M9.5 15L12 17.5L14.5 15"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M21 11C21.1568 10.9209 21.2931 10.8212 21.4142 10.6955C22 10.0875 22 9.10893 22 7.15176C22 5.1946 22 4.21602 21.4142 3.60801C20.8284 3 19.8856 3 18 3L6 3C4.11438 3 3.17157 3 2.58579 3.60801C2 4.21602 2 5.1946 2 7.15176C2 9.10893 2 10.0875 2.58579 10.6955C2.70688 10.8212 2.84322 10.9209 3 11"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                                    Easy Cash Withdrawal
                                </h4>
                                <p className="text-body-color dark:text-dark-6">
                                    Enjoy seamless and hassle-free cash
                                    withdrawals, making it convenient for you to
                                    access funds whenever needed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="description"
                className="min-h-[30vh] w-[100vw] px-[5%] pt-16 xl:px-[10%]"
            >
                <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:grid-rows-[repeat(1,_minmax(35vh,1fr))]">
                    <div className="relative gitem1">
                        <h1 className="text-[2rem] font-medium">
                            Why Choose{' '}
                            <span className="text-[#015dfd]"> Xettle?</span>
                        </h1>
                        <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%] text-justify">
                            <ul className="list-disc">
                                <li>
                                    <span className="font-semibold">
                                        Fast Onboarding:
                                    </span>{' '}
                                    Automate manual tasks and onboard customers
                                    as soon as possible.
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Cutting-Edge Technology:
                                    </span>
                                    Stand out from the competition with our
                                    modern and time-saving solutions.
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        User-Centric Design:{' '}
                                    </span>
                                    It is a perfect example of flexible
                                    workflows and seamless integration.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className="relative p-[10%] xl:w-[35vw] gitem2">
                        <Image src={skill} width={1000} alt="img" />
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
                    Choose Xettle Technologies for the most efficient and secure
                    KYC and identity verification services that will boost your
                    business.
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
    )
}

export default page
