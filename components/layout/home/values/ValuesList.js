import React from "react";

import ValueItem from "./ValueItem";

const ValuesList = ({ values }) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {values.map((value) => (
        <ValueItem key={value.id} value={value} />
      ))}
    </ul>
  );
};

export default ValuesList;
