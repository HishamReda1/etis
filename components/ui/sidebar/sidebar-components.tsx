"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useSidebar } from "@/contexts/sidebar-context"
import { MenuIcon, XIcon } from "@/components/ui/icons"
import type { NavigationLink } from "@/types"
import { forwardRef } from "react"

export const SidebarBody = forwardRef<HTMLDivElement, React.ComponentProps<typeof motion.div>>((props, ref) => {
  return (
    <>
      <DesktopSidebar {...props} ref={ref} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  )
})
SidebarBody.displayName = "SidebarBody"

export const DesktopSidebar = forwardRef<HTMLDivElement, React.ComponentProps<typeof motion.div>>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen, animate } = useSidebar()
    return (
      <motion.div
        ref={ref}
        className={cn(
          "h-full px-4 py-2 hidden md:flex md:flex-col w-[300px] shrink-0 rounded-2xl backdrop-blur-md border overflow-hidden scrollbar-hide",
          className,
        )}
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderColor: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
        }}
        animate={{
          width: animate ? (open ? "300px" : "60px") : "300px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    )
  },
)
DesktopSidebar.displayName = "DesktopSidebar"

export const MobileSidebar = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen, theme } = useSidebar()

    return (
      <>
        <div
          ref={ref}
          className={cn(
            "h-14 px-4 py-2 flex flex-row md:hidden items-center justify-between w-full rounded-lg backdrop-blur-md border z-10  overflow-hidden scrollbar-hide",
            className,
          )}
          style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
          }}
          {...props}
        >
          <div className="flex justify-end z-20 w-full">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <MenuIcon className={theme === "light" ? "text-gray-800" : "text-white"} />
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setOpen(false)}
              />

              {/* Menu panel */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className={cn(
                  "fixed top-0 left-0 h-full w-[80%] max-w-[300px] p-6 z-50 flex flex-col justify-between md:hidden backdrop-blur-md border-r overflow-hidden scrollbar-hide",
                  className,
                )}
                style={{
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="absolute right-4 top-4">
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-md hover:bg-white/10 transition-colors"
                    aria-label="Close menu"
                  >
                    <XIcon className={theme === "light" ? "text-gray-800" : "text-white"} />
                  </button>
                </div>

                <div className="mt-8 flex-1 overflow-y-hidden scrollbar-hide">{children}</div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    )
  },
)
MobileSidebar.displayName = "MobileSidebar"

export const SidebarLink = forwardRef<
  HTMLAnchorElement,
  {
    "aria-label": string
    link: NavigationLink
    className?: string
    theme?: "light" | "dark"
    onClick?: () => void
  }
>(({ link, className, theme = "light", onClick, "aria-label": ariaLabel, ...props }, ref) => {
  const { open, animate } = useSidebar()

  const handleClick = (e: React.MouseEvent) => {
    if (onClick || link.onClick) {
      e.preventDefault()
      onClick ? onClick() : link.onClick?.()
    }
  }

  return (
    <Link
      ref={ref}
      href={link.href}
      className={cn("flex items-center justify-start gap-2 group/sidebar py-1", className)}
      onClick={handleClick}
      aria-label={ariaLabel}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className={cn(
          "text-sm font-medium group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0",
          className
        )}
      >
        {link.label}
      </motion.span>
    </Link>
  )
})
SidebarLink.displayName = "SidebarLink"

