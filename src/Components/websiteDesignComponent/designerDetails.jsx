import React from "react";
import wesiteimg_1 from "../../Assets/img/web_design-1.png";
import wesiteimg_2 from "../../Assets/img/web_design_2.png";
import wesiteimg_3 from "../../Assets/img/web_design_3.png";
import Image from "next/image";

const DesignerDetails = () => {
  return (
    <>
      <section className="lg:flex justify-between lg:gap-8 mx-4 mt-20">
        <div className="lg:w-[50%]">
          <h2 className="text-[28px] leading-[30px]  2xl:text-[48px] 2xl:leading-[60px] tracking-[-0.06rem] capitalize font-bold text-center lg:text-left italic ">
            Are you looking for a{" "}
            <span className="clip xl:inline-block xl:w-[300px] ">
              website design{" "}
            </span>
            <span className="clip xl:inline-block xl:w-[400px]">
              {" "}
              and build a solution <span className="xl:hidden">.</span>
            </span>
          </h2>
          <h6 className="italic text-[22px] leading-7 text-center lg:text-start 2xl:text-[32px] font-medium 2xl:leading-[2.6875rem] tracking-[-0.04rem] mt-3 capitalize">
            that offers{" "}
            <span className="clip">
              simple and complex options at competitive prices?{" "}
            </span>
            Look no further than our{" "}
            <span className="clip">in-house Design & Technology.</span>
          </h6>
          <p className="text-base font-normal leading-[1.5rem] text-center lg:text-start mt-3 ">
            We understand that every business has unique needs regarding website
            design and development. Therefore, we offer simple website builds at
            competitive prices and more complex and premium website development
            options.
            <br />
            <br />
            Our personalised website design and development approach includes
            the latest technology and design trends to create efficient and
            scalable web applications. We use a popular web development
            technology stack that combines MongoDB, Express.js, React, and
            Node.js, providing developers with the tools they need to create
            highly efficient and scalable web applications.
          </p>
        </div>
        <div className="max-h-[479px]">
          <Image
            src={wesiteimg_1}
            alt="wesiteimg_1"
            className="w-[635px] h-[417px] lg:w-[600px] lg:h-[400px] 2xl:w-[775px] 2xl:h-[479px] mx-auto mt-8 xl:mt-0 max-[639px]:w-[90dvw]  max-[639px]:h-[250px] max-[639px]:object-contain"
          />
        </div>
      </section>

      <section className="flex justify-between items-center flex-col lg:flex-row  lg:gap-14 mx-4 mt-12 max-[639px]:mt-0">
        <div className="max-h-[479px]">
          <Image
            src={wesiteimg_2}
            alt="wesiteimg_2"
            className="w-[635px] h-[417px] lg:w-[600px] lg:h-[400px] 2xl:w-[775px] 2xl:h-[479px] mx-auto mt-8 xl:mt-0 max-[639px]:w-[90dvw]  max-[639px]:h-[250px] max-[639px]:object-contain"
          />
        </div>
        <div className="lg:w-[50%] mt-4 lg:mt-0">
          <h6 className="italic text-[22px] leading-7 text-center lg:text-start 2xl:text-[32px] font-medium 2xl:leading-[2.6875rem] tracking-[-0.04rem] mt-3 capitalize">
            Our mission is to{" "}
            <span className="clip inline-block 2xl:w-[220px]">
              provide innovative {"  "}{" "}
            </span>
            <span className="clip">
              and reliable website design and development solutions
            </span>{" "}
            that help businesses of all sizes thrive in the digital world.
          </h6>

          <p className="text-base font-normal leading-[1.5rem] text-center lg:text-start mt-3 ">
            We are committed to using the latest technology and design trends,
            personalised solutions, and flexible approaches to creating
            efficient and scalable web applications.
            <br />
            <br />
            We aim to help clients achieve their business objectives by creating
            user-friendly, visually appealing websites and optimised search
            engines. In addition, we strive to build long-lasting relationships
            with our clients by delivering exceptional customer service and
            support and continuously improving our skills and expertise to meet
            the ever-changing digital landscape demands.
          </p>
        </div>
      </section>

      <section className="lg:flex justify-between items-center lg:gap-8 mx-4 mt-20">
        <div className="lg:w-[50%]">
          <h6 className="italic text-[22px] leading-7 text-center lg:text-start 2xl:text-[32px] font-medium 2xl:leading-[2.6875rem] tracking-tight mt-3 capitalize">
            We wish to be{" "}
            <span className="clip">
              recognised as a leading, website design'{" "}
              <br className="hidden xl:block" /> and development company.
            </span>{" "}
            that delivers{" "}
            <span className="clip">
              cutting-edge, innovative, customised solutions
            </span>{" "}
            to our clients.
          </h6>

          <p className="text-base font-normal leading-[1.5rem] text-center lg:text-start mt-8 ">
            We aim to create websites that meet our client's needs and exceed
            their expectations by providing exceptional user experience,
            functionality, and visual appeal. We strive to be a company known
            for its outstanding customer service and support and for
            continuously evolving to meet the ever-changing digital landscape
            demands. Our aim is to build long-lasting relationships with our
            clients by delivering exceptional quality and value and being a
            trusted partner in their business success. We envision a future
            where our expertise and innovation will help businesses of all sizes
            thrive in the digital world.
          </p>
        </div>
        <div className="max-h-[479px]">
          <Image
            src={wesiteimg_3}
            alt="wesiteimg_3"
            className="w-[635px] h-[417px] lg:w-[600px] lg:h-[400px] 2xl:w-[775px] 2xl:h-[479px] mx-auto mt-8 xl:mt-0 max-[639px]:w-[90dvw]  max-[639px]:h-[250px] max-[639px]:object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default DesignerDetails;
