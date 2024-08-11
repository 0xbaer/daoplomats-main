import Link from "next/link";
import Image from "next/image";
import React from "react";

const FeedBodyRow = ({ date, desc, logo, type, classes }) => {
  return (
    <div className={`flex py-4 ${classes}`}>
      <div className="w-28 mx-8 flex items-center">
        <p className="font-normal text-base">{date}</p>
      </div>

      <div className="flex-1 mx-8 flex items-center">
        <p className="font-normal text-base whitespace-normal truncate text-wrap break-words max-w-lg">
          {desc}
        </p>
      </div>

      <div className="w-32 px-8 flex items-center">
        <Image
          src={`/home/dao-it/icons/${logo}`}
          width={40}
          height={40}
          className="rounded-full"
          alt="logo"
        />
      </div>

      <div className="w-28 mx-8 flex items-center">
        <Link href="#" className="font-medium text-base text-white">
          {type}
        </Link>
      </div>

      <Link href="#" className="w-32 px-8 flex items-center">
        <Image
          src="/home/dao-it/visit.svg"
          width={28}
          height={28}
          alt="visit"
        />
      </Link>
    </div>
  );
};

export default FeedBodyRow;
