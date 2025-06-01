"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GalleryCard } from "../ui/gallery-card"
import { ModalCarousel } from "../modal-carousel"

// Event type definition
export type Event = {
  id: number
  title: string
  description: string
  link?: string
  thumbnails: string[]
}

interface EnhancedGalleryProps {
  events: Event[]
  title?: string
  description?: string
}

export function EnhancedGallery({ events }: EnhancedGalleryProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  return (
    <section >
      <div className="container mx-auto">
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GalleryCard event={event} onClick={() => setSelectedEvent(event)} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedEvent && <ModalCarousel event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </AnimatePresence>
    </section>
  )
}
