"use client";

import Image from "next/image";
import { Star, ArrowRight, Play, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  onOpenVideo: () => void;
}

export default function Hero({ onOpenBooking, onOpenVideo }: HeroProps) {
  return (
    <section id="home" className="px-4 sm:px-8 max-w-7xl mx-auto pt-2 pb-10">
      <div className="relative bg-[#1D273F] rounded-[28px] md:rounded-[36px] overflow-hidden text-white p-6 sm:p-10 lg:p-14 border border-white/10 shadow-2xl">
        {/* Subtle SVG Wave Background Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen overflow-hidden">
          <Image
            src="/images/hero_bg_pattern.svg"
            alt="Background pattern"
            fill
            className="object-cover object-center scale-125"
            priority
          />
        </div>

        {/* Ambient glow effect */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C399FF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#AA6EFF]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#1D3741] text-xs sm:text-sm font-semibold shadow-sm w-fit mb-6 transition-transform hover:scale-105">
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <span>Over 2,300 4.9 stars in Google</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-medium tracking-tight leading-[1.08] text-white mb-6">
              Creating confident smiles{" "}
              <span className="text-[#C399FF] italic font-serif sm:font-normal font-medium tracking-normal block sm:inline">
                every day
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#D1D9E7] leading-relaxed max-w-xl mb-8">
              Mattis ut imperdiet sem enim turpis in rhoncus turpis neque morbi nunc porttitor
              sollicitudin egestas sodales est orci vitae ipsum nunc integer pretium orci pulvinar
              nulla nisi magnis porta.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Primary button */}
              <button
                onClick={onOpenBooking}
                className="group flex items-center gap-3 pl-2 pr-5 py-2 rounded-xl bg-[#C399FF] hover:bg-[#D7BAFF] text-[#1D273F] font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#C399FF]/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="w-9 h-9 rounded-lg bg-[#1D273F] text-[#C399FF] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span>Book an appointment</span>
              </button>

              {/* Secondary button */}
              <a
                href="#services"
                className="flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/50 text-white font-medium text-base hover:bg-white/5 transition-all duration-300"
              >
                Our services
              </a>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-white/15 mb-7" />

            {/* Video Teaser */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenVideo}
                className="group relative w-24 h-16 rounded-xl overflow-hidden shadow-md flex-shrink-0 cursor-pointer border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C399FF]"
                aria-label="Play clinic video"
              >
                <Image
                  src="/images/video_thumb.png"
                  alt="Clinic video thumbnail"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1D273F]/40 flex items-center justify-center group-hover:bg-[#1D273F]/20 transition-colors">
                  <div className="w-7 h-7 rounded-full bg-white/90 text-[#1D273F] flex items-center justify-center shadow transition-transform group-hover:scale-110">
                    <Play className="w-3.5 h-3.5 fill-[#1D273F] ml-0.5" />
                  </div>
                </div>
              </button>
              <div>
                <p className="text-sm font-medium text-white/90">Our dental clinic</p>
                <button
                  onClick={onOpenVideo}
                  className="text-sm font-semibold text-[#C399FF] hover:text-[#D7BAFF] hover:underline flex items-center gap-1 transition-colors"
                >
                  <span>Watch video</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Lilac Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] lg:max-w-none">
              {/* Lilac framing card */}
              <div className="relative aspect-[4/4.5] sm:aspect-[4/4.8] w-full rounded-[28px] bg-[#C399FF] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                <Image
                  src="/images/hero_woman.png"
                  alt="Smiling woman at Dentalflow clinic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-top"
                  priority
                  loading="eager"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1D273F]/60 to-transparent" />

                {/* Floating highlight badge */}
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md text-[#1D273F] flex items-center justify-between shadow-lg border border-white/50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#C399FF]/30 flex items-center justify-center text-[#1D273F]">
                      <Sparkles className="w-4 h-4 text-[#AA6EFF]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#757F95]">
                        Certified Excellence
                      </p>
                      <p className="text-sm font-bold">State-of-the-art dental care</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1D273F] text-white">
                      100% Painless
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
