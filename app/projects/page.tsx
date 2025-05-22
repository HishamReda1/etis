"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { allProjects } from "@/data"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { ChevronRight } from "lucide-react"
import { useParams } from "next/navigation"

export default function Projects({ theme }: { theme: "light" | "dark" }) {
  const params = useParams();
  const locale = params?.locale as string || "en";
  const isRTL = locale === "ar";

  const [filter, setFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 12

  // Get all unique categories
  const categories = ["All", ...new Set(allProjects.map((project) => project.category))]

  // Filter projects based on category and search term
  const filteredProjects = allProjects
    .filter((project) => filter === "All" || project.category === filter)
    .filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.contractor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.application.toLowerCase().includes(searchTerm.toLowerCase()),
    )

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  // Reset to first page when filter or search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [filter, searchTerm])

  // Track image loading states for all projects
  const [imageLoadedStates, setImageLoadedStates] = useState<boolean[]>([])

  useEffect(() => {
    // Only reset image loading states if the length of currentProjects changes
    if (imageLoadedStates.length !== currentProjects.length) {
      setImageLoadedStates(new Array(currentProjects.length).fill(false));
    }
  }, [currentProjects.length]);

  const handleImageLoad = (index: number) => {
    setImageLoadedStates((prev) => {
      const updatedStates = [...prev]
      updatedStates[index] = true
      return updatedStates
    })
  }

  const translations = {
    en: {
      title: "Our Project",
      portfolio: "Portfolio",
      description: "A comprehensive showcase of our 90+ implementation projects across hospitals, malls, factories, and more.",
      showing: "Showing",
      of: "of",
      projects: "projects",
      in: "in",
      matching: "matching",
      contractor: "Contractor",
      application: "Application",
      categories: {
        All: "All",
        Hospitals: "Hospitals",
        Malls: "Malls",
        Factories: "Factories",
        Hotels: "Hotels",
        Industrial: "Industrial",
        Commercial: "Commercial",
        "Data Centers": "Data Centers",
        "Data Center": "Data Center",
        Healthcare: "Healthcare",
        Government: "Government",
        Banks: "Banks",
        Airports: "Airports",
        Embassies: "Embassies",
        Pharmaceutical: "Pharmaceutical",
        Entertainment: "Entertainment",
        "Sports Facilities": "Sports Facilities"
      },
      projectNames: {
        "Esna Hospital": "Esna Hospital",
        "Port Said Hospital": "Port Said Hospital",
        "Port Foad Hospital": "Port Foad Hospital",
        "Bahr El bakr Hospital": "Bahr El bakr Hospital",
        "Hyhya Hospital": "Hyhya Hospital",
        "Assuit Hospital": "Assuit Hospital",
        "East Alex Hospital": "East Alex Hospital",
        "Concord Hospital": "Concord Hospital",
        "GASTROINTESTINAL SURGERY - MASOURA UNIVERSITY": "GASTROINTESTINAL SURGERY - MASOURA UNIVERSITY",
        "DERMOAS HOSPITAL": "DERMOAS HOSPITAL",
        "SAMALOUT HOSPITAL": "SAMALOUT HOSPITAL",
        "SHALATIN HOSPITAL": "SHALATIN HOSPITAL",
        "EL-SALOUM HOSPITAL": "EL-SALOUM HOSPITAL",
        "ESMAILIA HOSPITAL": "ESMAILIA HOSPITAL",
        "EL-NASR PORT SAIED HOSPITAL": "EL-NASR PORT SAIED HOSPITAL",
        "BANHA HOSPITAL": "BANHA HOSPITAL",
        "AIN SHAMS HOSPITAL - BATNA 13": "AIN SHAMS HOSPITAL - BATNA 13",
        "SAMMANHOUD HOSPITAL": "SAMMANHOUD HOSPITAL",
        "NOZHA HOSPITAL": "NOZHA HOSPITAL",
        "CARDIAC AND CHEST CARE UNIT- ELSHIKH ZAYED": "CARDIAC AND CHEST CARE UNIT- ELSHIKH ZAYED",
        "ABO EL MENAGA HOSPITAL": "ABO EL MENAGA HOSPITAL",
        "Embassy of the Netherlands": "Embassy of the Netherlands",
        "Embassy of New Zealand": "Embassy of New Zealand",
        "NILE PHARMA": "NILE PHARMA",
        "Institute Balharsia": "Institute Balharsia",
        "Aswan fever Hospital": "Aswan fever Hospital",
        "Nti National Institute for the Training of Physicians": "Nti National Institute for the Training of Physicians",
        "PEPSICO HQ Cairo Festival City": "PEPSICO HQ Cairo Festival City",
        "Authority bank - Petrojet Ras Ghareb": "Authority bank - Petrojet Ras Ghareb",
        "Authority bank - Petrojet Ras Shukair": "Authority bank - Petrojet Ras Shukair",
        "NNL Telecom Egypt data center(new capital)": "NNL Telecom Egypt data center(new capital)",
        "Port said- telecom Egypt data center": "Port said- telecom Egypt data center",
        "EL-REHAB telecom Egypt Data Center": "EL-REHAB telecom Egypt Data Center",
        "Ramad-Rod EL frag Hospital": "Ramad-Rod EL frag Hospital",
        "Wady El Nel (Admin building)": "Wady El Nel (Admin building)",
        "New Captial (Sport City)": "New Captial (Sport City)",
        "EL Robiky (Admin building)": "EL Robiky (Admin building)",
        "Blood bank (Alexandria)": "Blood bank (Alexandria)",
        "Blood bank (Tanta)": "Blood bank (Tanta)",
        "Urban Communities Authority - October": "Urban Communities Authority - October",
        "Safir Hotel (Dahab)": "Safir Hotel (Dahab)",
        "Rihanna Hotel (Marsa Alam)": "Rihanna Hotel (Marsa Alam)",
        "Nasr city (Elyoum ELwahed)": "Nasr city (Elyoum ELwahed)"
      }
    },
    ar: {
      title: "معرض",
      portfolio: "مشاريعنا",
      description: "معرض شامل لأكثر من 90 مشروع تنفيذي في المستشفيات والمولات والمصانع وغيرها.",
      showing: "عرض",
      of: "من",
      projects: "مشروع",
      in: "في",
      matching: "مطابق لـ",
      contractor: "المقاول",
      application: "التطبيق",
      categories: {
        All: "الكل",
        Hospitals: "المستشفيات",
        Malls: "المولات",
        Factories: "المصانع",
        Hotels: "الفنادق",
        Industrial: "صناعي",
        Commercial: "تجاري",
        "Data Centers": "مراكز البيانات",
        "Data Center": "مركز بيانات",
        Healthcare: "الرعاية الصحية",
        Government: "حكومي",
        Banks: "البنوك",
        Airports: "المطارات",
        Embassies: "السفارات",
        Pharmaceutical: "صيدلاني",
        Entertainment: "ترفيهي",
        "Sports Facilities": "المنشآت الرياضية"
      },
      projectNames: {
        "Esna Hospital": "مستشفى إسنا",
        "Port Said Hospital": "مستشفى بورسعيد",
        "Port Foad Hospital": "مستشفى بورفؤاد",
        "Bahr El bakr Hospital": "مستشفى بحر البقر",
        "Hyhya Hospital": "مستشفى ههيا",
        "Assuit Hospital": "مستشفى أسيوط",
        "East Alex Hospital": "مستشفى شرق الإسكندرية",
        "Concord Hospital": "مستشفى كونكورد",
        "GASTROINTESTINAL SURGERY - MASOURA UNIVERSITY": "جراحة الجهاز الهضمي - جامعة المنصورة",
        "DERMOAS HOSPITAL": "مستشفى درمواس",
        "SAMALOUT HOSPITAL": "مستشفى سمالوط",
        "SHALATIN HOSPITAL": "مستشفى الشلاتين",
        "EL-SALOUM HOSPITAL": "مستشفى السلوم",
        "ESMAILIA HOSPITAL": "مستشفى الإسماعيلية",
        "EL-NASR PORT SAIED HOSPITAL": "مستشفى النصر ببورسعيد",
        "BANHA HOSPITAL": "مستشفى بنها",
        "AIN SHAMS HOSPITAL - BATNA 13": "مستشفى عين شمس - بتنة 13",
        "SAMMANHOUD HOSPITAL": "مستشفى سمنود",
        "NOZHA HOSPITAL": "مستشفى النزهة",
        "CARDIAC AND CHEST CARE UNIT- ELSHIKH ZAYED": "وحدة رعاية القلب والصدر - الشيخ زايد",
        "ABO EL MENAGA HOSPITAL": "مستشفى أبو المنجا",
        "Embassy of the Netherlands": "سفارة هولندا",
        "Embassy of New Zealand": "سفارة نيوزيلندا",
        "NILE PHARMA": "نيل فارما",
        "Institute Balharsia": "معهد البلهارسيا",
        "Aswan fever Hospital": "مستشفى حميات أسوان",
        "Nti National Institute for the Training of Physicians": "المعهد القومي لتدريب الأطباء",
        "PEPSICO HQ Cairo Festival City": "المقر الرئيسي لبيبسيكو - القاهرة فستيفال سيتي",
        "Authority bank - Petrojet Ras Ghareb": "بنك السلطة - بتروجت رأس غارب",
        "Authority bank - Petrojet Ras Shukair": "بنك السلطة - بتروجت رأس شقير",
        "NNL Telecom Egypt data center(new capital)": "مركز بيانات اتصالات مصر - العاصمة الإدارية",
        "Port said- telecom Egypt data center": "مركز بيانات اتصالات مصر - بورسعيد",
        "EL-REHAB telecom Egypt Data Center": "مركز بيانات اتصالات مصر - الرحاب",
        "Ramad-Rod EL frag Hospital": "مستشفى رمد-رود الفرج",
        "Wady El Nel (Admin building)": "وادي النيل (المبنى الإداري)",
        "New Captial (Sport City)": "العاصمة الإدارية (المدينة الرياضية)",
        "EL Robiky (Admin building)": "الروبيكي (المبنى الإداري)",
        "Blood bank (Alexandria)": "بنك الدم (الإسكندرية)",
        "Blood bank (Tanta)": "بنك الدم (طنطا)",
        "Urban Communities Authority - October": "هيئة المجتمعات العمرانية - أكتوبر",
        "Safir Hotel (Dahab)": "فندق سفير (دهب)",
        "Rihanna Hotel (Marsa Alam)": "فندق ريحانة (مرسى علم)",
        "Nasr city (Elyoum ELwahed)": "مدينة نصر (اليوم الواحد)"
      }
    },
    fr: {
      title: "Notre",
      portfolio: "Portfolio de Projets",
      description: "Une vitrine complète de nos plus de 90 projets d'implémentation dans les hôpitaux, centres commerciaux, usines et plus encore.",
      showing: "Affichage de",
      of: "sur",
      projects: "projets",
      in: "dans",
      matching: "correspondant à",
      contractor: "Entrepreneur",
      application: "Application",
      categories: {
        All: "Tous",
        Hospitals: "Hôpitaux",
        Malls: "Centres commerciaux",
        Factories: "Usines",
        Hotels: "Hôtels",
        Industrial: "Industriel",
        Commercial: "Commercial",
        "Data Centers": "Centres de données",
        "Data Center": "Centre de données",
        Healthcare: "Santé",
        Government: "Gouvernement",
        Banks: "Banques",
        Airports: "Aéroports",
        Embassies: "Ambassades",
        Pharmaceutical: "Pharmaceutique",
        Entertainment: "Divertissement",
        "Sports Facilities": "Installations sportives"
      },
      projectNames: {
        "Esna Hospital": "Hôpital d'Esna",
        "Port Said Hospital": "Hôpital de Port-Saïd",
        "Port Foad Hospital": "Hôpital de Port-Fouad",
        "Bahr El bakr Hospital": "Hôpital Bahr El Bakr",
        "Hyhya Hospital": "Hôpital Hyhya",
        "Assuit Hospital": "Hôpital d'Assiout",
        "East Alex Hospital": "Hôpital d'Alexandrie Est",
        "Concord Hospital": "Hôpital Concord",
        "GASTROINTESTINAL SURGERY - MASOURA UNIVERSITY": "Chirurgie Gastro-intestinale - Université de Mansoura",
        "DERMOAS HOSPITAL": "Hôpital Dermoas",
        "SAMALOUT HOSPITAL": "Hôpital Samalout",
        "SHALATIN HOSPITAL": "Hôpital Shalatin",
        "EL-SALOUM HOSPITAL": "Hôpital El-Saloum",
        "ESMAILIA HOSPITAL": "Hôpital d'Ismaïlia",
        "EL-NASR PORT SAIED HOSPITAL": "Hôpital El-Nasr de Port-Saïd",
        "BANHA HOSPITAL": "Hôpital de Banha",
        "AIN SHAMS HOSPITAL - BATNA 13": "Hôpital Ain Shams - Batna 13",
        "SAMMANHOUD HOSPITAL": "Hôpital Sammanhoud",
        "NOZHA HOSPITAL": "Hôpital Nozha",
        "CARDIAC AND CHEST CARE UNIT- ELSHIKH ZAYED": "Unité de Soins Cardiaques et Thoraciques - Cheikh Zayed",
        "ABO EL MENAGA HOSPITAL": "Hôpital Abo El Menaga",
        "Embassy of the Netherlands": "Ambassade des Pays-Bas",
        "Embassy of New Zealand": "Ambassade de Nouvelle-Zélande",
        "NILE PHARMA": "Nile Pharma",
        "Institute Balharsia": "Institut Balharsia",
        "Aswan fever Hospital": "Hôpital de Fièvre d'Assouan",
        "Nti National Institute for the Training of Physicians": "Institut National de Formation des Médecins",
        "PEPSICO HQ Cairo Festival City": "Siège de PEPSICO - Cairo Festival City",
        "Authority bank - Petrojet Ras Ghareb": "Banque d'Autorité - Petrojet Ras Ghareb",
        "Authority bank - Petrojet Ras Shukair": "Banque d'Autorité - Petrojet Ras Shukair",
        "NNL Telecom Egypt data center(new capital)": "Centre de données Telecom Egypt - Nouvelle Capitale",
        "Port said- telecom Egypt data center": "Centre de données Telecom Egypt - Port-Saïd",
        "EL-REHAB telecom Egypt Data Center": "Centre de données Telecom Egypt - El-Rehab",
        "Ramad-Rod EL frag Hospital": "Hôpital Ramad-Rod El Frag",
        "Wady El Nel (Admin building)": "Wady El Nel (Bâtiment administratif)",
        "New Captial (Sport City)": "Nouvelle Capitale (Cité Sportive)",
        "EL Robiky (Admin building)": "El Robiky (Bâtiment administratif)",
        "Blood bank (Alexandria)": "Banque de sang (Alexandrie)",
        "Blood bank (Tanta)": "Banque de sang (Tanta)",
        "Urban Communities Authority - October": "Autorité des Communautés Urbaines - Octobre",
        "Safir Hotel (Dahab)": "Hôtel Safir (Dahab)",
        "Rihanna Hotel (Marsa Alam)": "Hôtel Rihanna (Marsa Alam)",
        "Nasr city (Elyoum ELwahed)": "Ville de Nasr (Elyoum Elwahed)"
      }
    },
    es: {
      title: "Nuestro",
      portfolio: "Portafolio de Proyectos",
      description: "Una muestra completa de nuestros más de 90 proyectos de implementación en hospitales, centros comerciales, fábricas y más.",
      showing: "Mostrando",
      of: "de",
      projects: "proyectos",
      in: "en",
      matching: "coincidiendo con",
      contractor: "Contratista",
      application: "Aplicación",
      categories: {
        All: "Todos",
        Hospitals: "Hospitales",
        Malls: "Centros comerciales",
        Factories: "Fábricas",
        Hotels: "Hoteles",
        Industrial: "Industrial",
        Commercial: "Comercial",
        "Data Centers": "Centros de datos",
        "Data Center": "Centro de datos",
        Healthcare: "Salud",
        Government: "Gobierno",
        Banks: "Bancos",
        Airports: "Aeropuertos",
        Embassies: "Embajadas",
        Pharmaceutical: "Farmacéutico",
        Entertainment: "Entretenimiento",
        "Sports Facilities": "Instalaciones deportivas"
      },
      projectNames: {
        "Esna Hospital": "Hospital de Esna",
        "Port Said Hospital": "Hospital de Port Said",
        "Port Foad Hospital": "Hospital de Port Foad",
        "Bahr El bakr Hospital": "Hospital Bahr El Bakr",
        "Hyhya Hospital": "Hospital Hyhya",
        "Assuit Hospital": "Hospital de Assuit",
        "East Alex Hospital": "Hospital Este de Alejandría",
        "Concord Hospital": "Hospital Concord",
        "GASTROINTESTINAL SURGERY - MASOURA UNIVERSITY": "Cirugía Gastrointestinal - Universidad de Mansoura",
        "DERMOAS HOSPITAL": "Hospital Dermoas",
        "SAMALOUT HOSPITAL": "Hospital Samalout",
        "SHALATIN HOSPITAL": "Hospital Shalatin",
        "EL-SALOUM HOSPITAL": "Hospital El-Saloum",
        "ESMAILIA HOSPITAL": "Hospital de Ismailia",
        "EL-NASR PORT SAIED HOSPITAL": "Hospital El-Nasr de Port Said",
        "BANHA HOSPITAL": "Hospital de Banha",
        "AIN SHAMS HOSPITAL - BATNA 13": "Hospital Ain Shams - Batna 13",
        "SAMMANHOUD HOSPITAL": "Hospital Sammanhoud",
        "NOZHA HOSPITAL": "Hospital Nozha",
        "CARDIAC AND CHEST CARE UNIT- ELSHIKH ZAYED": "Unidad de Cuidados Cardíacos y Torácicos - Sheikh Zayed",
        "ABO EL MENAGA HOSPITAL": "Hospital Abo El Menaga",
        "Embassy of the Netherlands": "Embajada de los Países Bajos",
        "Embassy of New Zealand": "Embajada de Nueva Zelanda",
        "NILE PHARMA": "Nile Pharma",
        "Institute Balharsia": "Instituto Balharsia",
        "Aswan fever Hospital": "Hospital de Fiebre de Asuán",
        "Nti National Institute for the Training of Physicians": "Instituto Nacional de Formación de Médicos",
        "PEPSICO HQ Cairo Festival City": "Sede de PEPSICO - Cairo Festival City",
        "Authority bank - Petrojet Ras Ghareb": "Banco de Autoridad - Petrojet Ras Ghareb",
        "Authority bank - Petrojet Ras Shukair": "Banco de Autoridad - Petrojet Ras Shukair",
        "NNL Telecom Egypt data center(new capital)": "Centro de datos de Telecom Egypt - Nueva Capital",
        "Port said- telecom Egypt data center": "Centro de datos de Telecom Egypt - Port Said",
        "EL-REHAB telecom Egypt Data Center": "Centro de datos de Telecom Egypt - El-Rehab",
        "Ramad-Rod EL frag Hospital": "Hospital Ramad-Rod El Frag",
        "Wady El Nel (Admin building)": "Wady El Nel (Edificio administrativo)",
        "New Captial (Sport City)": "Nueva Capital (Ciudad Deportiva)",
        "EL Robiky (Admin building)": "El Robiky (Edificio administrativo)",
        "Blood bank (Alexandria)": "Banco de sangre (Alejandría)",
        "Blood bank (Tanta)": "Banco de sangre (Tanta)",
        "Urban Communities Authority - October": "Autoridad de Comunidades Urbanas - Octubre",
        "Safir Hotel (Dahab)": "Hotel Safir (Dahab)",
        "Rihanna Hotel (Marsa Alam)": "Hotel Rihanna (Marsa Alam)",
        "Nasr city (Elyoum ELwahed)": "Ciudad Nasr (Elyoum Elwahed)"
      }
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-foreground sm:text-4xl text-gray-800 dark:text-gray-100">
            {t.title} <span className="text-[#8DC63F] dark:text-[#00AEEF]">{t.portfolio}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.description}
          </p>
        </motion.div>

        {/* Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="flex justify-center flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  filter === category
                    ? theme === "dark"
                      ? "bg-[#005b94] text-white"
                      : "bg-[#56ab2f] text-white"
                    : theme === "dark"
                      ? "bg-slate-800 text-blue-200 hover:bg-slate-700"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                  isRTL ? "font-arabic" : "font-sans"
                )}
                dir={isRTL ? "rtl" : "ltr"}
              >
                {t.categories[category as keyof typeof t.categories] || category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-center text-sm text-muted-foreground mb-8" dir={isRTL ? "rtl" : "ltr"}>
          {t.showing} {currentProjects.length} {t.of} {filteredProjects.length} {t.projects}
          {filter !== "All" && ` ${t.in} ${t.categories[filter as keyof typeof t.categories] || filter}`}
          {searchTerm && ` ${t.matching} "${searchTerm}"`}
        </p>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "rounded-3xl overflow-hidden shadow-lg",
                  theme === "dark"
                    ? "bg-gradient-to-br from-[#001e30] via-[#003a5c] to-[#005b94] border border-[#005b94]/30"
                    : "bg-gradient-to-br from-[#a8e063] via-[#78c850] to-[#56ab2f] border border-[#56ab2f]/30",
                )}
                whileHover={{
                  scale: 1.03,
                  boxShadow: theme === "dark" ? "0 0 25px rgba(0, 91, 148, 0.5)" : "0 0 25px rgba(86, 171, 47, 0.5)",
                  y: -5,
                }}
              >
                <Link href={project.link} target="_blank" className="block">
                  <div className="relative h-64 overflow-hidden">
                    {!imageLoadedStates[index] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 dark:border-blue-500 border-lime-600"></div>
                      </div>
                    )}
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-300"
                      onLoad={() => handleImageLoad(index)}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/50 flex items-center justify-center p-6"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        className="text-center"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <p className="text-white text-center px-4">{project.description}</p>
                        <motion.div
                          className={cn(
                            "mt-4 h-1 w-16 mx-auto rounded-full",
                            theme === "dark" ? "bg-blue-300" : "bg-green-300",
                          )}
                          initial={{ width: 0 }}
                          whileHover={{ width: 64 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <div className={cn("text-sm font-medium mb-1", theme === "dark" ? "text-blue-300" : "text-green-700")}>
                      {t.categories[project.category as keyof typeof t.categories] || project.category}
                    </div>
                    <h3 className={cn("text-xl font-semibold mb-2", theme === "dark" ? "text-white" : "text-gray-800")}>
                      {t.projectNames[project.title as keyof typeof t.projectNames] || project.title}
                    </h3>
                    <div className="flex flex-col space-y-1 mb-4">
                      <p className={cn("text-sm", theme === "dark" ? "text-blue-100" : " text-gray-800")}>
                        <span className="font-medium">{t.contractor}:</span> {project.contractor}
                      </p>
                      <p className={cn("text-sm", theme === "dark" ? "text-blue-100" : " text-gray-800")}>
                        <span className="font-medium">{t.application}:</span> {project.application}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={cn(
                "h-9 px-2 sm:h-10 sm:px-4",
                theme === "dark"
                  ? "border-[#005b94] text-blue-300 hover:bg-[#003a5c]/30 disabled:border-slate-700 disabled:text-slate-600"
                  : "border-[#56ab2f]/50 hover:border-[#56ab2f] hover:bg-[#56ab2f]/10 disabled:border-gray-200",
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-1 sm:gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  className={cn(
                    "w-8 h-8 p-0 sm:w-10 sm:h-10 text-xs sm:text-sm",
                    currentPage === page
                      ? theme === "dark"
                        ? "bg-[#005b94] text-white border-[#005b94]"
                        : "bg-[#56ab2f] text-white border-[#56ab2f]"
                      : theme === "dark"
                        ? "border-[#005b94] text-blue-300"
                        : "border-[#56ab2f]/50 text-foreground",
                  )}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={cn(
                "h-9 px-2 sm:h-10 sm:px-4",
                theme === "dark"
                  ? "border-[#005b94] text-blue-300 hover:bg-[#003a5c]/30 disabled:border-slate-700 disabled:text-slate-600"
                  : "border-[#56ab2f]/50 hover:border-[#56ab2f] hover:bg-[#56ab2f]/10 disabled:border-gray-200",
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
