"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Send, Check } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#F7F7F0] pt-10 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Call to Action Banner */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#AA6EFF] via-[#9254F2] to-[#7B3FE4] p-8 sm:p-12 lg:p-14 text-white overflow-hidden shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Subtle SVG mask overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
            <Image
              src="/images/footer_banner_mask.svg"
              alt="Mask decoration"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F8F2FF]/80 mb-2 block">
              Ready for your new smile?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-white leading-tight">
              Book your dental appointment{" "}
              <span className="italic font-serif font-medium text-[#F8F2FF]">
                with us
              </span>
            </h2>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={onOpenBooking}
              className="group flex items-center gap-3 pl-2 pr-6 py-3 rounded-xl bg-[#F8F2FF] hover:bg-white text-[#1D273F] font-bold text-base transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
            >
              <span className="w-9 h-9 rounded-lg bg-[#AA6EFF] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4" />
              </span>
              <span>Book an appointment</span>
            </button>
          </div>
        </div>

        {/* Footer Navigation Box */}
        <div className="bg-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 border border-[#E4E7EC] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Left Brand Column */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <Link href="/" className="flex items-center gap-2.5 mb-4 group">
                  <div className="w-8 h-8 rounded-lg bg-[#C399FF] flex items-center justify-center p-1.5 transition-transform group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1D273F"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M12 2C7.5 2 4 5.5 4 10c0 3.5 2 6.5 3 10.5.5 2 2 2.5 3 2.5s2.5-.5 3-2.5c1-4 3-7 3-10.5 0-4.5-3.5-8-8-8z" />
                      <path d="M9 10c.5 1 2 2 3 2s2.5-1 3-2" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold tracking-tight text-[#1D273F]">
                    Dentalflow
                  </span>
                </Link>

                <p className="text-sm text-[#757F95] leading-relaxed max-w-sm mb-6">
                  Providing cutting-edge, gentle oral care and bespoke smile transformations for
                  patients of all ages. Experience the modern standard in dentistry.
                </p>
              </div>

              {/* Newsletter Form */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1D273F] mb-2.5">
                  Stay updated with our newsletter
                </p>
                {subscribed ? (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-green-50 text-green-700 text-sm font-medium border border-green-200">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Thank you for subscribing!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="relative flex items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-4 pr-12 py-3 rounded-xl bg-[#F7F7F0] text-sm text-[#1D273F] placeholder-[#757F95] border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#C399FF]"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 w-9 h-9 rounded-lg bg-[#C399FF] text-[#1D273F] flex items-center justify-center hover:bg-[#AA6EFF] hover:text-white transition-colors"
                      aria-label="Subscribe"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Column 1: Core Pages */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1D273F] mb-4">
                  Pages
                </h4>
                <ul className="flex flex-col gap-2.5 text-sm text-[#757F95]">
                  <li>
                    <Link href="#home" className="hover:text-[#AA6EFF] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#experience" className="hover:text-[#AA6EFF] transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#team" className="hover:text-[#AA6EFF] transition-colors">
                      Doctors
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={onOpenBooking}
                      className="hover:text-[#AA6EFF] transition-colors text-left"
                    >
                      Doctor single
                    </button>
                  </li>
                  <li>
                    <Link href="#journey" className="hover:text-[#AA6EFF] transition-colors">
                      Smile Journey
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Services & Resources */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1D273F] mb-4">
                  Services
                </h4>
                <ul className="flex flex-col gap-2.5 text-sm text-[#757F95]">
                  <li>
                    <Link href="#services" className="hover:text-[#AA6EFF] transition-colors">
                      Service overview
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-[#AA6EFF] transition-colors">
                      Teeth Whitening
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="hover:text-[#AA6EFF] transition-colors">
                      Orthodontics
                    </Link>
                  </li>
                  <li>
                    <Link href="#articles" className="hover:text-[#AA6EFF] transition-colors">
                      Articles & blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#testimonials" className="hover:text-[#AA6EFF] transition-colors">
                      Patient reviews
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Utility & Booking */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1D273F] mb-4">
                  Utility pages
                </h4>
                <ul className="flex flex-col gap-2.5 text-sm text-[#757F95]">
                  <li>
                    <button
                      onClick={onOpenBooking}
                      className="hover:text-[#AA6EFF] transition-colors text-left font-semibold text-[#1D273F]"
                    >
                      Book appointment
                    </button>
                  </li>
                  <li>
                    <Link href="#faq" className="hover:text-[#AA6EFF] transition-colors">
                      FAQs & Policies
                    </Link>
                  </li>
                  <li>
                    <Link href="#showcase" className="hover:text-[#AA6EFF] transition-colors">
                      Before & After
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://webflow.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#AA6EFF] transition-colors underline"
                    >
                      More Webflow Templates
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Copyright bar */}
          <div className="mt-12 pt-6 border-t border-[#EEF2F6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#757F95]">
            <p>
              Copyright © Dentalflow | {" "}
              <span className="text-[#1D273F]">Developed by</span>{" "}
              <a href="https://digitalmongers.com" className="font-semibold text-[#1D273F]">Digital Mongers Softech</a>
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#1D273F] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#1D273F] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
