"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import type { Event } from "../pages/enhanced-gallery"

interface GalleryCardProps {
  event: Event
  onClick: () => void
}

export function GalleryCard({ event, onClick }: GalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      whileHover={{ y: -5 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={event.thumbnails[0] || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg font-semibold mb-1 line-clamp-2">{event.title}</h3>
        <p className="text-sm opacity-90 line-clamp-1">{event.description}</p>
      </div>

      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-xs font-medium text-white">{event.thumbnails.length} photos</span>
      </div>

      <motion.div
        className="absolute inset-0 bg-black/10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}
