import React from "react";
import Image from "next/image";

import TestimonialList from "./TestimonialList";
import HomeSectionsHeading from "../HomeSectionsHeading";

const TestimonialsData = [
  {
    id: 1,
    src: "path/to/image1.jpg",
    quote:
      "DAOplomats have been outstanding delegates within the 1inch DAO. We have continued to be impressed by their outstanding professionalism and their unwavering commitment to their core values. Their proactive engagement and collaborative spirit make them an excellent addition to any protocol seeking to enhance its governance framework and decentralization efforts with confidence and expertise.",
    name: "Jordan",
    company: "1inch",
  },
  {
    id: 2,
    src: "path/to/image2.jpg",
    quote:
      "DAOplomats have been outstanding delegates within the 1inch DAO. We have continued to be impressed by their outstanding professionalism and their unwavering commitment to their core values. Their proactive engagement and collaborative spirit make them an excellent addition to any protocol seeking to enhance its governance framework and decentralization efforts with confidence and expertise.",
    name: "Alex",
    company: "Uniswap",
  },
  {
    id: 3,
    src: "path/to/image2.jpg",
    quote:
      "DAOplomats have been outstanding delegates within the 1inch DAO. We have continued to be impressed by their outstanding professionalism and their unwavering commitment to their core values. Their proactive engagement and collaborative spirit make them an excellent addition to any protocol seeking to enhance its governance framework and decentralization efforts with confidence and expertise.",
    name: "Alex",
    company: "Uniswap",
  },
];

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

        <TestimonialList testimonials={TestimonialsData} />
      </div>
    </div>
  );
};

export default Testimonials;
