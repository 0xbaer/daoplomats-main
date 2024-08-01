import React from "react";

const Textarea = ({ label, placeholder, name, id, rows }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        required
        placeholder={placeholder}
        rows={rows}
        className="bg-[#333F3D] border border-gray-400 text-gray-200 text-base focus:ring-2 focus:ring-gray-400 focus:border-gray-400 focus:outline-none block w-full p-2.5 placeholder-gray-400 rounded-md"
        aria-label={placeholder}
      ></textarea>
    </div>
  );
};

export default Textarea;
