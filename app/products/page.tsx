"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Wrench, Lightbulb, MonitorCog, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ProductModal } from "@/components/pages/product-modal";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import productsContent from "@/src/content/products.content";

const iconMap = {
  Wrench,
  Lightbulb,
  MonitorCog,
  Zap,
};

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const params = useParams();
  const locale = params?.locale as keyof typeof productsContent.content || "en";
  const content = productsContent;
  const validLocale = locale in content.content ? locale : "en";

  const handleContact = (productName: string) => {
    window.open(
      `https://wa.me/+201090020981?text=I'm interested in your ${encodeURIComponent(
        productName
      )} solution.`,
      "_blank"
    );
  };

  const handleLearnMore = (product: any) => {
    setSelectedProduct(product);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white">
          {content.content[validLocale].title}{" "}
          <span className="text-[#8DC63F] dark:text-[#00AEEF]">
            {content.content[validLocale].subtitle}
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          {content.content[validLocale].description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(content.content[validLocale].products).map(([id, product]: [string, any], index) => {
          const Icon = iconMap[product.icon as keyof typeof iconMap];

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-3xl",
                  "dark:bg-gradient-to-br dark:from-[#001e30] dark:via-[#003a5c] dark:to-[#005b94] dark:border-[#005b94]/30",
                  "bg-gradient-to-br from-[#a8e063] via-[#78c850] to-[#56ab2f] border-[#56ab2f]/30"
                )}
              >
                <div className="relative h-48 bg-gray-200 dark:bg-gray-800">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {product.name}
                    </h2>
                    <div className="p-2 rounded-full bg-white/20 dark:bg-white/10 flex items-center justify-center backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <p className="text-white dark:text-gray-200">
                    {product.description}
                  </p>
                </CardContent>

                <CardFooter className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 
                               text-white border-white/30 rounded-xl shadow-sm 
                               dark:bg-gradient-to-r dark:from-[#005b94] dark:to-[#00AEEF] 
                               bg-gradient-to-r from-[#78c850] to-[#a8e063] 
                               hover:opacity-90 hover:scale-105 transition-all duration-200 ease-in-out"
                               
                    onClick={() => handleContact(product.name)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="h-4 w-4"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    <span>WhatsApp</span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLearnMore(product)}
                    className="text-white rounded-xl px-4 shadow-sm font-medium 
                               dark:bg-gradient-to-r dark:from-[#003a5c] dark:to-[#005b94] 
                               bg-gradient-to-r from-[#56ab2f] to-[#78c850] 
                               hover:opacity-90 hover:scale-105 transition-all duration-200 ease-in-out"
                  >
                    {content.content[validLocale].features.title}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {selectedProduct && (
        <div ref={modalRef}>
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onContact={handleContact}
          />
        </div>
      )}
    </div>
  );
}
