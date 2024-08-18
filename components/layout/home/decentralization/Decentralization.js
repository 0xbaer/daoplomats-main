"use client";
import Image from "next/image";

const Decentralization = () => {
  return (
    <div className="w-full flex flex-col gap-20 md:gap-[140px] xl:gap-[96px] py-[103px] px-8 md:px-[60px] relative">
      <Image
        src="/images/section_2/bg_main.png"
        layout="fill"
        alt="bg"
        className="absolute top-0 left-0 z-0 object-cover"
      />

      <div className="flex flex-col laptop:flex-row md:items-center justify-between w-full md:h-[331px] relative">
        <h1
          className={
            "text-[#FCFBEB] text-[50px] sm:text-[60px] md:text-[100px] lg:text-[120px] md:leading-[125px]  "
          }
        >
          Enabling <br />
          <span className="text-[#DFE225]">Decentralization</span>
        </h1>

        <div className="flex  items-center justify-center gap-[100px]">
          <div className="flex flex-col gap-[6px] items-center text-[#fcfbfb]">
            {/* <p
              className={
                "text-[50px] sm:text-[80px] lg:text-[120px] leading-[125px] " +
                Philosopher.className
              }
            >
              5M
            </p>
            <p
              className={
                "text-[12px] sm:text-[18px] lg:text-[24px] text-center " +
                Urbanist.className
              }
            >
              Token Delegated
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center text-[#fcfbfb]">
            <div
              className={
                "text-[50px] sm:text-[80px] lg:text-[120px] leading-[125px] relative " +
                Philosopher.className
              }
            >
              10
              <p
                className={
                  "-top-[35%] -right-[25%] text-[48px] absolute " +
                  Philosopher.className
                }
              >
                +
              </p>
            </div>
            <p
              className={
                "text-[12px] sm:text-[18px] lg:text-[28px] text-center " +
                Urbanist.className
              }
            >
              Proposals Passed
            </p> */}
          </div>
          {/* <div className="flex flex-col gap-[6px] items-center text-[#fcfbfb]">
            <p
              className={
                "text-[50px] sm:text-[80px] lg:text-[120px] leading-[125px] " +
                Philosopher.className
              }
            >
              9
            </p>
            <p
              className={
                "text-[12px] sm:text-[18px] lg:text-[28px] " +
                Urbanist.className
              }
            >
              DAOS
            </p> 
            </div> */}
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-start gap-[60px] relative">
        <p className={"text-[#DFE225] text-[36px] "}>We are delegates of</p>

        <div className="space-y-20 md:space-y-28 mx-auto">
          <div className="w-full flex xl:flex-row md:flex-col gap-10 justify-between  2xl:px-48 items-center xl:px-40 lg:px-32 -ml-8 md:-ml-0 overflow-hidden md:overflow-visible">
            <div className="flex items-center gap-10 animate-move-left-to-right">
              <Image
                src="/images/section_2/logo_2.png"
                width={300}
                height={58}
                alt="logo_2"
                className="w-[200px] md:w-auto"
              />
              <Image
                src="/images/section_2/logo_3.png"
                width={300}
                height={58}
                alt="logo_3"
                className="w-[100px] md:w-auto -ml-6 md:-ml-0"
              />
              <Image
                src="/images/section_2/logo_11.svg"
                width={300}
                height={58}
                alt="logo_11"
                className="w-[200px] md:w-[250px] ml-8"
              />

              <Image
                src="/images/section_2/logo_1.png"
                width={300}
                height={58}
                alt="logo_1"
                className="w-[200px] md:w-auto md:hidden"
              />
              <Image
                src="/images/section_2/ens.svg"
                width={300}
                height={58}
                alt="ENS Domain Logo"
                className="w-[100px] md:w-[250px] md:hidden"
              />
              <Image
                src="/images/section_2/logo_10.svg"
                width={300}
                height={58}
                alt="logo_10"
                className="w-[200px] md:w-[250px] md:hidden"
              />
              <Image
                src="/images/section_2/logo_7.svg"
                width={300}
                height={58}
                alt="logo_7"
                className="w-[200px] md:w-[250px] md:hidden"
              />
              <Image
                src="/images/section_2/logo_12.svg"
                width={300}
                height={58}
                alt="logo_12"
                className="w-[200px] md:w-[250px] md:hidden"
              />
              <Image
                src="/images/section_2/starnet.svg"
                width={300}
                height={58}
                alt="Startnet Logo"
                className="w-[200px] md:w-[250px] md:hidden"
              />
              <Image
                src="/images/section_2/uniswap.svg"
                width={300}
                height={58}
                alt="Uniswap Logo"
                className="w-[200px] md:w-[250px] md:hidden"
              />
            </div>
          </div>

          <div className="w-full flex md:flex-col gap-10 justify-between items-center overflow-hidden md:overflow-visible">
            <div className="flex items-center gap-10 animate-move-right-to-left w-full">
              <Image
                src="/images/section_2/logo_1.png"
                width={300}
                height={58}
                alt="logo_1"
                className="w-[200px] md:w-auto"
              />
              <Image
                src="/images/section_2/ens.svg"
                width={300}
                height={58}
                alt="ENS Domain Logo"
                className="w-[100px] md:w-[250px]"
              />
              <Image
                src="/images/section_2/logo_10.svg"
                width={300}
                height={58}
                alt="logo_10"
                className="w-[200px] md:w-[250px]"
              />
              <Image
                src="/images/section_2/logo_7.svg"
                width={300}
                height={58}
                alt="logo_7"
                className="w-[200px] md:w-[250px]"
              />
              <Image
                src="/images/section_2/logo_12.svg"
                width={300}
                height={58}
                alt="logo_12"
                className="w-[200px] md:w-[250px] md:hidden"
              />
              <Image
                src="/images/section_2/starnet.svg"
                width={300}
                height={58}
                alt="Startnet Logo"
                className="w-[200px] md:w-[250px] md:hidden"
              />
              <Image
                src="/images/section_2/uniswap.svg"
                width={300}
                height={58}
                alt="Uniswap Logo"
                className="w-[200px] md:w-[250px] md:hidden"
              />
              <Image
                src="/images/section_2/logo_2.png"
                width={300}
                height={58}
                alt="logo_2"
                className="w-[200px] md:w-auto md:hidden"
              />
              <Image
                src="/images/section_2/logo_3.png"
                width={300}
                height={58}
                alt="logo_3"
                className="w-[100px] md:w-auto -ml-6 md:-ml-0 md:hidden"
              />
              <Image
                src="/images/section_2/logo_11.svg"
                width={300}
                height={58}
                alt="logo_11"
                className="w-[200px] md:w-[250px] ml-8 md:hidden"
              />
            </div>
          </div>

          <div className="w-full md:flex-col gap-10 justify-between 2xl:px-48 items-center xl:px-40 overflow-hidden md:overflow-visible md:flex hidden">
            <div className="flex items-center gap-10">
              <Image
                src="/images/section_2/logo_12.svg"
                width={300}
                height={58}
                alt="logo_12"
                className="w-[200px] md:w-[250px]"
              />
              <Image
                src="/images/section_2/starnet.svg"
                width={300}
                height={58}
                alt="Startnet Logo"
                className="w-[200px] md:w-[250px]"
              />
              <Image
                src="/images/section_2/uniswap.svg"
                width={300}
                height={58}
                alt="Uniswap Logo"
                className="w-[200px] md:w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="w-[100%] h-[1px] bottom-[0] left-[0] z-10"></hr>

      <div className="w-full flex lg:flex-row flex-col justify-start">
        <div className="flex flex-col justify-center items-start gap-[60px] relative mb-16 md:mb-0">
          <p className={"text-[#DFE225] text-[36px] "}>
            Our governance partners
          </p>
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-[50px] overflow-hidden md:overflow-visible">
            <div className="flex items-center gap-10 partner-animate">
              <Image
                src="/images/section_2/logo_2.png"
                width={300}
                height={58}
                alt="logo_2"
                className="w-[200px] md:w-[250px] -ml-8 md:-ml-0"
              />

              <Image
                src="/images/section_2/logo_9.svg"
                width={300}
                height={58}
                alt="logo_9"
                className="w-[160px] md:w-[250px] -ml-4 md:-ml-0"
              />

              <Image
                src="/images/section_2/logo_6.png"
                width={300}
                height={58}
                alt="logo_6"
                className="w-[200px] md:w-[250px] ml-3 md:ml-8"
              />
            </div>
          </div>
        </div>

        <hr className="w-[100%] h-[1px] bottom-[0] left-[0] z-10 md:hidden"></hr>

        <div className="flex flex-col justify-center items-start gap-[60px] relative lg:ml-[200px] mt-14 lg:mt-0">
          <p className={"text-[#DFE225] text-[36px] "}>Our voting history</p>
          <button
            label={"Check Here"}
            icon={true}
            onClick={() => {
              window.open(
                "https://daoplomats.notion.site/25e8bf8f0be841e8826ac43b97589a3b?v=707b62670efd45dbb635a53b7d773ee5",
                "_blank"
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Decentralization;
