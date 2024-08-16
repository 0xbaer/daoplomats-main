"use client";

import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

import TestimonialItem from "./TestimonialItem";
import Image from "next/image";

const Testimonials = [
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

const TestimonialList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-96 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <TestimonialItem
          key={Testimonials[currentIndex].id}
          quote={Testimonials[currentIndex].quote}
          name={Testimonials[currentIndex].name}
          src={Testimonials[currentIndex].src}
          company={Testimonials[currentIndex].company}
        />
      </AnimatePresence>

      <div className="absolute top-1/2 left-0 xl:left-2 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="btn-custom prevent-select border border-transparent hover:border-primary hover:bg-transparent hover:text-white px-2 py-2 p-2 bg-primary rounded-full"
        >
          <Image
            src="/arrow-left.svg"
            width={24}
            height={24}
            alt="left arrow"
          />
        </button>
      </div>

      <div className="absolute top-1/2 right-0 xl:right-2 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="btn-custom prevent-select border border-transparent hover:border-primary hover:bg-transparent hover:text-white p-2 bg-primary rounded-full"
        >
          <Image
            src="/arrow-right.svg"
            width={24}
            height={24}
            alt="left arrow"
          />
        </button>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2">
        {Testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialList;
