import type React from "react"
import type { ReactNode } from "react"

export interface NavItem {
  name: string
  link: string
}

export type NavigationLink = {
  label: string;
  href: string;
  ariaLabel: string;
  onClick: () => void;
  isActive: boolean;
  icon?: React.ReactNode;
};


export interface ThemeProps {
  theme: "light" | "dark"
}

export type PageType = "home" | "about" | "partners" | "clients" | "contact"| "achievements"| "projects" | "products"| "team"

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
