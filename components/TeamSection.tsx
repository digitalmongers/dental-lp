import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface TeamSectionProps {
  onOpenBooking: () => void;
}

const doctors = [
  {
    name: "Dr. Matt Cannon",
    role: "Periodontist",
    image: "/images/doctor_matt.png",
    bio: "Specializing in gum health and dental implants with over 12 years of clinical expertise.",
  },
  {
    name: "Dr. Sahara Smith",
    role: "Endodontist",
    image: "/images/doctor_sahara.png",
    bio: "Painless root canal therapy and microscopic tooth preservation specialist.",
  },
  {
    name: "Dr. Peter Johnson",
    role: "Prosthodontist",
    image: "/images/doctor_peter.png",
    bio: "Expert in restorative dental aesthetics, crowns, bridges, and complete smile makeovers.",
  },
  {
    name: "Dr. John Carter",
    role: "General Dentist",
    image: "/images/doctor_john.png",
    bio: "Dedicated to comprehensive preventive oral wellness and gentle patient-focused care.",
  },
  {
    name: "Dr. Sophie Moore",
    role: "Orthodontist",
    image: "/images/doctor_sophie.png",
    bio: "Certified clear aligner specialist helping children and adults achieve perfect alignment.",
  },
];

export default function TeamSection({ onOpenBooking }: TeamSectionProps) {
  return (
    <section id="team" className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Intro Card */}
        <div className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#E4E7EC] shadow-sm lg:sticky lg:top-28">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#AA6EFF] mb-2 block">
              Certified Specialists
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#1D273F] leading-tight mb-4">
              Meet our{" "}
              <span className="text-[#AA6EFF] italic font-serif sm:font-normal font-medium">
                wonderful team
              </span>
            </h2>
            <p className="text-base text-[#757F95] leading-relaxed mb-8">
              Enim turpis in rhoncus turpis neque morbi nunc porttitor sollicitudin egestas sodales
              est orci. Our board-certified specialists blend gentle touch with world-class skill.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-[#C399FF] hover:bg-[#D7BAFF] text-[#1D273F] font-semibold text-sm transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Book an appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-center text-[#757F95]">
              Consultations available Monday – Saturday
            </p>
          </div>
        </div>

        {/* Right Doctor Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {doctors.map((doctor, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Doctor Portrait */}
              <div className="relative aspect-[3/3.6] w-full overflow-hidden bg-[#E2E8F0]">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                {/* Role Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/95 text-[#1D273F] shadow-sm backdrop-blur-sm border border-black/5">
                    {doctor.role}
                  </span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-[#1D273F] mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-[#757F95] leading-relaxed line-clamp-2">
                    {doctor.bio}
                  </p>
                </div>

                {/* Social icons */}
                <div className="pt-3 border-t border-[#EEF2F6] flex items-center justify-between text-[#757F95]">
                  <div className="flex items-center gap-1 text-[#757F95]">
                    <button
                      className="p-1.5 rounded-lg hover:bg-[#F8F2FF] hover:text-[#AA6EFF] transition-colors"
                      aria-label={`${doctor.name} on LinkedIn`}
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </button>
                    <button
                      className="p-1.5 rounded-lg hover:bg-[#F8F2FF] hover:text-[#AA6EFF] transition-colors"
                      aria-label={`${doctor.name} on X`}
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    <button
                      className="p-1.5 rounded-lg hover:bg-[#F8F2FF] hover:text-[#AA6EFF] transition-colors"
                      aria-label={`${doctor.name} on Instagram`}
                    >
                      <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    </button>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-[#AA6EFF] hover:underline"
                  >
                    Schedule
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
