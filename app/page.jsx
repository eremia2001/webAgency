"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SalesComponent from "./components/SalesComponent";
import GradientBorderComponent from "./components/GradientBorderComponent";

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
        className="-500 min-h-screen bg-[#202324]   "
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

        <div className="flex flex-col mx-auto md:flex-row  max-w-[1080px]  justify-center items-center  mt-44 gap-52 md:gap-12 text-white ">
          <SalesComponent
            imageSrc="/radar.svg"
            title="1. Radar"
            description="Mit erstklassigem SEO machen wir Ihre Website zum Leuchtturm für Suchende."
          />
          <SalesComponent
            imageSrc="/siegel.svg"
            title="2. Überzeugung"
            description="Ihre Professionalität glänzt – Besucher werden sofort von Ihrer Expertise angezogen"
          />
          <SalesComponent
            imageSrc="/euro.svg"
            title="3. Kunden gewinnen"
            description="Aus Interessenten werden Kunden, fasziniert von Ihrer Präsenz und dem Wert Ihrer Dienstleistungen."
          />
        </div>
      </div>
    </main>
  );
}
