import React from "react";
import FeedBodyRow from "./FeedBodyRow";

const TABLE_ROWS = [
  {
    date: "19-05-2023",
    desc: "Orbit Program Participant",
    logo: "aave.svg",
    type: "Milestone",
  },
  {
    date: "20-04-2023",
    desc: "Uniswap Accountability Committee",
    logo: "uniswap.svg",
    type: "Milestone",
  },
  {
    date: "13-04-2023",
    desc: "1000 Governance Votes",
    logo: "sl.svg",
    type: "Milestone",
  },
  {
    date: "02-04-2023",
    desc: "Formed Growth AVC",
    logo: "aave.svg",
    type: "Milestone",
  },
  {
    date: "22-03-2023",
    desc: "Aave Governance Process Improvements",
    logo: "aave.svg",
    type: "Proposal",
  },
  {
    date: "10-03-2023",
    desc: "Euler Governance Facilitator Role",
    logo: "euler.svg",
    type: "Milestone",
  },
  {
    date: "04-03-2023",
    desc: "[HIP-21] Hop DAO Ambassador Program",
    logo: "hop.svg",
    type: "Proposal",
  },
  {
    date: "05-12-2022",
    desc: "CGP 2.0 by Questbook",
    logo: "uniswap.svg",
    type: "Milestone",
  },
  {
    date: "25-10-2022",
    desc: "$DAI - Collateral Onboarding Vote",
    logo: "dai.svg",
    type: "Proposal",
  },
  {
    date: "02-06-2022",
    desc: "Should Jet Protocol list USDC as a collateral type?",
    logo: "dai.svg",
    type: "Proposal",
  },

  {
    date: "02-06-2022",
    desc: "Should Jet Protocol list USDC as a collateral type? Should Jet Protocol list USDC as a collateral type?",
    logo: "dai.svg",
    type: "Proposal",
  },
];

const FeedBody = () => {
  return (
    <div className="w-full max-h-screen overflow-y-auto">
      {TABLE_ROWS.map(({ date, desc, logo, type }, index) => {
        const isLast = index === TABLE_ROWS.length - 1;
        const classes = isLast ? "" : "border-b border-blue-gray-50";

        return (
          <FeedBodyRow
            key={index}
            date={date}
            desc={desc}
            logo={logo}
            type={type}
            classes={classes}
          />
        );
      })}
    </div>
  );
};

export default FeedBody;
