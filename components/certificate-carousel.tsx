"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample certificate data - replace with your actual data
const certificates = [
  { src: "/EITS-Approved Partner Certificate-Jan25-Dec25-REV00-signed.webp", alt: "Siemens Certificate", title: " Approved partner by Siemens " },
 
      { src: "/honeyCertifcate.webp", alt: "Honeywell Certificate", title: "Honeywell Certificate" },
  { src: "/Honeywell Centraline Letter.webp", alt: "Honeywell Centraline Letter", title: "Honeywell Centraline Letter" },
  { src: "/6.webp", alt: "Platinum Partner Honeywell Certificate", title: "Platinum Partner  Honeywell Certificate" },
  { src: "/5.webp", alt: "Gold Partner Honeywell Certificate", title: "Gold Partner  Honeywell Certificate" },
    { src: "/4.webp", alt: "Silver Partner Honeywell Certificate", title: "Silver Partner  Honeywell Certificate" },


  { src: "/10.webp", alt: "Alerton Ascent technical training certificate", title: "Alerton Ascent technical training certificate" },
  { src: "/11.webp", alt: "Alerton Ascent technical training certificate", title: "Alerton Ascent technical training certificate" },
  { src: "/12.webp", alt: "Alerton Ascent technical training certificate", title: "Alerton Ascent technical training certificate" },

];

export default function CertificateCarousel({ theme = "light" }: { theme?: "light" | "dark" }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 }) // Default to center
  const [isHovering, setIsHovering] = useState(false)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const isDarkMode = theme === "dark"

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? certificates.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === certificates.length - 1 ? 0 : prevIndex + 1))
  }

  // Direct mouse handler with no throttling for immediate response
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect()

      // Calculate exact position relative to the container
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      // Update position immediately
      setMousePosition({ x, y })
    }
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const lensClasses = isDarkMode
    ? "absolute pointer-events-none z-50 rounded-full overflow-hidden bg-gradient-to-br from-[#001e30] via-[#003a5c] to-[#005b94]"
    : "absolute pointer-events-none z-50 rounded-full overflow-hidden bg-gradient-to-br from-[#a8e063] via-[#78c850] to-[#56ab2f]"

  return (
    <div className="">

      <div className="relative mt-6  rounded-xl ">
        <div className="flex" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {certificates.map((certificate, index) => (
            <div key={index} className="flex-shrink-0 w-full px-4">
              <div className="flex flex-col items-center">
                <div
                  ref={index === currentIndex ? imageContainerRef : null}
                  className="relative overflow-hidden  cursor-none"
                  onMouseMove={index === currentIndex ? handleMouseMove : undefined}
                  onMouseEnter={index === currentIndex ? handleMouseEnter : undefined}
                  onMouseLeave={index === currentIndex ? handleMouseLeave : undefined}
                  style={{
                    width: "100%",
                    maxWidth: "450px",
                    height: "450px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Main image */}
                  <Image
                    src={certificate.src || "/placeholder.svg"}
                    alt={certificate.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 450px"
                    priority={index === currentIndex}
                  />

                  {/* Magnifying glass lens - only visible on hover and only on current slide */}
                  {index === currentIndex && isHovering && (
                    <div
                      className={lensClasses}
                      style={{
                        width: "120px",
                        height: "120px",
                        left: `calc(${mousePosition.x}% - 60px)`,
                        top: `calc(${mousePosition.y}% - 60px)`,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        opacity: 1,
                        animation: "fadeIn 0.2s ease-in-out",
                      }}
                    >
                      {/* Magnified content */}
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${certificate.src})`,
                          backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                          backgroundSize: "450px 450px", // Match container size
                          transform: "scale(2)", // Magnification level
                          transformOrigin: "center center",
                        }}
                      />
                    </div>
                  )}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{certificate.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110 bg-white/30 text-white hover:bg-white/50 backdrop-blur-sm border-white/20"
          aria-label="Previous certificate"
        >
       
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110 bg-white/30 text-white hover:bg-white/50 backdrop-blur-sm border-white/20"
          aria-label="Next certificate"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all hover:scale-125 ${
              currentIndex === index ? "bg-white" : "bg-opacity-50 bg-white"
            }`}
            aria-label={`Go to certificate ${index + 1}`}
          />
        ))}
      </div>

      {/* Add fade-in animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
