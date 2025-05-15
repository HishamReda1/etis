import { cn } from "@/lib/utils";
import Link from "next/link";
import Laptop from "@/components/pages/Laptop";
import { Button } from "@/components/ui/button";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa6";
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
          <div className="flex items-center gap-4">
  <Link target="_blank" href="https://www.linkedin.com/company/eits-automation-control">
    <Button
      variant="outline"
      className="p-0 bg-transparent border-none hover:bg-transparent"
    >
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md">
        <LiaLinkedin className="h-11 w-11 text-slate-800 dark:text-white" />
      </div>
    </Button>
  </Link>

  <Link target="_blank" href="https://www.facebook.com/eitscontrol">
    <Button
      variant="outline"
      className="p-0 bg-transparent border-none hover:bg-transparent"
    >
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md">
        <FaFacebook className="h-10 w-10 text-slate-800 dark:text-white" />
      </div>
    </Button>
  </Link>
</div>
        </div>

        {/* موديل اللابتوب على اليمين */}
        <div className="w-[300px] md:w-[400px] lg:w-[668px] h-[432px] md:h-[500px] lg:h-[600px]  ">
          <Laptop />
        </div>
      <div>
        
    </div>
    </div>
    </div>
  )
}

