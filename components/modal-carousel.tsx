"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import type { Event } from "./pages/enhanced-gallery"

interface ModalCarouselProps {
  event: Event | null
  onClose: () => void
}

export function ModalCarousel({ event, onClose }: ModalCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Reset image index when event changes
  useEffect(() => {
    if (event) {
      setCurrentImageIndex(0)
    }
  }, [event])

  // Handle keyboard navigation
  useEffect(() => {
    if (!event) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        prevImage()
      } else if (e.key === "ArrowRight") {
        nextImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [event, onClose])

  if (!event) return null

  // Navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % event.thumbnails.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + event.thumbnails.length) % event.thumbnails.length)
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-y-auto rounded-2xl bg-white dark:bg-gray-900 max-h-[85vh] custom-scrollbar">
        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            margin: 4px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            border: 2px solid transparent;
            background-clip: content-box;
            transition: all 0.3s ease;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: rgba(0, 0, 0, 0.4);
          }
          
          .dark .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
          }
          
          .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.3);
          }
          
          .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: rgba(255, 255, 255, 0.4);
          }
          
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.1);
          }
          
          .dark .custom-scrollbar {
            scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1);
          }
        `}</style>

        <DialogTitle className="sr-only">{event.title}</DialogTitle>
        
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-50 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Image carousel */}
          <div className="relative h-[250px] sm:h-[300px] md:h-[350px] bg-gray-100 dark:bg-gray-800">
            <Image
              src={event.thumbnails[currentImageIndex] || "/placeholder.svg"}
              alt={event.title}
              fill
              className="object-contain"
            />

            {/* Navigation arrows */}
            {event.thumbnails.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </>
            )}

            {/* Image indicators */}
            {event.thumbnails.length > 1 && (
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                {event.thumbnails.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                      index === currentImageIndex
                        ? "bg-white"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {event.title}
              </h2>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {event.description}
              </p>
            </div>

            {/* Thumbnail navigation */}
            {event.thumbnails.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 py-2">
                {event.thumbnails.map((thumbnail, idx) => (
                  <button
                    key={idx}
                    className={cn(
                      "relative aspect-square rounded-md overflow-hidden border-2 transition-all duration-200",
                      currentImageIndex === idx 
                        ? "border-[#8DC63F] dark:border-[#00AEEF] scale-105" 
                        : "border-transparent hover:scale-105"
                    )}
                    onClick={() => setCurrentImageIndex(idx)}
                  >
                    <Image
                      src={thumbnail || "/placeholder.svg"}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Link if available */}
            {event.link && (
              <div className="flex justify-end pt-2 sm:pt-4">
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-white rounded-xl shadow-sm dark:bg-gradient-to-r dark:from-[#005b94] dark:to-[#00AEEF] bg-gradient-to-r from-[#78c850] to-[#a8e063] hover:opacity-90 hover:scale-105 transition-all duration-200 ease-in-out px-4 py-2"
                >
                  View more details
                </a>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
