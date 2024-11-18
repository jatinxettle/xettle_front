import React from 'react'

const page = () => {
    return (
        <main className=" pt-[8vh] bg-[#f9fbff]">
            <section
                id="hero"
                className="relative min-h-[100vh] w-[100vw] max-w-[1920px] pt-[20%] px-[4%] md:pt-[10%] lg:pt-[5%] xl:px-[15%]"
            >
                <div className="pb-[7vh] text-[#3c3d40]">
                    <div>
                        <h1 className="text-[2.5rem] font-bold text-center">
                            <span className="text-[#015dfd]">
                                Terms & Conditions
                            </span>
                        </h1>
                    </div>
                    <ul className="pt-4 text-[1.1rem] list-disc pl-[1rem] flex flex-col gap-3">
                        <li>
                            This website pages content is for your general
                            information and uses only. It is subject to change
                            without prior notice.
                        </li>
                        <li>
                            Neither we nor any third parties provide any
                            warranty or guarantee the accuracy, timeliness,
                            performance, completeness or suitability of the
                            information and materials found or offered on this
                            website for any particular purpose. By visiting the
                            website you acknowledge that such information and
                            materials may contain inaccuracies or errors and we
                            expressly exclude liability for any such
                            inaccuracies or errors to the fullest extent
                            permitted by law.
                        </li>
                        <li>
                            Your use of any information or materials on this
                            website is entirely at your own risk, for which we
                            shall not be liable. It shall be your own
                            responsibility to ensure that any products, services
                            or information available through this website meet
                            your specific requirements.
                        </li>
                        <li>
                            This website contains material which is owned by or
                            licensed to us. This material includes, but is not
                            limited to, the design, layout, look, appearance and
                            graphics. Reproduction is prohibited other than in
                            accordance with the copyright notice, which forms
                            part of these terms and conditions.
                        </li>
                        <li>
                            All trademarks reproduced in this website, which is
                            not the property of, or licensed to the operator,
                            are acknowledged on the website.
                        </li>
                        <li>
                            Unauthorized use of this website shall be subjected
                            to a claim for damages and/or be a criminal offence.
                        </li>
                        <li>
                            From time to time, this website may also include
                            links to other websites. These links are provided
                            for your convenience to provide further information.
                            They do not signify that we endorse the website(s).
                            We have no responsibility for the content of the
                            linked website(s).
                        </li>
                        <li>
                            You may not create a link to this website from
                            another website or document without Xettle&apos;s
                            prior written consent.
                        </li>
                        <li>
                            If you choose, or you are provided with, a user
                            identification code, password or any other piece of
                            information as part of our security procedures, you
                            must treat such information as confidential. You
                            must not disclose it to any third party.
                        </li>
                        <li>
                            We have the right to disable any user identification
                            code or password, whether chosen by you or allocated
                            by us, at any time, if in our reasonable opinion you
                            have failed to comply with any of the provisions of
                            these terms of use.
                        </li>
                        <li>
                            Your use of this website and any dispute arising out
                            of such use of the website is subject to the
                            exclusive jurisdiction of the courts of Haryana
                            State Government of India.
                        </li>
                    </ul>
                    <br />
                    <h2 className="text-[1.6rem] font-bold mb-2">
                        <span className="text-[#015dfd]">
                            Acceptance of Terms through Use
                        </span>
                    </h2>
                    <p className="leading-7">
                        The data we collect from you are stored in our system
                        servers and will be treated with utmost confidentiality.
                        Your personal information will be used only by Xettle
                        for all business transactions that require your
                        information to complete the transactions. Xettle may
                        allow a third-party application to access your
                        information in cases where a need arises for
                        verification of your data and other validation purposes.
                        Xettle ensures that verification processes used by third
                        party application will help to make your account safe
                        from fraud or any money laundering.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default page
