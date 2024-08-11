import React from "react";
import Image from "next/image";

import HomeSectionsHeading from "../HomeSectionsHeading";

const DAOIt = () => {
  const images = [
    { src: "dao-experts.png", alt: "DAO Experts" },
    { src: "objective-decision-making.png", alt: "Objective Decision Making" },
    { src: "delegate-with-us.png", alt: "Delegate with Us" },
    { src: "positive-sum.png", alt: "Positive Sum" },
    { src: "working-to-daoit.png", alt: "Working to DAO It" },
  ];

  return (
    <section className="mt-40 overflow-hidden" aria-labelledby="dao-it-heading">
      <div className="mx-8">
        <HomeSectionsHeading color="text-white" id="dao-it-heading">
          Working to <span className="text-primary uppercase">DAO </span>
          <span className="text-primary">it</span>
        </HomeSectionsHeading>
      </div>

      <div className="flex items-center justify-start my-8 overflow-hidden w-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={`/home/dao-it/${image.src}`}
            alt={image.alt}
            width={384}
            height={384}
            className="prevent-select"
          />
        ))}
      </div>
    </section>
  );
};

export default DAOIt;
