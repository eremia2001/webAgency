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
import ProcessStep from "./components/ProcessStep";
import processSteps from "./configs/processStepConfig";

export default function Home() {
  return (
    <main className="flex flex-col   ">
      <div className="flex flex-col  gradientBg  ">
        <Navbar />
        <HeroSection />
      </div>
      <SalesPage />

      <ReminderComponent />

      <BenefitsPage />

      <div className="bg-[#202324] pt-56 flex flex-col justify-center items-center ">
        <Title
          title="In 4 Schritten zu Deinem Online Erfolg"
          subtitle="Unser Prozess"
        />

        <div className="flex-1 max-w-[1080px] mt-56 flex flex-col gap-40 px-10">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              title={step.title}
              description={step.description}
              imageSource={step.imageSource}
            />
          ))}
        </div>
      </div>

      <div></div>
    </main>
  );
}
