"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import TeamSection from "@/components/TeamSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import SmileJourney from "@/components/SmileJourney";
import StatsSection from "@/components/StatsSection";
import DifferenceSection from "@/components/DifferenceSection";
import TestimonialsSpotlight from "@/components/TestimonialsSpotlight";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F7F7F0] flex flex-col justify-between selection:bg-[#C399FF] selection:text-[#1D273F]">
      {/* Top Fixed / Floating Navbar */}
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Main Content Sections */}
      <div className="flex-1">
        <Hero
          onOpenBooking={() => setBookingModalOpen(true)}
          onOpenVideo={() => setVideoModalOpen(true)}
        />
        <ReviewsMarquee />
        <ServicesSection onOpenBooking={() => setBookingModalOpen(true)} />
        <ExperienceSection onOpenBooking={() => setBookingModalOpen(true)} />
        <TeamSection onOpenBooking={() => setBookingModalOpen(true)} />
        <ShowcaseSection onOpenBooking={() => setBookingModalOpen(true)} />
        <SmileJourney onOpenBooking={() => setBookingModalOpen(true)} />
        <StatsSection />
        <DifferenceSection onOpenBooking={() => setBookingModalOpen(true)} />
        <TestimonialsSpotlight />
        <BlogSection />
      </div>

      {/* Page Footer & Bottom Banner */}
      <Footer onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </main>
  );
}
