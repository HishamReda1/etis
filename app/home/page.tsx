"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Laptop from "@/components/pages/Laptop";
import { socialMedia } from "@/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import homeContent from "@/src/content/home.content";

const HomePage = ({ theme }: { theme: "light" | "dark" }) => {
  const params = useParams();
  const locale = (params?.locale as keyof typeof homeContent.content) || "en";
  const content = homeContent;

  const validLocale = locale in content.content ? locale : "en";
  const isRTL = validLocale === "ar";

  return (
    <div className="w-full  relative overflow-hidden">
      {/* < ImagesSliderDemo/> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-7xl z-10 ">
        {/* Left side content */}
        <div
          className={cn(
            "space-y-3 flex flex-col justify-center h-full",
            isRTL ? "text-right" : "text-left"
          )}
        >
          <div aria-label="eits" className="">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100">
              {content.content[validLocale].title}
            </h1>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
              {content.content[validLocale].subtitle}
            </h2>
          </div>
          <p
            className={cn(
              "text-lg md:text-xl lg:text-2xl",
              "text-gray-700 dark:text-gray-100"
            )}
          >
            {content.content[validLocale].tagline}
          </p>
          <div className="flex items-center gap-2">
            {socialMedia.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border-white/30 rounded-md shadow-sm 
                         dark:bg-gradient-to-r dark:from-[#005b94] dark:to-[#00AEEF] 
                         bg-gradient-to-r from-[#98f868] to-[#a8e063] 
                         hover:opacity-90 hover:scale-105 transition-all duration-200 ease-in-out"
              >
                <Image
                  src={item.img}
                  alt={`${content.content[validLocale].socialMedia.alt} ${item.id}`}
                  width={30}
                  height={30}
                  className="w-8 h-8"
                />
              </Link>
            ))}
          </div>
        </div>
        {/* Laptop model on the right */}
        <div className="w-[300px] md:w-[400px] lg:w-[668px] h-[432px] md:h-[500px] lg:h-[600px]">
          
          <Laptop />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
