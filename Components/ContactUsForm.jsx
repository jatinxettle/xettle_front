"use client";
import React from "react";
import Link from "next/link";

import "./contact.css";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function ContactUsForm() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm();

    async function onSubmit(formData) {
        await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                tel: formData.tel,
                message: formData.message,
            }),
        }).then(() => {
            toast.success("Thank you, your message has been sent successfully");
        });

        reset();
    }

    return (
        <main className="main bg-[#f9fbff]">
            <div className="contact_background">
                <div className="container">
                    <Toaster />
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div className="screen-header-button close"></div>
                                <div className="screen-header-button maximize"></div>
                                <div className="screen-header-button minimize"></div>
                            </div>
                            <div className="screen-header-right">
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>CONTACT</span>
                                    <span>US</span>
                                </div>
                                <div className="app-contact text-black">
                                    CONTACT INFO <br />
                                    Phone:
                                    <Link href="tel:+4733378901">
                                        {" "}
                                        +91 9654607040
                                    </Link>{" "}
                                    <br /> Email :
                                    <Link href="mailto:letstalk@xettle.net">
                                        {" "}
                                        letstalk@xettle.net
                                    </Link>
                                    <p>
                                        <br />
                                        44 IIND FLOOR REGAL BUILDING, 
                                        CONNAUGHT PLACE, NEWDELHI
                                    </p>
                                </div>
                            </div>
                            <div className="screen-body-item">
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="app-form"
                                >
                                    <div className="app-form-group">
                                        <input
                                            className="app-form-control input_"
                                            type="text"
                                            placeholder="Name"
                                            required
                                            {...register("name")}
                                        />
                                    </div>
                                    <div className="app-form-group">
                                        <input
                                            className="app-form-control input_"
                                            type="email"
                                            placeholder="Email"
                                            required
                                            {...register("email")}
                                        />
                                    </div>
                                    <div className="app-form-group">
                                        <input
                                            className="app-form-control input_"
                                            type="tel"
                                            placeholder="Contact No."
                                            {...register("tel")}
                                        />
                                    </div>
                                    <div className="app-form-group">
                                        <input
                                            className="app-form-control input_"
                                            placeholder="Message"
                                            autoComplete="off"
                                            required
                                            {...register("message")}
                                        />
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="app-form-button button_"
                                        >
                                            SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
