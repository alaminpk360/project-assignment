import React from "react";
import { People_color, People_white } from "@/Assets/SVGs/SVG";
import CommonTextLine from "./commonTextLine";
const PaymentCards = () => {
  return (
    <div>
      <section className="flex justify-between flex-col text-center w-[80%] xl:w-[60%] mx-auto mt-16">
        <h2 className="text-xl leading-7 font-medium italic xl:text-[32px] xl:leading-[2.6875rem] tracking-tight">
          We've got you covered our website design and development services
          offer customised solutions at competitive prices.
        </h2>
        <p className="text-center text-base mt-4">
          From simple website builds to premium development options, we use the
          latest technology and design trends to create efficient and scalable
          web applications that cater to your unique needs.
        </p>
      </section>
      <section className="flex flex-wrap justify-around items-center mt-28 gap-8 xl:gap-0">
        <div className="w-[376px] shadow_card_praimary h-[751px] p-6 max-[639px]:w-[100dvw] ">
          <h1 className="text-[28px] uppercase font-bold">Etiam sapien</h1>
          <div className="flex items-center gap-1">
            <People_color />
            <p className="text-base leading-[150%]">5/50</p>
          </div>
          <div className="h-[2px] w-full bg-[#6F1DF4] my-3"></div>
          <CommonTextLine P={"Vemper consectetur non"} />
          <CommonTextLine P={"Blandit duis erat egestas"} CLASS="mt-5" />
          <CommonTextLine P={"Commodo ornare purus tellus"} CLASS="mt-5" />
          <div className="ml-8">
            <CommonTextLine P={"Ante praesent in vel auctor"} CLASS="mt-5" />
            <CommonTextLine
              P={"Eget ut suscipit ipsum qua"}
              CLASS="mt-5"
              textCloser="text-[#3C3C4399] line-through"
            />
            <CommonTextLine
              P={"Neque pellentesque pellentesque odio nunc condimentum id"}
              CLASS="mt-5"
              textCloser="line-through text-[#3C3C4399]"
            />
          </div>
          <CommonTextLine P={"Arcu eget tincidunt sit senect"} CLASS="mt-5" />
          <CommonTextLine
            P={"Luctus et at consequat consequat aliquam dolor"}
            CLASS="mt-5"
            textCloser="text-[#3C3C4399] line-through"
          />
          <CommonTextLine
            P={" Facilisi eget sollicitudin facilisi blandit in commodo"}
            CLASS="mt-5"
            textCloser="text-[#3C3C4399] line-through"
          />
          <CommonTextLine
            P={"Perdiet augue elementum mattis morbi in"}
            CLASS="mt-5"
            textCloser="text-[#3C3C4399] line-through"
          />
          <CommonTextLine
            P={"Sommodo purus gravida"}
            CLASS="mt-5"
            textCloser="text-[#3C3C4399] line-through"
          />
          <div className="flex items-center justify-between mt-8">
            <h3 className="text-2xl leading-[120%] font-bold relative cose ">
              234 900 ₽
            </h3>
            <h4 className="text-xl font-bold leading-[120%] text-[#6F1DF4]">
              24 900 ₽
            </h4>
          </div>
          <div className="h-[2px] w-full bg-[#6F1DF4] my-3"></div>
          <div className="flex justify-between items-center">
            <div className="bg-[#6F1DF4] h-[6px] w-[6px] rounded-full"></div>
            <p className="text-[#3C3C43] text-base">
              or from 1800 ₽ installments
            </p>
            <div className="bg-[#6F1DF4] h-[6px] w-[6px] rounded-full"></div>
          </div>
          <button className="h-[48px] rounded-lg text-white mt-4 w-[328px] bg-[#6F1DF4] font-bold text-base px-6 hover:bg-white hover:text-[#6F1DF4] hover:outline outline-[#6F1DF4] max-[639px]:w-full">
            Reserved
          </button>
        </div>

        <div className="w-[376px] bg-[#6F1DF4] shadow_card_praimary h-[751px] relative xl:-top-16 max-[639px]:w-[100dvw]">
          <div className="pt-6 px-6">
            <h1 className="text-[28px] uppercase font-bold text-white">
              Etiam sapien
            </h1>
            <div className="flex items-center gap-1">
              <People_white />
              <p className="text-base leading-[150%] text-white">5/50</p>
            </div>
            <div className="h-[2px] w-full bg-white my-3"></div>
          </div>
          <div className="h-6 w-full bg_card_item flex  items-center">
            <CommonTextLine
              P={"Vemper consectetur non"}
              textCloser="text-white"
              icon={false}
              CLASS="px-6"
            />
          </div>
          <div className="pb-6 px-6">
            <CommonTextLine
              P={"Blandit duis erat egestas"}
              CLASS="mt-3"
              textCloser="text-white"
              icon={false}
            />
            <div className="h-[1px] w-full bg-[#DD3578] my-[9px]"></div>
            <CommonTextLine
              P={"Commodo ornare purus tellus"}
              CLASS=""
              textCloser="text-white"
              icon={false}
            />
            <div className="h-[1px] w-full bg-[#DD3578] my-[9px]"></div>
            <div className="ml-8">
              <CommonTextLine
                P={"Ante praesent in vel auctor"}
                CLASS=""
                textCloser="text-white"
                icon={false}
              />
              <div className="h-[1px] w-full bg-[#DD3578] my-[9px]"></div>
              <CommonTextLine
                P={"Eget ut suscipit ipsum qua"}
                CLASS=""
                textCloser="text-white line-through"
                icon={false}
              />
              <div className="h-[1px] w-full bg-[#DD3578] my-[9px]"></div>
              <CommonTextLine
                P={"Neque pellentesque pellentesque odio nunc condimentum id"}
                CLASS=""
                textCloser="line-through text-white"
                icon={false}
              />
              <div className="h-[1px] w-full bg-[#DD3578] my-[9px]"></div>
            </div>
            <CommonTextLine
              P={"Arcu eget tincidunt sit senect"}
              CLASS=""
              textCloser="text-white"
              icon={false}
            />
            <div className="h-[1px] w-full bg-[#DD3578] my-[9px]"></div>
            <CommonTextLine
              P={"Luctus et at consequat consequat aliquam dolor"}
              CLASS=""
              textCloser="text-white line-through"
              icon={false}
            />
            <div className="h-[1px] w-full bg-[#DD3578] my-[9px]"></div>
            <CommonTextLine
              P={" Facilisi eget sollicitudin facilisi blandit in commodo"}
              CLASS=""
              textCloser="text-white line-through"
              icon={false}
            />
            <div className="h-[1px] w-full bg-[#DD3578] my-[9px]"></div>
            <CommonTextLine
              P={"Perdiet augue elementum mattis morbi in"}
              CLASS=""
              textCloser="text-white line-through"
              icon={false}
            />
            <div className="h-[1px] w-full bg-[#DD3578] my-[9px]"></div>
            <CommonTextLine
              P={"Sommodo purus gravida"}
              CLASS=""
              textCloser="text-white line-through"
              icon={false}
            />
            <div className="h-[1px] w-full bg-[#DD3578] my-[9px]"></div>
            <div className="flex items-center justify-between mt-8">
              <h3 className="text-2xl leading-[120%] font-bold relative cose text-white">
                234 900 ₽
              </h3>
              <h4 className="text-xl font-bold leading-[120%] text-white">
                24 900 ₽
              </h4>
            </div>
            <div className="h-[2px] w-full bg-white my-3"></div>
            <div className="flex justify-between items-center">
              <div className="bg-white h-[6px] w-[6px] rounded-full"></div>
              <p className="text-white text-base">
                or from 1800 ₽ installments
              </p>
              <div className="bg-white h-[6px] w-[6px] rounded-full"></div>
            </div>
            <button className="h-[48px] rounded-lg text-[#6F1DF4] mt-4 w-[328px] bg-white font-bold text-base px-6 hover:bg-[#6f1df4] hover:text-white hover:outline outline-white max-[639px]:w-full">
              Reserved
            </button>
          </div>
        </div>

        <div className="w-[376px] shadow_card_praimary h-[751px] p-6 max-[639px]:w-[100dvw]">
          <h1 className="text-[28px] uppercase font-bold">Etiam sapien</h1>
          <div className="flex items-center gap-1">
            <People_color />
            <p className="text-base leading-[150%]">5/50</p>
          </div>
          <div className="h-[2px] w-full bg-[#6F1DF4] my-3"></div>
          <CommonTextLine P={"Vemper consectetur non"} />
          <CommonTextLine P={"Blandit duis erat egestas"} CLASS="mt-5" />
          <CommonTextLine P={"Commodo ornare purus tellus"} CLASS="mt-5" />
          <div className="ml-8">
            <CommonTextLine P={"Ante praesent in vel auctor"} CLASS="mt-5" />
            <CommonTextLine
              P={"Eget ut suscipit ipsum qua"}
              CLASS="mt-5"
              textCloser="text-[#3C3C4399] line-through"
            />
            <CommonTextLine
              P={"Neque pellentesque pellentesque odio nunc condimentum id"}
              CLASS="mt-5"
              textCloser="line-through text-[#3C3C4399]"
            />
          </div>
          <CommonTextLine P={"Arcu eget tincidunt sit senect"} CLASS="mt-5" />
          <CommonTextLine
            P={"Luctus et at consequat consequat aliquam dolor"}
            CLASS="mt-5"
            textCloser="text-[#3C3C4399] line-through"
          />
          <CommonTextLine
            P={" Facilisi eget sollicitudin facilisi blandit in commodo"}
            CLASS="mt-5"
            textCloser="text-[#3C3C4399] line-through"
          />
          <CommonTextLine
            P={"Perdiet augue elementum mattis morbi in"}
            CLASS="mt-5"
            textCloser="text-[#3C3C4399] line-through"
          />
          <CommonTextLine
            P={"Sommodo purus gravida"}
            CLASS="mt-5"
            textCloser="text-[#3C3C4399] line-through"
          />
          <div className="flex items-center justify-between mt-8">
            <h3 className="text-2xl leading-[120%] font-bold relative cose ">
              234 900 ₽
            </h3>
            <h4 className="text-xl font-bold leading-[120%] text-[#6F1DF4]">
              24 900 ₽
            </h4>
          </div>
          <div className="h-[2px] w-full bg-[#6F1DF4] my-3"></div>
          <div className="flex justify-between items-center">
            <div className="bg-[#6F1DF4] h-[6px] w-[6px] rounded-full"></div>
            <p className="text-[#3C3C43] text-base">
              or from 1800 ₽ installments
            </p>
            <div className="bg-[#6F1DF4] h-[6px] w-[6px] rounded-full"></div>
          </div>
          <button className="h-[48px] rounded-lg text-white mt-4 w-[328px] bg-[#6F1DF4] font-bold text-base px-6 hover:bg-white hover:text-[#6F1DF4] hover:outline outline-[#6F1DF4] max-[639px]:w-full">
            Reserved
          </button>
        </div>
      </section>
    </div>
  );
};

export default PaymentCards;
