"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 bg-[#0b0c10]/40 backdrop-blur-md border border-white/[0.08] rounded-2xl transition-all duration-300 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* High-Fidelity Clean Mastermind Tech Logo Vector */}
          <Link href="/" className="text-lg font-black tracking-wider text-white flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
              {/* Outer Sharp Brand Ring */}
              <div className="absolute inset-0 border-2 border-[#f97316] rounded-full" />
              {/* Inner Concentric Circle Accent */}
              <div className="absolute inset-[3px] border border-[#f97316]/40 rounded-full" />
              {/* Geometric Core 'M' Vector Placement */}
              <svg 
                className="w-4 h-4 text-white relative z-10 top-[1px] transform group-hover:scale-110 transition-transform duration-300" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 20V8l8 7 8-7v12" />
              </svg>
              {/* Upper Leadership Minimal Core Dot Indicator */}
              <div className="absolute top-[6px] w-1.5 h-1.5 bg-[#f97316] rounded-full z-20" />
            </div>
            <span className="font-extrabold tracking-tight">
              MASTERMIND <span className="text-[#f97316]">TECH</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-white/80 hover:text-[#f97316] transition-colors relative py-2 group">
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#f97316] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a href="tel:+923069359477" className="bg-[#f97316] hover:bg-[#ea580c] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md shadow-[#f97316]/10 flex items-center gap-2 transform hover:scale-[1.02]">
              <Phone size={14} />
              <span>Contact Us ↗</span>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0b0c10]/95 backdrop-blur-lg border-t border-white/[0.04] mt-2 rounded-xl px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block py-3 px-4 text-white/70 hover:text-[#f97316] hover:bg-[#111217] rounded-xl font-medium transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}