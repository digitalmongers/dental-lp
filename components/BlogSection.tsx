"use client";

import Image from "next/image";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    date: "Sept 26, 2026",
    readTime: "5 min read",
    title: "How daily flossing can improve your dental health",
    excerpt: "Mattis ut imperdiet sem siter enimer turpis in rhoncus amet. Uncover the clinical impact of micro-cleaning between teeth.",
    image: "/images/article_1.png",
    category: "Oral Hygiene",
  },
  {
    date: "Sept 24, 2026",
    readTime: "4 min read",
    title: "What to expect during your first dental checkup",
    excerpt: "Ut enim ad minim veniam, quis nostrud exercitation. A comprehensive walk-through of digital diagnostics, cleaning, and gentle assessment.",
    image: "/images/article_2.png",
    category: "Patient Guide",
  },
];

export default function BlogSection() {
  return (
    <section id="articles" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-[#AA6EFF] mb-2 block">
          Educational Insights
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-[#1D273F] leading-tight mb-4">
          Articles &{" "}
          <span className="text-[#AA6EFF] italic font-serif sm:font-normal font-medium">
            resources
          </span>
        </h2>
        <p className="text-base text-[#757F95] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
          ut labore et dolore magna. Stay informed on cutting-edge oral wellness.
        </p>
      </div>

      {/* 2 Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {articles.map((article, idx) => (
          <article
            key={idx}
            className="group rounded-3xl overflow-hidden bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-[#F7F7F0] flex-shrink-0">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/95 text-[#1D273F] shadow-xs backdrop-blur-sm">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-3 text-xs font-medium text-[#AA6EFF] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#757F95]">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#1D273F] group-hover:text-[#AA6EFF] transition-colors leading-snug mb-2.5">
                  {article.title}
                </h3>

                <p className="text-sm text-[#757F95] leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EEF2F6] flex items-center justify-between text-xs font-bold text-[#1D273F] group-hover:text-[#AA6EFF] transition-colors">
                <span>Read full article</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="text-center">
        <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#D1D9E7] hover:border-[#1D273F] text-[#1D273F] font-semibold text-sm bg-white hover:bg-[#F7F7F0] transition-all shadow-xs">
          <span>Browse all articles</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
