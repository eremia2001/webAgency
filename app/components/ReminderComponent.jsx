import React from "react";
import Button from "./Button";

const ReminderComponent = () => {
  return (
    <div className="bg-[#202324] flex justify-center  py-32 px-10">
      <div className="max-w-[1080px] bg-[#1D2C22] p-20 rounded-2xl shadow-xl">
        <div className="flex flex-col justify-center items-center gap-10 ">
          <h4 className="font-normal text-base xl:text-xl text-secondary">
            Ihre Suche Endet Hier
          </h4>
          <h1 className="text-3xl sm:text-5xl lg:text-5xl  font-extrabold text-white text-center ">
            Jetzt nach einer kostenlosen Beratung herausfinden , wie wir helfen
            können !
          </h1>

          <Button title="Zur Anfrage " />
        </div>
      </div>
    </div>
  );
};

export default ReminderComponent;
