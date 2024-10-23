'use client'
import React from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import './contact.css'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function ContactUsForm() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
    } = useForm()

    function onSubmit(formData) {
        if (
            !formData.name ||
            !formData.email ||
            !formData.tel ||
            !formData.message
        ) {
            toast.error('Please fill in all the required fields')
            return
        }
        const loadingToast = toast.loading('Submitting your form...', {
            duration: Infinity,
        })

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID
            )
            .then(() => {
                toast.dismiss(loadingToast)
                toast.success('Form submitted successfully')
                reset()
            })
            .catch((err) => {
                toast.dismiss(loadingToast)
                toast.error('Error submitting your form')
                console.error('Error sending email', err)
                reset()
            })
    }

    return (
        <main className="main bg-[#f9fbff]">
            <div className="contact_background">
                <div className="container">
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
                                        {' '}
                                        +91 9654607040
                                    </Link>{' '}
                                    <br /> Email :
                                    <Link href="mailto:letstalk@xettle.net">
                                        {' '}
                                        letstalk@xettle.net
                                    </Link>
                                    <p>
                                        <br />
                                        44 IIND FLOOR REGAL BUILDING, CONNAUGHT
                                        PLACE, NEWDELHI
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
                                            {...register('name', {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                    <div className="app-form-group">
                                        <input
                                            className="app-form-control input_"
                                            type="email"
                                            placeholder="Email"
                                            required
                                            {...register('email', {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                    <div className="app-form-group">
                                        <input
                                            className="app-form-control input_"
                                            type="tel"
                                            placeholder="Contact No."
                                            {...register('tel', {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                    <div className="app-form-group">
                                        <input
                                            className="app-form-control input_"
                                            placeholder="Message"
                                            autoComplete="off"
                                            required
                                            {...register('message')}
                                        />
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="app-form-button button_"
                                        >
                                            {isSubmitting
                                                ? 'Sending...'
                                                : 'Send'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
