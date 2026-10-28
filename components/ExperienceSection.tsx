"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Wind,
  CalendarDays,
  Clock,
  Wallet,
  Award,
  ArrowRight,
  Heart,
} from "lucide-react";

interface ExperienceSectionProps {
  onOpenBooking: () => void;
}

const clinicHighlights = [
  {
    title: "Advanced technology",
    subtitle: "Make your teeth look radiant and healthy",
    image: "/images/clinic_tech.png",
    icon: Sparkles,
  },
  {
    title: "Calm and modern clinic",
    subtitle: "A peaceful sanctuary designed for comfort",
    image: "/images/clinic_office.png",
    icon: Wind,
  },
  {
    title: "Friendly and professional staff",
    subtitle: "Dedicated specialists focused on your care",
    image: "/images/clinic_staff.png",
    icon: Heart,
  },
];

const featureBadges = [
  { title: "Certification and licensing", icon: ShieldCheck },
  { title: "Cosmetic treatments", icon: Sparkles },
  { title: "Constant follow-up", icon: MessageCircle },
  { title: "Calm atmosphere", icon: Wind },
  { title: "Long-term planning", icon: CalendarDays },
  { title: "Flexible hours", icon: Clock },
  { title: "Competitive prices", icon: Wallet },
  { title: "Highly qualified staff", icon: Award },
];

export default function ExperienceSection({ onOpenBooking }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 border border-[#E4E7EC] shadow-sm">
        {/* Header container */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#AA6EFF] mb-2 block">
              Patient Satisfaction First
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-[#1D273F] leading-tight">
              The Dentalflow{" "}
              <span className="text-[#AA6EFF] italic font-serif sm:font-normal font-medium">
                dentist experience
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C399FF] hover:bg-[#D7BAFF] text-[#1D273F] font-semibold text-sm transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Book an appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#team"
              className="px-5 py-3 rounded-xl border border-[#D1D9E7] hover:border-[#1D273F] text-[#1D273F] font-semibold text-sm transition-all hover:bg-[#F7F7F0]"
            >
              Meet doctors
            </a>
          </div>
        </div>

        {/* 3 Showcase feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {clinicHighlights.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-[#F7F7F0] border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Bottom card content */}
                <div className="p-5 flex items-start gap-3.5 bg-white flex-1">
                  <div className="w-10 h-10 rounded-xl bg-[#C399FF]/20 text-[#7B46FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-[#AA6EFF]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1D273F] mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#757F95] leading-relaxed">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 8 Feature highlights pills */}
        <div className="pt-8 border-t border-[#EEF2F6]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F8F2FF]/60 hover:bg-[#F8F2FF] border border-[#E9D5FF]/40 transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#C399FF] text-[#1D273F] flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-[#1D273F]">
                    {badge.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
