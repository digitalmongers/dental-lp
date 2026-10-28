"use client";

import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#1D273F] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        {/* Header */}
        <div className="p-4 px-6 flex items-center justify-between border-b border-white/10 text-white">
          <span className="font-semibold text-sm">Dentalflow Clinic Tour & Patient Experience</span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Embed / Responsive Container */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Dentalflow Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
