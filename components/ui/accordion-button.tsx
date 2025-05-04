import { cn } from "@/lib/utils";
import * as React from "react";
import { ChevronDown } from "lucide-react"; // استيراد أيقونة السهم

export function AccordionButton({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}

export function AccordionItem({ title, children, theme }: { title: string; children: React.ReactNode; theme: "light" | "dark" }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button 
        className={cn("p-6 w-full flex justify-between items-center rounded-lg backdrop-blur-md border", 
          theme === "dark" ? "bg-[#005b94]/20 border-[#005b94]/30" : "bg-[#56ab2f]/20 border-[#56ab2f]/30"
        )} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown 
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
          size={20} 
        />
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}
