import Patter_color from "@/Assets/SVGs/Patter_color";
import { Pattern, ZIcon } from "@/Assets/SVGs/SVG";
import React, { useState } from "react";
import Meeting from "./meeting";

const Btn_Zoom = ({ colorTrue = false, classNAME, P, P2, H1 }) => {
  const [handelMeting, setHandelMeting] = useState(false);
  const HandelZoom = () => setHandelMeting((pre) => !pre);
  console.log(handelMeting);
  return (
    <>
      <section
        className={`flex justify-center relative lg:mt-28 mx-4 mt-6 ${classNAME}`}
      >
        <Pattern className="absolute left-0 xl:-left-12 xl:top-20 top-36 max-[739px]:top-auto max-[739px]:-bottom-36" />
        <div className="grid justify-items-center">
          <h1
            className={`text-center text-[2rem] leading-[44px] tracking-[-0.04rem] min-w-[610px] italic font-medium max-[767px]:min-w-[90dvw] max-[739px]:text-2xl  ${
              colorTrue ? "cliptwo" : "clip"
            }`}
          >
            {H1 || `Don't leave opportunities on the table`}
          </h1>
          <p
            className={`text-center italic text-2xl font-normal leading-[2.09375rem] mt-[0.81rem] relative z-1 max-[739px]:text-xl ${
              colorTrue ? "text-white" : "#000"
            }`}
          >
            {P ? (
              <>
                {P} <br /> {P2}{" "}
              </>
            ) : (
              <>
                Book a Zoom call with us today to learn more about our <br />
                Amazon PPC Services and enhance your product images and boost
                your sales success.
              </>
            )}
          </p>
          <button
            className="btn_light_primary2 mt-8 flex items-center justify-center"
            onClick={HandelZoom}
          >
            <ZIcon /> Book a Zoom call
          </button>
        </div>
        <Patter_color classNAME="absolute hidden md:block -top-28 xl:-top-24  right-8 xl:right-0 -z-10 md:z-10" />
      </section>
      {handelMeting ? <Meeting handelClose={HandelZoom} /> : ""}
    </>
  );
};

export default Btn_Zoom;
