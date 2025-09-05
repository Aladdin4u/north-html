"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "../logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[muted]">
      <nav className="h-16 bg-[#1E1E1E] text-white">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Link href={"/login"}>
              <Button className="hidden sm:inline-flex bg-blue-500 hover:bg-blue-600">
                Login
              </Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button className="bg-[#202E48] hover:[#202E48]/50">
                Sign Up
              </Button>
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
