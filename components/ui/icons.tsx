import type React from "react"
import { LiaHandshakeSolid, LiaStoreAltSolid } from "react-icons/lia";

// Base icon component for consistent styling
const Icon = ({ children, className = "", ...props }: React.SVGProps<SVGSVGElement> & { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {children}
    </svg>
  )
}

export const HomeIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Icon {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </Icon>
)

export const InfoIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </Icon>
)

export const UsersIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Icon {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
)
export const AwardIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Icon {...props}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </Icon>
)
export const StoreIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Icon {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 22V12h6v10" />
  </Icon>
)

export const MailIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Icon {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </Icon>
)

export const MoonIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Icon {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 A7 7 0 0 0 21 12.79z" />
  </Icon>
)

export const SunIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </Icon>
)

export const MenuIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Icon {...props}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </Icon>
)

export const XIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Icon {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Icon>
)

export const PartnersIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Icon {...props}>
    <LiaHandshakeSolid size="28" /> 
  </Icon>
)

export const ProjectsIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Icon {...props}>
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="3" width="6" height="6" rx="1" />
    <rect x="9" y="15" width="6" height="6" rx="1" />
    <path d="M12 12h.01" />
  </Icon>
)
export const ProductsIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Icon {...props}>
    <LiaStoreAltSolid size="28" /> 
  </Icon>
)

export const LanguageIcon = (props: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Icon {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </Icon>
);