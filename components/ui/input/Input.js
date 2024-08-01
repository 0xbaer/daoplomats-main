import React from "react";

const Input = ({ type, label, placeholder, name, id }) => {
  return (
    <div className="w-full">
      <label htmlFor="name" className="sr-only">
        {label}
      </label>

      <input
        id={id}
        name={name}
        required
        type={type}
        placeholder={placeholder}
        className="bg-[#333F3D] border border-gray-400 text-gray-200 text-base focus:ring-2 focus:ring-gray-400 focus:border-gray-400 focus:outline-none block w-full p-2.5 placeholder-gray-400 rounded-md"
        aria-label={placeholder}
      />
    </div>
  );
};

export default Input;
