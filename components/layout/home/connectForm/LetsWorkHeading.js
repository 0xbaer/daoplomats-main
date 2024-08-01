import React from "react";

const LetsWorkHeading = () => {
  return (
    <div className="space-y-4 text-center">
      <h2
        className={
          "text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-philosopher text-white text-center capitalize"
        }
      >
        Let&apos;s work <span className="text-primary">Together</span>
      </h2>

      <p className="text-sm sm:text-base lg:text-xl text-white font-light font-urbanist">
        Just drop us a message here!
      </p>
    </div>
  );
};

export default LetsWorkHeading;
