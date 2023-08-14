"use client";

import AppProjectCard from "@/components/AppProjectCard";
import FigmaProject from "@/components/FigmaProject";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projectcard from "@/components/Projectcard";
import WebProject from "@/components/WebProject";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="w-[95%] m-auto h-screen">
      <Hero />
      <div className="mt-8">
        <Projectcard />
        <div className="mt-8 px-4 py-3">
          <AppProjectCard />
        </div>
        <div className="mt-8">
          <WebProject />
        </div>
        <div className="mt-8 md:px-4 md:py-3">
          <FigmaProject />
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
