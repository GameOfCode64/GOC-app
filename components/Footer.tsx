import Image from "next/image";
import logo from "@/public/images/logo.svg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full px-4 py-3">
      <div className="md:flex inline-block px-4 py-6">
        <div className="">
          <div className="w-[100px]">
            <Image src={logo} alt="logo" />
          </div>
          <h1 className="font-semibold mt-8">
            Join The largest Hacker Comunity
            <br /> GOC & fill the Power of Code
          </h1>
        </div>
        <div className="md:flex inline-block md:ml-14">
          <div className="">
            <h1 className="font-bold text-[17px] mb-8 mt-4 md:mt-0">
              Products
            </h1>
            <ul>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">Technology lookup</Link>
              </li>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">Lead lists</Link>
              </li>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">Email verification</Link>
              </li>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">Keyword search</Link>
              </li>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">Website alerts</Link>
              </li>
            </ul>
          </div>
          <div className="md:ml-14">
            <h1 className="font-bold text-[17px] md:mb-8 mt-4 md:mt-0">
              Use cases
            </h1>
            <ul>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">Technology lookup</Link>
              </li>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">Lead lists</Link>
              </li>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">Email verification</Link>
              </li>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">Keyword search</Link>
              </li>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">Website alerts</Link>
              </li>
            </ul>
          </div>
          <div className="md:ml-14">
            <h1 className="font-bold text-[17px] md:mb-8 mt-4 md:mt-0">
              Social Media
            </h1>
            <ul>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">Twitter</Link>
              </li>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">Linkdin</Link>
              </li>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">Instagram</Link>
              </li>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">YouTube</Link>
              </li>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">GCC</Link>
              </li>
            </ul>
          </div>
          <div className="md:ml-14">
            <h1 className="font-bold text-[17px] md:mb-8 mt-4 md:mt-0">
              Company
            </h1>
            <ul>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">About</Link>
              </li>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">Join Us</Link>
              </li>
              <li className="mt-5 hover:bg-white/10 hover:px-2 hover:py-2 transition-all hover:rounded-md">
                <Link href="/">More</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-[2px] w-full rounded-md mt-4" />
      <div className="md:flex items-center justify-between mt-4">
        <div className="font-semibold text-[13px]">
          <Link href="/">Privacy policy</Link>
        </div>
        <div className="font-bold md:mt-0 mt-4 mb-6">
          <Link href="/">© 2023 GOC Inc. All rights reserved.</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
