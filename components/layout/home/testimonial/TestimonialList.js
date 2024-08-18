"use client";

import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useCallback, useMemo } from "react";

import TestimonialItem from "./TestimonialItem";

const TestimonialList = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext]);

  const circles = useMemo(() => {
    return testimonials.map((_, index) => (
      <div
        key={index}
        className={`w-4 h-4 rounded-full hover:bg-white hover:scale-90 active:scale-100 cursor-pointer ${
          index === currentIndex ? "bg-primary" : "bg-gray-300"
        }`}
        onClick={() => setCurrentIndex(index)}
      ></div>
    ));
  }, [testimonials, currentIndex]);

  return (
    <section className="relative min-h-96 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <TestimonialItem
          key={testimonials[currentIndex].id}
          quote={testimonials[currentIndex].quote}
          name={testimonials[currentIndex].name}
          src={testimonials[currentIndex].src}
          company={testimonials[currentIndex].company}
        />
      </AnimatePresence>

      <div className="absolute top-1/2 left-1 xl:left-2 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="btn-custom prevent-select border border-transparent hover:border-white hover:bg-white hover:text-white p-2 bg-primary rounded-full"
        >
          <Image
            src="/arrow-left.svg"
            width={24}
            height={24}
            alt="left arrow"
            className="w-5 lg:w-6 h-5 lg:h-6"
          />
        </button>
      </div>

      <div className="absolute top-1/2 right-1 xl:right-2 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="btn-custom prevent-select border border-transparent hover:border-white hover:bg-white hover:text-white p-2 bg-primary rounded-full"
        >
          <Image
            src="/arrow-right.svg"
            width={24}
            height={24}
            alt="right arrow"
            className="w-5 lg:w-6 h-5 lg:h-6"
          />
        </button>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2">
        {circles}
      </div>
    </section>
  );
};

export default TestimonialList;
