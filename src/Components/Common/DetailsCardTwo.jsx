const MyDetailsCardTwo = ({ LOGO, H1, P, CLASS }) => {
  return (
    <div className={`w-[23.625rem] max-[739px]:w-fit ${CLASS}`}>
      {LOGO ? <LOGO /> : ""}
      <h6 className="cliptwo text-xl font-medium leading-[30px] mt-[1.19rem] max-[739px]:mt-2">
        {H1}
      </h6>
      <p className="text-white text-base font-normal leading-normal mt-[.5rem]">
        {P}
      </p>
    </div>
  );
};

export default MyDetailsCardTwo;
