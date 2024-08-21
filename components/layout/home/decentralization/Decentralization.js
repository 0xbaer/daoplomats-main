import Image from "next/image";

import Partners from "./Partners";
import VotingHistory from "./VotingHistory";
import HomeSectionsHeading from "../HomeSectionsHeading";
import Delegates from "./Delegates";

const Decentralization = () => {
  return (
    <div className="w-full relative py-32 px-14 xl:px-20">
      <Image
        src="/home/decentralization/decentralization-bg.png"
        layout="fill"
        alt="bg"
        className="absolute top-0 left-0 z-0 object-cover"
      />

      <HomeSectionsHeading color="text-white" id="dao-it-heading">
        Enabling <br />
        <span className="text-primary">Decentralization</span>
      </HomeSectionsHeading>

      <Delegates />

      <div className="w-full 2xl:w-10/12 flex lg:flex-row flex-col justify-between mt-28 xl:mt-32 space-y-10 lg:space-y-0">
        <Partners />

        <VotingHistory />
      </div>
    </div>
  );
};

export default Decentralization;
