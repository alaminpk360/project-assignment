import React, { useState } from 'react'
import img from '../../Assets/img/amazon_4_prodduct_listing.png'
import Image from 'next/image'
const Modal = (props) => {
    const [isOpen, setIsOpen] = useState(true) // State to manage the modal visibility

    const handleClose = () => {
        setIsOpen(false) // Close the modal
    }

    if (!isOpen) return null // If the modal is closed, render nothing

    return (
        <main className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[1.5625rem] z-50 flex justify-between flex-col min-[1250px]:flex-row p-4 animate-top hide-scrollbar">
            <section className="mx-auto hide-scrollbar max-h-[100dvh] max-[1250px]:bg-white max-[1250px]:pb-5 max-[1250px]:pt-5 relative rounded-[1.5625rem] z-50">
                <Image
                    width={500}
                    height={500}
                    src={img}
                    alt=""
                    className="mx-auto hide-scrollbar max-h-[100dvh] max-[1250px]:bg-white max-[1250px]:pb-5 max-[1250px]:pt-5 relative rounded-[1.5625rem] z-50"
                />
                <button
                    className="bg-transparent absolute right-24 top-4 max-[1250px]:right-8 max-[1250px]:top-2 z-50"
                    onClick={handleClose} // Correctly pass the function
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        className="pointer"
                        {...props}
                    >
                        <rect width="30" height="30" rx="7" fill="#EDEDED" />
                        <rect
                            width="1.2759"
                            height="12.759"
                            rx="0.637949"
                            transform="matrix(0.707115 0.707099 -0.707115 0.707099 19.0229 10)"
                            fill="#253053"
                        />
                        <rect
                            width="1.38222"
                            height="12.759"
                            rx="0.691112"
                            transform="matrix(0.707115 -0.707099 0.707115 0.707099 10 10.9783)"
                            fill="#253053"
                        />
                    </svg>
                </button>
            </section>
        </main>
    )
}

export default Modal
