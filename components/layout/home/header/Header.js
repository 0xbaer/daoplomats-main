import Image from "next/image";

import Navbar from "../../../navbar/NavBar";
import CenterContent from "./HeaderContent";

import "./Header.css";

const HomeHeader = () => {
  return (
    <header id="header" className="flex flex-col relative py-7">
      <Image
        src="/home/header/bg-main.png"
        layout="fill"
        className="absolute top-0 left-0 z-0"
        alt=""
        priority={true}
      />

      <Navbar />

      <CenterContent />

      <Image
        src="/home/header/bg-o.png"
        height={600}
        width={372}
        priority={true}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 mix-blend-color-dodge w-3/4 md:w-72 lg:w-72 xl:w-80 2xl:w-96 h-auto prevent-select"
        alt=""
      />

      <div className="absolute top-1/4 -translate-y-3/4 lg:-translate-y-1/4 left-0 prevent-select">
        <Image
          src="/home/header/bg-l.png"
          height={223}
          width={422}
          className="animate-move hidden md:block z-0 md:w-64 lg:w-72 xl:w-80 2xl:w-96 h-auto"
          alt=""
        />
      </div>

      <div className="absolute top-3/4 -translate-y-1/4 lg:-translate-y-3/4 right-0 z-0 prevent-select">
        <Image
          src="/home/header/bg-r.png"
          height={223}
          width={422}
          className="animate-move hidden md:block md:w-64 lg:w-72 xl:w-80 2xl:w-96 h-auto"
          alt=""
        />
      </div>
    </header>
  );
};

export default HomeHeader;
