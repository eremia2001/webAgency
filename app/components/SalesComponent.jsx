import React from "react";
import Image from "next/image";

const SalesComponent = () => {
  return (
    <div className="flex flex-wrap flex-col py-10 px-2 gap-10 items-center text-center max-w-[350px] w-full  min-h-[600px] rounded-xl bg-gradient-to-b from-[#333333] to-[#202324] ">
      <h1 className="font-bold text-3xl ">1. Radar</h1>
      <p className="font-medium">
        Mit erstklassigem SEO machen wir Ihre Website zum Leuchtturm für
        Suchende.
      </p>
      <Image
        src="/radar.svg"
        width={200}
        height={200}
        className="translate-y-9"
      />
    </div>
  );
};

export default SalesComponent;
