import React from "react";
import PolegoneStape from "@/Components/Style/PolegoneStape";
import Photography from "@/Components/Style/Photography";
import Returning from "@/Components/Style/Return";
import { Circle, Groups_box } from "@/Assets/SVGs/SVG";
import Image from "next/image";
import stapImg from "../../Assets/img/stap_1.png";
const Steps = () => {
  return (
    <div className="mt-96 lg:mt-0 xl:mt-[92px] mb-[92px] max-[400px]:mt-0 max-[400px]:mb-[30px] max-[739px]:mt-0">
      <div className="container md:mx-auto">
        <div className="flex justify-center items-center">
          <Image
            src={stapImg}
            width={600}
            height={600}
            className="xl:hidden"
            alt="stapImg"
          />
        </div>
        <div className="hidden xl:block">
          <div className="flex justify-center items-center">
            <div className="bg-left-bottom shadow-[-30px_60px_60px_10px_rgba(0,0,0,0.3)] rounded-full bg-gradient-to-r from-[#EBEAEA] from-[14.64%] to-[#FFFFFF] to-[85.36%] relative z-20 w-[468px] h-[468px] xl:w-[668px] xl:h-[668px]">
              <div className="rounded-full w-[420px] h-[420px] xl:w-[624px] xl:h-[624px] bg-[#F9F9F9] flex items-center relative mt-5 ml-5">
                <Circle className="relative w-[420px] h-[420px] xl:w-[585px] xl:h-[585px] flex items-center mt-1 ml-5" />
                <div className="absolute xl:top-[200px] left-[100px] w-[476px]">
                  <h2 className="text-2xl xl:text-[60px] font-bold uppercase xl:leading-[60px] ml-6">
                    Steps to process
                  </h2>
                  <div className="mt-4 mb-4 ml-16 xl:ml-44">
                    <Groups_box />
                  </div>
                  <p className="text-xl xl:text-[38px] xl:leading-[48px] italic ">
                  Educate us about the product <br className="xl:hidden" /> to maximise the best results!
                  </p>
                </div>
              </div>
            </div>
            <div className="relative -left-[26rem] flex flex-col gap-9 -top-10">
              <PolegoneStape />
              <Photography />
              <Returning />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
