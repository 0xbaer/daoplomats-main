import Image from "next/image";
import React from "react";

import LetsWorkTogether from "./LetsWorkTogether";

const Form = () => {
  return (
    <section
      id="contact"
      className="relative"
      aria-labelledby="contact-heading"
    >
      <Image
        src="/home/header/bg-main.png"
        layout="fill"
        className="absolute top-0 left-0 z-0"
        alt=""
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <LetsWorkTogether />
    </section>
  );
};

export default Form;
