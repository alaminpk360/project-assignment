import React, { useState } from 'react'
import Link from 'next/link'
import { Facebook, Line, Linkdin, Twitter } from '@/Assets/SVGs/SVG'
import Modal from '../Common/Modal'

const Hero = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <section className="thamnel-height  w-full bg-cover bg-center flex flex-col justify-center overflow-hidden blank_mode_2 max-[767px]:-mt-[3.5rem]">
            <video
                autoPlay
                loop
                muted
                className="object-cover thamnel-height w-full z-[-1] xl:-mt-[10rem]"
            >
                <source src="Videos/bg1.mp4" type="video/mp4" />
            </video>
            <div className="ml-10 xl:ml-40 text-white  max-[1280px]:-mt-72 xl:-mt-96 ">
                <h1 className="font-light tracking-[.35em] ">Captivate</h1>
                <h2 className="text-5xl font-bold mt-[7px] max-[767px]:text-2xl max-[767px]:mt-[0px] max-w-5xl max-[1280px]:text-3xl">
                    Professional Product Photography <br /> & E-commerce
                    Solutions
                </h2>
                <p className="text-xl font-light mt-[14px] max-[767px]:text-sm max-[767px]:mt-[8px]">
                    Exceptional product photography shapes consumers' crucial
                    initial
                    <br />
                    impressions, compelling them to explore and engage further
                    with your brand.
                </p>
                <Link href="">
                    <button
                        className=" bgone rounded-full w-48 h-[48px] text-white mt-[31px]"
                        onClick={() => setOpenModal(true)}
                    >
                        <span className="">Get A Free Consultation </span>
                    </button>
                </Link>
                {openModal ? <Modal onClick={() => setOpenModal(false)} /> : ''}
            </div>
            <div className="absolute mx-auto right-16 z-40 max-[767px]:right-8">
                <span>
                    <Line className="mb-[49px] ml-3 max-[1280px]:h-14 h-[85px] min-[1800px]:h-32 min-[1800px]:mt-8 max-[767px]:h-8 max-[767px]:mt-12" />
                </span>
                <span className="relative -top-4">
                    <Facebook className="mb-[49px] hover:bgone max-[767px]:mb-2" />
                    <Linkdin className="mb-[49px] hover:bgone max-[767px]:mb-2" />
                    <Twitter className="mb-[49px] hover:bgone max-[767px]:mb-2" />
                </span>
                <span>
                    <Line className="mb-[49px] ml-3 h-[85px] min-[1800px]:h-32 min-[1800px]:mt-8 max-[767px]:h-8 " />
                </span>
            </div>
        </section>
    )
}

export default Hero
