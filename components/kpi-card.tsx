"use client"

import { CheckCircle } from "lucide-react"

interface KPICardProps {
  content: {
    title: string;
    items: string[];
  };
}

export default function KPICard({ content }: KPICardProps) {
  return (
    <div className="h-auto w-full max-w-md" color="#0A0F2D">
      <div className="relative z-20">
        <h3 className="text-xl font-semibold">
          <span className="text-blue-400">{content.title}</span>
        </h3>
        <ul className="mt-4 space-y-3">
          {content.items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-green-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
