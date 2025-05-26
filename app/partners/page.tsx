"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { logoData } from "@/data"
import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import partnersContent from "@/src/content/partners.content"
import { motion } from "framer-motion"

export default function PartnersPage({ theme }: { theme: "light" | "dark" }) {
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null)
  const params = useParams();
  const locale = params?.locale as keyof typeof partnersContent.content || "en";
  const content = partnersContent;
  const validLocale = locale in content.content ? locale : "en";
  const t = content.content[validLocale];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <h1 className={cn("text-4xl font-bold text-center mb-6", theme === "light" ? "text-gray-800" : "text-white")}>
            <span className="text-[#8DC63F] dark:text-[#00AEEF]">{t.title}</span>
          </h1>

          <p className={cn("text-lg text-center mb-12", theme === "light" ? "text-gray-700" : "text-gray-100")}>
            {t.description}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {logoData.partners.map((partner) => (
              <div
                key={partner.id}
                className="w-[200px] flex justify-center"
                onMouseEnter={() => setHoveredPartner(partner.id)}
                onMouseLeave={() => setHoveredPartner(null)}
              >
                <Link
                  href={partner.link}
                  target="_blank"
                  className="relative block w-full aspect-[3/1] overflow-hidden hover:scale-110 transition-transform"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width * 1.2}
                    height={partner.height * 1.2}
                    className="absolute inset-0 w-full h-full object-contain object-center filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}


