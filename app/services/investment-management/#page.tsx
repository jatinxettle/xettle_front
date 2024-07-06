import Image from "next/image";
import React from "react";
import Link from "next/link";

import "./betting.css";

import banner from "./banner.png";
import Contour from "@/Components/contour";
import Bettinglottie from "@/Components/bettinglottie";

export const metadata = {
    title: "Investment Management Platform | Xettle.net",
};

const page = () => {
    return (
        <main className="bg-[#ffffff] relative z-[-9999]">
            <section className="home">
                <div className="home_description">
                    <h1 className="heading">
                        <span className="whitespace-nowrap text-[#015EFE]">
                            Investment Management
                        </span>{" "}
                        Platform
                    </h1>
                    <p>
                        In order to properly manage their investments in the
                        quickly changing financial landscape of today, both
                        individuals and institutions are looking for creative
                        solutions. Investment management platforms, which give
                        users access to a wide variety of investment choices,
                        simplified portfolio administration, and individualized
                        advisory services, have become an indispensable tool for
                        navigating the complexity of the financial markets.
                        Xettle Technologies is a trailblazing platform that is
                        transforming how investors engage with their assets and
                        make well-informed decisions.
                    </p>
                </div>
                <div className="home_image">
                    {/* <Image src={banner} width={1000} /> */}
                    <Bettinglottie />
                </div>
            </section>

            {/* <!-- services and card collection here  --> */}
            <section className="relative services">
                <div className="w-[100%] h-[100%] absolute z-[-1] top-0 left-0 blur-[1px] scale-y-[-100%]">
                    <Contour />
                </div>
                <div className="card_collection">
                    <div className="card">
                        <h3>Custom Betting Software Development</h3>
                        <p>
                            We specialize in crafting custom betting software
                            that meets your specific requirements. Whether
                            you&apos;re looking to create a sportsbook platform,
                            a fantasy sports app, or a unique betting solution,
                            we have the expertise to bring your vision to life.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Data Analytics and Prediction</h3>
                        <p>
                            Gain valuable insights into user behavior and trends
                            with our data analytics solutions. Make data-driven
                            decisions to optimize your betting platform&apos;s
                            performance.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Odds Integration</h3>
                        <p>
                            Stay competitive with real-time odds integration
                            from various sportsbooks. Our software can
                            seamlessly incorporate odds feeds, giving your users
                            access to the latest data.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Payment Processing</h3>
                        <p>
                            Secure and convenient payment processing is vital
                            for any betting platform. We implement reliable
                            payment gateways to ensure smooth transactions for
                            your users.
                        </p>
                    </div>
                </div>
                <div className="text-white services_list">
                    <h2 className="services_list_heading">Our Services</h2>
                    <p>
                        At Xettle, we offer a comprehensive range of services
                        designed to empower your betting platform and provide a
                        competitive edge in the dynamic world of sports and
                        fantasy betting. Our services are crafted to meet your
                        specific requirements and ensure the success of your
                        venture.
                    </p>
                    <ul className="list-disc">
                        <li>
                            <p>
                                <b>Experience: </b> With years of experience in
                                sports and fantasy betting software development,
                                we bring a wealth of knowledge to the table.
                            </p>
                        </li>

                        <li>
                            <p>
                                <b>Customisation: </b> Our solutions are
                                tailor-made to suit your unique business goals
                                and requirements.
                            </p>
                        </li>

                        <li>
                            <p>
                                <b>Quality Assurance: </b> We uphold the highest
                                standards of quality in design, functionality,
                                and security.
                            </p>
                        </li>

                        <li>
                            <p>
                                <b>Compliance Expertise: </b> We stay up-to-date
                                with evolving regulations to keep your platform
                                compliant and secure.
                            </p>
                        </li>

                        <li>
                            <p>
                                <b>Ongoing Support: </b> Our commitment to your
                                success doesn&apos;t end with project delivery.
                                We provide continuous support and maintenance to
                                ensure your platform&apos;s optimal performance.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* <!-- our specialisation markup here  --> */}
            <section className="specialisation">
                <p>Our Specialization</p>
                <h3>Fantasy Betting Software</h3>
                <div className="card_container">
                    <div className="card">
                        <h3>Fantasy Cricket</h3>
                        <p>
                            Craft immersive cricket fantasy leagues, Engage in
                            thrilling cricket fantasy leagues where you assemble
                            your dream team, score points based on player
                            performance, and compete with others for glory.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Roulette</h3>
                        <p>
                            Create roulette games with a unique betting twist,
                            Experience the excitement of casino-style roulette
                            with a fantasy twist, combining the classNameic game
                            with the thrill of betting on your lucky numbers.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Poker</h3>
                        <p>
                            Develop virtual poker rooms for card game
                            enthusiasts poker rooms for competitive card games
                            with friends or fellow enthusiasts, offering a true
                            poker experience from the comfort of your screen.
                        </p>
                    </div>
                </div>
                <p className="more">and more...</p>
            </section>

            {/* <!-- features section  --> */}
            <section className="features">
                <h1>Features</h1>
                <ul>
                    <li>
                        <b>Player Authentication:</b> Create secure player login
                        and registration systems.
                    </li>

                    <li>
                        <b>Multilingual Support:</b> Expand your reach with
                        multilingual capabilities.
                    </li>

                    <li>
                        <b>Custom Tournaments:</b> Tailor tournaments according
                        to your preferences.
                    </li>

                    <li>
                        <b>Referral Systems:</b> Encourage growth through a
                        referral program.
                    </li>

                    <li>
                        <b>Seamless Withdrawals:</b> Implement smooth withdrawal
                        management.
                    </li>

                    <li>
                        <b>Admin Control:</b> Access an admin dashboard for
                        efficient platform management.
                    </li>
                </ul>
            </section>

            {/* <!-- other features section  --> */}
            <section className="key_features">
                <h1>Sports Betting Software</h1>
                <div className="card_container">
                    <div className="card">
                        <h3 className="h3">Multi-Sporting Betting</h3>
                        <p>
                            Build a platform that allows betting on various
                            sports like basketball, football, and cricket.
                        </p>
                    </div>
                    <div className="key_features_card">
                        <h3 className="h3">Key Features</h3>
                        <ul>
                            <li>
                                <b>Player Authentication: </b> Create secure
                                player login and registration systems.
                            </li>

                            <li>
                                <b>Multilingual Support: </b> Expand your reach
                                with multilingual capabilities.
                            </li>

                            <li>
                                <b>Custom Tournaments: </b> Tailor tournaments
                                according to your preferences.
                            </li>

                            <li>
                                <b>Referral Systems: </b> Encourage growth
                                through a referral program.
                            </li>

                            <li>
                                <b>Seamless Withdrawals: </b> Implement smooth
                                withdrawal management.
                            </li>

                            <li>
                                <b>Admin Control: </b> Access an admin dashboard
                                for efficient platform management.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* <!-- ready to get started section  --> */}
            <section className="get_started">
                <h1>Ready to Get Started?</h1>
                <p>
                    Elevate your sports or fantasy betting business with our
                    top-tier software development services. Contact us today for
                    a free consultation, and let&apos;s transform your vision
                    into a thriving betting platform that attracts users and
                    drives revenue.
                </p>
                <Link
                    href="/contact"
                    className="w-[8.5rem] h-[2.9rem] flex items-center justify-center text-white mt-3 mx-auto rounded-lg bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)]"
                >
                    Contact Us
                </Link>
            </section>
        </main>
    );
};

export default page;
