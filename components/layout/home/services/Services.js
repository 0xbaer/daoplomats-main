import ServiceItem from "./ServiceItem";

import HomeSectionSideHeading from "../HomeSectionSideHeading";
import HomeSectionsHeading from "../HomeSectionsHeading";
import ServicesList from "./ServicesList";

const Services = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-section"
      className="w-full"
      style={{
        backgroundImage: "url('/home/services/service-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-fit py-28 sm:py-36 px-6 lg:px-8 xl:px-0 flex flex-col lg:flex-row justify-center gap-8 md:gap-12 lg:gap-24 relative mx-auto">
        <HomeSectionSideHeading
          color="text-black"
          label="services"
          aria="Services"
        />

        <div className="w-full text-dark space-y-12 md:space-y-16">
          <div className="w-fit">
            <HomeSectionsHeading color="text-black">
              Let&apos;s work{" "}
              <span className="text-black xl:text-primary">Together</span>
            </HomeSectionsHeading>

            <hr className="border-dark w-1/2 mt-4 block md:hidden" />
          </div>

          <ServicesList />
        </div>
      </div>
    </section>
  );
};

export default Services;
