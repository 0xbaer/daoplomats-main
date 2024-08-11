import React from "react";

const FeedHeading = () => {
  return (
    <header
      className="flex py-6 border-b border-primary pr-3 text-lg font-medium"
      role="row"
    >
      <div className="w-28 mx-8 font-medium" role="columnheader">
        <h4>Date</h4>
      </div>

      <div className="flex-1 mx-8 font-medium" role="columnheader">
        <h4>Description</h4>
      </div>

      <div className="w-32 px-8 font-medium" role="columnheader">
        <h4>Protocol</h4>
      </div>

      <div className="w-28 mx-8 font-medium" role="columnheader">
        <h4>Type</h4>
      </div>

      <div className="w-32 px-8 font-medium" role="columnheader">
        <h4>Info</h4>
      </div>
    </header>
  );
};

export default FeedHeading;
