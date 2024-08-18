import React from "react";
import { motion } from "framer-motion";

const TestimonialItem = ({ src, quote, name, company }) => {
  return (
    <article className="bg-dark-secondary w-11/12 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-center py-12 lg:py-16 xl:py-20 2xl:py-24 px-12 md:px-8 lg:px-6 h-full overflow-hidden">
      <motion.div
        className="max-w-screen-md mx-auto h-full flex flex-col justify-between"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div>
          <svg
            className="h-12 mx-auto mb-3 text-primary"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            ></path>
          </svg>

          <blockquote>
            <p className="text-lg font-urbanist md:text-xl text-white">
              &quot;{quote}&quot;
            </p>
          </blockquote>
        </div>

        <div className="flex items-center justify-center mt-6 space-x-3">
          {/* <Image
            width={24}
            height={24}
            className="rounded-full"
            src={`/home/testimonial/${src}`}
            alt="profile picture"
          /> */}

          <div className="flex items-center divide-x-2 divide-gray-500">
            <h3 className="pr-3 font-medium text-white">{name}</h3>

            <h4 className="pl-3 text-sm font-light text-gray-300">{company}</h4>
          </div>
        </div>
      </motion.div>
    </article>
  );
};

export default TestimonialItem;
