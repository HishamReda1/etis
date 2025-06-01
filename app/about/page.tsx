"use client"

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { SparklesPreview } from "@/components/SparklesPreview";
import { EnhancedGallery } from "@/components/pages/enhanced-gallery";
import { useParams } from "next/navigation";
import aboutContent from "@/src/content/about.content";
import eventsContent from "@/src/content/events.content";

// Dynamic import of FactoryCanvas without SSR
const FactoryCanvas = dynamic(() => import("@/components/pages/FactoryCanvas"), { ssr: false });
const WorldMapDemo = dynamic(
  () => import("@/components/Global").then((mod) => mod.WorldMapDemo),
  { ssr: false }
);

export default function AboutPage({ theme }: { theme: "light" | "dark" }) {
  const params = useParams();
  const locale = params?.locale as keyof typeof aboutContent.content || "en";
  const content = aboutContent;
  const validLocale = locale in content.content ? locale : "en";
  const t = content.content[validLocale];
  const events = (validLocale === "en" || validLocale === "ar" || validLocale === "fr" || validLocale === "de" || validLocale === "zh") 
    ? eventsContent.content[validLocale].events 
    : eventsContent.content.en.events;
  const isRTL = validLocale === "ar";

  return (
    <div className="space-y-5 px-4 md:px-10 ">
      {/* Title: Our Gallery */}
      <h1 className={cn("text-4xl font-bold", "text-gray-800 dark:text-white")}>
        {t.title} <span className="text-[#8DC63F] dark:text-[#00AEEF]">{t.companyTitle}</span>
      </h1>
      <p className={cn("text-lg", theme === "light" ? "text-gray-700" : "text-gray-100")}>
        {t.companySubtitle}
      </p>

      <EnhancedGallery events={events} />
      
      {/* Company Section with Canvas and Text */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between rounded-xl">
        {/* Canvas Section */}
        <div className="w-full md:w-1/2 max-w-md md:max-w-lg h-[350px] md:h-[400px] ">
          <FactoryCanvas />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 max-w-2xl px-4">
          <motion.p
            className={cn(
              "text-lg text-gray-700 dark:text-white",
              isRTL ? "text-right" : "text-left",
              "sm:text-base",
              "md:text-lg"
            )}
          >
            {t.companyDescription}
          </motion.p>
        </div>
      </div>
   
      <section className="flex flex-col md:flex-row items-center justify-between p-4 gap-8 ">
        {/* Text */}
        <div className={cn("w-full md:w-1/2", isRTL ? "text-right" : "text-left")}>
          <p className="text-gray-700 dark:text-white text-lg leading-relaxed">
            {t.globalPresence}
          </p>
        </div>

        {/* Model */}
        <div className="w-full md:w-1/2">
          <WorldMapDemo />
        </div>
      </section>
      <SparklesPreview />
    </div>
  );
}
