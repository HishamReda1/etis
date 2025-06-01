"use client"

import { cn } from "@/lib/utils"
import { lazy, Suspense } from "react"
import type { PageContainerProps } from "@/types"

// Lazy load page components for better performance
const HomePage = lazy(() => import("@/app/home/page"))
const AboutPage = lazy(() => import("@/app/about/page"))
const PartnersPage = lazy(() => import("@/app/partners/page"))
const ClientsPage = lazy(() => import("@/app/clients/page"))
const ProjectsPage = lazy(() => import("@/app/projects/page"))
const AchievementsPage = lazy(() => import("@/app/achievements/page"))
const ContactPage = lazy(() => import("@/app/contact/page"))
const ProductsPage = lazy(() => import("@/app/products/page"))
const TeamPage = lazy(() => import("@/app/team/page"))
const BlogPage = lazy(() => import("@/app/blog/page"))

// Loading fallback component
export  const PageLoading = ({ theme }: { theme: "light" | "dark" }) => (
  <div className="h-screen w-full flex items-center justify-center">
  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 dark:border-blue-500 border-lime-600"></div>
</div>
)

export default function PageContainer({ theme, currentPage = "home" }: PageContainerProps) {
  // Adjust glassmorphism colors based on theme
  const glassStyle = {
    background:
      theme === "dark"
        ? "linear-gradient(180deg, rgba(30, 30, 30, 0.15) 0%, rgba(0, 91, 148, 0.05) 100%)"
        : "linear-gradient(180deg, rgba(245, 245, 245, 0.15) 0%, rgba(86, 171, 47, 0.05) 100%)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderColor: theme === "dark" ? "rgba(0, 91, 148, 0.2)" : "rgba(86, 171, 47, 0.2)",
    boxShadow: theme === "dark" ? "0 4px 20px rgba(0, 91, 148, 0.1)" : "0 4px 20px rgba(86, 171, 47, 0.1)",
  }

  return (
    <div
      className="flex h-full w-full flex-1 flex-col gap-2 rounded-2xl p-2 md:p-10 backdrop-blur-md border overflow-y-auto"
      style={glassStyle}
    >
      <Suspense fallback={<PageLoading theme={theme} />}>
        {currentPage === "home" && <HomePage theme={theme} />}
        {currentPage === "about" && <AboutPage theme={theme} />}
        {currentPage === "partners" && <PartnersPage theme={theme} />}
        {currentPage === "clients" && <ClientsPage theme={theme} />}
        {currentPage === "projects" && <ProjectsPage theme={theme} />}
        {currentPage === "achievements" && <AchievementsPage theme={theme} />}
        {currentPage === "contact" && <ContactPage theme={theme} />}
        {currentPage === "products" && <ProductsPage  />}
        {currentPage === "team" && <TeamPage  />}
        {currentPage === "blog" && <BlogPage theme={theme} />}

      </Suspense>
    </div>
  )
}

