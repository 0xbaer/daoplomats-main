import Image from "next/image";
import React, { Suspense } from "react";

import LetsWorkTogether from "./LetsWorkTogether";

const Form = () => {
  return (
    <Suspense>
      <section
        id="contact"
        className="relative"
        aria-labelledby="contact-heading"
      >
        <Image
          src="/home/header/bg-main.png"
          layout="fill"
          sizes="100vw"
          className="absolute top-0 left-0 z-0"
          alt=""
        />

        <LetsWorkTogether />
      </section>
    </Suspense>
  );
};

export default Form;
