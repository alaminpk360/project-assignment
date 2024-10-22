import {
  IconAmajone,
  IconAllIcuive,
  IconCamera,
  IconCvService,
  IconGraphicDesign,
  IconInfographics,
  IconLinkdin,
  IconPersone,
  IconPlay,
  IconRestart,
  IconTv,
  IconseoCopywriting,
  Iconvideoinfographics,
  IconwebBuild,
} from "@/Assets/SVGs/SVG";
import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <div className="mt-[92px] mb-[92px] flex flex-col items-center justify-center">
      <div className="2xl:container md:mx-auto ">
        <div className="flex flex-col flex-wrap justify-center items-center ">
          <h3 className="text-[32px] font-bold clip ">Our Services</h3>
          <h2 className="text-[64px] leading-[50px] font-semibold ">
            Product Photography
          </h2>
          <p className="mt-4 border_bottom">
            Capture the essence of your products with our expert photography
            services.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
          <Link href={"/product-photography#white"}>
            <div className="servicecard ">
              <IconCamera />
              <p className="text-center mt-5 font-bold">
                White Background <br /> Photography
              </p>
            </div>
          </Link>

          <Link href={"/product-photography#degree"}>
            <div className="servicecard">
              <IconRestart />
              <p className="text-center mt-5 font-bold">
                180 Degree <br />
                Plain White Imagery
              </p>
            </div>
          </Link>
          <Link href={"/product-photography#productrotating"}>
            <div className="servicecard">
              <IconTv />
              <p className="text-center mt-5 font-bold">
                Product <br />
                Rotating Videos
              </p>
            </div>
          </Link>
          <Link href="/personal-portal">
            <div className="servicecard">
              <IconPersone />
              <p className="text-center mt-5 font-bold">
                Personal <br />
                E-Commerce Portraits
              </p>
            </div>
          </Link>
          <Link href={"/commercial-product"}>
            <div className="servicecard">
              <IconPlay />
              <p className="text-center mt-5 font-bold">
                Commercial <br />
                Product videos
              </p>
            </div>
          </Link>

          <Link href={"/infographics-services#product"}>
            <div className="servicecard">
              <IconInfographics />
              <p className="text-center mt-5 font-bold">
                Product <br />
                Infographics
              </p>
            </div>
          </Link>
          <Link href={"/infographics-services#video"}>
            <div className="servicecard">
              <Iconvideoinfographics />
              <p className="text-center mt-5 font-bold">
                Video <br />
                Infographics
              </p>
            </div>
          </Link>
          <Link href={"/amazon-services#seo"}>
            <div className="servicecard">
              <IconseoCopywriting />
              <p className="text-center mt-5 font-bold">
                SEO / Product <br />
                Copywriting
              </p>
            </div>
          </Link>
          <Link href={"/amazon-services#amazon"}>
            <div className="servicecard">
              <IconAmajone />
              <p className="text-center mt-5 font-bold">
                Amazon <br />
                PPC Services
              </p>
            </div>
          </Link>
          <Link href={"/graphic-design"}>
            <div className="servicecard">
              <IconGraphicDesign />
              <p className="text-center mt-5 font-bold">
                Graphic <br />
                Design Services
              </p>
            </div>
          </Link>
          <Link href={"/website-design"}>
            <div className="servicecard">
              <IconwebBuild />
              <p className="text-center mt-5 font-bold">Website Builds</p>
            </div>
          </Link>
          <Link href={"/linkedin-services"}>
            <div className="servicecard">
              <IconLinkdin />
              <p className="text-center mt-5 font-bold">Linkedin services.</p>
            </div>
          </Link>
          <Link href={"/cv-design-services"}>
            <div className="servicecard">
              <IconCvService />
              <p className="text-center mt-5 font-bold">CV services</p>
            </div>
          </Link>
          <Link href={"/#footer"}>
            <div className="servicecard">
              <IconAllIcuive />
              <p className="text-center mt-5 font-bold">
                All Inclusive <br />
                Managed Services
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
