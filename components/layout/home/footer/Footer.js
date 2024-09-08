import Link from "next/link";

import Logo from "@/components/ui/Logo";

import FooterQuickLinks from "./FooterQuickLinks";
import FooterCopyright from "./FooterCopyright";

const socials = [
  {
    name: "Twitter",
    href: "https://x.com/DAOplomats",
    aria: "Visit X DAOplomats on Twitter",
  },
  {
    name: "Hey",
    href: "https://hey.xyz/u/daoplomats",
    aria: "Join X DAOplomats on HEY",
  },
  {
    name: "Boardroom",
    href: "https://boardroom.io/voter/daoplomats.eth",
    aria: "Visit X DAOplomats on Boardroom",
  },
];

const SocialLinks = ({ socials }) => (
  <ul className="flex gap-3 sm:gap-2 flex-col justify-between sm:flex-row">
    {socials.map((social) => (
      <li
        key={social.name}
        className="rounded-full text-sm shadow shadow-white/40 bg-transparent border cursor-pointer border-white text-white hover:scale-105 active:scale-100 transition-all hover:border-primary hover:text-primary prevent-select w-fit"
      >
        <Link
          className="capitalize px-3 py-1.5 2xl:px-4 inline-block"
          href={social.href}
          target="_blank"
          referrerPolicy="no-referrer"
          aria-label={social.aria}
        >
          {social.name}
        </Link>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  return (
    <footer className="py-16 px-8 space-y-32">
      <section className="flex justify-between items-start flex-col md:flex-row">
        <div className="space-y-20 md:space-y-8">
          <h2 className="font-philosopher text-5xl md:text-4xl xl:text-5xl max-w-lg font-bold text-primary">
            We Would Love To Hear From You
          </h2>

          <div className="flex items-start justify-between relative">
            <SocialLinks socials={socials} />

            <div className="absolute border-l border-gray-300 h-full z-20 left-1/2 md:hidden block sm:translate-x-10 "></div>

            <FooterQuickLinks isMobile={true} />
          </div>
        </div>

        <FooterQuickLinks />

        <Logo
          direction="flex-row md:flex-col -order-1 md:order-2 mb-14 md:mb-0"
          logoSize="w-16 h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
          size="text-2xl lg:text-lg xl:text-xl space-x-0.5"
        />
      </section>

      <FooterCopyright />
    </footer>
  );
};

export default Footer;
