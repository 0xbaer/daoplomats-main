import { Cursor } from "./Cursor";

const MouseIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={31}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill={"#dfe225"}
          fillRule="evenodd"
          stroke={"#000"}
          strokeLinecap="square"
          strokeWidth={2}
          d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={"#dfe225"} d="M0 0h26v31H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export function MouseCursor() {
  return (
    <Cursor
      attachToParent
      variants={{
        initial: { scale: 0.3, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.3, opacity: 0 },
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.15,
      }}
      className="left-7 top-7"
    >
      <div>
        <MouseIcon className="h-6 w-6" />
        <div className="ml-4 mt-1 rounded-[4px] bg-primary px-2 py-0.5 text-black">
          You
        </div>
      </div>
    </Cursor>
  );
}
