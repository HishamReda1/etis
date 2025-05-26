// src/app/clients/page.tsx

"use client";

import { useParams } from "next/navigation";
import clientsContent from "@/src/content/clients.content";
import { PageHeader } from "@/components/ui/page-header";
import { clientLogosGrouped } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

type GroupKey = "Educational Institutions" | "Hospitals & Healthcare" | "Hotels & Tourism" | "Corporates & Industry" | "Telecom & Technology" | "Religious Institutions";

export default function ClientsPage() {
  const params = useParams();
  const locale = params?.locale as keyof typeof clientsContent.content || "en";
  const content = clientsContent;
  const validLocale = locale in content.content ? locale : "en";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageHeader
        title={content.content[validLocale].title}
        subtitle={content.content[validLocale].subtitle}
        description={content.content[validLocale].description}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          {Object.entries(clientLogosGrouped).map(([category, logos]) => (
            <div key={category} className="mb-14 w-full">
              <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-[#00AEEF] w-full rtl:text-center ltr:text-center">
                {content.content[validLocale].groups[category as GroupKey]}
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {logos.map((client, index) => (
                  <div key={index} className="w-[200px] flex justify-center">
                    <Link 
                      href={client.link || '#'} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative  w-full h-24 flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Image
                        src={client.img}
                        alt={client.name}
                        title={client.title}
                        width={120}
                        height={120}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
