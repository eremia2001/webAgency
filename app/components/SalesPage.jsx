import React, { useRef } from "react";
import { motion } from "framer-motion";
import SalesComponent from "./SalesComponent";
import Title from "./Title";
const SalesPage = () => {
  return (
    <div className=" min-h-screen bg-[#202324]   " id="test">
      <Title title="Wie wir Ihren Umsatz steigern" />
      <div className="  mt-44  text-white px-10 ">
        <div className="flex flex-wrap flex-col mx-auto md:flex-row  max-w-[1440px]  md:gap-10 gap-52 justify-center items-center ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <SalesComponent
              imageSrc="/radar.svg"
              title="1. Radar"
              description="Mit erstklassigem SEO machen wir Ihre Website zum Leuchtturm für Suchende."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <SalesComponent
              imageSrc="/siegel.svg"
              title="2. Überzeugung"
              description="Ihre Professionalität glänzt – Besucher werden sofort von Ihrer Expertise angezogen."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <SalesComponent
              imageSrc="/euro.svg"
              title="3. Kunden gewinnen"
              description="Aus Interessenten werden Kunden, fasziniert von Ihrer Präsenz und dem Wert Ihrer Dienstleistungen."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
