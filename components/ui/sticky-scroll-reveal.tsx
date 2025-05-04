"use client"
import React, { useRef } from "react"
import { useMotionValueEvent, useScroll, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { events } from "@/data"

export const StickyScroll = ({
  contentClassName,
}: {
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"], // Ensure full range is covered
  });
  const cardLength = events.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
  
    const cardsBreakpoints = events.map((_, index) => index / (cardLength - 1));
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const validActiveCard = Math.min(Math.max(activeCard, 0), events.length - 1);

  return (
    <motion.div
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {events.map((item, index) => (
            <div key={item.id} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-gray-800 dark:text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg mt-10 max-w-sm text-gray-800 dark:text-white"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  View Event
                </a>
              </motion.p>
            </div>
          ))}
          <div className="h-40" /> {/* Spacer to ensure full scroll */}
        </div>
      </div>
      <div
        className={cn("sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block", contentClassName)}
      >
        {events[validActiveCard]?.thumbnails ? (
          <img
            src={events[validActiveCard].thumbnail}
            alt={events[validActiveCard].title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
