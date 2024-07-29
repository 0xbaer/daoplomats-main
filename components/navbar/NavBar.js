"use client";

import Link from "next/link";
import Image from "next/image";

import Logo from "../ui/Logo";
import NavList from "./NavList";

import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between relative px-6 xl:px-12">
      <Logo />

      <NavList />

      <div className="flex items-center gap-3 lg:gap-4">
        <Link
          href="https://x.com/DAOplomats"
          className="p-px bg-primary rounded-md inline-block hover:scale-105 active:scale-100 transition-transform"
          target="_blank"
          referrerPolicy="no-referrer"
          aria-label="Visit X DAOplomats on Twitter"
        >
          <Image
            src="/social/twitter.svg"
            width={32}
            height={32}
            alt="X Logo"
            className="w-7 h-7 xl:w-8 xl:h-8"
          />
        </Link>

        <NavItem href="#contact" label="Contact us" />
      </div>

      {/* <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav> */}
    </div>
  );
};

export default Navbar;
