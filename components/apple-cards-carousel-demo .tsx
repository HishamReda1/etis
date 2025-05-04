"use client"


import { events } from "../data/index"
import { Card, Carousel } from "./ui/apple-cards-carousel "

export default function AppleCardsCarouselDemo() {
  const cards = events.map((event, index) => (
    <Card
      key={event.id}
      card={{
        category: "Event",
        title: event.title,
        src: event.thumbnails, // Pass the entire thumbnails array
        content: (
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {event.title}
              </span>{" "}
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Learn more
              </a>
            </p>
          </div>
        ),
      }}
      index={index}
    />
  ))

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Explore Our Events
      </h2>
      <Carousel items={cards} />
    </div>
  )
}
