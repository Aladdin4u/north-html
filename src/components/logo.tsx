import Image from "next/image";

export const Logo = ({className}:{className?:string}) => (
  <Image
    className={className}
    src="/north-logo.svg"
    alt="Next.js logo"
    width={100}
    height={100}
    priority
  />
);
