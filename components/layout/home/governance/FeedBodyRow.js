import React from "react";

import Link from "next/link";
import Image from "next/image";

import formatDate from "@/components/utils/FormatDate";

const FeedBodyRow = ({ date, desc, logo, type, classes }) => {
  return (
    <article className={`flex py-4 ${classes}`} role="row">
      <div className="w-28 mx-8 flex items-center" role="cell">
        <time
          className="font-normal text-base"
          dateTime={new Date(parseInt(date * 1000)).toISOString()}
        >
          {formatDate(parseInt(date))}
        </time>
      </div>

      <div className="flex-1 mx-8 flex items-center" role="cell">
        <p className="font-normal text-base whitespace-normal truncate text-wrap break-words max-w-lg">
          {desc}
        </p>
      </div>

      <div className="w-32 px-8 flex items-center prevent-select" role="cell">
        <Image
          src={`/home/dao-it/icons/${logo}`}
          width={40}
          height={40}
          className="rounded-full"
          alt="logo"
        />
      </div>

      <div className="w-28 mx-8 flex items-center" role="cell">
        {type}
      </div>

      <div className="w-32 px-8 flex items-center prevent-select" role="cell">
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
