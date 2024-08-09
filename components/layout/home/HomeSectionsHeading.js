import React from "react";

const HomeSectionsHeading = ({
  children,
  color = "text-white",
  classNames,
}) => {
  return (
    <h3
      className={`text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-philosopher capitalize ${color} ${classNames}`}
    >
      {children}
    </h3>
  );
};

export default HomeSectionsHeading;
