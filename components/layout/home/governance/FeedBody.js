import React from "react";

import FeedBodyRow from "./FeedBodyRow";

const TABLE_ROWS = [
  {
    date: 1723381989,
    desc: "Orbit Program Participant",
    logo: "aave.svg",
    type: "Milestone",
  },
  {
    date: 1723381989,
    desc: "Uniswap Accountability Committee",
    logo: "uniswap.svg",
    type: "Milestone",
  },
  {
    date: 1723381989,
    desc: "1000 Governance Votes",
    logo: "sl.svg",
    type: "Milestone",
  },
  {
    date: 1723381989,
    desc: "Formed Growth AVC",
    logo: "aave.svg",
    type: "Milestone",
  },
  {
    date: 1723381989,
    desc: "Aave Governance Process Improvements",
    logo: "aave.svg",
    type: "Proposal",
  },
  {
    date: 1723381989,
    desc: "Euler Governance Facilitator Role",
    logo: "euler.svg",
    type: "Milestone",
  },
  {
    date: 1723381989,
    desc: "[HIP-21] Hop DAO Ambassador Program",
    logo: "hop.svg",
    type: "Proposal",
  },
  {
    date: 1723381989,
    desc: "CGP 2.0 by Questbook",
    logo: "uniswap.svg",
    type: "Milestone",
  },
  {
    date: 1723381989,
    desc: "$DAI - Collateral Onboarding Vote",
    logo: "dai.svg",
    type: "Proposal",
  },
  {
    date: 1723381989,
    desc: "Should Jet Protocol list USDC as a collateral type?",
    logo: "dai.svg",
    type: "Proposal",
  },

  {
    date: 1723381989,
    desc: "Should Jet Protocol list USDC as a collateral type? Should Jet Protocol list USDC as a collateral type?",
    logo: "dai.svg",
    type: "Proposal",
  },
];

const FeedBody = () => {
  return (
    <section
      className="w-full max-h-screen overflow-y-auto"
      aria-label="Feed Body"
    >
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
    </section>
  );
};

export default FeedBody;
