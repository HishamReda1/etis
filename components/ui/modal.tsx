"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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

        {title && <DialogTitle className="sr-only">{title}</DialogTitle>}
        
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-50 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Content */}
          <div className="p-4 sm:p-6">
            {children}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 