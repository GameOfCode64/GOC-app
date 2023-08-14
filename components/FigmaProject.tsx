import Image from "next/image";
import figma1 from "@/public/images/Frame.png";
import figma2 from "@/public/images/Frame2.png";
import figma from "@/public/images/figma.png";
import { Button } from "./ui/button";
import Link from "next/link";

const FigmaProject = () => {
  return (
    <div className="md:flex inline-block items-center justify-center gap-5 px-4 py-3">
      <div className="border-[1px] w-full px-4 py-3 rounded-[4px]">
        <div className="w-full h-[80%]">
          <Image
            src={figma1}
            alt="figmaimg"
            className="w-full rounded-[8px] hover:opacity-50"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="mt-4 flex items-center justify-center">
            <div className="w-[15px] cursor-pointer">
              <Image src={figma} alt="figma" />
            </div>
            <h1 className="text-white font-bold ml-3">
              Movie App Figma Desing
            </h1>
          </div>
          <Link href="/">
            <button className="bg-blue-600 px-2 py-1 rounded-lg mt-4">
              Open in Figma
            </button>
          </Link>
        </div>
      </div>
      <div className="border-[1px] mt-4 md:mt-0 w-full px-4 py-3 rounded-[4px]">
        <div className="w-full h-[80%]">
          <Image
            src={figma2}
            alt="figmaimg"
            className="w-full rounded-[8px] hover:opacity-50"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="mt-4 flex items-center justify-center">
            <div className="w-[15px] cursor-pointer">
              <Image src={figma} alt="figma" />
            </div>
            <h1 className="text-white font-bold ml-3">
              Coffee Shop Figma Desing
            </h1>
          </div>
          <Link href="/">
            <button className="bg-blue-600 px-2 py-1 rounded-lg mt-4">
              Open in Figma
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FigmaProject;
