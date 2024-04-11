import React from "react";
import faqs from "../configs/fuqConfigs"; // Pfad zur config.js anpassen
import FuqComponent from "./FuqComponent"; // Pfad zur FuqComponent.js anpassen
import Title from "./Title";

const FuqPage = () => {
  return (
    <div className="px-10 bg-[#202324] pt-96">
      <Title
        title="Fragen ? Wir haben Antworten!"
        subtitle="Verstehen. Handeln. Wachsen."
      />
      <div className="max-w-[1080px] mx-auto py-36">
        <h2 className="text-2xl font-bold mb-4"></h2>
        <div className="flex flex-col gap-14">
          {faqs.map((faq, index) => (
            <FuqComponent
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FuqPage;
