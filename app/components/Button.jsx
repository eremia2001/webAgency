import React from "react";

const Button = ({ title }) => {
  return (
    <button className="px-5 py-2 rounded-md font-bold bg-primary w-fit text-white xl:text-lg shadow-2xl shadow-green-700 ">
      {title}
    </button>
  );
};

export default Button;
