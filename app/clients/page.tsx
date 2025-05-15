"use client"

import { cn } from "@/lib/utils"
import { clientLogos } from "@/data";
import React from "react";
import { InfiniteMovingLogos } from "@/components/ui/Infinitelogos";
import { motion } from "framer-motion";
import StatsSection from "@/components/ui/StatsSection";

export default function ClientsPage({ theme }: { theme: "light" | "dark" }) {

  return (
    <div className="clientSection overflow-hidden w-full h-full">
      <h1 className={cn("text-4xl font-bold", theme === "light" ? "text-gray-800" : "text-white")}>Our  <span className="text-[#8DC63F] dark:text-[#00AEEF]"> Clients</span></h1>

      <p className={cn("text-lg", theme === "light" ? "text-gray-700" : "text-gray-100")}>
        We serve clients across various industries with support.
      </p>

      <section id="clients" className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        >
          <InfiniteMovingLogos
            items={clientLogos.map(client => ({
              img: client.img,
              name: client.name ?? "Unknown", // Default value
              title: client.title ?? "No Title", // Default value
            }))} 
            direction="left"
            speed="normal"
            pauseOnHover={true}   
          />
        </motion.div>
        <StatsSection />
      </section>
    </div>
  )
}

