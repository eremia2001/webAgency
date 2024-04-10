import React from "react";
import Image from "next/image";

const ProcessStep = ({ title, description, imageSource }) => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center text-white">
      <div className="flex flex-col gap-10 text-left flex-1">
        <h1 className="text-4xl font-bold text-center md:text-left">{title}</h1>
        <p className="text-center md:text-left">{description}</p>
      </div>
      <div className="flex-1">
        <Image src="/test.svg" width={500} height={500} />
      </div>
    </div>
  );
};

export default ProcessStep;
