"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHospital, FaBuilding, FaServer, FaPills } from "react-icons/fa6";
import achievementsContent from "@/src/content/achievements.content";

interface StatsSectionProps {
  locale: string;
}

const StatsSection = ({ locale }: StatsSectionProps) => {
  const content = achievementsContent.content[locale as keyof typeof achievementsContent.content];

  const stats = [
    { value: 120, label: content.sections.hospitals, icon: FaHospital },
    { value: 70, label: content.sections.commercial, icon: FaBuilding },
    { value: 40, label: content.sections.datacenters, icon: FaServer },
    { value: 15, label: content.sections.pharma, icon: FaPills },
  ];

  const Counter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 2;
      let start = 0;
      const increment = value / (duration * 60);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [value]);

    return (
      <motion.p
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {count}+
      </motion.p>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center text-gray-800 dark:text-gray-100 py-8 mx-auto place-items-center">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center w-24 sm:w-32 md:w-40 lg:w-48"
            >
              <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-5 rounded-full shadow-md">
                <Icon size={28} className="text-[#8DC63F] dark:text-[#00AEEF]" />
              </div>
              <Counter value={stat.value} />
              <p className="text-xs sm:text-sm md:text-base font-medium my-1 sm:my-1">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default StatsSection;
