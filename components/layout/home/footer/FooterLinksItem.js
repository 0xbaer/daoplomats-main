"use client";

import React from "react";
import Link from "next/link";

import { scrollToSection } from "@/components/utils/ScrollToSection";

const ScrollLink = React.forwardRef(({ href, targetId, children }, ref) => {
  const handleClick = (event) => {
    if (href.startsWith("#")) {
      scrollToSection(event, targetId);
    }
  };

  return (
    <a href={href} onClick={handleClick} ref={ref} className="mb-2">
      {children}
    </a>
  );
});

ScrollLink.displayName = "ScrollLink";

const FooterLinksItem = ({ href, targetId, label }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <ScrollLink targetId={targetId}>
        <span className="block text-white hover:text-primary mb-1.5 transition-colors active:scale-100 hover:scale-105">
          {label}
        </span>
      </ScrollLink>
    </Link>
  );
};
export default FooterLinksItem;
