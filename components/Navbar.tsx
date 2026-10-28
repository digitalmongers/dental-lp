"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronDown, Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  return (
    <header className="w-full pt-4 sm:pt-6 pb-2 px-4 sm:px-8 max-w-7xl mx-auto z-40 relative">
      <nav className="flex items-center justify-between py-3 px-5 sm:px-8 bg-[#1D273F]/90 backdrop-blur-md rounded-2xl border border-white/10 text-white shadow-lg transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#C399FF] flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105">
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
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#C399FF] transition-colors">
            Dentalflow
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-white/80">
          <Link
            href="#home"
            className="text-white hover:text-[#C399FF] transition-colors py-1"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="hover:text-white transition-colors py-1"
          >
            Services
          </Link>
          <Link
            href="#experience"
            className="hover:text-white transition-colors py-1"
          >
            About us
          </Link>
          <Link
            href="#team"
            className="hover:text-white transition-colors py-1"
          >
            Doctors
          </Link>
          <Link
            href="#articles"
            className="hover:text-white transition-colors py-1"
          >
            Resources
          </Link>
          
          {/* Dropdown menu */}
          <div className="relative">
            <button
              onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
              onMouseEnter={() => setPagesDropdownOpen(true)}
              className="flex items-center gap-1 hover:text-white transition-colors py-1 focus:outline-none"
            >
              <span>Pages</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${pagesDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {pagesDropdownOpen && (
              <div
                onMouseLeave={() => setPagesDropdownOpen(false)}
                className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-[#1D273F] border border-white/10 shadow-2xl py-2 z-50 text-sm backdrop-blur-xl animate-in fade-in slide-in-from-top-2"
              >
                <Link
                  href="#journey"
                  className="block px-4 py-2 hover:bg-white/10 text-white/90 hover:text-white transition-colors"
                >
                  Smile Journey
                </Link>
                <Link
                  href="#showcase"
                  className="block px-4 py-2 hover:bg-white/10 text-white/90 hover:text-white transition-colors"
                >
                  Smile Showcase
                </Link>
                <Link
                  href="#testimonials"
                  className="block px-4 py-2 hover:bg-white/10 text-white/90 hover:text-white transition-colors"
                >
                  Reviews
                </Link>
                <Link
                  href="#faq"
                  className="block px-4 py-2 hover:bg-white/10 text-white/90 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#505C77]/60 hover:bg-[#505C77] text-white text-sm font-semibold border border-white/15 transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4 text-[#C399FF]" />
            <span>Book an appointment</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="p-2 rounded-lg bg-[#C399FF] text-[#1D273F] font-semibold text-xs flex sm:hidden items-center gap-1"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-5 bg-[#1D273F] border border-white/10 rounded-2xl text-white shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-3">
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-white/90 hover:text-[#C399FF] font-medium border-b border-white/10"
          >
            Home
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-white/90 hover:text-[#C399FF] font-medium border-b border-white/10"
          >
            Services
          </Link>
          <Link
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-white/90 hover:text-[#C399FF] font-medium border-b border-white/10"
          >
            About us
          </Link>
          <Link
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-white/90 hover:text-[#C399FF] font-medium border-b border-white/10"
          >
            Doctors
          </Link>
          <Link
            href="#journey"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-white/90 hover:text-[#C399FF] font-medium border-b border-white/10"
          >
            Smile Journey
          </Link>
          <Link
            href="#articles"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-white/90 hover:text-[#C399FF] font-medium border-b border-white/10"
          >
            Articles & Resources
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 mt-2 rounded-xl bg-[#C399FF] text-[#1D273F] font-semibold text-sm hover:bg-[#D7BAFF] transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an appointment</span>
          </button>
        </div>
      )}
    </header>
  );
}
