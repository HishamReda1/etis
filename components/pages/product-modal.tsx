"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, MessageCircle, Check, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import Image from "next/image"

interface Product {
  id: string
  name: string
  description: string
  features: string[]
  images: string[]
  icon: string
}

interface ProductModalProps {
  product: Product | null
  onClose: () => void
  onContact: (productName: string) => void
}

export function ProductModal({ product, onClose, onContact }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 640px)")

  // Reset image index when product changes
  useEffect(() => {
    if (product) {
      setCurrentImageIndex(0)
    }
  }, [product])

  // Image navigation
  const nextImage = useCallback(() => {
    if (!product) return
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }, [product])

  const prevImage = useCallback(() => {
    if (!product) return
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }, [product])

  // Handle keyboard navigation and prevent body scroll
  useEffect(() => {
    if (!product) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        prevImage()
      } else if (e.key === "ArrowRight") {
        nextImage()
      }
    }

    // Save the current overflow style
    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight

    // Calculate scrollbar width to prevent layout shift when locking scroll
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = `${scrollbarWidth}px`

    window.addEventListener("keydown", handleKeyDown)

    // No need for outside click handler as we're using the backdrop click

    return () => {
      // Restore original styles
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = originalPaddingRight
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [product, onClose, prevImage, nextImage])

  if (!product) return null

  return (
    <AnimatePresence>
   <div className="fixed inset-0 z-[1900] flex items-center justify-center -scroll-ml-3.5">
  {/* Backdrop */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
        className="fixed inset-0 w-full  min-h-[250dvh]    bg-black/70 backdrop-blur-sm z-[100]"
    onClick={onClose}
    aria-hidden="true"
  />


        {/* Modal */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed w-full max-w-3xl max-h-[85vh] overflow-auto rounded-3xl shadow-2xl modal-scrollbar z-[102]  
                    dark:bg-gradient-to-br dark:from-[#001e30] dark:via-[#003a5c] dark:to-[#005b94] 
                    bg-gradient-to-br from-[#a8e063] via-[#78c850] to-[#56ab2f]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => e.stopPropagation()}
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

          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-white/30 backdrop-blur-sm bg-white/20 rounded-t-3xl">
            <h2 id="modal-title" className="text-xl font-semibold text-gray-600 dark:text-gray-300">
              {product.name}
            </h2>
            <Button size="icon" variant="ghost" className="rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all duration-200 ease-in-out" onClick={onClose} aria-label="Close modal">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6">
            {/* Image carousel */}
            <div className="relative mb-6 rounded-xl overflow-hidden shadow-md">
              <div className="aspect-video bg-black/30 relative group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={product.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${product.name} - ${currentImageIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation controls */}
                {product.images.length > 1 && (
                  <>
                    <div className="absolute  inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100 md:opacity-0" />

                    <Button
                      size="icon"
                      variant="outline"
                      onClick={prevImage}
                      className={cn(
                        "absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/30 text-white hover:bg-white/50 backdrop-blur-sm border-white/20 sm:left-4 shadow-sm hover:scale-110 transition-all duration-200 ease-in-out",
                        isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                      )}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>

                    <Button
                      size="icon"
                      variant="outline"
                      onClick={nextImage}
                      className={cn(
                        "absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/30 text-white hover:bg-white/50 backdrop-blur-sm border-white/20 sm:right-4 shadow-sm hover:scale-110 transition-all duration-200 ease-in-out",
                        isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                      )}
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </>
                )}
              </div>

              {/* Image indicators */}
              {product.images.length > 1 && (
                <div className="flex justify-center mt-3 gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "h-2 w-8 rounded-full transition-all duration-200 ease-in-out hover:scale-110",
                        currentImageIndex === index
                          ? "bg-white shadow-sm"
                          : "bg-white/40 hover:bg-white/60",
                      )}
                      aria-label={`Go to image ${index + 1}`}
                      aria-current={currentImageIndex === index ? "true" : "false"}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Product description */}
            <div className="space-y-6 ">
              <div>
                <p className="text-white/90">{product.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg  mb-3 text-gray-800 dark:text-gray-300 font-extrabold">Key Features</h3>
                <ul className="grid gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                      <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-green-500" />
                      </div>
                      <span className="text-gray-800 font-bold dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 border-t border-white/30 bg-white/20 backdrop-blur-sm p-4 flex flex-col sm:flex-row gap-3 justify-end rounded-b-3xl">
            
            <Button
              className="gap-2 text-white rounded-xl border border-white/20 shadow-sm font-medium 
                         dark:bg-gradient-to-r dark:from-[#003a5c] dark:to-[#005b94] 
                         bg-gradient-to-r from-[#56ab2f] to-[#78c850] 
                         hover:opacity-90 hover:scale-105 transition-all duration-200 ease-in-out"
              onClick={() => onContact(product.name)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                viewBox="0 0 16 16"
                className="h-4 w-4"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              Contact via WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
 
    </AnimatePresence>
  )
}
