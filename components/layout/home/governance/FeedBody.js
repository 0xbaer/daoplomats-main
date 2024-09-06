import React from "react";

import FeedBodyRow from "./FeedBodyRow";

const TABLE_ROWS = [
  {
    date: 1724651147,
    desc: "Security Council Elections Cohort A Members",
    logo: "optimism.svg",
    type: "Milestone",
    href: "https://vote.optimism.io/proposals/15488122171194062441480404384027616672318062743967765547423316224250828775058",
  },
  {
    date: 1724307887,
    desc: "Upgrade Proposal #10: Granite Network Upgrade",
    logo: "optimism.svg",
    type: "Proposal",
    href: "https://vote.optimism.io/proposals/46514799174839131952937755475635933411907395382311347042580299316635260952272",
  },
  {
    date: 1723628327,
    desc: "a.DI ZkSync path activation",
    logo: "aave.svg",
    type: "Proposal",
    href: "https://vote.onaave.com/proposal/?proposalId=148&ipfsHash=0x66685f33f6f383548a450f539300fea0566272b9e63ce7438a011914f10475ce",
  },
  {
    date: 1723497347,
    desc: "Reserve Factor Updates Mid July",
    logo: "aave.svg",
    type: "Update",
    href: "https://vote.onaave.com/proposal/?proposalId=147&ipfsHash=0xb47359ccae9af33a6bf55f8e569f990130a806685bbe16e9a613f6ffda34513a",
  },
  {
    date: 1679515860,
    desc: "Delegate Statement Template",
    logo: "arbitrum.svg",
    type: "Proposal",
    href: "https://forum.arbitrum.foundation/t/delegate-statement-template/31/910",
  },
  {
    date: 1721354267,
    desc: "[EP5.13][Executable] Security Council",
    logo: "ens.svg",
    type: "Proposal",
    href: "https://www.tally.xyz/gov/ens/proposal/42329103797433777309488042029679811802172320979541414683300183273376839219133",
  },
  {
    date: 1719801900,
    desc: "[EP5.11] [Executable] Proposal: Fund the Meta-Governance Working Group (Term 5)",
    logo: "ens.svg",
    type: "Proposal",
    href: "https://www.tally.xyz/gov/ens/proposal/76312276134880424811339391717815330375652916610982980144903695563372140531115",
  },
  {
    date: 1719864660,
    desc: "[EP 5.12] Roles Modifier V2 Migration & Updates to Endowment Permissions",
    logo: "ens.svg",
    type: "Proposal",
    href: "https://www.tally.xyz/gov/ens/proposal/107992041043258996427224563090014372885335179099580585497266204203463156791290",
  },
  {
    date: 1724351400,
    desc: "Uniswap Delegate Reward Initiative - Cycle 2 Application",
    logo: "uniswap.svg",
    type: "Sponsorship ",
    href: "https://gov.uniswap.org/t/uniswap-delegate-reward-initiative-cycle-2-application/24434/13",
  },
  {
    date: 1724263320,
    desc: "[SEP 43] [OBRA] ZK Email Account Recovery - ZK Email",
    logo: "safe.svg",
    type: "Proposal",
    href: "https://snapshot.org/#/safe.eth/proposal/0x2c2ad686e94fd97903de8ee520b90d400c98a1985e31b21416da095b28373f18",
  },

  {
    date: 1724263080,
    desc: "[SEP 42] [OBRA] Simulations and Report: Safings Accounts and Safe Vaults - Kolektivo Labs & Hopper Protocol",
    logo: "safe.svg",
    type: "Proposal",
    href: "https://snapshot.org/#/safe.eth/proposal/0x86e0cee860e17a2f90b0d26e6e5ae0aff0c21330b8729ad449650c7ab84a0636",
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
