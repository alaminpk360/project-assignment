'use client'
import React, { useState } from 'react'
import { Cart, CartBlack, Login, LoginBlack, Menu } from '@/Assets/SVGs/SVG'
import Link from 'next/link'

import { Open_Sans } from 'next/font/google'
const OpenSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
})

import NavIcon from '@/Assets/SVGs/NavIcon'

const Navbar = () => {
    return (
        <header
            className={`bg-black drop-shadow-[0px_25px_13px_rgba(0,0,0,26%)] w-full h-[130px]  max-[767px]:h-[80px] relative   ${OpenSans.className}`}
        >
            <nav className="md:mx-auto flex justify-between mx-8 lg:mx-32 items-center h-[131px] max-[767px]:mx-2 max-[767px]:h-[80px]">
                <div>
                    <Link href="/">
                        <NavIcon className="h-[50px] w-[50px] md:h-[50px] md:w-[50px]  company__logo" />
                    </Link>
                </div>
                <div className="items-center justify-between flex nav__menu relative">
                    <button className="hidden max-[639px]:block btn__nav__menu">
                        <Menu />
                    </button>
                    <ul className="md:flex max-[639px]:flex-col max-[639px]:bg-[#fff] max-[639px]:rounded-lg  max-[639px]:p-4 max-[639px]:absolute  max-[639px]:right-6  max-[639px]:top-1 md:items-center menu__item max-[639px]:opacity-0 max-[639px]:visited:hidden main__menu">
                        <li className="md:ml-8 lg:text-lg text-xs text-white text__black__sm font-semibold hover:font-semibold hover:cliptwo">
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className="md:ml-8 lg:text-lg text-xs text-white  text__black__sm font-semibold hover:font-semibold hover:cliptwo">
                            <Link href={'/#about'}>About Us</Link>
                        </li>

                        <li className="md:ml-8 lg:text-lg text-xs text-white  text__black__sm font-semibold hover:font-semibold hover:cliptwo">
                            <Link href={'/website-design'}>Services</Link>
                        </li>

                        <li className="md:ml-8 lg:text-lg text-xs text-white  text__black__sm font-semibold hover:font-semibold hover:cliptwo">
                            <Link href={'/contact'}>Contact us</Link>
                        </li>
                        <li className="md:ml-8 lg:text-lg text-xs font-semibold hidden md:block">
                            <Cart />
                        </li>

                        <li className="md:ml-8 lg:text-lg text-xs font-semibold hidden md:block ">
                            <Login />
                        </li>
                        <li className="md:ml-8 lg:text-lg text-xs font-semibold md:hidden max-[767px]:hidden">
                            <LoginBlack />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
