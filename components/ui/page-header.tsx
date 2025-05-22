import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
}

export function PageHeader({
  title,
  subtitle,
  description,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("w-full py-12 md:py-16 lg:py-20", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          {subtitle && (
            <h2 className="text-lg md:text-xl font-medium text-[#8DC63F] dark:text-[#00AEEF] mb-2">
              {subtitle}
            </h2>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
} 