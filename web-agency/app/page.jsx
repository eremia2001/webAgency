import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {
  return (
    <main className="flex flex-col    ">
      <div className="flex flex-col min-h-screen gradientBg">
        <header className="flex items-center justify-between p-5 border-b-[1px]  border-[#E8F3F5] ">
          <div className="flex justify-start flex-1">
            <h1 className="font-bold text-white text-2xl">RifatIT.</h1>
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
            <RxHamburgerMenu width={50} className="text-2xl  " />
          </div>
        </header>

        <div className="flex-1 px-4  flex flex-col justify-center items-center text-center gap-4   font-mulish -translate-y-32 xl:-translate-y-14 ">
          <h4 className="font-normal text-base xl:text-xl text-secondary">
            Webdesign Agentur{" "}
          </h4>
          <div className="flex ">
            <h1 className="text-4xl sm:text-2xl  xl:text-6xl font-extrabold text-white text-center ">
              Verkaufstarke Websites,{" "}
            </h1>
            <h2 className="text-2xl xl:text-5xl font-extrabold text-white text-center ">
              die ihre Kunden überzeugen
            </h2>
          </div>
          <p className=" text-subline font-light   text-sm xl:text-xl">
            Erzielen Sie nachhaltigen Erfolg und gewinnen Sie loyale Kunden mit
            einer innovativen Website von RifatIT
          </p>
          <button className="px-5 py-2 rounded-md font-bold bg-primary w-fit text-black ">
            Jetzt kostenlos beraten lassen
          </button>
        </div>
        <div className="mx-auto  flex flex-col justify-center items-center -translate-y-14">
          <IoIosArrowDown
            className="text-white  text-4xl cursor-pointer"
            width={50}
          />
          <p className="text-subline text-sm">
            Erfahren Sie mit uns Ihren Umsatz steigern können
          </p>
        </div>
      </div>

      <div className="h-screen bg-[#202324] gradientBg2r" id="test">
        <div className="flex flex-col justify-center items-center translate-y-52 gap-5">
          <h4 className="font-normal text-base xl:text-xl text-secondary">
            Was wir anbieten
          </h4>
          <h1 className="text-5xl  xl:text-6xl font-extrabold text-white text-center ">
            So steigern Sie Ihren Umsatz
          </h1>
        </div>
      </div>
    </main>
  );
}
