"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SalesComponent from "./components/SalesComponent";
import SalesPage from "./components/SalesPage";
import BenefitsPage from "./components/BenefitsPage";
import GradientBorderComponent from "./components/GradientBorderComponent";
import { motion } from "framer-motion";
import Title from "./components/Title";
import ReminderComponent from "./components/ReminderComponent";
import ProcessPage from "./components/ProcessPage";
import FaqPage from "./components/FaqPage";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  return (
    <main className="bg-[#202324]  ">
      <title>
        RifatIT Web Development | Professionelles Webdesign in Halle (Saale)
      </title>
      <div className="flex flex-col">
        <div className="flex flex-col  gradientBg  " id="home">
          <Navbar />
          <HeroSection />
        </div>
        <SalesPage />

        <div className="flex flex-col justify-center items-center gap-5 bg-[#202324] py-96 px-10">
          <h4 className="font-normal text-base xl:text-xl text-secondary">
            Worauf Warten Sie ?
          </h4>
          <h1 className="text-3xl sm:text-3xl lg:text-3xl  font-extrabold text-white text-center ">
            Zeit Ihre Online Präsenz zu meistern!
          </h1>
          <Button title="Jetzt Termin vereinbaren" />
        </div>
        <BenefitsPage />

        <ProcessPage />

        <FaqPage />

        <ReminderComponent />

        <Footer />
      </div>
    </main>
  );
}
