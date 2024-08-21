import BorderButton from "@/components/ui/buttons/BorderButton";
import React from "react";

const VotingHistory = () => {
  return (
    <div className="relative z-10 space-y-12 lg:space-y-14">
      <p className="text-primary text-4xl font-philosopher">
        Our voting history
      </p>

      <BorderButton
        href="https://daoplomats.notion.site/25e8bf8f0be841e8826ac43b97589a3b?v=707b62670efd45dbb635a53b7d773ee5"
        label="Click Here"
      />
    </div>
  );
};

export default VotingHistory;
