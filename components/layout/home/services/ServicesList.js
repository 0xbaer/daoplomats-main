import React from "react";

import ServiceItem from "./ServiceItem";

const ServicesList = () => {
  const services1 = [
    {
      logo: "/home/services/dao-tooling.svg",
      title: "DAO Tooling",
      body: "Tailored tools for a smoother decentralized experience. We keep it simple, avoiding unnecessary complexity to ensure your DAO runs effortlessly.",
    },
    {
      logo: "/home/services/tresury-manager.svg",
      title: "Treasury Manager",
      body: "Navigate Web3 confidently with our Treasury Management and Governance expertise, from optimizing DAO tooling to crafting governance models.",
    },
  ];

  const services2 = [
    {
      logo: "/home/services/governance-model-design.svg",
      title: "Governance Model Design",
      body: "Craft a solid governance plan with our research-backed models. We provide clear documentation and follow up to ensure it's seamlessly integrated for effective decision-making.",
    },
    {
      logo: "/home/services/token-and-education.png",
      title: "Tokenomics and Education",
      body: "Design a sustainable token model for your governance tokens and ensure its adoption with our curated education and tokenomics programs. We blend insights from both web2 and web3 governance, providing a comprehensive perspective.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-0 md:gap-20 lg:gap-28 xl:gap-32">
      <ul className="space-y-12 md:space-y-20 my-12">
        {services1.map((service, index) => (
          <ServiceItem
            key={index}
            logo={service.logo}
            title={service.title}
            body={service.body}
          />
        ))}
      </ul>

      <div className="space-y-12 md:space-y-20 md:mt-20">
        {services2.map((service, index) => (
          <ServiceItem
            key={index}
            logo={service.logo}
            title={service.title}
            body={service.body}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
