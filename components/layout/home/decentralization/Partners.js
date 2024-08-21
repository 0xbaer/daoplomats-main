import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="relative space-y-16">
      <h3 className="text-primary text-4xl font-philosopher">
        Our governance partners
      </h3>

      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-12 overflow-hidden md:overflow-visible">
        <div className="flex items-center justify-between partner-animate gap-10 xl:gap-12 flex-1">
          <Image
            width={200}
            height={100}
            src="/companies/1inch-logo.svg"
            alt="1inch Logo"
            className="w-44 xl:w-52 prevent-select"
          />

          <Image
            width={200}
            height={100}
            src="/companies/gitcoin-logo.svg"
            alt="Gitcoin Logo"
            className="w-48 lg:w-44 xl:w-52 prevent-select"
          />

          <Image
            width={260}
            height={100}
            src="/companies/bankless-logo.svg"
            alt="BanklessDAO Logo"
            className="w-56 lg:w-52 xl:w-64 prevent-select"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
