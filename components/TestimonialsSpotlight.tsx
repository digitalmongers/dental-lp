"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The best dental service I’ve ever experienced. Comfortable, quick, and always reliable care.",
    author: "Danielle Green",
    location: "Los Angeles, CA",
    treatment: "Cosmetic Veneers & Whitening",
  },
  {
    quote: "My kids used to be terrified of the dentist. Now they eagerly ask when our next Dentalflow visit is!",
    author: "Jessica & Maya Taylor",
    location: "San Francisco, CA",
    treatment: "Family & Pediatric Care",
  },
  {
    quote: "From the painless anesthesia to the precision 3D crown in a single visit—this clinic operates on another level.",
    author: "Robert Chen",
    location: "San Jose, CA",
    treatment: "Same-Day Ceramic Crown",
  },
];

export default function TestimonialsSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setCurrentIndex((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  const active = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="relative bg-[#1D273F] rounded-[28px] sm:rounded-[36px] overflow-hidden text-white p-6 sm:p-10 lg:p-14 border border-white/10 shadow-2xl">
        {/* Subtle SVG background mask */}
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-screen">
          <Image
            src="/images/encased_bg.svg"
            alt="Background waves"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C399FF] mb-2 block">
                Real Patient Stories
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight text-white leading-tight">
                Trusted by{" "}
                <span className="text-[#C399FF] italic font-serif sm:font-normal font-medium">
                  real people
                </span>
              </h2>
            </div>

            {/* Slider Navigation controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-[#C399FF] hover:bg-[#D7BAFF] text-[#1D273F] flex items-center justify-center font-bold shadow-md transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content: Gallery + Featured Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Photo Collage */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-md group">
                <Image
                  src="/images/real_patient_1.png"
                  alt="Patient"
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-md group sm:-translate-y-3">
                <Image
                  src="/images/real_patient_kids.png"
                  alt="Young smiling patients"
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-md group">
                <Image
                  src="/images/real_patient_2.png"
                  alt="Patient"
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-md group sm:-translate-y-3">
                <Image
                  src="/images/real_patient_3.png"
                  alt="Patient"
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right: Featured Testimonial Card */}
            <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-[#2D3C5A]/80 backdrop-blur-md border border-white/15 shadow-xl flex flex-col justify-between">
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1.5 mb-5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#C399FF] mb-3 opacity-90" />

                <p className="text-lg sm:text-xl font-medium leading-relaxed text-white mb-6">
                  “{active.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base">
                    {active.author}
                  </h4>
                  <p className="text-xs text-[#D1D9E7]">{active.location}</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1D273F] text-[#C399FF] border border-[#C399FF]/30">
                  {active.treatment}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
