import React from "react";

const BenefitComponent = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col p-5 gradient-border max-w-[350px] justify-center items-center text-center mx-auto shadow-xl hover:shadow-2xl duration-200">
      {/* Icon rendern. Das Icon muss als Komponente übergeben werden */}
      {console.log(icon)}
      <p className="text-[50px] text-primary">{icon}</p>
      {/* Dynamisch den Titel setzen */}
      <h1 className="font-bold text-xl my-5">{title}</h1>

      {/* Dynamisch die Beschreibung setzen */}
      <p className="text-[#d8d8d8]">{description}</p>
    </div>
  );
};

export default BenefitComponent;
