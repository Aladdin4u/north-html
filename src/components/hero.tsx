import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-20 py-12">
        <div>
          <p className="text-blue-600 text-sm">YOUR MONEY, YOUR CHOICE</p>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] text-white">
            Manage your money with
          </h1>
          <p className="font-bold text-2xl text-white">
            <span className="text-6xl mask-radial-from-transparent mask-radial-from-5% mask-radial-to-black mask-radial-to-70% mask-radial-at-top text-[#D8A800]">
              Gold
            </span>{" "}
            &{" "}
            <span className="text-6xl mask-radial-from-transparent mask-radial-from-5% mask-radial-to-white mask-radial-to-65% mask-radial-at-top text-white">
              Silver
            </span>
          </p>
          <p className="mt-6 max-w-[60ch] text-lg text-[#AEAEAE]">
            Spend and save in physical gold and silver. Buy digital currency.
            Earn rewards for every transactiom
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button className="hidden sm:inline-flex bg-blue-500 hover:bg-blue-600">
              Join Group
            </Button>
            <Link href='/about'>
            <Button className="bg-[#202E48] hover:[#202E48]/50">
              About US
            </Button>
            </Link>
          </div>
        </div>
        <div className="w-full aspect-video bg-accent rounded-xl overflow-hidden">
          <Image
            className="dark:invert "
            src="/hero.png"
            alt="hero image"
            width={801}
            height={881}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
