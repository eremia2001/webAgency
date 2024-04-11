import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const TageszeitPicker = ({ label, onChange, value, name }) => {
  return (
    <div className="flex-1 relative">
      <p className="font-light text-left mb-2">{label}</p>
      <div className="relative">
        <select
          value={value}
          name={name}
          onChange={onChange}
          className="py-2 px-4 pr-10 bg-[#373737] rounded-xl text-white w-full outline-none shadow-lg duration-200 appearance-none"
          style={{ WebkitAppearance: "none", MozAppearance: "none" }}
        >
          <option value="">Bitte wählen...</option>
          <option value="morgens">Morgens</option>
          <option value="mittags">Mittags</option>
          <option value="nachmittags">Nachmittags</option>
          <option value="abends">Abends</option>
          <option value="jederzeit">Jederzeit</option>
        </select>
        <IoIosArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-lg pointer-events-none" />
      </div>
    </div>
  );
};

export default TageszeitPicker;
