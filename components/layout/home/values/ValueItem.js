import React from "react";

const ValueItem = ({ value }) => {
  return (
    <li className="flex flex-col gap-4">
      <h3 className="text-primary text-[18px]">{value.title}</h3>
      <p className="text-white text-[16px]">{value.description}</p>
    </li>
  );
};

export default ValueItem;
