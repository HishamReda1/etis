"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"
import type { ThemeProps } from "@/types"
import Image from "next/image"
import { icons } from "@/data"

export const Logo = ({ theme }: ThemeProps) => {
  return (
    <Link href="#" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal">
      <Image 
        src={cn(theme === "light" ?icons[0].img:icons[1].img)}
        alt="EITS Logo" 
        width={100} 
        height={100} 
        className="h-12 w-12"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn("font-bold whitespace-pre text-lg text-gray-800 dark:text-[#00AEEF]")}
      >
       etis
      </motion.span>
    </Link>
  )
}

export const LogoIcon = ({ theme }: ThemeProps) => {
  return (
    <Link href="#" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal">
  <Image 
  src= {cn(theme === "light" ?icons[0].img:icons[1].img)}
  alt="EITS Logo" 
  width={100} 
  height={100} 
  className="h-12 w-12"
/>
    </Link>
  )
}
