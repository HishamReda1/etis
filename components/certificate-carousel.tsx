"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import achievementsContent from "@/src/content/achievements.content"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"

interface MagnifyingLensProps {
  imageSrc: string;
  isDarkMode: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const MagnifyingLens = ({ imageSrc, isDarkMode, containerRef }: MagnifyingLensProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  const lensClasses = isDarkMode
    ? "absolute pointer-events-none z-50 rounded-full overflow-hidden bg-gradient-to-br from-[#001e30] via-[#003a5c] to-[#005b94]"
    : "absolute pointer-events-none z-50 rounded-full overflow-hidden bg-gradient-to-br from-[#a8e063] via-[#78c850] to-[#56ab2f]";

  return (
    <div
      className="relative w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <div
          className={lensClasses}
          style={{
            width: "200px",
            height: "200px",
            left: `calc(${mousePosition.x}% - 100px)`,
            top: `calc(${mousePosition.y}% - 100px)`,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            opacity: 1,
            animation: "fadeIn 0.2s ease-in-out",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${imageSrc})`,
              backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
              backgroundSize: "1000%",
              backgroundRepeat: "no-repeat",
              transform: "scale(2.5)",
              transformOrigin: "center center",
            }}
          />
        </div>
      )}
    </div>
  );
};

interface CertificatesProps {
  theme?: "light" | "dark";
  locale: string;
}

export default function Certificates({ theme = "light", locale }: CertificatesProps) {
  const t = achievementsContent.content[locale as keyof typeof achievementsContent.content];
  const isDarkMode = theme === "dark"
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const certificates = [
    { src: "/EITS-Approved-Partner-Certificate-Jan25-Dec25-REV00-signed.webp", alt: t.certificates.siemens.alt, title: t.certificates.siemens.title },
    { src: "/honeyCertifcate.webp", alt: t.certificates.honeywell.alt, title: t.certificates.honeywell.title },
    { src: "/Honeywell-Centraline-Letter.webp", alt: t.certificates.centraline.alt, title: t.certificates.centraline.title },
    { src: "/6.webp", alt: t.certificates.platinum.alt, title: t.certificates.platinum.title },
    { src: "/5.webp", alt: t.certificates.gold.alt, title: t.certificates.gold.title },
    { src: "/4.webp", alt: t.certificates.silver.alt, title: t.certificates.silver.title },
    { src: "/10.webp", alt: t.certificates.alerton.alt, title: t.certificates.alerton.title },
    { src: "/11.webp", alt: t.certificates.alerton.alt, title: t.certificates.alerton.title },
    { src: "/12.webp", alt: t.certificates.alerton.alt, title: t.certificates.alerton.title },
    { src: "/Certificate15.jpeg", alt: t.certificates.certificate15.alt, title: t.certificates.certificate15.title },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "350px",
              }}
              onClick={() => setSelectedCertificate(index)}
            >
              <Image
                src={certificate.src || "/placeholder.svg"}
                alt={certificate.alt}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 350px"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-center">{certificate.title}</h3>
          </div>
        ))}
      </div>

      <Dialog.Root open={selectedCertificate !== null} onOpenChange={() => setSelectedCertificate(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-4xl max-h-[90vh] overflow-hidden bg-white dark:bg-gray-900 rounded-xl shadow-xl">
            <div className="relative">
              <Dialog.Close className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group z-50">
                <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
                <span className="sr-only">Close</span>
              </Dialog.Close>
              
              {selectedCertificate !== null && (
                <>
                  <Dialog.Title className="sr-only">
                    {certificates[selectedCertificate].title}
                  </Dialog.Title>
                  <div className="flex flex-col items-center">
                    <div
                      ref={imageContainerRef}
                      className="relative w-full h-[90vh] cursor-none"
                    >
                      <Image
                        src={certificates[selectedCertificate].src}
                        alt={certificates[selectedCertificate].alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 90vw, 800px"
                        priority
                        quality={100}
                        style={{
                          objectFit: "contain",
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <MagnifyingLens
                        imageSrc={certificates[selectedCertificate].src}
                        isDarkMode={isDarkMode}
                        containerRef={imageContainerRef}
                      />
                    </div>
                    <h3 className="absolute bottom-4 left-0 right-0 text-xl font-semibold text-center text-white bg-black/50 py-2">
                      {certificates[selectedCertificate].title}
                    </h3>
                  </div>
                </>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
