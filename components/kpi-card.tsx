"use client"

import { CheckCircle } from "lucide-react"

export default function KPICard() {
  return (
    <div className="h-auto w-full max-w-md" color="#0A0F2D">
      <div className="relative z-20">
        <h3 className="text-xl font-semibold">
          <span className="text-blue-400">ACHIEVED</span> Performance Indicators Over the Last 5 Years
        </h3>
        <ul className="mt-4 space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-green-500" />
            <span>
              Became <span className="font-bold text-blue-400">Honeywell Elite</span> BMS Partner (+4M USD).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <span>
              Established <span className="font-bold text-blue-400">E.D.N</span> EITS Distribution Network.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <span>
              <span className="font-bold text-blue-400">Expanded</span> into new markets:{" "}
              <span className="text-blue-400">IRAQ</span> & <span className="text-blue-400">LYBIA</span>.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <span>
              Became an authorized <span className="font-bold text-blue-400">SIEMENS PANEL BUILDER</span>.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
            <span>
              Expanded portfolio to cover <span className="font-bold text-blue-400">Light Current Systems</span>.
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
