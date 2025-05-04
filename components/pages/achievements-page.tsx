import { useState, useEffect } from "react";
import { companyHistory } from "@/data";
import { cn } from "@/lib/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import KPICard from "../kpi-card";
import { Accordion, AccordionItem } from "../ui/accordion";
import Image from 'next/image';

export default function AchievementsPage({ theme }: { theme: "light" | "dark" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    { src: "/sieminsCertificate.jpg", alt: "Siemens Certificate" },
    
    { src: "/honeyCertifcate.jpg", alt: "Honeywell Certificate" },
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? certificates.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === certificates.length - 1 ? 0 : prevIndex + 1));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = [
    { year: "2019", Solutions: 200, Electrical: 150, MEP: 159 },
    { year: "2020", Solutions: 290, Electrical: 260, MEP: 200 },
    { year: "2021", Solutions: 370, Electrical: 350, MEP: 300 },
    { year: "2022", Solutions: 1150, Electrical: 640, MEP: 420 },
    { year: "2023", Solutions: 1630, Electrical: 810, MEP: 400 },
    { year: "2024", Solutions: 2000, Electrical: 1000, MEP: 660 },
  ];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="space-y-6">
      <h1 className={cn("text-3xl font-bold", theme === "light" ? "text-gray-800" : "text-white")}>
        Our <span className="text-[#8DC63F] dark:text-[#00AEEF]"> Achievements</span>
      </h1>
      
      <Accordion>
        {/* Revenue Section */}
        <AccordionItem title="Annual Revenue"  theme={theme}>
          <motion.div initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}>
            <div className="p-6 rounded-lg shadow-lg min-w-0">
              <h3 className={cn("text-xl font-semibold mb-2", theme === "light" ? "text-gray-700" : "text-white")}>
                Annual Revenue (K USD)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="5 5" stroke="#2A2F55" />
                  <XAxis dataKey="year" stroke={theme === "dark" ? "#FFFFFF" : "#1F2937"} />
                  <YAxis stroke={theme === "dark" ? "#FFFFFF" : "#1F2937"} domain={[0, 3000]} tickCount={7} />
                  <Tooltip
                    contentStyle={{
                      backdropFilter: "blur(12px)", // Equivalent to backdrop-blur-md
                      backgroundColor: theme === "dark" ? "rgba(0, 91, 148, 0.2)" : "rgba(86, 171, 47, 0.7)", // Matches bg-[#005b94]/20 or bg-[#56ab2f]/20
                      border: `2px solid ${theme === "dark" ? "rgba(0, 91, 148, 0.3)" : "rgba(86, 171, 47, 0.3)"}`, // Matches border-[#005b94]/30 or border-[#56ab2f]/30
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
        <AccordionItem title="Key Performance Indicators"  theme={theme}>
          <motion.div initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}>
            <div className="p-6 rounded-lg shadow-lg min-w-0">
              <KPICard />
            </div>
          </motion.div>
        </AccordionItem>
        
        {/* Certificates Section */}
        <AccordionItem title="Certificates" theme={theme}>
          <div className="p-6 rounded-lg shadow-lg min-w-0">
            <p className={cn("text-lg", theme === "light" ? "text-gray-700" : "text-gray-100")}>
              List of certificates and industry recognitions earned by our company.
            </p>
            <div className="relative mt-6 overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {certificates.map((certificate, index) => (
                  <div key={index} className="flex-shrink-0 w-full">
                    <div className="flex justify-center">
                      <Image
                        src={certificate.src}
                        alt={certificate.alt}
                        width={384}
                        height={384}
                        className="rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openModal(certificate.src)}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-2 transform -translate-y-1"
              >
                ◀
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/"
              >
                ▶
              </button>
            </div>
          </div>
        </AccordionItem>
      </Accordion>

      {/* Modal */}
      {isModalOpen && (
        <div
          className=" inset-0 z-50 flex items-center justify-center relative backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal} // Close modal on background click
        >
          <div
            className="relative bg-white rounded-lg shadow-2xl p-6 max-w-lg w-full transform transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none"
              onClick={closeModal}
            >
              ✕
            </button>
            {selectedImage && (
              <div className="flex flex-col items-center">
                <Image
                  src={selectedImage}
                  alt="Certificate"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
                <p className="mt-4 text-center text-gray-700">
                  Click outside the modal or press <span className="font-semibold">Escape</span> to close.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      
      <p className={cn("text-lg", theme === "light" ? "text-gray-700" : "text-gray-100")}>
        A timeline of our key milestones and recognitions in the industry.
      </p>
      
      <div className="relative mt-8 pl-8 border-l-2 space-y-10 md:pl-10 md:space-y-12">

        {companyHistory.map((achievement, index) => (
  

          <div key={`achievement-${index}`} className="relative">
             <motion.div initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}>
            <div className={cn("absolute -left-[25px] h-6 w-6 rounded-full border-4 flex items-center justify-center", theme === "dark" ? "bg-[#005b94] border-[#003a5e]" : "bg-[#56ab2f] border-[#489327]")} />
           
            <div className={cn("inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2", theme === "dark" ? "bg-[#005b94]/30 text-white" : "bg-[#56ab2f]/30 text-gray-800")}>
              {achievement.year}
            </div> </motion.div><motion.div initial={{ opacity: 0.5, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}>
            <div className={cn("p-6 rounded-lg backdrop-blur-md border", theme === "dark" ? "bg-[#005b94]/20 border-[#005b94]/30" : "bg-[#56ab2f]/20 border-[#56ab2f]/30")}>
              <h3 className={cn("text-xl font-semibold mb-2", theme === "light" ? "text-gray-800" : "text-white")}>
                {achievement.event}
              </h3>
              <p className={cn(theme === "light" ? "text-gray-700" : "text-gray-200")}>
                {achievement._description}
              </p>
            </div></motion.div>
          </div>
        ))}

      </div>
    </div>
  );
}