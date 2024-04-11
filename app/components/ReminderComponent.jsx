import React from "react";

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
          <button className="px-5 py-2 rounded-md font-bold bg-primary w-fit text-black ">
            <div className="flex flex-row items-center justify-center">
              <p>Zur Anfrage</p>
              <p className="font-light text-gray-800">- 1 Minute</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReminderComponent;
