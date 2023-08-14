"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";
import react, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
const navgation = [
  {
    href: "/",
    link: "Home",
  },
  {
    href: "/about",
    link: "About",
  },
  {
    href: "/join-us",
    link: "Join Us",
  },
  {
    href: "/more",
    link: "More",
  },
];

const MobileNav = () => {
  const { theme, setTheme } = useTheme();
  const newLocal = theme === "dark";
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <div className="">
          <div className="w-[90px] px-4 py-6">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className="">
            <div className="mx-4 my-20">
              <div className="">
                {navgation.map((item, index) => (
                  <div className="" key={index}>
                    <Link href={item.href}>
                      <div className="hover:bg-black/10 px-3 mt-5 py-2 hover:rounded-md">
                        {item.link}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-28 py-4 px-4">
              <div className="py-2 px-3 flex items-center justify-center">
                {newLocal ? (
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => setTheme("light")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                    Light
                  </Button>
                ) : (
                  <Button
                    className="w-full"
                    variant="default"
                    onClick={() => setTheme("dark")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                    Dark
                  </Button>
                )}
              </div>
              <div className="mt-3 py-2 px-3">
                <Button variant="primebtn" className="w-full">
                  Sign in
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
