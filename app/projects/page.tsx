"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { allProjects } from "@/data"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { ChevronRight } from "lucide-react"

export default function Projects({ theme }: { theme: "light" | "dark" }) {
  const [filter, setFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 12

  // Get all unique categories
  const categories = ["All", ...new Set(allProjects.map((project) => project.category))]

  // Filter projects based on category and search term
  const filteredProjects = allProjects
    .filter((project) => filter === "All" || project.category === filter)
    .filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.contractor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.application.toLowerCase().includes(searchTerm.toLowerCase()),
    )

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  // Reset to first page when filter or search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [filter, searchTerm])

  // Track image loading states for all projects
  const [imageLoadedStates, setImageLoadedStates] = useState<boolean[]>([])

  useEffect(() => {
    // Only reset image loading states if the length of currentProjects changes
    if (imageLoadedStates.length !== currentProjects.length) {
      setImageLoadedStates(new Array(currentProjects.length).fill(false));
    }
  }, [currentProjects.length]);

  const handleImageLoad = (index: number) => {
    setImageLoadedStates((prev) => {
      const updatedStates = [...prev]
      updatedStates[index] = true
      return updatedStates
    })
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-foreground sm:text-4xl text-gray-800 dark:text-gray-100">
            Our Project <span className="text-[#8DC63F] dark:text-[#00AEEF]">Portfolio</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive showcase of our 90+ implementation projects across hospitals, malls, factories, and more.
          </p>
        </motion.div>

        {/* Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="flex justify-center flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  filter === category
                    ? theme === "dark"
                      ? "bg-[#005b94] text-white"
                      : "bg-[#56ab2f] text-white"
                    : theme === "dark"
                      ? "bg-slate-800 text-blue-200 hover:bg-slate-700"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-center text-sm text-muted-foreground mb-8">
          Showing {currentProjects.length} of {filteredProjects.length} projects
          {filter !== "All" && ` in ${filter}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "rounded-3xl overflow-hidden shadow-lg",
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#001e30] via-[#003a5c] to-[#005b94] border border-[#005b94]/30"
                    : "bg-gradient-to-br from-[#a8e063] via-[#78c850] to-[#56ab2f] border border-[#56ab2f]/30",
                )}
                whileHover={{
                  scale: 1.03,
                  boxShadow: theme === "dark" ? "0 0 25px rgba(0, 91, 148, 0.5)" : "0 0 25px rgba(86, 171, 47, 0.5)",
                  y: -5,
                }}
              >
                <Link href={project.link} target="_blank" className="block">
                  <div className="relative h-64 overflow-hidden">
                    {!imageLoadedStates[index] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 dark:border-blue-500 border-lime-600"></div>
                      </div>
                    )}
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-300"
                      onLoad={() => handleImageLoad(index)} // Update loading state for this image
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/50 flex items-center justify-center p-6"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        className="text-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <p className="text-white text-center px-4">{project.description}</p>
                        <motion.div
                          className={cn(
                            "mt-4 h-1 w-16 mx-auto rounded-full",
                            theme === "dark" ? "bg-blue-300" : "bg-green-300",
                          )}
                          initial={{ width: 0 }}
                          whileHover={{ width: 64 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <div className={cn("text-sm font-medium mb-1", theme === "dark" ? "text-blue-300" : "text-green-700")}>
                      {project.category}
                    </div>
                    <h3 className={cn("text-xl font-semibold mb-2", theme === "dark" ? "text-white" : "text-gray-800")}>
                      {project.title}
                    </h3>
                    <div className="flex flex-col space-y-1 mb-4">
                      <p className={cn("text-sm", theme === "dark" ? "text-blue-100" : " text-gray-800")}>
                        <span className="font-medium">Contractor:</span> {project.contractor}
                      </p>
                      <p className={cn("text-sm", theme === "dark" ? "text-blue-100" : " text-gray-800")}>
                        <span className="font-medium">Application:</span> {project.application}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={cn(
                "h-9 px-2 sm:h-10 sm:px-4",
                theme === "dark"
                  ? "border-[#005b94] text-blue-300 hover:bg-[#003a5c]/30 disabled:border-slate-700 disabled:text-slate-600"
                  : "border-[#56ab2f]/50 hover:border-[#56ab2f] hover:bg-[#56ab2f]/10 disabled:border-gray-200",
              )}
            >
          <ChevronLeft className="h-5 w-5" />
            
            </Button>

            <div className="flex items-center gap-1 sm:gap-2">
              {/* Render all page buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  className={cn(
                    "w-8 h-8 p-0 sm:w-10 sm:h-10 text-xs sm:text-sm",
                    currentPage === page
                      ? theme === "dark"
                        ? "bg-[#005b94] text-white border-[#005b94]"
                        : "bg-[#56ab2f] text-white border-[#56ab2f]"
                      : theme === "dark"
                        ? "border-[#005b94] text-blue-300"
                        : "border-[#56ab2f]/50 text-foreground",
                  )}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={cn(
                "h-9 px-2 sm:h-10 sm:px-4",
                theme === "dark"
                  ? "border-[#005b94] text-blue-300 hover:bg-[#003a5c]/30 disabled:border-slate-700 disabled:text-slate-600"
                  : "border-[#56ab2f]/50 hover:border-[#56ab2f] hover:bg-[#56ab2f]/10 disabled:border-gray-200",
              )}
            >
          <ChevronRight className="h-5 w-5" />
    
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
