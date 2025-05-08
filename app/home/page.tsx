import { cn } from "@/lib/utils";

import Laptop from "@/components/pages/Laptop";

export default function HomePage({ theme }: { theme: "light" | "dark" }) {
  return (
<div className=" w-full h-screen relative overflow-hidden px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl z-10"
      >
        {/* الجملة على الشمال */}
        <div className="space-y-6 text-left flex flex-col justify-center h-full">
         
           
              <div aria-label="eits" className="">
  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100">
    eits
  </h1>
  <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
    Energy International for Technical Solutions
  </h2>
</div>

       
         
          <p className={cn("text-lg md:text-xl lg:text-2xl", theme === "light" ? "text-gray-700" : "text-gray-100")}>
            Only one touch to change your life
          </p>

        </div>

        {/* موديل اللابتوب على اليمين */}
        <div className="w-[300px] md:w-[400px] lg:w-[668px] h-[432px] md:h-[500px] lg:h-[600px] mx-auto">
          <Laptop />
        </div>
      <div>
        
    </div>
    </div>
    </div>
  )
}

