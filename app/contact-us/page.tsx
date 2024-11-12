import React from 'react'
import ContactUsForm from '@/Components/ContactUsForm'

const page = () => {
    return (
        <main>
            <section
                id="hero"
                className="mx-auto w-[100vw] max-w-[1920px] pt-[16%] px-[3%] flex flex-col items-center md:pt-[6%] md:px-[8%] pb-16"
            >
                <h1 className="text-[2.5rem] font-bold text-center">
                    <span className="text-[#015dfd]">
                        How Can We Assist You?
                    </span>{' '}
                    <br />
                </h1>
                <div className="text-[#3c3d40]">
                    <p className="pt-[2rem] text-xl text-center font-medium lg:px-[10%]">
                        Do you have any questions about our services or need
                        support? Our team is here to support you. Your
                        satisfaction is our top priority and we are ready to
                        provide you with the best possible service. Fill out the
                        form down below so that we can get back to you as soon
                        as possible.
                    </p>
                </div>
            </section>
            <ContactUsForm />
        </main>
    )
}

export default page
