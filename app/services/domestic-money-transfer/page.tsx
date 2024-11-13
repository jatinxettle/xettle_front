import Image from 'next/image'
import React from 'react'
import './crypto.css'
import './game.css'
import Link from 'next/link'

import himg from './aeps_h.png'
import quick from './quick.png'

export const metadata = {
    title: 'Domestic Money Transfer | Xettle',
}

const page = () => {
    return (
        <main className="bg-[#ffffff] relative z-[-9999]">
            <div className="bg-[#FFFFFF]">
                <section
                    id="hero"
                    className="bg-transparent gradient-bgggg relative z-[2] min-h-[100vh] w-[100vw] pt-[20%] px-[3%] grid grid-cols-1 md:pt-[10%] lg:grid-cols-2 lg:place-content-center lg:pt-[5%] xl:px-[10%]"
                >
                    <div className="w-[100%] h-[100%] absolute z-[-1] blur-[15px] top-0 left-0"></div>
                    <div className="flex items-center">
                        <div>
                            <h1 className="text-[2.3rem] text-center lg:text-left lg:text-[3rem]">
                                <span className="whitespace-nowrap text-[#015EFE]">
                                    DMT{' '}
                                </span>
                                Domestic Money Transfer
                            </h1>
                            <p className="text-justify text-[rgba(0,_0,_0,_0.70)] pt-3 lg:text-[1.1rem]">
                                Money transfer is one of the most basic and
                                frequent requirements of people in their daily
                                lives. At Xettle Technologies, we empower rural
                                and migrant communities with our convenient
                                remittance services. When it comes to money
                                transfers, Xettle makes it very easy for users.
                                Customers can visit their nearest
                                Xettle-associated merchant to complete
                                transactions. Our growing list of merchants
                                means that people do not have to go to banks,
                                especially in rural areas.
                            </p>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={himg}
                            width={800}
                            alt="img"
                            className=" -translate-y-8"
                        />
                    </div>
                </section>
                <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#777afa]">
                    <div className="container mx-auto">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                                    <h2 className="text-dark text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                                        Why Choose Xettle&apos;s DMT Services?
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
                                                d="M11.9982 2C8.99043 2 7.04018 4.01899 4.73371 4.7549C3.79589 5.05413 3.32697 5.20374 3.1372 5.41465C2.94743 5.62556 2.89186 5.93375 2.78072 6.55013C1.59143 13.146 4.1909 19.244 10.3903 21.6175C11.0564 21.8725 11.3894 22 12.0015 22C12.6135 22 12.9466 21.8725 13.6126 21.6175C19.8116 19.2439 22.4086 13.146 21.219 6.55013C21.1078 5.93364 21.0522 5.6254 20.8624 5.41449C20.6726 5.20358 20.2037 5.05405 19.2659 4.75499C16.9585 4.01915 15.0061 2 11.9982 2Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M9 13C9 13 10 13 11 15C11 15 14.1765 10 17 9"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                                        Unmatched Security and Encryption
                                    </h4>
                                    <p className="text-body-color dark:text-dark-6">
                                        We have a secure and encrypted network
                                        that guarantees the safety of your
                                        transactions in every transfer. Make
                                        attractive commissions for each
                                        transaction, which will allow you to
                                        increase your earnings and offer a
                                        profitable business proposal.
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
                                                d="M12 8V12L13.5 13.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M19.5454 16.4534C21.1818 17.337 22 17.7789 22 18.5C22 19.2211 21.1818 19.663 19.5454 20.5466L18.4311 21.1484C17.1744 21.827 16.5461 22.1663 16.2439 21.9196C15.504 21.3154 16.6567 19.7561 16.9403 19.2037C17.2277 18.644 17.2225 18.3459 16.9403 17.7963C16.6567 17.2439 15.504 15.6846 16.2439 15.0804C16.5461 14.8337 17.1744 15.173 18.4311 15.8516L19.5454 16.4534Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M13.0261 21.948C12.6888 21.9824 12.3464 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.6849 21.9311 13.3538 21.8 14"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                                        24/7 Real-Time Transactions
                                    </h4>
                                    <p className="text-body-color dark:text-dark-6">
                                        Enjoy round-the-clock customer support
                                        so that any question or concern you may
                                        have is addressed immediately. Our
                                        system is capable of processing
                                        real-time transactions; therefore, you
                                        can transfer money to any bank in India
                                        at any time.
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
                                                d="M2 8.56907C2 7.37289 2.48238 6.63982 3.48063 6.08428L7.58987 3.79744C9.7431 2.59915 10.8197 2 12 2C13.1803 2 14.2569 2.59915 16.4101 3.79744L20.5194 6.08428C21.5176 6.63982 22 7.3729 22 8.56907C22 8.89343 22 9.05561 21.9646 9.18894C21.7785 9.88945 21.1437 10 20.5307 10H3.46928C2.85627 10 2.22152 9.88944 2.03542 9.18894C2 9.05561 2 8.89343 2 8.56907Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M11.9959 7H12.0049"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M4 10V18.5M8 10V18.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M16 10V18.5M20 10V18.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M19 18.5H5C3.34315 18.5 2 19.8431 2 21.5C2 21.7761 2.22386 22 2.5 22H21.5C21.7761 22 22 21.7761 22 21.5C22 19.8431 20.6569 18.5 19 18.5Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                                        Nationwide Bank Transfers
                                    </h4>
                                    <p className="text-body-color dark:text-dark-6">
                                        With Xettle, you can transfer funds to
                                        any bank across India, making it
                                        convenient and efficient to support your
                                        family or handle business needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="description"
                    className="min-h-[10vh] w-[100vw] px-[5%] pt-16 xl:px-[10%]"
                >
                    <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:grid-rows-[repeat(1,_minmax(35vh,1fr))]">
                        <div className="relative ggitem3">
                            <h1 className="text-[2rem] font-medium">
                                <span className="text-[#015dfd]">Quick</span>{' '}
                                and{' '}
                                <span className="text-[#015dfd]">
                                    Reliable{' '}
                                </span>
                                Money Transfers
                            </h1>
                            <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%] text-justify">
                                Get fast and secure transactions with
                                Xettle&apos;s Domestic Money Transfer services.
                                Our system is very safe and guarantees that your
                                money gets to its intended place on time. For
                                family needs or business purposes, this service
                                ensures that your financial transactions are
                                processed fast enough to meet your current
                                financial needs.
                            </p>
                        </div>
                        <div className="relative p-[10%] xl:w-[35vw] ggitem4">
                            <Image
                                className="scale-110"
                                src={quick}
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
                    {/* <h1 className="text-[2rem] font-medium text-center">
                    Ready to Get Started?
                </h1> */}
                    <p className="py-3 opacity-75 lg:text-[1.1rem] text-center">
                        Get started with Xettle&apos;s DMT services today and
                        experience seamless, convenient money transfers.
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
