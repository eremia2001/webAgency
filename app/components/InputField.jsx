import React from "react";

const InputField = ({
  valueName,
  onChange,
  errorName,
  type,
  name,
  placeholder,
  label,
}) => {
  return (
    <div className="flex-1 ">
      <p className="font-light text-left mb-2">{label}</p>
      <input
        type={type}
        name={name}
        className="py-2 px-4 bg-[#373737] rounded-xl placeholder-[#777777]  w-full outline-none shadow-lg  duration-200"
        placeholder={placeholder}
        value={valueName}
        onChange={onChange}
      />
      {errorName && (
        <p className="text-red-500 text-xs mt-1 text-left">{errorName}</p>
      )}
    </div>
  );
};

export default InputField;
