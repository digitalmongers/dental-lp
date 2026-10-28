"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    quote: "“Top-notch service, highly recommend this dental office!”",
    author: "Will Brown",
    location: "Los Angeles",
    image: "/images/review_avatar_1.png",
    rating: 5,
  },
  {
    quote: "“Friendly staff and outstanding care every visit.”",
    author: "John Carter",
    location: "San Francisco",
    image: "/images/review_avatar_2.png",
    rating: 5,
  },
  {
    quote: "“Professional, caring team that made me comfortable.”",
    author: "Sahara Smith",
    location: "New York",
    image: "/images/review_avatar_3.png",
    rating: 5,
  },
  {
    quote: "“I trust them completely with my dental health.”",
    author: "David Jones",
    location: "Los Angeles",
    image: "/images/review_avatar_4.png",
    rating: 5,
  },
  {
    quote: "“Amazing experience, painless and very efficient!”",
    author: "Sabrina Jonsons",
    location: "San Francisco",
    image: "/images/review_avatar_5.png",
    rating: 5,
  },
];

export default function ReviewsMarquee() {
  // Duplicate for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="w-full py-8 overflow-hidden bg-transparent">
      <div className="relative w-full">
        {/* Soft edge blur masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F7F7F0] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F7F7F0] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-5 py-2">
          {duplicatedReviews.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[310px] sm:w-[350px] p-5 rounded-2xl bg-white border border-[#E4E7EC] shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 group"
            >
              {/* Avatar */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#C399FF]/40 group-hover:border-[#C399FF] transition-colors">
                <Image
                  src={item.image}
                  alt={item.author}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              {/* Review text */}
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1 mb-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-medium text-[#1D273F] leading-snug line-clamp-2 mb-1">
                  {item.quote}
                </p>
                <p className="text-xs text-[#757F95] font-normal truncate">
                  <span className="font-semibold text-[#1D273F]">{item.author}</span>, {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
