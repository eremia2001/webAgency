import React from "react";
import Title from "./Title";
import TitleColored from "./TitleColored";
import BenefitComponent from "./BenefitComponent";
import { IoPhonePortraitOutline } from "react-icons/io5";
import benefits from "../configs/benefitsConfig"; // Importiere die Config

const BenefitsPage = () => {
  return (
    <div className="min-h-screen bg-[#202324] flex flex-col pt-40 lg:mt-0 text-white   ">
      <div className=" ">
        <TitleColored
          title="Das bekommen Sie mit"
          subtitle="Professionelle Webdesign Agentur"
        />
      </div>

      <div className="flex-1 flex justify-center items-center mt-40 ">
        <div className=" w-[1440px] grid grid-cols-fluid gap-10">
          {benefits.map((benefit, index) => (
            <BenefitComponent
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;
