// src/app/clients/page.tsx

"use client";

import { useParams } from "next/navigation";
import clientsContent from "@/src/content/clients.content";
import { PageHeader } from "@/components/ui/page-header";
import { clientLogosGrouped } from "@/data";
import { motion } from "framer-motion";

type GroupKey = keyof typeof clientLogosGrouped;

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

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        >
          {Object.entries(clientLogosGrouped).map(([category, logos]) => (
            <div key={category} className="mb-14">
              <h2 className="text-2xl font-semibold text-center mb-6 text-[#8DC63F] dark:text-[#00AEEF]">
                {content.content[validLocale].groups[category as GroupKey]}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
                {logos.map((client, index) => (
                  <img
                    key={index}
                    src={client.img}
                    alt={client.name}
                    title={client.title}
                    className="w-24 h-24 object-contain hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
