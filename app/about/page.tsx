"use client"

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { SparklesPreview } from "@/components/SparklesPreview";
import { EnhancedGallery } from "@/components/pages/enhanced-gallery";
import { events } from "@/data";



// Dynamic import of FactoryCanvas without SSR
const FactoryCanvas = dynamic(() => import("@/components/pages/FactoryCanvas"), { ssr: false });
const WorldMapDemo = dynamic(
  () => import("@/components/Global").then((mod) => mod.WorldMapDemo),
  { ssr: false }
);
export default function AboutPage({ theme }: { theme: "light" | "dark" }) {
  return (
 
    <div className="space-y-16 px-4 md:px-10 py-10">

      {/* Title: Our Gallery */}
    <h1 className={cn("text-4xl font-bold", "text-gray-800 dark:text-white")}>
        Our <span className="text-[#8DC63F] dark:text-[#00AEEF]">Company</span>
      </h1>

      <EnhancedGallery events={events} />
      {/* Title: Our Company */}
     
      {/* Company Section with Canvas and Text */}
      
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between  rounded-xl">
          {/* Canvas Section */}
          <div className="w-full md:w-1/2 max-w-md md:max-w-lg h-[350px] md:h-[400px] ">
            <FactoryCanvas />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 max-w-2xl px-4">
            <motion.p
              className={cn(
                "text-lg text-gray-700 dark:text-white text-center md:text-left",
                "sm:text-base",
                "md:text-lg"
              )}
            >
              EITS has established strategic partnerships with world-leading
              developers and manufacturers of both software (front-end supervisory
              systems) and hardware (including sensors, control valves, actuators,
              water valves, strainers, and more). In addition to a comprehensive
              range of products, these collaborations empower us to meet any
              requirement in building automation, regardless of complexity.
              Our deep knowledge, extensive experience, and continuous awareness of
              developments in the field enable us to deliver complete and tailored
              solutions for every need.
            </motion.p>
          </div>
        </div>
   
      <section className="flex flex-col md:flex-row items-center justify-between p-4 gap-8 ">
      {/* النص */}
      <div className="w-full md:w-1/2 text-left ">
      
        <p className=" text-gray-700 dark:text-white text-lg leading-relaxed text-center md:text-left">
          EITS Automation Control continues to expand its footprint across Egypt, Dubai, and the UK.
          With prestigious recognitions such as being a Platinum and Gold Partner for Honeywell Alerton BMS in Egypt and Dubai,
          our strategic visit to Sontay’s headquarters in the UK, and active participation in key events like the Schneider Electric forum at Baron Hotel —
          we proudly demonstrate our commitment to innovation, strong international partnerships, and leadership in automation and control solutions.
        </p>
      </div>

      {/* الموديل */}
      <div className="w-full md:w-1/2">
        <WorldMapDemo />
      </div>
    </section>
      {/* Sparkles section */}
      <SparklesPreview />

  
    </div>
  );
}
