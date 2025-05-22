"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import sparklesContent from "@/src/content/sparkles.content";
import { cn } from "@/lib/utils";

export function SparklesPreview() {
  const params = useParams();
  const locale = params?.locale as keyof typeof sparklesContent.content || "en";
  const content = sparklesContent;
  const validLocale = locale in content.content ? locale : "en";
  const t = content.content[validLocale];
  const isRTL = validLocale === "ar";

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h3 className={cn(
        "md:text-2xl font-bold text-center text-gray-800 dark:text-white relative z-20 py-4 flex items-center justify-center gap-2",
        isRTL ? "flex-row-reverse" : "flex-row"
      )}>
        {isRTL ? (
          <>
            {t.title}
            <span>
              <Image src="/honey-word.png" alt="honeywell" width={200} height={100} />
            </span>
            {t.subtitle}
          </>
        ) : (
          <>
            {t.title}
            <span>
              <Image src="/honey-word.png" alt="honeywell" width={200} height={100} />
            </span>
            {t.subtitle}
          </>
        )}
      </h3>

      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#8DC63F] to-transparent dark:via-[#00AEEF] h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#8DC63F] to-transparent dark:via-[#00AEEF] h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#8DC63F] to-transparent dark:via-[#00AEEF] h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#8DC63F] to-transparent dark:via-[#00AEEF] h-px w-1/4" />

        {/* Core component */}
        {/* Radial Gradient to prevent sharp edges */}
      </div>
    </div>
  );
}
