"use client";

import { useState } from "react";
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, Sparkles } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Teeth Whitening",
    doctor: "Dr. Matt Cannon (Periodontist)",
    date: "",
    time: "10:00 AM",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirmed");
  };

  const handleReset = () => {
    setStep("form");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-[28px] shadow-2xl border border-white/20 overflow-hidden text-[#1D273F]">
        {/* Header decoration */}
        <div className="bg-[#1D273F] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C399FF] flex items-center justify-center text-[#1D273F]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Book An Appointment</h3>
              <p className="text-xs text-[#D1D9E7]">Dentalflow Modern Clinic</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {step === "form" ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Service & Doctor select */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#757F95] mb-1.5">
                  Treatment Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F7F0] border border-[#E2E8F0] text-sm font-medium focus:ring-2 focus:ring-[#C399FF] focus:outline-none"
                >
                  <option value="Teeth Whitening">Teeth Whitening</option>
                  <option value="Orthodontic Clear Aligners">Orthodontic Clear Aligners</option>
                  <option value="Digital X-Rays & Comprehensive Exam">Digital X-Rays & Comprehensive Exam</option>
                  <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                  <option value="Cosmetic Veneers">Cosmetic Veneers</option>
                  <option value="Root Canal & Restorative">Root Canal & Restorative</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#757F95] mb-1.5">
                  Preferred Doctor
                </label>
                <select
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F7F0] border border-[#E2E8F0] text-sm font-medium focus:ring-2 focus:ring-[#C399FF] focus:outline-none"
                >
                  <option value="Dr. Matt Cannon (Periodontist)">Dr. Matt Cannon (Periodontist)</option>
                  <option value="Dr. Sahara Smith (Endodontist)">Dr. Sahara Smith (Endodontist)</option>
                  <option value="Dr. Peter Johnson (Prosthodontist)">Dr. Peter Johnson (Prosthodontist)</option>
                  <option value="Dr. John Carter (General Dentist)">Dr. John Carter (General Dentist)</option>
                  <option value="Dr. Sophie Moore (Orthodontist)">Dr. Sophie Moore (Orthodontist)</option>
                </select>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#757F95] mb-1.5">
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F7F0] border border-[#E2E8F0] text-sm font-medium focus:ring-2 focus:ring-[#C399FF] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#757F95] mb-1.5">
                  Time Slot
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F7F0] border border-[#E2E8F0] text-sm font-medium focus:ring-2 focus:ring-[#C399FF] focus:outline-none"
                >
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:30 PM">03:30 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                </select>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#757F95] mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F7F7F0] border border-[#E2E8F0] text-sm font-medium focus:ring-2 focus:ring-[#C399FF] focus:outline-none"
                />
                <User className="w-4 h-4 text-[#757F95] absolute left-3.5 top-3" />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#757F95] mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="sarah@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F7F7F0] border border-[#E2E8F0] text-sm font-medium focus:ring-2 focus:ring-[#C399FF] focus:outline-none"
                  />
                  <Mail className="w-4 h-4 text-[#757F95] absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#757F95] mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="(555) 234-5678"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F7F7F0] border border-[#E2E8F0] text-sm font-medium focus:ring-2 focus:ring-[#C399FF] focus:outline-none"
                  />
                  <Phone className="w-4 h-4 text-[#757F95] absolute left-3.5 top-3" />
                </div>
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#C399FF] hover:bg-[#D7BAFF] text-[#1D273F] font-bold text-base transition-all duration-200 shadow-lg shadow-[#C399FF]/30 hover:scale-[1.01] active:scale-[0.99]"
              >
                Confirm Appointment Request
              </button>
              <p className="text-center text-xs text-[#757F95] mt-2">
                No credit card required. Our team will send SMS confirmation within 15 minutes.
              </p>
            </div>
          </form>
        ) : (
          <div className="p-8 sm:p-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1D273F] mb-1.5">
                Appointment Requested!
              </h3>
              <p className="text-sm text-[#757F95] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#1D273F]">{formData.name || "Patient"}</strong>! We have reserved your provisional spot for{" "}
                <span className="font-semibold text-[#1D273F]">{formData.service}</span> with{" "}
                <span className="font-semibold text-[#1D273F]">{formData.doctor}</span>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F7F0] text-left text-xs space-y-1.5 max-w-xs mx-auto border border-[#E2E8F0]">
              <p><span className="text-[#757F95]">Date:</span> <span className="font-bold">{formData.date || "Next available"}</span></p>
              <p><span className="text-[#757F95]">Time:</span> <span className="font-bold">{formData.time}</span></p>
              <p><span className="text-[#757F95]">Contact:</span> <span className="font-bold">{formData.email}</span></p>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-[#1D273F] text-white font-semibold text-sm hover:bg-[#2D3C5A] transition-colors"
            >
              Done & Return to Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
