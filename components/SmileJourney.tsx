"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

interface SmileJourneyProps {
  onOpenBooking: () => void;
}

const steps = [
  {
    number: "1",
    title: "Initial consultation",
    description:
      "Lorem molestie augue velit vehicula risus sit elementum elementum feugiat duis natoque bibendum porta blandit sit lectus pharetra neque fermentum ac ultricies neque sed volutpat lectus nunc justo.",
    features: ["Digital 3D X-rays if needed", "Personalized treatment planning"],
    image: "/images/journey_patient.png",
    caption: "Step 01 — Comprehensive Assessment",
  },
  {
    number: "2",
    title: "Tailored treatment plan",
    description:
      "We design an exact digital preview of your future smile using painless 3D scanners. You review every detail, timeline, and transparent pricing before we begin any work.",
    features: ["Virtual 3D smile simulation", "All-inclusive transparent pricing"],
    image: "/images/clinic_tech.png",
    caption: "Step 02 — Precision Digital Planning",
  },
  {
    number: "3",
    title: "Gentle care & reveal",
    description:
      "Experience painless, ultra-comfortable care with our master clinicians. Relax in our massage chairs with music while we craft your healthy, radiant smile that lasts for decades.",
    features: ["100% painless comfort guarantee", "Lifetime warranty on restorations"],
    image: "/images/showcase_1.png",
    caption: "Step 03 — Confident Smile Reveal",
  },
];

export default function SmileJourney({ onOpenBooking }: SmileJourneyProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const prevStep = () => {
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const nextStep = () => {
    setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const active = steps[currentStep];

  return (
    <section id="journey" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-[#AA6EFF] mb-2 block">
          Simple 3-Step Process
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-[#1D273F] leading-tight mb-4">
          Your smile{" "}
          <span className="text-[#AA6EFF] italic font-serif sm:font-normal font-medium">
            journey
          </span>
        </h2>
        <p className="text-base text-[#757F95] leading-relaxed">
          Enim turpis in rhoncus turpis neque morbi nunc porttitor sollicitudin egestas sodales
          est orci. Step-by-step guidance from your first hello to your best smile.
        </p>
      </div>

      {/* Main Stepper Card */}
      <div className="bg-white rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#E4E7EC] shadow-sm p-6 sm:p-10 lg:p-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Portrait photo */}
          <div className="lg:col-span-5 relative aspect-[4/3.8] rounded-2xl overflow-hidden bg-[#F7F7F0] border border-[#E2E8F0]">
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/95 text-[#1D273F] shadow-sm backdrop-blur-sm border border-black/5 block w-fit">
                {active.caption}
              </span>
            </div>
          </div>

          {/* Right Column: Step details & controls */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="mb-8">
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl sm:text-5xl font-black text-[#AA6EFF]">
                  {active.number}
                </span>
                {/* Step dots */}
                <div className="flex items-center gap-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentStep(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === currentStep
                          ? "w-8 bg-[#AA6EFF]"
                          : "w-2.5 bg-[#D1D9E7] hover:bg-[#AA6EFF]/50"
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D273F] mb-4">
                {active.title}
              </h3>
              <p className="text-base text-[#757F95] leading-relaxed mb-6">
                {active.description}
              </p>

              {/* Checklist pills */}
              <div className="flex flex-wrap gap-3">
                {active.features.map((feature, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F8F2FF] border border-[#E9D5FF] text-sm font-semibold text-[#1D273F]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#AA6EFF]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions and Nav */}
            <div className="pt-6 border-t border-[#EEF2F6] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C399FF] hover:bg-[#D7BAFF] text-[#1D273F] font-semibold text-sm transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Book an appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#services"
                  className="px-5 py-3 rounded-xl border border-[#D1D9E7] hover:border-[#1D273F] text-[#1D273F] font-semibold text-sm transition-all hover:bg-[#F7F7F0]"
                >
                  View services
                </a>
              </div>

              {/* Next & Prev buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevStep}
                  className="w-11 h-11 rounded-full border border-[#D1D9E7] hover:border-[#1D273F] flex items-center justify-center text-[#1D273F] hover:bg-[#F7F7F0] transition-colors"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextStep}
                  className="w-11 h-11 rounded-full bg-[#1D273F] hover:bg-[#2D3C5A] text-white flex items-center justify-center shadow-md transition-colors"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
