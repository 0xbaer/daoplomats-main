import React from "react";

import FeedBodyRow from "./FeedBodyRow";

const TABLE_ROWS = [
  {
    date: 1719341040,
    desc: "Add DAOPlomats as the Treasury Officer - Governance Task Force",
    logo: "everclear.svg",
    type: "Council",
    href: "https://snapshot.org/#/dao.connext.eth/proposal/0x79cabf8e3c949f41659c880489709e7c076a1d1760c065e7043cc3ef16ef08d2",
  },
  {
    date: 1645427204,
    desc: "[V2] Establish and fund a Governance Department",
    logo: "bankless.svg",
    type: "Council",
    href: "https://forum.bankless.community/t/v2-establish-and-fund-a-governance-department/5178",
  },
  {
    date: 1704393000,
    desc: "1inch DAO Operations council signer",
    logo: "1inch.svg",
    type: "Council",
    href: "https://gov.1inch.community/docs/governance/dao-treasury/",
  },
  {
    date: 1670428636,
    desc: "[1IP 27] Allocate 1M USDC stables in treasury to lending pool on AAVE V3",
    logo: "1inch.svg",
    type: "Treasury",
    href: "https://gov.1inch.io/discussion/9310-1ip-27-allocate-1m-usdc-stables-in-treasury-to-lending-pool-on-aave-v3",
  },
  {
    date: 1697528236,
    desc: "1IP -XX: Ladder buy ETH via 1inch",
    logo: "1inch.svg",
    type: "Treasury",
    href: "https://gov.1inch.io/discussion/13763-1ip-xx-ladder-buy-eth-via-1inch",
  },
  {
    date: 1718649000,
    desc: "RRC-26 Tokenomics Working Group Proposal",
    logo: "rari.svg",
    type: "Treasury",
    href: "https://www.tally.xyz/gov/rari-foundation/proposal/46386437592567459216032440770821912815925242179987596443232911638398730092191",
  },
  {
    date: 1724351400,
    desc: "Everclear DAO Financial Updates from DAOplomats",
    logo: "everclear.svg",
    type: "Treasury",
    href: "https://forum.connext.network/t/everclear-dao-financial-updates-from-daoplomats/1254?u=baer_daoplomats",
  },
  {
    date: 1713292200,
    desc: "Empowering Gitcoin’s Governance: Gitcoin x DAOplomats",
    logo: "gitcoin.svg",
    type: "Governance",
    href: "https://gov.gitcoin.co/t/empowering-gitcoins-governance-gitcoin-x-daoplomats/18615",
  },
  {
    date: 1715798640,
    desc: "Social CGP 12 - Adopt Partial Private Voting",
    logo: "everclear.svg",
    type: "Governance",
    href: "https://snapshot.org/#/dao.connext.eth/proposal/0xf489cbb9f4d369cfbab7c67c08545837256527071f2128f535d4da171bf5d87b",
  },
  {
    date: 1671648240,
    desc: "[Ideation] Formulating the Proposal Lifecycle",
    logo: "euler.svg",
    type: "Governance",
    href: "https://forum.euler.finance/t/ideation-formulating-the-proposal-lifecycle/552",
  },
];

const FeedBody = () => {
  return (
    <section
      className="w-full max-h-screen overflow-y-auto md:show-scroll thin-scrollbar rounded-b-2xl show-scroll"
      aria-label="Feed Body"
    >
      {TABLE_ROWS.map(({ date, desc, logo, type, href }, index) => {
        const isLast = index === TABLE_ROWS.length - 1;
        const classes = isLast ? "" : "border-b border-blue-gray-50";

        return (
          <FeedBodyRow
            key={index}
            date={date}
            desc={desc}
            logo={logo}
            type={type}
            href={href}
            classes={classes}
          />
        );
      })}
    </section>
  );
};

export default FeedBody;
