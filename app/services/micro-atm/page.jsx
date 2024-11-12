import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import hero from './heroimg.png'
import im2 from './im2.png'

export const metadata = {
    title: 'Micro ATM | Xettle',
}

const page = () => {
    return (
        <section className="mx-auto w-[100vw] flex flex-col items-center bg-white text-black gap-8 sm:gap-16 min-h-[90vh] pt-[16%] px-[3%] md:pt-[3%] md:px-[8%] pb-16">
            <section className="text-center w-full max-w-[1920px] sm:w-[60%] flex flex-col min-h-[95vh] justify-center pt-0 md:pt-[3%]">
                <h1 className="text-[2.5rem] font-bold text-center">
                    <span className="text-[#015dfd]">Micro ATM:</span> <br />
                </h1>
                <p>Bring Banking to Your Customers</p>
                <div className="self-center w-[18rem] h-[18rem] sm:w-[28rem] sm:h-[28rem]">
                    <Image src={hero} width={900} alt="img" />
                </div>
                <p className="pt-[2rem] text-center font-medium lg:px-[10%]">
                    Micro ATM service provided by Xettle allows merchants to
                    provide all the basic functions of an ATM and thus increase
                    financial inclusion. It is cost effective for the merchants
                    and customers, especially in rural areas making it a
                    suitable solution.
                </p>
                <Link
                    href="/#"
                    className="get-started px-[0.7rem] py-[0.7rem] text-white mt-8 mx-auto"
                >
                    Get Started
                </Link>
            </section>
            <section
                id="description"
                className="min-h-[10vh] w-[100vw] px-[5%] pt-16 xl:px-[10%]"
            >
                <div className="grid grid-cols-1 place-items-center md:grid-cols-2 md:grid-rows-[repeat(1,_minmax(35vh,1fr))]">
                    <div className="relative gitem1">
                        <h1 className="text-[2rem] font-medium">
                            Xettle&apos;s{' '}
                            <span className="text-[#015dfd]">Micro ATM</span>{' '}
                            Services
                        </h1>
                        <p className="py-3 opacity-75 lg:text-[1.1rem] xl:w-[90%] text-justify">
                            Micro ATM (mATM) is a portable handheld device that
                            allows users to withdraw cash and check their bank
                            account balances, just like a traditional ATM.
                            Xettle Micro ATMs are especially useful in areas
                            where bank ATMs are scarce, making cash withdrawals
                            more accessible and convenient for customers,
                            particularly in rural and Tier 2,3 areas. By
                            leveraging our mATM services, countless Indian
                            retailers are experiencing significant growth in
                            both their income and business.
                        </p>
                    </div>
                    <div className="relative p-[10%] xl:w-[35vw] gitem2">
                        <Image src={im2} width={1000} alt="img" />
                    </div>
                </div>
            </section>
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
                            Benefits for Merchants
                        </h4>
                        <p className="text-body-color dark:text-dark-6">
                            <ul className="list-disc">
                                <li>Low setup costs</li>
                                <li>
                                    Attractive commissions on each transaction
                                </li>
                                <li>
                                    Increased foot traffic and business growth
                                </li>
                                <li>Simple installation and operation</li>
                            </ul>
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
                            Why Choose Xettle&apos;s Micro ATM?
                        </h4>
                        <p className="text-body-color dark:text-dark-6">
                            <ul className="list-disc">
                                <li>
                                    Portable device for cash withdrawals and
                                    balance checks
                                </li>
                                <li>Ideal for areas with limited ATM access</li>
                                <li>Boosts income for Indian retailers</li>
                                <li>
                                    Serves customers in rural and Tier 2,3 areas
                                </li>
                            </ul>
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
                            Advantages for Customers
                        </h4>
                        <p className="text-body-color dark:text-dark-6">
                            <ul className="list-disc">
                                <li>Convenient access to cash withdrawals</li>
                                <li>Easy balance inquiries</li>
                                <li>Reduced travel time to find ATMs</li>
                                <li>Available at local, trusted merchants</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <section className="min-h-[30vh] w-[100vw] px-[5%] pt-16 xl:px-[10%]">
                <h1 className="text-[2rem] font-medium text-center">
                    Join Xettle&apos;s Micro ATM Network
                </h1>
                <p className="py-3 opacity-75 lg:text-[1.1rem] text-center">
                    Grow your enterprise and offer basic banking products to
                    your people. Get in touch with us to find out how you can
                    become a Xettle-affiliated merchant and begin offering Micro
                    ATM services.
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
    )
}

export default page
