"use client";

import Image from "next/image";
import { ArrowRight, Star, Quote } from "lucide-react";

interface ShowcaseSectionProps {
  onOpenBooking: () => void;
}

export default function ShowcaseSection({ onOpenBooking }: ShowcaseSectionProps) {
  const avatarStack = [
    "/images/avatar_stack_1.png",
    "/images/avatar_stack_2.png",
    "/images/avatar_stack_3.png",
    "/images/avatar_stack_4.png",
  ];

  return (
    <section id="showcase" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="relative bg-[#1D273F] rounded-[28px] sm:rounded-[36px] overflow-hidden text-white p-6 sm:p-10 lg:p-14 border border-white/10 shadow-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen">
          <Image
            src="/images/testimonial_pattern.svg"
            alt="Pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Avatars & Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Happy Smiles Avatar Stack */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="flex -space-x-3 overflow-hidden">
                {avatarStack.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-10 h-10 rounded-full border-2 border-[#1D273F] overflow-hidden bg-slate-400"
                  >
                    <Image
                      src={src}
                      alt={`Happy patient ${i + 1}`}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-semibold text-white/90">
                <span className="text-[#C399FF] font-bold">+2K</span> Happy smiles
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-white leading-tight mb-5">
              Bright{" "}
              <span className="text-[#C399FF] italic font-serif sm:font-normal font-medium">
                smiles
              </span>{" "}
              showcase
            </h2>

            {/* Paragraph */}
            <p className="text-base text-[#D1D9E7] leading-relaxed mb-8">
              Mattis ut imperdiet sem enim turpis in rhoncus turpis neque morbi nunc porttitor
              sollicitudin egestas sodales est orci vitae ipsum nunc integer pretium orci pulvinar.
              Real patients, real life-changing transformations.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group flex items-center gap-3 pl-2 pr-5 py-2.5 rounded-xl bg-[#C399FF] hover:bg-[#D7BAFF] text-[#1D273F] font-semibold text-sm transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="w-8 h-8 rounded-lg bg-[#1D273F] text-[#C399FF] flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span>Book an appointment</span>
              </button>

              <a
                href="#testimonials"
                className="px-5 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white font-medium text-sm hover:bg-white/5 transition-colors"
              >
                Read reviews
              </a>
            </div>
          </div>

          {/* Right Column: 2x2 Showcase Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Card 1: Photo 1 */}
            <div className="relative aspect-[4/3.5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group shadow-lg">
              <Image
                src="/images/showcase_1.png"
                alt="Patient smile transformation"
                fill
                sizes="(max-width: 640px) 100vw, 360px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D273F]/70 via-transparent to-transparent" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#1D273F]/80 text-[#C399FF] backdrop-blur-sm border border-white/10">
                  Full Smile Alignment
                </span>
              </div>
            </div>

            {/* Card 2: Testimonial Quote */}
            <div className="p-6 rounded-2xl bg-[#2D3C5A]/80 border border-white/10 shadow-lg flex flex-col justify-between backdrop-blur-sm hover:border-[#C399FF]/40 transition-colors">
              <Quote className="w-7 h-7 text-[#C399FF] mb-3 opacity-80" />
              <p className="text-sm sm:text-base text-white/95 leading-relaxed italic mb-4">
                “The precision, gentle care, and kindness here changed how I feel about going to the dentist. I can finally smile freely!”
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-xs font-bold text-white">Lucas Vance</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Testimonial Quote */}
            <div className="p-6 rounded-2xl bg-[#2D3C5A]/80 border border-white/10 shadow-lg flex flex-col justify-between backdrop-blur-sm hover:border-[#C399FF]/40 transition-colors order-last sm:order-none">
              <Quote className="w-7 h-7 text-[#C399FF] mb-3 opacity-80" />
              <p className="text-sm sm:text-base text-white/95 leading-relaxed italic mb-4">
                “Completed my clear aligners in just 7 months. The 3D preview matched my exact results. Incredible clinic!”
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-xs font-bold text-white">Elena Rostova</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Card 4: Photo 2 */}
            <div className="relative aspect-[4/3.5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group shadow-lg">
              <Image
                src="/images/showcase_2.png"
                alt="Patient smile transformation 2"
                fill
                sizes="(max-width: 640px) 100vw, 360px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D273F]/70 via-transparent to-transparent" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#1D273F]/80 text-[#C399FF] backdrop-blur-sm border border-white/10">
                  Veneers & Whitening
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
