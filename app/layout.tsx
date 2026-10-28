import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dentalflow — Dental Clinic & Modern Oral Healthcare",
  description: "Creating confident smiles every day. High-end modern dental clinic with friendly care, advanced technology, and proven results.",
  keywords: ["dental clinic", "teeth whitening", "orthodontics", "pediatric dentistry", "cosmetic dentistry", "Dentalflow"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased scroll-smooth", rethinkSans.variable)}>
      <body className="min-h-full flex flex-col bg-[#F7F7F0] text-[#1D273F] font-sans selection:bg-[#C399FF] selection:text-[#1D273F]">
        {children}
      </body>
    </html>
  );
}
