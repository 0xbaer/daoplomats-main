import Image from "next/image";

const Logo = ({
  direction = "flex-row",
  logoSize = "w-10 h-10 xl:w-11 xl:h-11",
  size = "text-lg xl:text-xl space-x-0.5",
}) => {
  return (
    <div className={`flex items-center justify-center gap-2.5 ${direction}`}>
      <Image
        src="/home/header/daoplomats-logo.svg"
        width={44}
        height={44}
        alt="logo"
        className={logoSize + " prevent-select"}
      />

      <div className={`font-philosopher ${size}`}>
        <span className="text-primary">DAO</span>
        <span className="text-secondary">plomats</span>
      </div>
    </div>
  );
};

export default Logo;
