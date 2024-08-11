import Link from "next/link";

import FeedBody from "./FeedBody";
import FeedHeading from "./FeedHeading";

import HomeSectionsHeading from "../HomeSectionsHeading";

export default function OurGovernanceFeed() {
  return (
    <div
      className="py-28 mx-auto text-center space-y-16"
      style={{
        backgroundImage: "url('/home/connectForm/form-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#333F3D",
      }}
    >
      <HomeSectionsHeading color="text-white">
        Our <span className="text-primary">Governance </span>
        Feed
      </HomeSectionsHeading>

      <div className="border-2 border-primary rounded-2xl max-w-7xl mx-auto">
        <section className="w-full min-w-max text-left">
          <FeedHeading />

          <FeedBody />
        </section>
      </div>

      <div>
        <Link
          href="#"
          className="rounded-full text-black text-lg bg-primary px-80 uppercase font-bold font-urbanist border border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-colors py-2.5"
        >
          Delegate with us
        </Link>
      </div>
    </div>
  );
}
