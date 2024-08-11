import React from "react";
import Link from "next/link";

const FooterCopyright = () => {
  return (
    <div className="flex justify-between items-center pt-12 border-t border-primary font-urbanist">
      <p>
        <span className="text-primary ">DAOplomats </span>© 2024{" "}
        <span className="hidden xs:block">- 2025</span>
      </p>

      <Link
        className="rounded-full px-3 py-1.5 2xl:px-4 2xl:py-1.5 text-sm shadow shadow-white/40 bg-transparent border border-primary text-primary hover:scale-105 active:scale-100 transition-all hover:border-white hover:text-white capitalize prevent-select"
        href="/"
        aria-label="Back to top"
      >
        Back to top 遼
      </Link>
    </div>
  );
};

export default FooterCopyright;
