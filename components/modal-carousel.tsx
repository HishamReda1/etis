"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Event } from "./pages/enhanced-gallery"

interface ModalCarouselProps {
  event: Event | null
  onClose: () => void
}

export function ModalCarousel({ event, onClose }: ModalCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Reset image index when event changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [event])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!event) return

      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [event, onClose])

  // Handle body scroll lock
  useEffect(() => {
    if (event) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [event])

  if (!event) return null

  // Navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % event.thumbnails.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + event.thumbnails.length) % event.thumbnails.length)
  }

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextImage()
    }

    if (isRightSwipe) {
      prevImage()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-auto rounded-3xl shadow-2xl modal-scrollbar z-[102] dark:bg-gradient-to-br dark:from-[#001e30] dark:via-[#003a5c] dark:to-[#005b94] bg-gradient-to-br from-[#a8e063] via-[#78c850] to-[#56ab2f]"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Carousel */}
        <div
          className="relative aspect-video"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
                 <style jsx global>{`
            .modal-scrollbar::-webkit-scrollbar {
              width: 8px;
              height: 8px;
            }
            
            .modal-scrollbar::-webkit-scrollbar-track {
              background: transparent;
              margin: 10px;
              border-radius: 10px;
            }
            
            .modal-scrollbar::-webkit-scrollbar-thumb {
              background-color: rgba(255, 255, 255, 0.4);
              border-radius: 10px;
              border: 2px solid transparent;
              background-clip: content-box;
              transition: all 0.3s ease;
            }
            
            .modal-scrollbar::-webkit-scrollbar-thumb:hover {
              background-color: rgba(255, 255, 255, 0.6);
            }
            
            .dark .modal-scrollbar::-webkit-scrollbar-thumb {
              background-color: rgba(255, 255, 255, 0.4);
            }
            
            .dark .modal-scrollbar::-webkit-scrollbar-thumb:hover {
              background-color: rgba(255, 255, 255, 0.6);
            }
            
            .modal-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
            }
            
            .dark .modal-scrollbar {
              scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
            }
            .modal-scrollbar::-webkit-scrollbar-thumb:active {
              background-color: rgba(255, 255, 255, 0.6);
              border: 2px solid transparent;
              background-clip: content-box;
              transition: all 0.3s ease;
              border-radius: 10px;
              width: 10px;
              height: 10px;
              margin: 10px;
              opacity: 1;
              box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
              transform: scale(1.5);
              cursor: pointer;
              transition: all 0.3s ease;

            } 
          `}</style>
              <Image
                src={event.thumbnails[currentImageIndex] || "/placeholder.svg"}
                alt={`${event.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain drop-shadow-2xl rounded-3xl"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          {event.thumbnails.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Image counter */}
          <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
            {currentImageIndex + 1} / {event.thumbnails.length}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-white">{event.title}</h3>
          <p className="text-white/90 mb-4">{event.description}</p>

          {/* Thumbnail navigation */}
          {event.thumbnails.length > 1 && (
            <div className="flex gap-2 overflow-x-auto py-2 scrollbar-thin">
              {event.thumbnails.map((thumbnail, idx) => (
                <button
                  key={idx}
                  className={cn(
                    "relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border-2",
                    currentImageIndex === idx ? "border-white" : "border-transparent",
                  )}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentImageIndex(idx)
                  }}
                  aria-label={`View image ${idx + 1}`}
                >
                  <Image
                    src={thumbnail || "/placeholder.svg"}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover rounded-xl"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Link if available */}
          {event.link && (
            <div className="mt-4">
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white hover:underline"
              >
                View more details
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
