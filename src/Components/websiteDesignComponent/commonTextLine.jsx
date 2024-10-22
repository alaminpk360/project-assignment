import { Check_color, Check_white } from "@/Assets/SVGs/SVG";
import React from "react";

const CommonTextLine = ({ icon = true, textWhite, textCloser, P, CLASS }) => {
  return (
    <div className={`flex items-center align-middle gap-2  ${CLASS}`}>
      {icon ? <Check_color /> : <Check_white />}

      <p className={`text-sm leading-[140%] ${textWhite} ${textCloser}`}>
        {P}
      </p>
    </div>
  );
};

export default CommonTextLine;
