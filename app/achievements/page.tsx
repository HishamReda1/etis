"use client"
import { companyHistory } from "@/data";
import { cn } from "@/lib/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import KPICard from "@/components/kpi-card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import CertificateCarousel from "@/components/certificate-carousel";
import { useParams } from "next/navigation";
import achievementsContent from "@/src/content/achievements.content";
import companyHistoryContent from "@/src/content/company-history.content";

export default function AchievementsPage({ theme }: { theme: "light" | "dark" }) {
  const params = useParams();
  const locale = params?.locale as keyof typeof achievementsContent.content || "en";
  const content = achievementsContent;
  const validLocale = locale in content.content ? locale : "en";
  const t = content.content[validLocale];
  const historyContent = companyHistoryContent.content[validLocale];

  const data = [
    { year: "2019", Solutions: 200, Electrical: 150, MEP: 159 },
    { year: "2020", Solutions: 290, Electrical: 260, MEP: 200 },
    { year: "2021", Solutions: 370, Electrical: 350, MEP: 300 },
    { year: "2022", Solutions: 1150, Electrical: 640, MEP: 420 },
    { year: "2023", Solutions: 1630, Electrical: 810, MEP: 400 },
    { year: "2024", Solutions: 2000, Electrical: 1000, MEP: 660 },
  ];

  return (
    <div className={cn("space-y-6", validLocale === "ar" && "rtl")}>
      <h1 className={cn("text-4xl font-bold", theme === "light" ? "text-gray-800" : "text-white")}>
        <span className="text-[#8DC63F] dark:text-[#00AEEF]">{t.title}</span>
      </h1>
      
      <Accordion>
        {/* Revenue Section */}
        <AccordionItem title={t.sections.revenue} theme={theme}>
          <motion.div initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}>
            <div className="p-6 rounded-lg shadow-lg min-w-0">
              <h3 className={cn("text-xl font-semibold mb-2", theme === "light" ? "text-gray-700" : "text-white")}>
                {t.sections.revenue} (K USD)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="5 5" stroke="#2A2F55" />
                  <XAxis dataKey="year" stroke={theme === "dark" ? "#FFFFFF" : "#1F2937"} />
                  <YAxis stroke={theme === "dark" ? "#FFFFFF" : "#1F2937"} domain={[0, 3000]} tickCount={7} />
                  <Tooltip
                    contentStyle={{
                      backdropFilter: "blur(12px)",
                      backgroundColor: theme === "dark" ? "rgba(0, 91, 148, 0.2)" : "rgba(86, 171, 47, 0.7)",
                      border: `2px solid ${theme === "dark" ? "rgba(0, 91, 148, 0.3)" : "rgba(86, 171, 47, 0.3)"}`,
                      color: theme === "dark" ? "#FFF" : "#000",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="Solutions" stroke="#25b1e6" strokeWidth={2} />
                  <Line type="monotone" dataKey="Electrical" stroke="#8cc63c" strokeWidth={2} />
                  <Line type="monotone" dataKey="MEP" stroke="#ff7f50" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </AccordionItem>
        
        {/* KPI Section */}
        <AccordionItem title={t.sections.kpi} theme={theme}>
          <motion.div initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}>
            <div className="p-6 rounded-lg shadow-lg min-w-0">
              <KPICard content={t.kpi} />
            </div>
          </motion.div>
        </AccordionItem>
        
        {/* Certificates Section */}
        <AccordionItem title={t.sections.certificates} theme={theme}>
          <motion.div initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}>
            <div className="flex flex-col items-center justify-center p-12">
              <CertificateCarousel theme={theme} locale={validLocale} />
            </div>
          </motion.div>
        </AccordionItem>
      </Accordion>

      <p className={cn("text-lg", theme === "light" ? "text-gray-700" : "text-gray-100")}>
        {t.description}
      </p>
      
      <div className={cn("relative mt-8 pl-8 border-l-2 space-y-10 md:pl-10 md:space-y-12", validLocale === "ar" && "border-r-2 border-l-0 pl-0 pr-8 md:pr-10")}>
        {historyContent.history.map((achievement, index) => (
          <div key={`achievement-${index}`} className="relative">
            <motion.div initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}>
              <div className={cn("absolute -left-[25px] h-6 w-6 rounded-full border-4 flex items-center justify-center", 
                validLocale === "ar" ? "-left-auto -right-[25px]" : "",
                theme === "dark" ? "bg-[#005b94] border-[#003a5e]" : "bg-[#56ab2f] border-[#489327]")} />
              <div className={cn("inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2", theme === "dark" ? "bg-[#005b94]/30 text-white" : "bg-[#56ab2f]/30 text-gray-800")}>
                {achievement.year}
              </div>
            </motion.div>
            <div className={cn("p-6 rounded-lg backdrop-blur-md border", theme === "dark" ? "bg-[#005b94]/20 border-[#005b94]/30" : "bg-[#56ab2f]/20 border-[#56ab2f]/30")}>
              <h3 className={cn("text-xl font-semibold mb-2", theme === "light" ? "text-gray-800" : "text-white")}>
                {achievement.event}
              </h3>
              <p className={cn(theme === "light" ? "text-gray-700" : "text-gray-200")}>
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
