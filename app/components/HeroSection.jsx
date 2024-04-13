import React, { useRef } from "react";

import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import Button from "./Button";

const HeroSection = () => {
  const nextSectionRef = useRef(null);
  // Event-Handler für den Klick auf den Pfeil
  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const bounceVariants = {
    animate: {
      y: [0, -10, 0], // Bewegung entlang der Y-Achse: Start, Höhepunkt, Ende
      scale: [1, 1.2, 1],
      transition: {
        duration: 1, // Dauer der Bewegung
        ease: "easeInOut", // Bewegungsart
        repeat: Infinity, // Wiederhole die Animation unendlich
        repeatDelay: 1.5, // Verzögerung zwischen den Wiederholungen
      },
    },
  };
  return (
    <div className=" flex flex-col justify-center items-center h-screen  ">
      <div className=" relative  px-4 sm:px-8  flex flex-col justify-center items-center text-center gap-4   font-mulish -translate-y-6 xl:-translate-y-10 ">
        <h4 className="font-normal text-base xl:text-xl text-secondary">
          Webdesign Agentur{" "}
        </h4>
        <div className="flex flex-col gap-1">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl    font-extrabold text-white text-center ">
            Verkaufstarke Websites,{" "}
          </h1>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white text-center ">
            die ihre Kunden überzeugen
          </h2>
        </div>
        <p className=" text-subline font-light   text-sm lg:text-xl">
          Erzielen Sie nachhaltigen Erfolg und gewinnen Sie loyale Kunden mit
          einer innovativen Website von RifatIT
        </p>
        <Button title="Jetzt kostenlos beraten lassen" />
      </div>
      <div className="  flex flex-col justify-end items-center absolute bottom-10  ">
        <ScrollLink to="angebot" smooth={true} duration={800}>
          <motion.div
            onClick={scrollToNextSection}
            className="cursor-pointer"
            variants={bounceVariants}
            animate="animate"
          >
            <IoIosArrowDown
              className="text-white text-4xl"
              style={{ fontSize: "40px" }}
            />
          </motion.div>
        </ScrollLink>
        <p className="text-subline text-sm">
          Erfahren Sie mit uns Ihren Umsatz steigern können
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
