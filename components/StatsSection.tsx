"use client";

import Image from "next/image";
import { Star, Award, CheckCircle, Smile } from "lucide-react";

const stats = [
  {
    number: "+8K",
    label: "Orthodontic cases",
    image: "/images/stat_1.png",
    icon: Smile,
    desc: "Patients given straighter, confident smiles.",
  },
  {
    number: "+15",
    label: "Years experience",
    image: "/images/stat_2.png",
    icon: Star,
    desc: "Leading aesthetic and restorative clinical excellence.",
  },
  {
    number: "86%",
    label: "Cosmetic success",
    image: "/images/stat_3.png",
    icon: Award,
    desc: "Exceptional veneer and smile rejuvenation rate.",
  },
  {
    number: "+2K",
    label: "Satisfied clients",
    image: "/images/stat_4.png",
    icon: CheckCircle,
    desc: "Proven painless results and 5-star Google ratings.",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header Container */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#AA6EFF] mb-2 block">
            Proven Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-[#1D273F] leading-tight">
            About our{" "}
            <span className="text-[#AA6EFF] italic font-serif sm:font-normal font-medium">
              experience
            </span>
          </h2>
        </div>
        <p className="text-base text-[#757F95] leading-relaxed max-w-md">
          Iaculis molestie augue velit vehicula sit elementum elementum feugiat duis bibendum
          porta blandit sit lectus pharetra neque fermentum ultricies.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Photo */}
              <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-[#F7F7F0]">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D273F]/75 via-transparent to-transparent" />

                {/* Floating Stat Counter on Image */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#1D273F]/90 backdrop-blur-md text-white border border-white/10 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#C399FF] text-[#1D273F] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-lg font-black text-[#D7BAFF] leading-none mb-0.5">
                        {item.number}
                      </p>
                      <p className="text-xs font-semibold text-white/90">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 bg-white">
                <p className="text-xs text-[#757F95] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
