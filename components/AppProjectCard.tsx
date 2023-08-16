import Image from "next/image";
import app1 from "@/public/images/deliveroo1.jpg";
import app2 from "@/public/images/roo2.jpg";
import app3 from "@/public/images/roo3.jpg";
import app4 from "@/public/images/roo4.jpg";
import app5 from "@/public/images/roo5.jpg";
import Link from "next/link";
const AppProjectCard = () => {
  return (
    <div className="border-[1px] px-4 py-3">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 md:grid-cols-4">
        <Image src={app1} alt="logo" className="w-full hover:opacity-50" />
        <Image
          src={app2}
          alt="logo"
          className="w-full lg:grid md:grid hidden hover:opacity-50"
        />
        <Image
          src={app3}
          alt="logo"
          className="w-full lg:grid md:grid hidden hover:opacity-50"
        />
        <Image
          src={app4}
          alt="logo"
          className="w-full lg:grid md:grid hidden hover:opacity-50"
        />
        <Image
          src={app5}
          alt="logo"
          className="w-full lg:grid hidden hover:opacity-50"
        />
      </div>
      <div className="mt-4">
        <Link href="/">
          <h1 className="font-bold text-[17px]">Food Deliveroo Mobile App</h1>
        </Link>
        <p className="mt-4 text-[13px] font-[300]">
          It My First ReactNative App So The have a lot of Bug!, Feature Conatin
          Google Auth UserCanOrder Remove Order And Containe ReactNativeMap
          Justlike Deliveroo Tailwind React Native Redux
        </p>
        <div className="grid mt-5 lg:grid-cols-7 gap-3 md:grid-cols-6 grid-cols-3">
          <span className="bg-cyan-500 text-white rounded-lg text-center py-2">
            Tailwind
          </span>
          <span className="bg-cyan-400 text-white rounded-lg text-center py-2">
            Native
          </span>
          <span className="bg-purple-500 text-white rounded-lg text-center py-2">
            Redux
          </span>
          <span className="bg-cyan-500 text-white rounded-lg text-center py-2">
            TypeScript
          </span>
          <span className="bg-[#79B562] text-white rounded-lg text-center py-2">
            Node js
          </span>
          <span className="bg-[#E9B422] text-white rounded-lg text-center py-2">
            Express js
          </span>
          <span className="bg-cyan-500 text-white rounded-lg text-center py-2">
            Postger sql
          </span>
          <span className="bg-sky-800 text-white rounded-lg text-center py-2">
            Expo
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppProjectCard;
