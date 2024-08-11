import React, { Suspense } from "react";
import LetsWorkTogether from "./LetsWorkTogether";

const Form = () => {
  return (
    <Suspense>
      <section
        id="contact"
        className="py-28 md:py-32 lg:py-40 xl:py-48 space-y-20"
        style={{
          backgroundImage: "url('/home/connectForm/form-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#333F3D",
        }}
        aria-labelledby="contact-heading"
      >
        <LetsWorkTogether />
      </section>
    </Suspense>
  );
};

export default Form;
