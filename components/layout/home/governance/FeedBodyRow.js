import React from "react";

import Link from "next/link";
import Image from "next/image";
import FormatDateComponent from "@/components/utils/FormatDate";

const FeedBodyRow = ({ date, desc, logo, type, classes }) => {
  return (
    <article
      className={`flex py-4 hover:bg-white/10 backdrop-blur-md rounded-2xl ${classes}`}
      role="row"
    >
      <div
        className="w-11 sm:w-24 xl:w-28 mx-4 xl:mx-8 hidden xs:flex items-center"
        role="cell"
      >
        <time
          className="font-normal text-base"
          dateTime={new Date(parseInt(date * 1000)).toISOString()}
        >
          {<FormatDateComponent timestamp={date} />}
        </time>
      </div>

      <div
        className="flex-1 mx-4 xs:mx-0 lg:mx-4 xl:mx-8 flex items-center"
        role="cell"
      >
        <p className="font-normal text-base whitespace-normal truncate text-wrap break-words max-w-64 xs:max-w-64 sm:max-w-sm lg:max-w-md xl:max-w-lg">
          {desc}
        </p>
      </div>

      <div
        className="w-20 lg:w-24 xl:w-32 px-0 lg:px-4 xl:px-8 flex items-center prevent-select"
        role="cell"
      >
        <Image
          src={`/home/dao-it/icons/${logo}`}
          width={40}
          height={40}
          className="rounded-full"
          alt="logo"
        />
      </div>

      <div
        className="w-24 xl:w-28 mx-4 xl:mx-8 items-center hidden lg:flex"
        role="cell"
      >
        {type}
      </div>

      <div
        className="w-20 lg:w-24 xl:w-32 pr-4 lg:pr-0 px-0 lg:px-4 xl:px-8 hidden md:flex justify-end lg:justify-start items-center prevent-select"
        role="cell"
      >
        <Link href="#">
          <Image
            src="/home/dao-it/visit.svg"
            width={28}
            height={28}
            alt="visit"
          />
        </Link>
      </div>
    </article>
  );
};

export default FeedBodyRow;
