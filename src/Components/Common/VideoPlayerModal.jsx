import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { FiX } from "react-icons/fi";

const VideoPlayerModal = ({ video = null, handelCloseModal }) => {
  return (
    <>
      <div className="inset-0 fixed bg-[rgba(0,0,0,.25)] z-10"></div>
      <div className="animate-top z-20 h-[768px] w-[1024px] p-8 bg-transparent rounded-lg max-[639px]:w-[100dvw] max-[639px]:h-auto">
        <div className="relative">
          <button
            className="text-xl cursor-pointer bg-[#ededed] hover:bg-[#fff8] rounded-lg w-[25px] h-[25px] flex justify-center items-center absolute right-2 top-6 z-50"
            onClick={handelCloseModal}
          >
            <FiX />
          </button>
          <div className="pt-4">
            <Video>
              <source src={video} type="video/mp4" />
            </Video>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayerModal;
