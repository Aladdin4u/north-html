import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = (className?:string) => (
  <Image
    className={cn(className)}
    src="/north-logo.svg"
    alt="Next.js logo"
    width={100}
    height={100}
    priority
  />
);
