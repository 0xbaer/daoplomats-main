import React from "react";

import LetsWorkTogether from "./LetsWorkTogether";

const Form = () => {
  return (
    <section
      id="contact"
      className="py-28 md:py-32 lg:py-40 xl:py-48 space-y-20"
      style={{
        backgroundImage: "url('/connectForm/form-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#333F3D",
      }}
    >
      <LetsWorkTogether />
    </section>
  );
};

export default Form;
