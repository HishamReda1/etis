"use client"

import { SidebarProvider } from "@/contexts/sidebar-context"
import { SidebarBody, SidebarLink } from "./sidebar-components"
import type { SidebarProps } from "@/types"

export const Sidebar = ({ children, open, setOpen, animate, theme }: SidebarProps) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate} theme={theme}>
      {children}
    </SidebarProvider>
  )
}

export { SidebarBody, SidebarLink }
export { useSidebar } from "@/contexts/sidebar-context"

