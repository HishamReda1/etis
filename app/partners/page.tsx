"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { logoData } from "@/data"
import { useState } from "react"
import Link from "next/link"



export default function PartnersPage({ theme }: { theme: "light" | "dark" }) {
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <h1 className={cn("text-4xl font-bold text-center", theme === "light" ? "text-gray-800" : "text-white")}>
        Our <span className="text-[#8DC63F] dark:text-[#00AEEF]">Partners</span>
      </h1>

      <p className={cn("text-lg text-center", theme === "light" ? "text-gray-700" : "text-gray-100")}>
        We collaborate with industry leaders to deliver comprehensive automation solutions.
      </p>

      <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
        {logoData.partners.map((partner) => (
          <div
            key={partner.id}
            className="relative mx-auto flex w-full max-w-[160px] items-center justify-center group"
            onMouseEnter={() => setHoveredPartner(partner.id)} // Set hovered partner on mouse enter
            onMouseLeave={() => setHoveredPartner(null)} // Clear hovered partner on mouse leave
          >
            <Link
              href={partner.link}
              target="_blank"
              className="relative block w-full aspect-[3/1] overflow-hidden group-hover:scale-110 transition-transform"
            >
              <Image
             
                src={partner.src}
                alt={partner.alt}
                width={partner.width * 1.2} // زيادة الحجم
                height={partner.height * 1.2} // زيادة الحجم
                className="absolute inset-0 w-full h-full object-contain object-center filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all"
              />
            </Link>
            {/* Tooltip */}
            {hoveredPartner === partner.id && (
              <div
                className={cn(
                  "absolute flex flex-col items-center p-2 rounded-lg shadow-lg z-10",
                  theme === "dark" ? "bg-[#005b94] text-gray-100" : "bg-[#56ab2f] text-gray-800"
                )}
                style={{
                  top: "100%", // Position tooltip directly below the logo
                  left: "50%", // Center tooltip horizontally
                  transform: "translateX(-50%)", // Adjust for centering
                  width: "200px", // Fixed width
                  opacity: 0.95,
                }}
              >
                <h2 className="text-sm font-semibold">{partner.alt}</h2>
                <p className="text-xs text-center">{partner.quote}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


