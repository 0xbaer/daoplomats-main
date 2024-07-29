import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2.5">
      <Image
        src="/home/header/daoplomats-logo.svg"
        width={44}
        height={44}
        alt="logo"
        className="w-10 h-10 xl:w-11 xl:h-11"
      />

      <div className="text-lg xl:text-xl  space-x-1 font-philosopher">
        <span className="text-primary">DAO</span>
        <span className="text-secondary">PLOMATS</span>
      </div>
    </div>
  );
};

export default Logo;
