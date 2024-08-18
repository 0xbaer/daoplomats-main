import React from "react";
import Image from "next/image";

import TestimonialList from "./TestimonialList";
import HomeSectionsHeading from "../HomeSectionsHeading";

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col jusitfy-center items-center py-40 xl:py-52 px-2.5 lg:px-14 relative bg-dark">
      <Image
        src="/home/testimonial/testimonial-bg.png"
        width={1800}
        height={600}
        className="absolute top-10 left-0 px-4 lg:px-14 h-full max-h-96 md:max-h-[480px] xl:max-h-[580px]"
        alt=""
      />

      <div className="relative z-10 space-y-16 md:space-y-24 w-full">
        <HomeSectionsHeading
          color="text-white"
          classNames="text-left ml-12 lg:ml-24"
        >
          What Our <br />
          <span className="text-primary">Client </span>
          Said
        </HomeSectionsHeading>

        <TestimonialList />
      </div>
    </div>
  );
};

export default Testimonials;
