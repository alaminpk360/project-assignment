import Image from "next/image";
import React from "react";
import { FiX } from "react-icons/fi";
const ImgShowModal = ({ data, handelCloseModal }) => {
  return (
    <>
      <div className="inset-0 fixed bg-[rgba(0,0,0,.25)] z-10"></div>
      <div className="animate-top z-20 h-[400px] w-[600px] p-8 bg-white shadow-xl rounded-lg">
        <div className="relative">
          <button
            className="text-xl cursor-pointer bg-[#ededed] hover:bg-[#fff8] rounded-lg w-[25px] h-[25px] flex justify-center items-center absolute -right-4 -top-4"
            onClick={handelCloseModal}
          >
            <FiX />
          </button>
          <div>
            {/* <img className="modal_img" src={data} alt="" /> */}
            <Image src={data} alt="ImgShowModal" height={380} width={580}  className="pt-4 object-contain h-[360px] w-[580px]"/>
          </div> 
        </div>
      </div>
    </>
  );
};

export default ImgShowModal;
