import {
    Contact_email,
    Contact_location,
    Contact_phone,
} from '@/Assets/SVGs/SVG'
import React from 'react'
import HubSpotForm from '../form/HubspotForm'

const ContactBody = () => {
    return (
        <main className="mx-4">
            <section className="container mx-auto px-4">
                <div className="mt-32">
                    <h1 className="text-5xl font-bold leading-[60px] max-[639px]:text-4xl">
                        Get in Touch
                    </h1>
                    <p className="text-xl font-medium leading-7 text-[#556987] mt-7">
                        We are here to help you with professional product
                        photography and e-commerce solutions.
                    </p>
                </div>
                <div className="flex justify-between mt-12 flex-col xl:flex-row ">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <Contact_email />
                            <h2 className="mt-4 text-3xl font-bold">Email</h2>
                            <a
                                href="mailto:contact@gmail.com"
                                className="text-xl font-medium break-words"
                            >
                                contact@gmail.com
                            </a>
                        </div>
                        <div>
                            <Contact_phone />
                            <h2 className="mt-4 text-3xl font-bold">Phone</h2>
                            <a
                                href="tel:++44 1234 567890"
                                className="text-xl font-medium"
                            >
                                +44 (0) 1582 551 550
                            </a>
                        </div>

                        <div>
                            <Contact_location />
                            <h2 className="mt-4 text-3xl font-bold">Office</h2>
                            <p className="text-xl font-medium">
                                3 Charndon Close, Barton Hill, <br />
                                Luton, Bedfordshire <br />
                                United Kingdom, LU3 4DU.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-[48.875rem] lg:h-[32.375rem] max-[900px]:w-[80dvw] relative">
                        <div className="">
                            <p className="text-base font-medium text-[#333F51]">
                                Email
                            </p>
                            <div className="w-[30rem] lg:w-[46.375rem] h-[2.875rem] max-[900px]:w-[80dvw] border-2 bg-gradient-to-r from-[#FC365A] to-[#A00BFB] rounded-lg flex justify-center items-center">
                                <input
                                    type="text"
                                    placeholder="pat@shuffle.dev"
                                    className="w-[29.70rem] lg:w-[46rem] h-[2.475rem] border-none outline-none px-4 rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="text-base font-medium text-[#333F51]">
                                Message
                            </p>
                            <div className="h-[13.75rem] w-[30rem] lg:w-[46.3225rem] max-[900px]:w-[80dvw] border-2 bg-gradient-to-r from-[#FC365A] to-[#A00BFB] rounded-lg flex justify-center items-center">
                                <textarea
                                    className="max-h-[13.40rem] min-h-[13.35rem] w-[29.70rem] lg:w-[45.90rem] border-none outline-none p-4 rounded-lg text-[#FC365A]"
                                    name=""
                                    id=""
                                    placeholder="Your message..."
                                    cols="30"
                                    rows="10"
                                ></textarea>
                            </div>
                        </div>
                        <button className="h-[3.5rem] w-[30rem] lg:w-[46.3125rem] text-[#ffffff] bg-gradient-to-r from-[#FC365A] to-[#A00BFB] rounded-lg text-xl mt-6 max-[900px]:w-[80dvw] ">
                            Send
                        </button>
                        <div className="h-[31.875rem] w-[20rem] lg:w-[34.625rem] bg-[#F7F8F9] absolute top-0 left-0 -z-10"></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactBody
