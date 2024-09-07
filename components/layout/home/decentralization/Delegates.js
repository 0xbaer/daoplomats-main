import React from "react";

import Image from "next/image";

const Delegates = () => {
  return (
    <div className="relative z-10 mt-28 xl:mt-32 space-y-16">
      <h3 className="text-primary text-4xl font-philosopher px-14 xl:px-20">
        We are Delegates of:
      </h3>

      <div className="space-y-16 xl:space-y-12 mx-auto w-full md:w-fit px-10 xl:px-20 overflow-x-hidden">
        <div className="w-full overflow-x-hidden">
          <div className="flex items-center justify-start md:justify-center gap-12 xl:gap-16 whitespace-nowrap animate-scroll">
            <Image
              width={200}
              height={100}
              src="/companies/1inch-logo.svg"
              alt="1inch Logo"
              className="w-48 lg:w-44 xl:w-52 prevent-select"
            />
            <Image
              width={200}
              height={100}
              src="/companies/aave-logo.svg"
              alt="Gitcoin Logo"
              className="w-48 lg:w-44 xl:w-52 prevent-select"
            />
            <Image
              width={260}
              height={100}
              src="/companies/arbitrum-logo.svg"
              alt="Arbitrum Logo"
              className="w-56 lg:w-52 xl:w-64 prevent-select"
            />
            {/* Duplicated content */}
            <Image
              width={200}
              height={100}
              src="/companies/1inch-logo.svg"
              alt="1inch Logo"
              className="w-48 lg:w-44 xl:w-52 prevent-select lg:hidden inline-block"
            />
            <Image
              width={200}
              height={100}
              src="/companies/aave-logo.svg"
              alt="Gitcoin Logo"
              className="w-48 lg:w-44 xl:w-52 prevent-select lg:hidden inline-block"
            />
            <Image
              width={260}
              height={100}
              src="/companies/arbitrum-logo.svg"
              alt="Arbitrum Logo"
              className="w-56 lg:w-52 xl:w-64 prevent-select lg:hidden inline-block"
            />
          </div>
        </div>

        <div className="w-full overflow-x-hidden">
          <div className="flex items-center justify-start lg:justify-center gap-12 xl:gap-16 whitespace-nowrap animate-scroll">
            <Image
              width={260}
              height={100}
              src="/companies/connext-logo.svg"
              alt="Connext Logo"
              className="w-56 lg:w-52 xl:w-64 prevent-select"
            />
            <Image
              width={200}
              height={100}
              src="/companies/ens-logo.svg"
              alt="ENS Logo"
              className="w-44 lg:w-40 xl:w-44 prevent-select"
            />
            <Image
              width={260}
              height={100}
              src="/companies/optimism-logo.svg"
              alt="Optimism Logo"
              className="w-48 lg:w-44 xl:w-52 prevent-select"
            />
            <Image
              width={200}
              height={100}
              src="/companies/shutter-logo.svg"
              alt="Shutter Logo"
              className="w-48 lg:w-44 xl:w-52 prevent-select lg:inline-block inline-block md:hidden"
            />
            {/* Duplicated content */}
            <Image
              width={260}
              height={100}
              src="/companies/connext-logo.svg"
              alt="Connext Logo"
              className="w-56 lg:w-52 xl:w-64 prevent-select lg:hidden inline-block"
            />
            <Image
              width={200}
              height={100}
              src="/companies/ens-logo.svg"
              alt="ENS Logo"
              className="w-44 lg:w-40 xl:w-44 prevent-select lg:hidden inline-block"
            />
            <Image
              width={260}
              height={100}
              src="/companies/optimism-logo.svg"
              alt="Optimism Logo"
              className="w-48 lg:w-44 xl:w-52 prevent-select lg:hidden inline-block"
            />
            <Image
              width={200}
              height={100}
              src="/companies/shutter-logo.svg"
              alt="Shutter Logo"
              className="w-48 lg:w-44 xl:w-52 prevent-select lg:hidden inline-block"
            />
          </div>
        </div>

        <div className="w-full overflow-x-hidden">
          <div className="flex items-center justify-start md:justify-center gap-12 xl:gap-16 whitespace-nowrap animate-scroll">
            <Image
              width={200}
              height={100}
              src="/companies/safe-logo.svg"
              alt="Uniswap Logo"
              className="w-48 lg:w-44 xl:w-52 prevent-select"
            />
            <Image
              width={200}
              height={100}
              src="/companies/starknet-logo.svg"
              alt="Starknet Logo"
              className="w-56 lg:w-52 xl:w-64 prevent-select"
            />
            <Image
              width={200}
              height={100}
              src="/companies/uniswap-logo.svg"
              alt="Safe Logo"
              className="w-56 lg:w-52 xl:w-64 prevent-select"
            />
            {/* Duplicated content */}
            <Image
              width={200}
              height={100}
              src="/companies/safe-logo.svg"
              alt="Uniswap Logo"
              className="w-48 lg:w-44 xl:w-52 prevent-select lg:hidden inline-block"
            />
            <Image
              width={200}
              height={100}
              src="/companies/starknet-logo.svg"
              alt="Starknet Logo"
              className="w-56 lg:w-52 xl:w-64 prevent-select lg:hidden inline-block"
            />
            <Image
              width={200}
              height={100}
              src="/companies/uniswap-logo.svg"
              alt="Safe Logo"
              className="w-56 lg:w-52 xl:w-64 prevent-select lg:hidden inline-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delegates;
