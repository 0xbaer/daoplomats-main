import React from "react";

import HomeSectionsHeading from "../HomeSectionsHeading";
import Image from "next/image";

const DAOIt = () => {
  const images = [
    "dao-experts.png",
    "objective-decision-making.png",
    "delegate-with-us.png",
    "positive-sum.png",
    "working-to-daoit.png",
  ];

  return (
    <section className="mt-40 overflow-hidden">
      <div className="mx-8">
        <HomeSectionsHeading color="text-white">
          Working to <span className="text-primary uppercase">DAO </span>
          <span className="text-primary">it</span>
        </HomeSectionsHeading>
      </div>

      <div className="flex items-center justify-start my-8 overflow-hidden w-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={`/home/dao-it/${image}`}
            alt={image}
            width={384}
            height={384}
          />
        ))}
      </div>
    </section>
  );
};

export default DAOIt;
