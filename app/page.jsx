"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SalesComponent from "./components/SalesComponent";

export default function Home() {
  const nextSectionRef = useRef(null);
  // Event-Handler für den Klick auf den Pfeil
  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col   ">
      <div className="flex flex-col  gradientBg  ">
        <Navbar />
        <HeroSection />
      </div>

      <div
        ref={nextSectionRef}
        className="-500 min-h-screen bg-[#202324]    "
        id="test"
      >
        <div className="flex flex-col justify-center items-center gap-5">
          <h4 className="font-normal text-base xl:text-xl text-secondary">
            Was wir machen
          </h4>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl  font-extrabold text-white text-center ">
            So steigern Sie Ihren Umsatz
          </h1>
        </div>

        <div className="flex flex-col mx-auto lg:flex-row  justify-center items-center  mt-44 gap-24 text-white md:gap-10  ">
          <SalesComponent />
          <SalesComponent />
          <SalesComponent />
        </div>
      </div>
    </main>
  );
}
