"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useParams } from "next/navigation"
import productsContent from "@/src/content/products.content"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

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
  const params = useParams()
  const locale = params?.locale as keyof typeof productsContent.content || "en"
  const content = productsContent
  const validLocale = locale in content.content ? locale : "en"

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

  // Handle keyboard navigation
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

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [product, onClose, prevImage, nextImage])

  if (!product) return null

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent
        ref={modalRef}
        className="max-w-2xl p-0 overflow-y-auto rounded-2xl bg-white dark:bg-gray-900 max-h-[85vh] custom-scrollbar"
      >
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

        <DialogTitle className="sr-only">{product.name}</DialogTitle>
        
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
              src={product.images[currentImageIndex] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain"
            />

            {/* Navigation arrows */}
            {product.images.length > 1 && (
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
            {product.images.length > 1 && (
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                {product.images.map((_, index) => (
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
                {product.name}
              </h2>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                {content.content[validLocale].features.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8DC63F] dark:bg-[#00AEEF]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end pt-2 sm:pt-4">
              <Button
                onClick={() => onContact(product.name)}
                className="flex items-center gap-1.5 sm:gap-2 
                           text-sm sm:text-base text-white rounded-xl shadow-sm 
                           dark:bg-gradient-to-r dark:from-[#005b94] dark:to-[#00AEEF] 
                           bg-gradient-to-r from-[#78c850] to-[#a8e063] 
                           hover:opacity-90 hover:scale-105 transition-all duration-200 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
                <span>WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
