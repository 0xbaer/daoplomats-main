import React from "react";

const ValueItem = ({ value }) => {
  return (
    <li className="flex flex-col gap-4">
      <h4 className="text-primary text-[18px]">{value.title}</h4>
      <p className="text-white text-[16px]">{value.description}</p>
    </li>
  );
};

export default ValueItem;
