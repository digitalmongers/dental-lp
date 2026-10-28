"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

const services = [
  {
    category: "Cosmetic dental",
    title: "Teeth whitening",
    description: "Eget maecenas semper lobortis. Advanced non-invasive brightening for radiant confidence.",
    image: "/images/service_1.png",
    icon: "/images/service_1_icon.png",
    price: "From $149",
    highlight: false,
  },
  {
    category: "Orthodontics and alignment",
    title: "Pediatric dentistry",
    description: "Quam dolor donec posuere dolor. Gentle, anxiety-free dental care designed especially for children.",
    image: "/images/service_2.png",
    icon: "/images/service_2_icon.png",
    price: "From $89",
    highlight: false,
  },
  {
    category: "Preventive dentistry",
    title: "Digital X-rays",
    description: "Molestie ultricies nullam iaculis. Low-radiation 3D imaging for ultra-accurate oral diagnostics.",
    image: "/images/service_3.png",
    icon: "/images/service_3_icon.png",
    price: "From $49",
    highlight: false,
  },
  {
    category: "Cosmetic dental",
    title: "Orthodontic alignment",
    description: "Curated clear aligner therapy tailored for beautiful smiles with predictable, fast results.",
    image: "/images/service_4.png",
    icon: "/images/service_1_icon.png",
    price: "From $399",
    highlight: true,
  },
];

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header Container */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#AA6EFF] mb-2 block">
            Specialized Care
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-[#1D273F] leading-tight">
            Our variety of dental{" "}
            <span className="text-[#AA6EFF] italic font-serif sm:font-normal font-medium">
              services
            </span>
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C399FF] hover:bg-[#D7BAFF] text-[#1D273F] font-semibold text-sm transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Book an appointment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenBooking}
            className="hidden sm:flex items-center gap-1.5 px-5 py-3 rounded-xl border border-[#D1D9E7] hover:border-[#1D273F] text-[#1D273F] font-semibold text-sm transition-all duration-300 hover:bg-white"
          >
            <span>Browse all</span>
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`group rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
              service.highlight
                ? "bg-[#C399FF] text-[#1D273F] shadow-lg border border-[#C399FF] hover:-translate-y-1.5"
                : "bg-white text-[#1D273F] border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1.5"
            }`}
          >
            {/* Top Image area */}
            <div className="relative aspect-[4/3.8] w-full overflow-hidden bg-[#EAEBF0]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Category Pill Tag */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-md ${
                    service.highlight
                      ? "bg-[#1D273F] text-white"
                      : "bg-white/90 text-[#1D273F] border border-black/5"
                  }`}
                >
                  {service.category}
                </span>
              </div>

              {/* Price Pill Tag */}
              <div className="absolute bottom-3.5 right-3.5 z-10">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-black/60 text-white backdrop-blur-sm">
                  {service.price}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5 flex flex-col flex-1 justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F8F2FF] flex items-center justify-center p-2 flex-shrink-0 border border-[#D7BAFF]/30">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-[#1D273F]">
                    {service.title}
                  </h3>
                </div>

                <p
                  className={`text-sm leading-relaxed ${
                    service.highlight ? "text-[#2D3C5A]" : "text-[#757F95]"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              {/* Action trigger */}
              <div className="pt-2 border-t border-black/5 flex items-center justify-between">
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold flex items-center gap-1.5 hover:gap-2 text-[#1D273F] transition-all"
                >
                  <span>Learn more & book</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
