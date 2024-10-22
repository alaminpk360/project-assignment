'use client'
import NavIcon from '@/Assets/SVGs/NavIcon'
import {
    LogoPaymentMethod,
    LogoPhoneRound,
    LogoLightEmail,
    LogoCarbonMap,
    LogoFbLinkComponent,
} from '@/Assets/SVGs/SVG'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <main
                className="flex flex-wrap justify-around mt-10 items-start mb-16 max-[400px]:mb-8  xl:ml-32 xl:mr-32 max-[400px]:pl-4 max-[400px]:pr-4"
                id="footer"
            >
                <div className="max-w-[366px] ">
                    <div className="mt-4">
                        <NavIcon />
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <div>
                            <LogoPhoneRound />
                        </div>
                        <p className="font-medium"> +44 (0) 1582 551 550</p>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <div>
                            <LogoLightEmail />
                        </div>
                        <p className="font-medium">info@collage.com</p>
                    </div>
                    <div className="flex  gap-4 mt-4">
                        <div>
                            <LogoCarbonMap />
                        </div>
                        <p className="font-medium">
                            collage Limited <br />3 Charndon Close, Barton Hill,
                            Luton, Bedfordshire United Kingdom, LU3 4DU.
                        </p>
                    </div>
                </div>
                <div className="">
                    <h5 className="text-[18px] font-bold mt-24 max-[400px]:mt-8">
                        Services
                    </h5>
                    <div className="mt-8">
                        <Link href="/product-photography">
                            <p className="text-[16px] font-medium leading-6 mb-4">
                                collages
                            </p>
                        </Link>
                        <Link href={'/infographics-services'}>
                            <p className="text-[16px] font-medium leading-6 mb-4">
                                Infographics Services
                            </p>
                        </Link>
                        <Link href={'/amazon-services'}>
                            <p className="text-[16px] font-medium leading-6 mb-4">
                                Amazon Services
                            </p>
                        </Link>
                        <Link href={'/graphic-design'}>
                            <p className="text-[16px] font-medium leading-6 mb-4">
                                Graphic Design Services
                            </p>
                        </Link>
                        <Link href={'/website-design'}>
                            <p className="text-[16px] font-medium leading-6 mb-4">
                                Website Builds
                            </p>
                        </Link>
                        <Link href={'/linkedin-services'}>
                            <p className="text-[16px] font-medium leading-6 mb-4">
                                Linkedin Services
                            </p>
                        </Link>
                        <Link href={'/cv-design-services'}>
                            <p className="text-[16px] font-medium leading-6 mb-4">
                                CV services
                            </p>
                        </Link>
                    </div>
                </div>
                <div>
                    <h5 className="text-[18px] font-bold mt-24 max-[400px]:mt-8">
                        Terms
                    </h5>
                    <div className="mt-8">
                        <p className="text-[16px] font-medium leading-6 mb-9">
                            Privacy Policy
                        </p>
                        <p className="text-[16px] font-medium leading-6 mb-9">
                            Terms Of Use
                        </p>
                        <p className="text-[16px] font-medium leading-6 mb-9">
                            Shipping Policy
                        </p>
                        <p className="text-[16px] font-medium leading-6 mb-9">
                            User Content Agreement
                        </p>
                        <p className="text-[16px] font-medium leading-6">
                            Refund And Returns Policy
                        </p>
                    </div>
                </div>
                <div>
                    {/* <h5 className="text-[18px] font-bold mt-24 max-[400px]:mt-8 h-8"></h5> */}
                    {/* <div className="w-[226px] h-[46px] text-[16px] rounded-[8px] mt-8 overflow-hidden"></div> */}
                    <h5 className="text-[18px] font-bold mt-24 max-[400px]:mt-8">
                        collage
                    </h5>
                    <p className="border-b-[1px] border-[#000000] mt-3 w-32 ml-3"></p>
                    <div className="mt-3">
                        <LogoFbLinkComponent />
                    </div>
                    <div className=" flex flex-col justify-end items-center 2xl:items-end">
                        {/* <button className="h-[56px]  mt-[155px] max-[400px]:mt-8"></button> */}
                        <div className="mt-28 max-[400px]:mt-12">
                            <LogoPaymentMethod />
                        </div>
                    </div>
                </div>
            </main>
            {/* <div className="flex justify-center">
        <button onClick={scrollToTop} className="my-2 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2rem"
            width="5rem"

            className="rotate-180 hover:bg-[#F0FDF4] rounded-lg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
      </div> */}
            <div className="h-[100px] shadow-2xl">
                <div className="pt-7">
                    <h4 className="text-center font-bold">
                        &copy; 2024 collage All rights reserved.
                    </h4>
                    <p className="text-center font-extralight">
                        Powered By{' '}
                        <a href="https://Business-Savvy-UK.co.uk">
                            al naser bd ltd
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
