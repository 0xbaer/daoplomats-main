import Image from "next/image";

import ValuesList from "./ValuesList";
import HomeSectionsHeading from "../HomeSectionsHeading";

const values = [
  {
    id: 1,
    title: "Objective decision making",
    description:
      "We design and implement decision making frameworks which enable us to perform qualitative and quantative analysis in order to arrive at conclusions.",
  },

  {
    id: 2,
    title: "Positive sum",
    description:
      "We strive to make our interactions positive sum whenever possible to allow maximum number of stakeholders to benefit via collaboration.",
  },

  {
    id: 3,
    title: "Decentralisation",
    description:
      "We believe in a highly distributed power structures and strive to push decision making power to the edges.",
  },

  {
    id: 4,
    title: "United we stand",
    description:
      "We believe decentralisation is paramount in web3 governance. We aim to be the voice of everyday users.",
  },
];

const OurValues = () => {
  return (
    <div className="flex md:flex-row flex-col gap-12 lg:gap-16">
      <div className="md:flex-[2] h-80 md:h-auto relative">
        <Image
          src="/home/values/values-side-image.jpeg"
          fill
          className="mix-blend-luminosity md:w-auto w-full prevent-select"
          alt="Our Values"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      <div className="flex flex-col flex-[4] mb-12 lgmb-24 space-y-16">
        <HomeSectionsHeading>
          Our <span className="text-primary">Values</span>
        </HomeSectionsHeading>

        <ValuesList values={values} />
      </div>
    </div>
  );
};

export default OurValues;
