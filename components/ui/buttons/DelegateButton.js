import Link from "next/link";
import Image from "next/image";

const DelegateButton = () => {
  return (
    <Link
      href="https://boardroom.io/voter/daoplomats.eth"
      target="_blank"
      referrerPolicy="no-referrer"
      aria-label="Visit DAOplomats Boardroom"
      className="flex items-center gap-2 rounded-full border-secondary border text-secondary text-sm prevent-select btn-custom"
    >
      Delegate
      <div className="w-5 h-5">
        <Image
          src="/arrow-up-right.svg"
          width={20}
          height={20}
          alt="arrow"
          className="w-5 h-5"
        />
      </div>
    </Link>
  );
};

export default DelegateButton;
