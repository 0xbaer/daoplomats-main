import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

import FeedBody from "./FeedBody";
import FeedHeading from "./FeedHeading";

import HomeSectionsHeading from "../HomeSectionsHeading";

export default function OurGovernanceFeed() {
  return (
    <Suspense>
      <div className="py-28 mx-auto text-center space-y-16 relative">
        <Image
          src="/home/connectForm/form-bg.png"
          layout="fill"
          sizes="100vw"
          className="absolute top-0 left-0 z-0"
          alt=""
        />

        <HomeSectionsHeading color="text-white">
          Our <span className="text-primary">Governance </span>
          Feed
        </HomeSectionsHeading>

        <div className="border-2 border-primary rounded-2xl max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto overflow-hidden relative">
          <section className="w-full min-w-max text-left relative" role="table">
            <FeedHeading />

            <FeedBody />
          </section>
        </div>

        <div className="mx-8 space-y-6 md:space-x-4">
          <Link
            href="#"
            className="btn-custom bg-primary text-black rounded-full hover:bg-white hover:text-black transition-colors shadow-sm shadow-primary py-2.5 block md:inline-block"
          >
            Delegate with us
          </Link>

          <Link
            href="#"
            className="btn-custom border border-white rounded-full hover:border-primary  hover:text-primary shadow-sm shadow-white transition-colors py-2.5 block md:inline-block"
          >
            View All Proposals
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
