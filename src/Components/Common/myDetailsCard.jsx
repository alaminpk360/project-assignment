const MyDetailsCard = ({ LOGO, H1, P, CLASS }) => {
  return (
    <div className={`w-[376px] max-[739px]:w-fit ${CLASS}`}>
      {LOGO ? <LOGO /> : ""}
      <h6 className="text-[#F06] text-xl font-medium leading-[30px] mt-5 max-[739px]:mt-2">
        {H1}
      </h6>
      <p className=" text-[#494949;] text-base font-normal leading-normal">
        {P}
      </p>
    </div>
  );
};

export default MyDetailsCard;
