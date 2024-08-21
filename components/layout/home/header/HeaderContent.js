import HeaderHeading from "./HeaderHeading";

import BorderButton from "@/components/ui/buttons/BorderButton";

export default function CenterContent() {
  return (
    <div className="relative mx-auto w-fit my-32 md:my-52 lg:my-40 xl:my-48 z-20">
      <div className="flex flex-col items-start space-y-24 lg:space-y-20">
        <HeaderHeading />

        <div className="flex flex-col w-full items-center justify-between sm:items-center px-8 md:px-12 lg:px-0 md:flex-row space-y-8">
          <p className="text-secondary text-base sm:text-lg text-center md:text-left font-normal w-full md:w-8/12 max-w-2xl items-start">
            Tailored governance solutions by our experts streamline
            decision-making in your DAO, blending the best of traditional and
            decentralized frameworks for enhanced transparency and
            accountability.
          </p>

          <BorderButton
            href="https://boardroom.io/voter/daoplomats.eth"
            label="Delegate"
          />
        </div>
      </div>
    </div>
  );
}
