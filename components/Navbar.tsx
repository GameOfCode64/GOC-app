"use client";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";
import { Button } from "./ui/button";
import * as React from "react";
import { useTheme } from "next-themes";
import MobileNav from "./Mob-Nav";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const { theme, setTheme } = useTheme();
  const newLocal = theme === "dark";
  return (
    <div className="md:mt-6  sticky top-0  rounded-xl shadow-lg backdrop-filter backdrop-blur-xl md:w-[95%] w-[100%] m-auto bg-white/20 z-10 md:h-[80px] h-[70px]">
      <div className="flex items-center justify-between">
        <div className="md:w-[100px] w-[60px] my-4 mx-6">
          <Link href="/">
            <Image src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex items-center justify-centermy-4 mx-6">
          <div className="md:block hidden">
            <Link href="/">
              <span className="md:mr-4 font-medium text-[17px] md:hover:bg-navbar rounded-lg px-3 py-2">
                Home
              </span>
            </Link>
            <Link href="/">
              <span className="md:mr-4 font-medium text-[17px] md:hover:bg-navbar rounded-lg px-3 py-2">
                About
              </span>
            </Link>
            <Link href="/">
              <span className="md:mr-4 font-medium text-[17px] md:hover:bg-navbar rounded-lg px-3 py-2">
                Join Us
              </span>
            </Link>
            <Link href="/">
              <span className="md:mr-4 font-medium text-[17px] md:hover:bg-navbar rounded-lg px-3 py-2">
                More
              </span>
            </Link>
          </div>
          <div className="hidden md:flex  items-center justify-center">
            {newLocal ? (
              <Button className="" onClick={() => setTheme("light")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </Button>
            ) : (
              <Button className="" onClick={() => setTheme("dark")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </Button>
            )}
            <Link href="">
              <Button variant="primebtn" size="lg" className=" ml-2">
                Sign In
              </Button>
            </Link>
          </div>
          <div className="flex md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
