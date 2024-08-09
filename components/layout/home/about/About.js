import HomeSections from "../HomeSections";
import OurValues from "../values/OurValues";
import HomeSectionSideHeading from "../HomeSectionSideHeading";

const About = () => {
  return (
    <div id="about">
      <HomeSections aria="values" bgImage="none" width="max-w-6xl">
        <HomeSectionSideHeading
          color="text-primary"
          label="about us"
          aria="About Us"
        />

        <div className="flex flex-col gap-20 w-full">
          <h1 className="text-lg lg:text-xl xl:text:2xl 3xl:text-3xl text-white max-w-3xl">
            Our seasoned team brings diverse expertise to the DAO ecosystem,
            offering tailored solutions for decentralized governance that meet
            the unique needs of each DAO we collaborate with.
          </h1>

          <OurValues />
        </div>
      </HomeSections>
    </div>
  );
};

export default About;
