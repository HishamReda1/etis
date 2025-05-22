"use client";

import { useParams } from "next/navigation";
import eventsContent from "@/src/content/events.content";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function EventsPage() {
  const params = useParams();
  const locale = params?.locale as keyof typeof eventsContent.content || "en";
  const content = eventsContent;
  const validLocale = locale in content.content ? locale : "en";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.content[validLocale].events.map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image
                src={event.thumbnails[0]}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {event.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {event.location}
                </span>
                <Link
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium",
                    "bg-gradient-to-r from-[#78c850] to-[#a8e063] text-white",
                    "dark:from-[#005b94] dark:to-[#00AEEF]",
                    "hover:opacity-90 transition-opacity"
                  )}
                >
                  {locale === "ar" ? "عرض المزيد" : "View More"}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 