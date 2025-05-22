"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { logoData } from "@/data"
import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import partnersContent from "@/src/content/partners.content"

export default function PartnersPage({ theme }: { theme: "light" | "dark" }) {
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null)
  const params = useParams();
  const locale = params?.locale as keyof typeof partnersContent.content || "en";
  const content = partnersContent;
  const validLocale = locale in content.content ? locale : "en";
  const t = content.content[validLocale];

  return (
    <div className="space-y-6">
      <h1 className={cn("text-4xl font-bold text-center", theme === "light" ? "text-gray-800" : "text-white")}>
        <span className="text-[#8DC63F] dark:text-[#00AEEF]">{t.title}</span>
      </h1>

      <p className={cn("text-lg text-center", theme === "light" ? "text-gray-700" : "text-gray-100")}>
        {t.description}
      </p>
      <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
        {logoData.partners.map((partner) => (
          <div
            key={partner.id}
            className="relative mx-auto flex w-full max-w-[160px] items-center justify-center group"
            onMouseEnter={() => setHoveredPartner(partner.id)}
            onMouseLeave={() => setHoveredPartner(null)}
          >
            <Link
              href={partner.link}
              target="_blank"
              className="relative block w-full aspect-[3/1] overflow-hidden group-hover:scale-110 transition-transform"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width * 1.2}
                height={partner.height * 1.2}
                className="absolute inset-0 w-full h-full object-contain object-center filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all"
              />
            </Link>
       
          </div>
        ))}
      </div>
    </div>
  )
}


