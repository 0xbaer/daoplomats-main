import React from "react";
import HomeSectionsHeading from "../HomeSectionsHeading";

const LetsWorkHeading = () => {
  return (
    <div className="space-y-4 text-center">
      <HomeSectionsHeading id="contact-heading" classNames="text-center">
        Let&apos;s work <span className="text-primary">Together</span>
      </HomeSectionsHeading>

      <p className="text-sm sm:text-base lg:text-xl text-white font-light font-urbanist">
        Just drop us a message here!
      </p>
    </div>
  );
};

export default LetsWorkHeading;
