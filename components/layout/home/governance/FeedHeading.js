import React from "react";

const FeedHeading = () => {
  return (
    <header className="flex py-6 border-b border-primary pr-1 text-lg font-medium">
      <div className="w-11 sm:w-24 xl:w-28 mx-4 xl:mx-8 hidden xs:block font-medium">
        <h3>Date</h3>
      </div>

      <div className="flex-1 mx-4 xs:mx-0 lg:mx-4 xl:mx-8 font-medium">
        <h3>Description</h3>
      </div>

      <div className="w-20 lg:w-24 xl:w-32 px-0 lg:px-4 xl:px-8 font-medium">
        <h3>Protocol</h3>
      </div>

      <div className="w-24 xl:w-28 mx-0 lg:mx-4 xl:mx-8 hidden lg:block font-medium">
        <h3>Type</h3>
      </div>

      <div className="w-20 lg:w-24 xl:w-32 pr-4 px-0 lg:pr-0 lg:px-4 xl:px-8 font-medium text-right lg:text-left hidden md:block">
        <h3>Info</h3>
      </div>
    </header>
  );
};

export default FeedHeading;
