import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Laptop from "./Laptop";

export default function HomePage({ theme }: { theme: "light" | "dark" }) {
  return (
    <div className=" w-full h-screen relative overflow-hidden px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl z-10"
      >
        {/* الجملة على الشمال */}
        <div className="space-y-6 text-left flex flex-col justify-center h-full">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.div
              className="gap-3"
              animate={
                theme === "dark"
                  ? {
                      textShadow: [
                        "0 0 5px rgba(36,177,230,0.3)",
                        "0 0 15px rgba(36,177,230,0.7)",
                        "0 0 25px rgba(255,255,255,0.9)",
                        "0 0 15px rgba(36,177,230,0.7)",
                        "0 0 5px rgba(36,177,230,0.3)",
                      ],
                    }
                  : { textShadow: "none" }
              }
              transition={
                theme === "dark"
                  ? {
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }
                  : { duration: 0 }
              }
            >
              <div>
                <h1 className="text-[40px] md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100">  eits</h1>
                <p className="text-[24px] md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100">
                Energy International for Technical Solutions
                </p>
              </div>
            </motion.div>
          </motion.div>
          <p className={cn("text-lg md:text-xl lg:text-2xl", theme === "light" ? "text-gray-700" : "text-gray-100")}>
            Only one touch to change your life
          </p>

        </div>

        {/* موديل اللابتوب على اليمين */}
        <div className="w-[300px] md:w-[400px] lg:w-[668px] h-[432px] md:h-[500px] lg:h-[600px] mx-auto">
          <Laptop />
        </div>
      </motion.div>

    </div>
  )
}
