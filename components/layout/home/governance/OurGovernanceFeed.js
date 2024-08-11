import HomeSectionsHeading from "../HomeSectionsHeading";
import FeedHeading from "./FeedHeading";
import FeedBody from "./FeedBody";

export default function OurGovernanceFeed() {
  return (
    <div
      className="py-28 mx-auto text-center space-y-16"
      style={{
        backgroundImage: "url('/home/connectForm/form-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#333F3D",
      }}
    >
      <HomeSectionsHeading color="text-white">
        Our <span className="text-primary">Governance </span>
        Feed
      </HomeSectionsHeading>

      <div className="border-2 border-primary rounded-2xl max-w-7xl mx-auto">
        <section className="w-full min-w-max text-left">
          <FeedHeading />

          <FeedBody />
        </section>
      </div>

      {/* <Button className="z-10 rounded-full text-black px-[300px] text-[18px] bg-[#DFE225]">
        Delegate with us
      </Button> */}
    </div>
  );
}
