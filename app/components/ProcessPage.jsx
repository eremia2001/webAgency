import React from "react";
import Title from "./Title";
import processSteps from "../configs/processStepConfig";
import ProcessStep from "./ProcessStep";

const ProcessPage = () => {
  return (
    <div
      className="bg-[#202324] pt-56 flex flex-col justify-center items-center px-10 "
      id="prozess"
    >
      <Title
        title="In 4 Schritten zu Deinem Online Erfolg"
        subtitle="Unser Prozess"
      />

      <div className="flex-1 max-w-[1080px] mt-56 flex flex-col xl:gap-56 gap-40 px-10">
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
  );
};

export default ProcessPage;
