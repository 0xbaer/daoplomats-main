import Image from "next/image";

import Partners from "./Partners";
import VotingHistory from "./VotingHistory";
import HomeSectionsHeading from "../HomeSectionsHeading";
import Delegates from "./Delegates";

const Decentralization = () => {
  return (
    <div className="w-full relative py-24 lg:py-32">
      <Image
        src="/home/decentralization/decentralization-bg.png"
        layout="fill"
        alt="bg"
        className="absolute top-0 left-0 z-0 object-cover"
      />

      <HomeSectionsHeading
        classNames="px-4 md:px-14 xl:px-20 break-words"
        color="text-white"
        id="dao-it-heading"
      >
        Enabling <br />
        <span className="text-primary">Decentralization</span>
      </HomeSectionsHeading>

      <Delegates />

      <div className="w-full 2xl:w-10/12 flex lg:flex-row flex-col justify-between mt-20 xl:mt-24 space-y-20 lg:space-y-0 px-4 md:px-14 xl:px-20">
        <Partners />

        <VotingHistory />
      </div>
    </div>
  );
};

export default Decentralization;
