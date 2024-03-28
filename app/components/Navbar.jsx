import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <header className=" flex items-center justify-between py-5 px-10 border-b-[1px]  border-[#E8F3F5] ">
      <div className="flex justify-start flex-1">
        <Image
          src="./Logo2.svg"
          width={200}
          height={200}
          className="w-12 md:w-14"
          alt="Picture of the author"
        />
        {/* <h1 className="font-bold text-white text-2xl">RIfaT.</h1> */}
      </div>

      <ul className="hidden lg:flex flex-row text-white gap-10">
        <li>Referenzen</li>
        <li>Blog</li>
        <li>Warum wir ?</li>
      </ul>

      <div className="hidden justify-end flex-1 lg:flex">
        <button className="px-5 py-2 rounded-md font-bold bg-primary w-fit text-black ">
          <div className="flex flex-row items-center justify-center">
            <p>Zur Anfrage</p>
            <p className="font-light text-gray-800">- 1 Minute</p>
          </div>
        </button>
      </div>
      <div className=" lg:hidden">
        <RxHamburgerMenu width={50} className="text-2xl  text-white " />
      </div>
    </header>
  );
};

export default Navbar;
