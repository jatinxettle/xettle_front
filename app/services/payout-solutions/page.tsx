import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import Lottie from '@/Components/payoutlottie'
import Bg from '@/Components/blockbg'
import './game.css'
import im1 from './im1.png'
import im2 from './im2.png'
import { Description } from '@radix-ui/react-dialog'

export const metadata = {
    title: 'Payout Solutions | Xettle',
    description:
        'Xettle offers secure, seamless payout solutions for businesses, enabling fast, reliable transactions with easy integration, real-time tracking, and top-notch support.',
}

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
                    <div className="w-[100%] h-[100%] absolute z-[-1] blur-[15px] top-0 left-0 -scale-y-100">
                        <Bg />
                    </div>
                    <div className="flex items-center ">
                        <div>
                            <h1 className="text-[2.3rem] text-center lg:text-left lg:text-[3rem]">
                                <span className="whitespace-nowrap text-[#015EFE]">
                                    Payout{' '}
                                </span>
                                Solutions
                            </h1>
                            <p className="text-justify text-[rgba(0,_0,_0,_0.70)] pt-3 lg:text-[1.1rem]">
                                In the current world economy, the payment system
                                is a vital component of the business
                                environment. Xettle Technologies has efficient
                                payout solutions for single and multiple
                                transactions. It deals with customer payments
                                and vendor/employee disbursements, thus easing
                                your company&apos;s financial management.
                            </p>
                        </div>
                    </div>
                    <div className=" lg:-translate-y-12 lg:translate-x-10">
                        <Lottie />
                    </div>
                </section>
                <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#777afa]">
                    <div className="container mx-auto">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                                    <h2 className="text-dark text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                                        Why Choose Xettle&apos;s Payout
                                        Solutions?
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
                                                d="M5.5 10.5C5.62215 10.5 5.73571 10.4435 5.96282 10.3304L7.78832 9.42162C8.59611 9.01948 9 8.81841 9 8.5V4.5M5.5 10.5C5.37785 10.5 5.26429 10.4435 5.03718 10.3304L3.21168 9.42162C2.4039 9.01948 2 8.81841 2 8.5V4.5M5.5 10.5V6.5M9 4.5C9 4.18159 8.59611 3.98052 7.78832 3.57838L5.96282 2.66959C5.73571 2.55653 5.62215 2.5 5.5 2.5C5.37785 2.5 5.26429 2.55653 5.03718 2.66959L3.21168 3.57838C2.40389 3.98052 2 4.18159 2 4.5M9 4.5C9 4.81841 8.59611 5.01948 7.78832 5.42162L5.96282 6.33041C5.73571 6.44347 5.62215 6.5 5.5 6.5M2 4.5C2 4.81841 2.40389 5.01948 3.21168 5.42162L5.03718 6.33041C5.26429 6.44347 5.37785 6.5 5.5 6.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M18.5 10.5C18.6222 10.5 18.7357 10.4435 18.9628 10.3304L20.7883 9.42162C21.5961 9.01948 22 8.81841 22 8.5V4.5M18.5 10.5C18.3778 10.5 18.2643 10.4435 18.0372 10.3304L16.2117 9.42162C15.4039 9.01948 15 8.81841 15 8.5V4.5M18.5 10.5V6.5M22 4.5C22 4.18159 21.5961 3.98052 20.7883 3.57838L18.9628 2.66959C18.7357 2.55653 18.6222 2.5 18.5 2.5C18.3778 2.5 18.2643 2.55653 18.0372 2.66959L16.2117 3.57838C15.4039 3.98052 15 4.18159 15 4.5M22 4.5C22 4.81841 21.5961 5.01948 20.7883 5.42162L18.9628 6.33041C18.7357 6.44347 18.6222 6.5 18.5 6.5M15 4.5C15 4.81841 15.4039 5.01948 16.2117 5.42162L18.0372 6.33041C18.2643 6.44347 18.3778 6.5 18.5 6.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M11.5 6.5H12.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M2 12.5V16C2 17.4045 2 18.1067 2.33706 18.6111C2.48298 18.8295 2.67048 19.017 2.88886 19.1629C3.39331 19.5 4.09554 19.5 5.5 19.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M22.0001 12.5V16C22.0001 17.4045 22.0001 18.1067 21.6631 18.6111C21.5172 18.8295 21.3297 19.017 21.1113 19.1629C20.6068 19.5 19.9045 19.5 18.5 19.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M10.25 16.9311C10.4252 16.9286 10.6188 16.9286 10.8333 16.9286H13.1667C13.3812 16.9286 13.5748 16.9286 13.75 16.9311M10.25 16.9311C9.52679 16.9413 9.11678 16.9939 8.84171 17.2633C8.5 17.598 8.5 18.1368 8.5 19.2143C8.5 20.2918 8.5 20.8305 8.84171 21.1653C9.18342 21.5 9.73339 21.5 10.8333 21.5H13.1667C14.2666 21.5 14.8166 21.5 15.1583 21.1653C15.5 20.8305 15.5 20.2918 15.5 19.2143C15.5 18.1368 15.5 17.598 15.1583 17.2633C14.8832 16.9939 14.4732 16.9413 13.75 16.9311M10.25 16.9311V15.2143C10.25 14.2675 11.0335 13.5 12 13.5C12.9665 13.5 13.75 14.2675 13.75 15.2143V16.9311"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                                        Seamless API Integrations
                                    </h4>
                                    <p className="text-body-color dark:text-dark-6">
                                        Simplify your payment processing with
                                        ease. Scale your operations without
                                        added complexity.
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
                                            color="#fff"
                                            className="w-9 h-9"
                                            fill="none"
                                        >
                                            <path
                                                d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                d="M13.3333 12.6665L10.6667 15.3333M13.3333 12.6665C14.0697 13.4029 15.2636 13.4032 16 12.6668M13.3333 12.6665C12.597 11.9301 12.597 10.7364 13.3333 10M10.6667 15.3333C11.4031 16.0698 11.403 17.2636 10.6667 18M10.6667 15.3333C9.93031 14.5969 8.73638 14.5968 8 15.3332"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9 3L12 6L16 2"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                                        Real-Time Monitoring
                                    </h4>
                                    <p className="text-body-color dark:text-dark-6">
                                        All payments are recorded in real-time
                                        with the help of our convenient control
                                        panel. Acquiring useful information to
                                        help in decision-making.
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
                                            color="#ffffff"
                                            className="w-9 h-9"
                                            fill="none"
                                        >
                                            <path
                                                d="M20 12.1818V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3012 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44135C5.81714 3.15089 4.22281 4.65142 3.46894 6.55375C3 7.73706 3 9.21865 3 12.1818V14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.74797 21.9384 7.21706 21.9952 10 21.9996"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 17L13.0228 17.5944C13.5374 15.7277 15.5114 14.6199 17.4318 15.1201C18.4149 15.3761 19.1934 16.0039 19.6501 16.806M21 20L19.9774 19.4056C19.4628 21.2723 17.4888 22.3801 15.5684 21.8799C14.6081 21.6298 13.8431 21.0251 13.3824 20.2496"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                                        Automated Disbursements
                                    </h4>
                                    <p className="text-body-color dark:text-dark-6">
                                        Simplify payments for the vendors and
                                        employees. Improve effectiveness and
                                        decrease paperwork.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="description"
                    className="min-h-[100vh] w-[100vw] px-[5%] pt-16 xl:px-[10%]"
                >
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="max-w-[510px]">
                                <h2 className="text-black mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                                    Customized payment Option
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:grid-rows-[repeat(2,_minmax(25vh,1fr))]">
                        <div className="relative gitem1">
                            <h1 className="text-[2rem] font-medium">
                                <span className="text-[#015dfd]">
                                    E-commerce
                                </span>
                            </h1>
                            <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%] text-justify">
                                Ensure timely payments to sellers and vendors.
                                Build trust and satisfaction among your
                                partners. Gradually increase the size of your
                                platform as the number of transactions
                                increases. Minimize the chances of human
                                interference and mistakes in payment procedures.
                            </p>
                        </div>
                        <div className="relative p-[10%] xl:w-[25vw] gitem2">
                            <Image
                                className="scale-[170%]"
                                src={im1}
                                width={1000}
                                alt="img"
                            />
                        </div>
                        <div className="relative gitem3">
                            <h1 className="text-[2rem] font-medium">
                                Payroll{' '}
                                <span className="text-[#015dfd]">Services</span>
                            </h1>
                            <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%] text-justify">
                                Provide payment frequencies that would be
                                favorable to the employees. Accept multiple
                                forms of payment (direct deposit, prepaid card,
                                digital wallet). Reduce the complexity of
                                payroll management, legal requirements, and
                                documentation. Enhance the satisfaction of the
                                employees through the provision of reliable and
                                flexible payment methods
                            </p>
                        </div>
                        <div className="relative p-[10%] xl:w-[25vw] gitem4">
                            <Image
                                className="scale-125"
                                src={im2}
                                width={1000}
                                alt="img"
                            />
                        </div>
                    </div>
                </section>
                <section
                    id="games"
                    className="min-h-[30vh] w-[100vw] px-[5%] pt-16 xl:px-[10%] pb-8"
                >
                    <h1 className="text-[2rem] font-medium text-center">
                        Ready to choose Xettle For Your Payment Operations?
                    </h1>
                    <p className="py-3 opacity-75 lg:text-[1.1rem] text-center">
                        Contact our team of specialists today to learn how
                        Xettle&apos;s payouts can transform your business.
                        Become one of the many businesses thriving with the help
                        of Xettle&apos;s sophisticated payout services and
                        elevate your financial management.
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
            </div>
        </main>
    )
}

export default page
