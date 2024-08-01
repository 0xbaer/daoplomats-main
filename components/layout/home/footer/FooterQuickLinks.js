import React from "react";
import FooterLinksItem from "./FooterLinksItem";

const FooterLinksList = [
  {
    href: "#header",
    targetId: "header",
    label: "Header",
  },

  {
    href: "#about",
    targetId: "about",
    label: "About",
  },

  {
    href: "#services",
    targetId: "services",
    label: "Services",
  },

  {
    href: "#contact",
    targetId: "contact",
    label: "Contact",
  },
];

const FooterQuickLinks = ({ isMobile = false }) => {
  const mobileStyle = "block md:hidden mr-8";
  const desktopStyle = "hidden md:block";

  return (
    <div
      className={`font-urbanist space-y-4 ${
        isMobile ? mobileStyle : desktopStyle
      }`}
    >
      <h3 className="uppercase text-primary text-base lg:text-lg font-bold">
        QUICK LINKS
      </h3>

      <div className="space-y-2 w-fit">
        {FooterLinksList.map((link, index) => (
          <FooterLinksItem key={index} {...link} />
        ))}
      </div>
    </div>
  );
};

export default FooterQuickLinks;
