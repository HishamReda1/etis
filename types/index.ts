import type React from "react"
import type { ReactNode } from "react"

export interface NavItem {
  name: string
  link: string
}

export interface NavigationLink {
  isActive: any
  label: string
  href: string
  icon: ReactNode
  onClick?: () => void
}

export interface ThemeProps {
  theme: "light" | "dark"
}

export type PageType = "home" | "about" | "partners" | "clients" | "contact"| "achievements"| "projects"

export interface SidebarContextProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  animate: boolean
  theme: "light" | "dark"
}

export interface SidebarProviderProps {
  children: ReactNode
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  animate?: boolean
  theme?: "light" | "dark"
}

export interface SidebarProps extends SidebarProviderProps {}

export interface PageContainerProps extends ThemeProps {
  currentPage?: PageType
}

export interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  category: string
  contractor: string
  application: string
  link?: string
}

