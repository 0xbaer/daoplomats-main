import React from "react";
import Image from "next/image";

const HomeSections = ({ aria, bgImage, width, children }) => {
  return (
    <section aria-labelledby={`${aria}-section`} className="w-full relative">
      {bgImage && (
        <Image
          src={bgImage}
          layout="fill"
          className="absolute top-0 left-0 z-0"
          alt=""
        />
      )}

      <div
        className={`py-28 sm:py-36 px-6 lg:px-8 xl:px-0 flex flex-col lg:flex-row justify-center gap-8 md:gap-12 lg:gap-24 relative mx-auto z-10 ${
          width || "w-fit"
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default HomeSections;
