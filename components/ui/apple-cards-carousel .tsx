"use client"
import React, { useEffect, useRef, useState, createContext, useContext } from "react"
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import type { ImageProps } from "next/image"

export const useOutsideClick = (ref: React.RefObject<HTMLDivElement | null>, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, callback])
}

interface CarouselProps {
  items: React.ReactNode[]
  initialScroll?: number
}

type Card = {
  src: string | string[]
  title: string
  category: string
  content: React.ReactNode
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void
  currentIndex: number
}>({
  onCardClose: () => {},
  currentIndex: 0,
})

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null) // Track hovered card index

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384 // (md:w-96)
      const gap = isMobile() ? 4 : 8
      const scrollPosition = (cardWidth + gap) * (index - 1) // Adjust to ensure focus on the right card
      carouselRef.current.scrollTo({
        left: Math.max(0, scrollPosition), // Ensure we don't try to scroll to negative values
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const isMobile = () => {
    return typeof window !== "undefined" ? window.innerWidth < 768 : false
  }

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20 scrollbar-hide"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                key={"card" + index}
                className={cn(
                  "rounded-3xl last:pr-[5%] md:last:pr-[33%]",
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "opacity-60 blur-[2px] transition-all duration-300"
                    : "opacity-100 blur-0 transition-all duration-300", // Improved hover effect
                )}
                onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
                onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 hover:bg-gray-200 transition-colors"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 hover:bg-gray-200 transition-colors"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card
  index: number
  layout?: boolean
}) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const modalContentRef = useRef<HTMLDivElement>(null)
  const { onCardClose, currentIndex } = useContext(CarouselContext)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isScrollLocked, setIsScrollLocked] = useState(false)

  useOutsideClick(containerRef, () => handleClose())

  // Lock scroll when modal is open
  useEffect(() => {
    // Utility to save scroll position
    const getScrollPosition = () => ({
      x: window.scrollX,
      y: window.scrollY,
    })

    if (open) {
      // Save scroll position and body styles
      const scrollPosition = getScrollPosition()
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

      // Add styles to prevent body scroll but maintain position
      const originalStyles = {
        overflow: document.body.style.overflow,
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        width: document.body.style.width,
        paddingRight: document.body.style.paddingRight,
      }

      // Set modal open styles
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollPosition.y}px`
      document.body.style.left = "0"
      document.body.style.width = "100%"
      document.body.style.paddingRight = `${scrollbarWidth}px`

      setIsScrollLocked(true)

      return () => {
        // Restore original styles
        document.body.style.overflow = originalStyles.overflow
        document.body.style.position = originalStyles.position
        document.body.style.top = originalStyles.top
        document.body.style.left = originalStyles.left
        document.body.style.width = originalStyles.width
        document.body.style.paddingRight = originalStyles.paddingRight

        // Restore scroll position
        if (isScrollLocked) {
          const scrollY = Number.parseInt(document.body.style.top || "0", 10)
          window.scrollTo(0, Math.abs(scrollY))
          setIsScrollLocked(false)
        }
      }
    }
  }, [open, isScrollLocked])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose()
      } else if (event.key === "ArrowLeft") {
        prevImage()
      } else if (event.key === "ArrowRight") {
        nextImage()
      }
    }

    if (open) {
      window.addEventListener("keydown", onKeyDown)
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open, currentImageIndex])

  const handleOpen = () => {
    setOpen(true)
    setCurrentImageIndex(0)
  }

  const handleClose = () => {
    setOpen(false)
    onCardClose(index)
  }

  const nextImage = () => {
    if (Array.isArray(card.src) && card.src.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % card.src.length)
    }
  }

  const prevImage = () => {
    if (Array.isArray(card.src) && card.src.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + card.src.length) % card.src.length)
    }
  }

  // Modal accessibility features
  useEffect(() => {
    if (open && containerRef.current) {
      // Focus trap
      const focusableElements = containerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )

      if (focusableElements.length > 0) {
        ;(focusableElements[0] as HTMLElement).focus()
      }
    }
  }, [open])

  return (
    <>
      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
            style={{
              backdropFilter: "blur(8px)",
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${index}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70"
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-4 h-auto max-h-[90vh] w-[95%] max-w-2xl overflow-hidden rounded-3xl bg-white p-4 font-sans shadow-2xl md:my-6 md:p-5 dark:bg-neutral-900"
            >
              <div className="flex items-center justify-between">
                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="text-base font-medium text-black dark:text-white"
                >
                  {card.category}
                </motion.p>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-colors hover:bg-neutral-700 dark:bg-white dark:hover:bg-neutral-200"
                  onClick={handleClose}
                  aria-label="Close modal"
                >
                  <IconX className="h-5 w-5 text-neutral-100 dark:text-neutral-900" />
                </button>
              </div>
              <motion.h2
                id={`modal-title-${index}`}
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-2 text-lg font-semibold text-neutral-700 md:text-2xl dark:text-white"
              >
                {card.title}
              </motion.h2>

              {/* Enhanced content area with custom scrollbar */}
              <div
                ref={modalContentRef}
                className="mt-3 flex flex-col h-[calc(90vh-120px)] overflow-y-auto custom-scrollbar"
              >
                <div className="mb-3 overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 shadow-inner transition-all dark:from-neutral-800 dark:to-neutral-900">
                  {card.content}
                </div>

                {/* Image Carousel */}
                {Array.isArray(card.src) && card.src.length > 0 ? (
                  <div className="relative mt-3 group">
                    <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden rounded-xl">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          src={card.src[currentImageIndex]}
                          alt={`${card.title} - ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                              duration: 0.3,
                              ease: [0.16, 1, 0.3, 1], // Spring-like easing
                            },
                          }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1], // Custom ease for smoother animation
                          }}
                        />
                      </AnimatePresence>

                      {/* Overlay gradient for better visibility of controls */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                      {/* Side navigation buttons (visible on hover) */}
                      {card.src.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/50 group-hover:opacity-100 sm:left-4"
                            aria-label="Previous image"
                          >
                            <IconArrowNarrowLeft className="h-5 w-5" />
                          </button>

                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/50 group-hover:opacity-100 sm:right-4"
                            aria-label="Next image"
                          >
                            <IconArrowNarrowRight className="h-5 w-5" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Bottom Controls */}
                    {card.src.length > 1 && (
                      <div className="mt-2 flex items-center justify-between">
                        <div className="text-xs font-medium text-gray-500">
                          {currentImageIndex + 1} / {card.src.length}
                        </div>

                        {/* Thumbnail Indicators */}
                        <div className="flex flex-wrap justify-center gap-1 py-1">
                          {card.src.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentImageIndex(i)}
                              className={`h-1 w-4 rounded-full transition-all duration-300 ${
                                currentImageIndex === i
                                  ? "bg-black dark:bg-white"
                                  : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                              }`}
                              aria-label={`Go to image ${i + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  card.src &&
                  !Array.isArray(card.src) && (
                    <div className="mt-3">
                      <img
                        src={card.src || "/placeholder.svg"}
                        alt={card.title}
                        className="w-full h-auto max-h-96 rounded-xl object-cover"
                      />
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900 group hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        aria-label={`View details for ${card.title}`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={Array.isArray(card.src) ? card.src[0] : card.src}
          alt={card.title}
          className="absolute inset-0 z-10 object-cover"
        />
      </motion.button>
    </>
  )
}

export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true)
  // Handle array of src
  const imageSrc = Array.isArray(src) ? src[0] : src

  return (
    <img
      className={cn("h-full w-full transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={(imageSrc as string) || "/placeholder.svg"}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  )
}
