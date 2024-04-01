import React from "react";
import Image from "next/image";

const SalesComponent = ({ imageSrc, title, description }) => {
  return (
    <div className="relative gradient-border flex flex-wrap flex-col py-10 px-2 gap-10 items-center text-center max-w-[350px] w-full  min-h-[600px] rounded-xl ">
      <h1 className="font-bold text-3xl md:text-2xl lg:text-3xl">{title}</h1>
      <p className="font-semibold">{description}</p>
      <div className="absolute top-1/2 w-32 h-32">
        <Image
          src={imageSrc}
          className=" w-full"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default SalesComponent;
