import BorderButton from "@/components/ui/buttons/BorderButton";
import React from "react";

const VotingHistory = () => {
  return (
    <div className="relative z-10 space-y-12 lg:space-y-16">
      <p className="text-primary text-4xl font-philosopher">
        Our voting history
      </p>

      <BorderButton
        href="https://daoplomats.notion.site/Database-03940ef86fdc40c3a02df62665f59efd"
        label="Click Here"
        aria-label="Visit DAOplomats Voting History on Notion"
      />
    </div>
  );
};

export default VotingHistory;
