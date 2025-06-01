"use client";

import { useParams } from "next/navigation";
import blogContent from "@/src/content/blog.content";
import { PageHeader } from "@/components/ui/page-header";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const BlogPage = ({ theme }: { theme: "light" | "dark" }) => {
  const params = useParams();
  const locale = params?.locale as keyof typeof blogContent.content || "en";
  const content = blogContent.content[locale];
  const posts = Object.entries(content.posts);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <PageHeader
        title={content.title}
        subtitle={content.subtitle}
        description={content.description}
      />

      <div className="space-y-12 mt-12">
        {posts.map(([key, post], index) => (
          <motion.article
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "rounded-xl overflow-hidden",
              theme === "dark" ? "bg-[#005b94]/10" : "bg-[#56ab2f]/10"
            )}
          >
            <div className="relative w-full h-[400px]">
              <Image
                src={`https://honeywell.scene7.com/is/image/honeywell/HBT-BMS-AL-Product-Page-Tile-${index + 2}-2880x1440`}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className={cn(
                "text-sm font-medium mb-3",
                theme === "dark" ? "text-blue-400" : "text-green-600"
              )}>
                {post.date}
              </div>
              
              <h2 className={cn(
                "text-3xl font-bold mb-4",
                theme === "dark" ? "text-white" : "text-gray-900"
              )}>
                {post.title}
              </h2>
              
              <p className={cn(
                "text-lg mb-6",
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              )}>
                {post.excerpt}
              </p>
              
              <div className={cn(
                "prose prose-lg max-w-none",
                theme === "dark" ? "prose-invert" : "prose-gray"
              )}>
                {post.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage; 