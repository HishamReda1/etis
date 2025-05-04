"use client";

import { clientLogos, logoData } from "@/data";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingPartners = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    img: string | undefined;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) {
      addAnimation();
      setStart(true);
    }
  }, [start]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      // Avoid duplicating elements multiple times
      if (scrollerContent.length === clientLogos.length) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      setAnimationProperties();
    }
  }

  function setAnimationProperties() {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      const duration =
        speed === "fast" ? "15s" : speed === "normal" ? "30s" : "60s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen max-w-7xl overflow-hidden py-6",
        "overflow-x-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-12 py-4 w-max flex-nowrap items-center",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {logoData.partners.map((partner, idx) => (
          <li
            key={idx}
            className="flex flex-col items-center text-center w-auto"
          >
            <Image
              src={partner.src}
              width={128}
              height={128}
              className="w-32 h-32 object-contain  rounded-2xl"
              alt={partner.id}
              priority 
              
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
