"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, HeartHandshake, CheckCircle } from "lucide-react";

interface DifferenceSectionProps {
  onOpenBooking: () => void;
}

const badges = [
  { label: "Modern technology", icon: Sparkles },
  { label: "Friendly care", icon: HeartHandshake },
  { label: "Proven results", icon: CheckCircle },
];

export default function DifferenceSection({ onOpenBooking }: DifferenceSectionProps) {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 border border-[#E4E7EC] shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Doctor Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/4.2] rounded-[24px] overflow-hidden bg-[#F7F7F0] border border-[#E2E8F0] shadow-md group">
              <Image
                src="/images/difference_dentist.png"
                alt="Friendly male dentist providing compassionate care"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

              {/* Floating verified badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md text-[#1D273F] border border-white/60 shadow-lg flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#AA6EFF]">
                  Dedicated Oral Surgery
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#1D273F] text-white">
                  Compassionate
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#AA6EFF] mb-2 block">
              Why Patients Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-[#1D273F] leading-tight mb-5">
              The difference{" "}
              <span className="text-[#AA6EFF] italic font-serif sm:font-normal font-medium">
                we make
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#757F95] leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud
              exercitation ullamco. We turn stressful dentist visits into tranquil, comforting
              experiences.
            </p>

            {/* CTA Button */}
            <div className="mb-10">
              <button
                onClick={onOpenBooking}
                className="group flex items-center gap-3 pl-2 pr-6 py-2.5 rounded-xl bg-[#C399FF] hover:bg-[#D7BAFF] text-[#1D273F] font-semibold text-sm transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="w-8 h-8 rounded-lg bg-[#1D273F] text-[#C399FF] flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span>Book an appointment</span>
              </button>
            </div>

            {/* 3 Dark Pill Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#1D273F] text-white shadow-sm hover:bg-[#2D3C5A] transition-colors"
                  >
                    <div className="w-6 h-6 rounded-md bg-[#C399FF] text-[#1D273F] flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
