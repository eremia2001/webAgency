import React from "react";

const TitleColored = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h4 className="font-normal text-base xl:text-xl text-secondary">
        {subtitle}
      </h4>
      <h1 className="text-4xl sm:text-6xl lg:text-6xl  font-extrabold text-white text-center  ">
        {title} Rifat
        <span className="m-0 p-0 text-primary">IT</span>
      </h1>
    </div>
  );
};

export default TitleColored;
