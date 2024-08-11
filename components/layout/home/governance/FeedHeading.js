import React from "react";

const FeedHeading = () => {
  return (
    <div className="flex py-6 border-b border-primary pr-3 text-lg font-medium">
      <div className="w-28 mx-8 font-medium">
        <p>Date</p>
      </div>

      <div className="flex-1 mx-8 font-medium">
        <p>Description</p>
      </div>

      <div className="w-32 px-8 font-medium">
        <p>Protocol</p>
      </div>

      <div className="w-28 mx-8 font-medium">
        <p>Type</p>
      </div>

      <div className="w-32 px-8 font-medium">
        <p>Info</p>
      </div>
    </div>
  );
};

export default FeedHeading;
