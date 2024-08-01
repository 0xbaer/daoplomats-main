"use client";

import React from "react";
import Link from "next/link";

import { scrollToSection } from "../utils/ScrollToSection";

const NavAnchorButton = React.forwardRef(({ onClick, href, label }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className="rounded-full px-3 py-1.5 2xl:px-4 2xl:py-1.5 border text-sm uppercase shadow shadow-white/40"
      style={{
        borderColor: label === "home" ? "transparent" : "#dfe225",
        backgroundColor: label === "home" ? "#dfe225" : "transparent",
        color: label === "home" ? "black" : "#dfe225",
      }}
    >
      {label}
    </a>
  );
});

NavAnchorButton.displayName = "NavAnchorButton";

const NavItem = ({ label, isActive, href }) => {
  const handleClick = (event) => {
    if (href.startsWith("#")) {
      scrollToSection(event, href.substring(1));
    }
  };

  return (
    <Link href={href} passHref legacyBehavior>
      <NavAnchorButton onClick={handleClick} label={label} />
    </Link>
  );
};

export default NavItem;
