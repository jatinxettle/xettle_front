import React from "react";
import Link from "next/link";
import "./token.css";
import Lottie from "@/Components/tokenlottie";
import Contour from "@/Components/contour";

export const metadata = {
    title: "RegTech And Compliance | Xettle.net",
};

const page = () => {
    return (
        <main className="bg-[#f9fbff] relative z-[-9999]">
            {/* <!-- home page markup  --> */}
            <section className="homeReg min-h-[100vh] h-auto pt-[2%] flex flex-col items-center">
                <div className="container flex flex-col items-center">
                    <h1 className="text-[2.3rem] text-center lg:text-left lg:text-[3rem]">
                        <span className="whitespace-nowrap text-[#015EFE]">
                            RegTech{" "}
                        </span>
                        And Compliance Solutions
                    </h1>

                    <p>
                        Businesses confront a difficult task in the constantly
                        changing regulatory compliance landscape: keeping up
                        with the intricate web of regulations while
                        concentrating on expansion and innovation. Let us
                        introduce RegTech solutions, the revolutionary tools
                        that are revolutionising the compliance scene for
                        companies of all kinds. Xettle Technologies is a leading
                        RegTech company that provides state-of-the-art solutions
                        to reduce risks and expedite compliance procedures.
                        Regulatory Technology, or RegTech, is a catch-all term
                        for a group of technologies intended to make it easier
                        and more efficient for businesses to comply with
                        regulations. RegTech solutions give you automated tools
                        to help you navigate the regulatory maze, from know your
                        customer (KYC) requirements and anti-money laundering
                        (AML) laws to data privacy regulations and more. These
                        solutions improve compliance operations by utilising
                        cutting-edge technologies.
                    </p>
                    {/* <Image src={banner} width={1000} /> */}
                    <div className="w-[85vw] sm:w-[60vw] md:w-[30vw] xl:m-[-10%] pt-4 ">
                        <Lottie />
                    </div>
                </div>
            </section>

            {/* <!-- about section  --> */}
            <section className="relative bg-transparent about ">
                <div className="w-[100%] h-[100%] absolute z-[-1] top-0 left-0">
                    <Contour />
                </div>
                <h1 className="text-[2rem] font-medium z-[1] relative text-black">
                    <span className="text-[2rem] font-medium z-[1] relative text-white">
                        Range of{" "}
                        <span className="text-[#015dfd] relative">
                            Compliance Solutions
                        </span>
                    </span>
                </h1>
                {/* <p>
                    Crypto Project/Token Development refers to the process of
                    creating and launching a cryptocurrency or blockchain-based
                    token. These digital tokens can serve various purposes
                    within the broader crypto ecosystem and are often used in
                    Initial Coin Offerings (ICOs), Security Token Offerings
                    (STOs), or as part of decentralized applications (DApps).
                </p> */}
                <div className="card_container items-center">
                    <div className="card1">
                        <h2>Empowering Companies</h2>
                        <p>
                            Xettle&apos;s platform, which makes use of
                            cutting-edge algorithms, provides real-time
                            regulatory change monitoring and analysis, allowing
                            businesses to quickly adjust to changing compliance
                            requirements. With regard to guaranteeing compliance
                            with financial regulations or upholding data privacy
                            standards, Xettle&apos;s RegTech solutions offer the
                            precision and adaptability required to manoeuvre
                            through the current regulatory landscape.
                        </p>
                    </div>
                    <div className="card2">
                        <h2>The ability of RegTech Solutions</h2>
                        <p>
                            Those provided by Xettle Technologies, to automate
                            manual processes is one of their main advantages.
                            Conventional compliance tasks frequently require a
                            lot of manual labour, which takes up important time
                            and resources. Regular compliance tasks can be
                            automated with RegTech, giving staff more time to
                            concentrate. Processes like data collection,
                            analysis, and reporting can be automated by
                            businesses to lower errors and guarantee compliance
                            consistency.
                        </p>
                    </div>
                    <div className="card3">
                        <h2>
                            RegTech solutions&apos; advanced analytics
                            capabilities
                        </h2>
                        <p>
                            improve the effectiveness of compliance operations.
                            Xettle Technologies uses advanced algorithms to
                            examine enormous volumes of data in order to spot
                            trends and abnormalities that might point to
                            non-compliance. Businesses may obtain important
                            insights into their compliance posture by utilising
                            big data, which enables proactive risk management
                            and decision-making. RegTech solutions not only
                            provide automation and analytics, but also improve
                            accountability and transparency. Businesses can
                            track every stage of the compliance process, from
                            data collection to reporting, with the help of
                            Xettle&apos;s platform. In addition to making
                            compliance audits easier, this openness promotes
                            confidence among all parties involved, including
                            customers, investors, and regulators.
                        </p>
                    </div>
                </div>
            </section>

            {/* <section className="services">
                <h1>
                    <span className="purple">Services</span> Included
                </h1>
                <div className="card_container">
                    <div className="card1">
                        <h1>ICO/STO Tokens</h1>

                        <ol>
                            <li>
                                Fundraising tokens: ICOs and STOs use tokens as
                                a means to raise funds for projects.
                            </li>

                            <li>
                                Regulatory compliance: STO tokens adhere to
                                legal regulations and may offer rights to
                                investors.
                            </li>

                            <li>
                                Liquidity and trading: ICO tokens can be traded
                                on cryptocurrency exchanges, providing
                                liquidity.
                            </li>

                            <li>
                                Potential volatility: Prices of ICO tokens can
                                be highly volatile.
                            </li>
                        </ol>
                    </div>
                    <div className="card2">
                        <h1>Security Tokens</h1>

                        <ol>
                            <li>
                                Access tokens: Utility tokens grant access to
                                specific services or features within a project.
                            </li>

                            <li>
                                Ecosystem participation: Users use utility
                                tokens to engage within a project&apos;s
                                ecosystem.
                            </li>

                            <li>
                                Non-investment use: Utility tokens are not
                                intended as investments but rather as tools for
                                specific functions.
                            </li>

                            <li>
                                Stable value: Utility token prices are typically
                                more stable compared to ICO token
                            </li>
                        </ol>
                    </div>
                    <div className="card3">
                        <h1>Non-Fungible Tokens (NFTs)</h1>

                        <ol>
                            <li>
                                Unique assets: NFTs represent one-of-a-kind
                                digital or physical items.
                            </li>

                            <li>
                                Digital ownership: NFTs establish ownership and
                                authenticity of digital collectibles or art.
                            </li>

                            <li>
                                Diverse applications: NFTs are used for digital
                                art, collectibles, gaming items, and more.
                            </li>

                            <li>
                                Individual value: Each NFT has its own distinct
                                value, making them highly unique.
                            </li>
                        </ol>
                    </div>
                </div>
            </section> */}

            {/* <!-- contact us section  --> */}
            <section className="get_started">
                {/* <h1>Contact Us</h1> */}
                <p>
                    RegTech solutions are now essential resources for companies
                    trying to manage the challenges of regulatory compliance.
                    With its cutting-edge solutions that automate procedures,
                    improve transparency, and reduce risks, Xettle Technologies
                    is a prime example of the transformative potential of
                    regtech. Businesses can achieve compliance excellence while
                    concentrating on their primary goals of growth and
                    innovation by utilising RegTech.
                </p>
                <Link
                    href="/contact"
                    className="relative flex w-[8.5rem] h-[2.9rem] items-center justify-center text-white mt-3 mx-auto rounded-lg bg-[linear-gradient(71deg,_#3445e5_21.66%,_rgba(126,_254,_52,_0.92)_178.45%)]"
                >
                    Contact Us
                </Link>
            </section>
        </main>
    );
};

export default page;
