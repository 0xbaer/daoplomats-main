import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="relative space-y-10">
      <p className="text-primary text-4xl font-philosopher">
        Our governance partners
      </p>

      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-12 overflow-hidden md:overflow-visible">
        <div className="flex items-center gap-8 xl:gap-10 partner-animate">
          <Image
            width={200}
            height={100}
            src="/companies/1inch-logo.svg"
            alt="1inch Logo"
            className="w-48 lg:w-44 xl:w-52"
          />

          <Image
            width={200}
            height={100}
            src="/companies/gitcoin-logo.svg"
            alt="Gitcoin Logo"
            className="w-48 lg:w-44 xl:w-52"
          />

          <Image
            width={260}
            height={100}
            src="/companies/bankless-logo.svg"
            alt="BanklessDAO Logo"
            className="w-56 lg:w-52 xl:w-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
