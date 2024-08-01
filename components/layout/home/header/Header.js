import Image from "next/image";

import Navbar from "../../../navbar/NavBar";
import CenterContent from "./HeaderContent";

const HomeHeader = () => {
  return (
    <header
      id="header"
      className="flex flex-col relative py-7"
      style={{
        backgroundImage: "url('/home/header/bg-main.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />

      <CenterContent />

      <Image
        src="/home/header/bg-o.png"
        height={600}
        width={372}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 mix-blend-color-dodge md:w-72 lg:w-72 xl:w-80 2xl:w-96 h-auto"
        alt=""
      />

      <Image
        src="/home/header/bg-l.png"
        height={223}
        width={422}
        className="absolute top-1/4 -translate-y-3/4 lg:-translate-y-1/4  left-0 hidden md:block z-0 md:w-64 lg:w-72 xl:w-80 2xl:w-96 h-auto"
        alt=""
      />

      <Image
        src="/home/header/bg-r.png"
        height={223}
        width={422}
        className="absolute top-3/4 -translate-y-1/4 lg:-translate-y-3/4 right-0 z-0 hidden md:block md:w-64 lg:w-72 xl:w-80 2xl:w-96 h-auto "
        alt=""
      />
    </header>
  );
};

export default HomeHeader;
