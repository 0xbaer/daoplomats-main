import React from "react";
import Image from "next/image";

const loading = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image
        src="/home/header/bg-main.png"
        layout="fill"
        className="absolute top-0 left-0 z-0"
        alt=""
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        priority={true}
      />

      <div className="flex justify-center items-center h-full z-10 relative flex-col">
        <Image
          loading="eager"
          src="/loader.svg"
          width={36}
          height={36}
          className="mb-1"
          alt=""
        />
        Loading
      </div>
    </div>
  );
};

export default loading;
