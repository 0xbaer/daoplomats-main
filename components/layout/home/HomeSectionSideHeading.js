import React from "react";

const HomeSectionHeading = ({ color, aria, label }) => {
  return (
    <h2
      className={`font-bold text-xl xl:text-lg w-auto text-start font-urbanist uppercase text-nowrap ${color}`}
      aria-label={`${aria} Heading`}
    >
      {label}
    </h2>
  );
};

export default HomeSectionHeading;
