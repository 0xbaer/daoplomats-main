import Image from "next/image";
import ServiceItem from "./ServiceItem";
import ServiceHeading from "./ServiceHeading";

const Services = () => {
  const services1 = [
    {
      logo: "/services/dao-tooling.svg",
      title: "DAO Tooling",
      body: "Tailored tools for a smoother decentralized experience. We keep it simple, avoiding unnecessary complexity to ensure your DAO runs effortlessly.",
    },
    {
      logo: "/services/tresury-manager.svg",
      title: "Treasury Manager",
      body: "Navigate Web3 confidently with our Treasury Management and Governance expertise, from optimizing DAO tooling to crafting governance models.",
    },
  ];

  const services2 = [
    {
      logo: "/services/governance-model-design.svg",
      title: "Governance Model Design",
      body: "Craft a solid governance plan with our research-backed models. We provide clear documentation and follow up to ensure it's seamlessly integrated for effective decision-making.",
    },
    {
      logo: "/services/token-and-education.png",
      title: "Tokenomics and Education",
      body: "Design a sustainable token model for your governance tokens and ensure its adoption with our curated education and tokenomics programs. We blend insights from both web2 and web3 governance, providing a comprehensive perspective.",
    },
  ];

  return (
    <div
      className="w-full"
      style={{
        backgroundImage: "url('/services/service-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-fit py-28 sm:py-36 px-6 lg:px-8 xl:px-0 flex flex-col lg:flex-row justify-center gap-8 md:gap-12 lg:gap-24 relative mx-auto">
        <ServiceHeading />

        <div className="w-full text-dark space-y-12 md:space-y-16">
          <div className="w-fit">
            <h2 className="text-black text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-philosopher">
              Let&apos;s work{" "}
              <span className="text-black md:text-primary">together</span>
            </h2>

            <hr className="border-dark w-1/2 mt-4 block md:hidden" />
          </div>

          <div className="flex flex-col md:flex-row gap-0 md:gap-20 lg:gap-28 xl:gap-32">
            <div className="space-y-12 md:space-y-20 my-12">
              <ServiceItem
                logo="/services/dao-tooling.svg"
                title="DAO Tooling"
                body="Tailored tools for a smoother decentralized experience. We keep it simple, avoiding unnecessary complexity to ensure your DAO runs effortlessly."
              />

              <ServiceItem
                logo="/services/tresury-manager.svg"
                title="Treasury Manager"
                body="Navigate Web3 confidently with our Treasury Management and Governance expertise, from optimizing DAO tooling to crafting governance models."
              />
            </div>

            <div className="space-y-12 md:space-y-20 md:mt-20">
              <ServiceItem
                logo="/services/governance-model-design.svg"
                title="Governance Model Design"
                body="Craft a solid governance plan with our research-backed models. We provide clear documentation and follow up to ensure it's seamlessly integrated for effective decision-making."
              />

              <ServiceItem
                logo="/services/token-and-education.png"
                title="Tokenomics and Education"
                body="Design a sustainable token model for your governance tokens and ensure its adoption with our curated education and tokenomics programs. We blend insights from both web2 and web3 governance, providing a comprehensive perspective."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
