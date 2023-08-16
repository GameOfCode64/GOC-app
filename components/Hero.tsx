import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import Image from "next/image";
import ai from "@/public/images/ai.png";
import pos from "@/public/images/possibility.png";
const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="flex items-center justify-center md:justify-between">
      <div className="px-2 py-2  md:flex inline-block">
        <div className="inline-block mt-16">
          <motion.div
            {...textVariant}
            className="md:w-[300px] w-full border-[1px] border-black bg-navbar px-3 py-2 rounded-3xl flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
            Joiner Full Stack Software Engineer
          </motion.div>
          <div className="mt-4 px-2 py-2">
            <h1 className="text-[32px] font-[900]">
              Join The largest Hacker Comunity GOC & fill the
              <br />
              <span className="text-transparent text-[38px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Power of Game of Code
              </span>
            </h1>
            <p className="mt-4">
              All the best and most modern resources at your fingertips. Access{" "}
              <span className="text-cyan-500 hover:underline">
                <Link href="/">onlineWebsite</Link>
              </span>
              <span className="text-cyan-500 hover:underline">
                <Link href="/">, Mobile</Link>
              </span>
              <span className="text-cyan-500 hover:underline">
                <Link href="/">, Software</Link>
              </span>
              , coding examples, tutorials and much more. All in one place
            </p>
            <div className="mt-8">
              <Link href="/sign-in">
                <Button className="rounded-3xl" variant="papabtn">
                  Join Now!
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image src={pos} alt="bgimage" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
