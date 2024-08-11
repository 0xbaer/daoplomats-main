import React from "react";

const HomeSectionsHeading = ({
  children,
  color = "text-white",
  classNames,
  id,
}) => {
  return (
    <h2
      id={id}
      className={`text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-philosopher capitalize ${color} ${classNames}`}
    >
      {children}
    </h2>
  );
};

export default HomeSectionsHeading;
