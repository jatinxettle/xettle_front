'use client'

import { useEffect, useState } from 'react'
// import * as React from "react";
// import { cn } from "@/lib/utils";

import Image from 'next/image'
import Link from 'next/link'

import './header.css'

import Logo from 'app/logo.webp'
import cmpny from './cmpny.webp'
// import Ham from "@/Components/ham";
// import X from "@/Components/x";
import Fin from './finance.svg'
import Kyc from './kyc.svg'
import Pay from './pay.svg'
import Aeps from './aeps.svg'
import Bbps from './bbps.svg'
import Atm from './atm.svg'
import Dmt from './dmt.svg'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/Components/ui/navigation-menu'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/Components/ui/drawer'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/Components/ui/accordion'

import { navigationMenuTriggerStyle } from '@/Components/ui/navigation-menu'

import { Roboto } from 'next/font/google'
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['500', '700'],
})

const Header = () => {
    const [navbar, setNavbar] = useState(false)
    const [header, setHeader] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const scrollHeader = () => {
        if (window.scrollY >= 30) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.addEventListener('scroll', scrollHeader)
            window.addEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const services = [
        {
            title: 'AePS Services',
            description: 'Empowering transactions with seamless AEPS service',
            href: '/services/aeps',
            svg: Aeps,
        },
        {
            title: 'Utility Payment Solutions',
            description:
                'Comprehensive BBPS service for seamless bill payments and recharges',
            href: '/services/utility-payments',
            svg: Bbps,
        },
        {
            title: 'Domestic Money Transfer',
            description:
                'Instant domestic money transfers for seamless, quick financial transactions',
            href: '/services/domestic-money-transfer',
            svg: Dmt,
        },
        {
            title: 'Micro ATM',
            description:
                'Portable mATM for cash withdrawals and balance enquiries anywhere',
            href: '/services/micro-atm',
            svg: Atm,
        },
        {
            title: 'Fin-Tech Software',
            description:
                'Crafting innovative financial technology solutions for modern markets',
            href: '/services/fintech-software',
            svg: Fin,
        },
        {
            title: 'Payout Solutions',
            description:
                'Streamlined, Payouts for efficient financial transactions',
            href: '/services/payout-solutions',
            svg: Pay,
        },

        {
            title: 'KYC and Validation',
            description:
                'Implementing secure Know Your Customer (KYC) and validation processes',
            href: '/services/kyc-and-validation',
            svg: Kyc,
        },
    ]

    return (
        <main className="bg-transparent">
            <header
                className={
                    header
                        ? 'lg:h-[8vh] h-[7vh] flex justify-center items-center fixed w-[100vw] z-[9999] bg-white transition-all duration-500 shadow-[0px_4px_35px_0px_rgba(0,0,0,0.15)]'
                        : 'lg:h-[8vh] h-[7vh] flex justify-center items-center fixed w-[100vw] z-[9999] bg-transparent transition-all duration-500'
                }
            >
                <nav className="flex items-center justify-between w-[95%] md:w-[82%] ">
                    <div
                        id="logo"
                        className="scale-[0.85] lg:scale-100 relative z-[100]"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <div className="lg:h-[8vh] h-[7vh] relative w-[130px]">
                                <Image
                                    src={Logo}
                                    alt="logo"
                                    // width={130}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </Link>
                    </div>
                    <div
                        id="links"
                        className="flex items-center justify-between"
                    >
                        <div className="sm:block hidden">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <Link href="/" legacyBehavior passHref>
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                Home
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>
                                            Services
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                                {services.map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        className="flex justify-center items-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                        href={item.href}
                                                    >
                                                        <Image
                                                            src={item.svg}
                                                            alt="img"
                                                            className="mr-2 h-8 w-8"
                                                            loading="lazy"
                                                        />
                                                        <div>
                                                            <div className="text-sm font-medium leading-none">
                                                                {item.title}
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                {
                                                                    item.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>
                                            Company
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-4 md:w-[350px] lg:w-[450px] lg:grid-cols-[.75fr_1fr]">
                                                <li className="row-span-1">
                                                    <NavigationMenuLink asChild>
                                                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md">
                                                            <Image
                                                                src={cmpny}
                                                                alt="company"
                                                                className="h-full rounded-[0.5rem]"
                                                                objectFit="cover"
                                                                loading="lazy"
                                                            ></Image>
                                                            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgbNqv6W6Xt7-c_9t2wsjPu_UeTbGQe_cioaUdDMqZQ&s" className="object-cover h-full"></img> */}
                                                        </div>
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                        href="/contact-us"
                                                    >
                                                        <div className="text-sm font-medium leading-none">
                                                            Contact Us
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                        href="/about-us"
                                                    >
                                                        <div className="text-sm font-medium leading-none">
                                                            About Us
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                        href="/privacy-policy"
                                                    >
                                                        <div className="text-sm font-medium leading-none">
                                                            Privacy Policy
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                        href="/customer-grievances"
                                                    >
                                                        <div className="text-sm font-medium leading-none">
                                                            Customer Grievances
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                        href="/terms&conditions"
                                                    >
                                                        <div className="text-sm font-medium leading-none">
                                                            Terms & Conditions
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link
                                            href="https://xettle.wordpress.com/"
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                Blogs
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div
                        id="cta"
                        className="flex items-center justify-center gap-1"
                    >
                        <Link
                            className="w-32 h-10 bg-[#0872e9] text-white rounded-[0.5rem] scale-[0.85] lg:scale-100 flex items-center justify-center"
                            href="/contact-us"
                        >
                            Book a Demo
                        </Link>
                        {/* <Link
              href="https://dashboard.xettle.net/"
              className="relative flex w-[7rem] h-[2.5rem] items-center justify-center text-white mx-auto rounded-lg bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)]"
            >
              Log in
            </Link> */}
                        {/* <button
                            onClick={() => setNavbar(!navbar)}
                            id="menu-icon"
                            className="relative inline-flex z-[1000] sm:hidden"
                        >
                            {navbar ? <X /> : <Ham />}
                        </button> */}
                        <div className="flex items-center justify-center z-50 sm:hidden">
                            <Drawer>
                                <DrawerTrigger asChild>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        color="#000000"
                                        fill="none"
                                        className="mr-1"
                                    >
                                        <path
                                            d="M4 5L20 5"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M4 12L20 12"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M4 19L20 19"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </DrawerTrigger>

                                <DrawerContent>
                                    <Accordion
                                        type="single"
                                        className="w-full px-[15%] pb-[7%]"
                                        collapsible
                                    >
                                        <AccordionItem value="item-1">
                                            <Link href="/">
                                                <DrawerClose asChild>
                                                    <AccordionTrigger>
                                                        Home
                                                    </AccordionTrigger>
                                                </DrawerClose>
                                            </Link>
                                        </AccordionItem>
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger>
                                                Services
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="grid md:grid-cols-2">
                                                    {services.map(
                                                        (item, index) => (
                                                            <Link
                                                                key={index}
                                                                href={item.href}
                                                            >
                                                                <DrawerClose>
                                                                    <div className="text-left block select-none space-y-1 rounded-md p-2 md:p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                        <div className="text-sm font-medium leading-none">
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </div>
                                                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                            {
                                                                                item.description
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </DrawerClose>
                                                            </Link>
                                                        )
                                                    )}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-3">
                                            <AccordionTrigger>
                                                Company
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul className="grid gap-3 p-4 lg:grid-cols-[.75fr_1fr]">
                                                    <li className="row-span-1">
                                                        <div className="flex max-h-[15rem] h-full w-full select-none flex-col justify-center items-center rounded-md bg-[#ebf2fd] no-underline outline-none focus:shadow-md">
                                                            <Image
                                                                src={cmpny}
                                                                alt="company"
                                                                className="h-full rounded-[0.5rem] sm:max-w-none object-contain"
                                                                loading="lazy"
                                                            ></Image>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                            href="/contact-us"
                                                        >
                                                            <div className="text-sm font-medium leading-none">
                                                                Contact Us
                                                            </div>
                                                        </Link>
                                                        <Link
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                            href="/about-us"
                                                        >
                                                            <div className="text-sm font-medium leading-none">
                                                                About Us
                                                            </div>
                                                        </Link>
                                                        <Link
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                            href="/privacy"
                                                        >
                                                            <div className="text-sm font-medium leading-none">
                                                                Privacy Policy
                                                            </div>
                                                        </Link>
                                                        <Link
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                            href="/grievances"
                                                        >
                                                            <div className="text-sm font-medium leading-none">
                                                                Customer
                                                                Grievances
                                                            </div>
                                                        </Link>
                                                        <Link
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                            href="/terms"
                                                        >
                                                            <div className="text-sm font-medium leading-none">
                                                                Terms &
                                                                Conditions
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-4">
                                            <Link
                                                href="https://medium.com/@xettletechnologies"
                                                target="_blank"
                                            >
                                                <DrawerClose asChild>
                                                    <AccordionTrigger>
                                                        Blog
                                                    </AccordionTrigger>
                                                </DrawerClose>
                                            </Link>
                                        </AccordionItem>
                                    </Accordion>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    </div>
                </nav>
            </header>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
                onClick={scrollToTop}
                className={` ${
                    isVisible ? 'opacity-100' : ' opacity-0'
                } transition-all duration-500 rounded-full h-[35px] w-[35px] p-[7px] bg-[#d9ffef] shadow-xl fixed scale-90 right-5 bottom-5`}
            >
                <path
                    d="M12 4L12 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
                <path
                    d="M17 8.99996C17 8.99996 13.3176 4.00001 12 4C10.6824 3.99999 7 9 7 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>
        </main>
    )
}

export default Header
