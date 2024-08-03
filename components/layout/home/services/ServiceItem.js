import Image from "next/image";

const ServiceItem = ({ title, body, logo }) => {
  return (
    <div className="flex flex-col gap-8 text-[#242424] border-b border-dark pb-6 xl:pb-8 max-w-md w-full">
      <Image src={logo} width={64} height={64} alt={title} />

      <p className="text-[16px] font-medium lg:11/12 xl:w-10/12 font-urbanist">
        {body}
      </p>

      <h3 className="text-4xl md:text-5xl xl:text-[54px] font-philosopher 2xl:pr-4 -order-1 md:order-1">
        {title}
      </h3>
    </div>
  );
};

export default ServiceItem;
