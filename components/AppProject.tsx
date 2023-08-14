import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import img1 from "@/public/images/blog01.png";
import Link from "next/link";

const Cardcontent = [
  {
    imgsrc: img1,
    href: "/",
    title: "Morden App",
    desc: " Contain StarMode , Authentication Google , Facebook , Github ,Instgram , Custom Star Colour Ba...",
    tec1: "Tailwind",
    tec2: "React",
    tec3: "Redux",
    tec4: "TypeScript",
    tec5: "Nextjs",
    tec6: "Framer",
  },
];
const Cardcontent2 = [
  {
    imgsrc: img1,
    href: "/",
    title: "AdminDashboard app",
    desc: "A Real Time Full Stack FoodOrder & Admin Dashboard application User Can Order and Contain Payme...",
    tec1: "Tailwind",
    tec2: "React",
    tec3: "Redux",
    tec4: "TypeScript",
    tec5: "Nextjs",
    tec6: "Nodejs",
    tec7: "Mangodb",
    tec8: "Stripe",
    tec9: "Firebase",
  },
];
const Cardcontent3 = [
  {
    imgsrc: img1,
    href: "/",
    title: "Shoe Ecommerce App",
    desc: "A Real Time Full Stack Shoe Ecommerce & Admin Dashboard application User Can Order and Contain...",
    tec1: "Tailwind",
    tec2: "React",
    tec3: "Redux",
    tec4: "TypeScript",
    tec5: "Nextjs",
    tec6: "Graphql",
    tec7: "stripe",
    tec8: "firebase",
  },
];

const AppProject = () => {
  return (
    <div className="md:flex inline-block gap-5 px-4 py-3">
      <Card className="md:w-[410px] w-full border-[1px]">
        {Cardcontent.map((item, index) => (
          <div className="px-3 py-2 m-auto" key={index}>
            <div className="h-[40%] w-full">
              <Image src={item.imgsrc} alt="img" className="w-full" />
            </div>
            <div className="mt-3">
              <Link href={item.href}>
                <h1 className="font-semibold">{item.title}</h1>
              </Link>
              <p className="mt-3 text-[13px]">{item.desc}</p>
              <div className="grid mb-4 mt-3 gap-[5px] grid-cols-3 lg:grid-cols-4 grid-rows-none cursor-pointer">
                <span className="px-2 p-1 text-center text-white bg-cyan-500 rounded-lg">
                  {item.tec1}
                </span>
                <span className="px-2 p-1 text-center text-white bg-cyan-400 rounded-lg">
                  {item.tec2}
                </span>
                <span className="px-2 p-1 text-center text-white bg-purple-500 rounded-lg">
                  {item.tec3}
                </span>
                <span className="px-2 p-1 text-center text-white bg-[#2D79C7] rounded-lg">
                  {item.tec4}
                </span>
                <span className="px-2 p-1 text-center text-white bg-[#13224A] rounded-lg">
                  {item.tec5}
                </span>
                <span className="px-2 p-1 text-center text-white bg-[#FF13FFD3] rounded-lg">
                  {item.tec6}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Card>
      <Card className="md:w-[410px] w-full mt-4 md:mt-0 border-[1px]">
        {Cardcontent2.map((item, index) => (
          <div className="px-3 py-2 m-auto" key={index}>
            <div className="h-[40%] w-full">
              <Image src={item.imgsrc} alt="img" className="w-full" />
            </div>
            <div className="mt-3">
              <Link href={item.href}>
                <h1 className="font-semibold">{item.title}</h1>
              </Link>
              <p className="mt-3 text-[13px]">{item.desc}</p>
              <div className="grid mb-4 mt-3 gap-[5px] grid-cols-3 lg:grid-cols-4 grid-rows-none cursor-pointer">
                <span className="px-2 p-1 text-center text-white bg-cyan-500 rounded-lg">
                  {item.tec1}
                </span>
                <span className="px-2 p-1 text-center text-white bg-cyan-400 rounded-lg">
                  {item.tec2}
                </span>
                <span className="px-2 p-1 text-center text-white bg-purple-500 rounded-lg">
                  {item.tec3}
                </span>
                <span className="px-2 p-1 text-center text-white bg-[#2D79C7] rounded-lg">
                  {item.tec4}
                </span>
                <span className="px-2 p-1 text-center text-white bg-[#13224A] rounded-lg">
                  {item.tec5}
                </span>
                <span className="px-2 p-1 text-center text-white bg-[#79B562] rounded-lg">
                  {item.tec6}
                </span>
                <span className="px-2 p-1 text-center text-white bg-[#665BFF] rounded-lg">
                  {item.tec8}
                </span>
                <span className="px-2 p-1 text-center text-white bg-[#79B562] rounded-lg">
                  {item.tec7}
                </span>
                <span className="px-2 p-1 text-center text-white bg-[#E9B422] rounded-lg">
                  {item.tec9}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Card>
      <Card className="md:w-[410px] w-full mt-4 md:mt-0 border-[1px] text-white">
        {Cardcontent3.map((item, index) => (
          <div className="px-3 py-2 m-auto" key={index}>
            <div className="h-[40%] w-full">
              <Image src={item.imgsrc} alt="img" className="w-full" />
            </div>
            <div className="mt-3">
              <Link href={item.href}>
                <h1 className="font-semibold">{item.title}</h1>
              </Link>
              <p className="mt-3 text-[13px]">{item.desc}</p>
              <div className="grid mb-4 mt-3 gap-[5px] grid-cols-3 lg:grid-cols-4 grid-rows-none cursor-pointer">
                <span className="px-2 p-1 text-center text-white bg-cyan-500 rounded-lg">
                  {item.tec1}
                </span>
                <span className="px-2 p-1 text-center text-white bg-cyan-400 rounded-lg">
                  {item.tec2}
                </span>
                <span className="px-2 p-1 text-center text-white bg-purple-500 rounded-lg">
                  {item.tec3}
                </span>
                <span className="px-2 p-1 text-center text-white bg-[#2D79C7] rounded-lg">
                  {item.tec4}
                </span>
                <span className="px-2 p-1 text-center text-white bg-[#13224A] rounded-lg">
                  {item.tec5}
                </span>
                <span className="px-2 p-1 text-center text-white bg-[#FF13FFD3] rounded-lg">
                  {item.tec6}
                </span>
                <span className="px-2 p-1 text-center text-white bg-[#665BFF] rounded-lg">
                  {item.tec7}
                </span>
                <span className="px-2 p-1 text-center text-white bg-[#E9B422] rounded-lg">
                  {item.tec8}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default AppProject;
