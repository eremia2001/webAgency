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

export default function Home() {
  return (
    <main className="flex flex-col   ">
      <div className="flex flex-col  gradientBg  ">
        <Navbar />
        <HeroSection />
      </div>
      <SalesPage />
      <BenefitsPage />
    </main>
  );
}
