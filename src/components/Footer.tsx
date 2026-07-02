"use client";
import Link from "next/link";
import { Phone, MapPin, Send, Globe, Share2, Link2, Compass, ShieldAlert } from "lucide-react";

export default function Footer() {
  const popularLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Center", href: "/contact" },
    { name: "Privacy Infrastructure", href: "#" },
  ];

  // US Compliance Certifications replacing the old Project Gallery grid
  const complianceBadges = [
    { title: "HIPAA Certified", subtitle: "Patient Data Security" },
    { title: "TCPA Compliant", subtitle: "Safe Dialing Protocols" },
    { title: "CMS Guidelines", subtitle: "Medicare/ACA Aligned" },
    { title: "ISO 27001", subtitle: "Data Asset Protection" },
    { title: "SOC 2 Type II", subtitle: "Operational Oversight" },
    { title: "PCI Compliant", subtitle: "Secure Processing" },
  ];

  return (
    <footer className="w-full bg-[#111217] border-t border-white/[0.03] text-white/80 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* COLUMN 1: CORPORATE GET IN TOUCH */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#f97316]">
            Get In Touch
          </h4>
          <div className="space-y-3.5 text-sm font-light text-slate-400">
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-[#f97316] shrink-0 mt-0.5" />
              <span className="leading-relaxed">Office # 7, 1st Floor, Maryam Business Center, Rawalpindi, 44300</span>
            </div>
            <a href="tel:+923069359477" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Phone size={16} className="text-[#f97316] shrink-0" />
              <span>+92 306 9359477</span>
            </a>
            <a href="mailto:mastermindtech@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Send size={16} className="text-[#f97316] shrink-0" />
              <span>mastermindtech@gmail.com</span>
            </a>
          </div>
          
          {/* Flat SVG Embedded Social Widgets */}
          <div className="flex gap-2.5 pt-2">
            <a href="#" className="p-2.5 bg-white/[0.01] rounded-xl border border-white/[0.04] text-slate-400 hover:text-[#f97316] hover:border-[#f97316]/20 transition-all"><Globe size={15} /></a>
            <a href="#" className="p-2.5 bg-white/[0.01] rounded-xl border border-white/[0.04] text-slate-400 hover:text-[#f97316] hover:border-[#f97316]/20 transition-all"><Share2 size={15} /></a>
            <a href="#" className="p-2.5 bg-white/[0.01] rounded-xl border border-white/[0.04] text-slate-400 hover:text-[#f97316] hover:border-[#f97316]/20 transition-all"><Link2 size={15} /></a>
            <a href="#" className="p-2.5 bg-white/[0.01] rounded-xl border border-white/[0.04] text-slate-400 hover:text-[#f97316] hover:border-[#f97316]/20 transition-all"><Compass size={15} /></a>
          </div>
          <p className="text-xs font-bold text-white/90 pt-1">Managing Director: Jaam Irfan</p>
        </div>

        {/* COLUMN 2: POPULAR TELEMETRY LINKS */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#f97316] mb-5">
            Popular Links
          </h4>
          <ul className="space-y-3 text-sm font-light text-slate-400">
            {popularLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="hover:text-[#f97316] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[#f97316]/40 group-hover:text-[#f97316] transition-colors">›</span> 
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3: NEW COMPLIANCE & OPERATIONS OVERSIGHT */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#f97316] mb-5 flex items-center gap-1.5">
            <ShieldAlert size={14} className="text-[#f97316]" /> 
            Compliance & Rules
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {complianceBadges.map((badge, idx) => (
              <div 
                key={idx} 
                className="bg-white/[0.01] border border-white/[0.03] rounded-xl p-2.5 text-center flex flex-col justify-center items-center min-h-[58px] transition-all hover:border-[#f97316]/10"
              >
                <span className="text-[11px] font-black text-slate-200 tracking-tight leading-none">
                  {badge.title}
                </span>
                <span className="text-[9px] text-slate-500 font-medium mt-1 leading-none tracking-wide whitespace-nowrap">
                  {badge.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 4: NEWSLETTER INTAKE */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#f97316]">
            Newsletter
          </h4>
          <p className="text-xs font-light text-slate-400 leading-relaxed">
            Subscribe to receive corporate briefs, healthcare marketplace updates, and optimization insights from Mastermind Tech.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center mt-1">
            <input 
              type="email" 
              placeholder="Your Business Email" 
              className="w-full bg-white/[0.01] border border-white/[0.05] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#f97316] transition-colors" 
              required 
            />
            <button 
              type="submit" 
              className="absolute right-1.5 p-2 bg-[#f97316] text-white rounded-lg hover:bg-[#ea580c] transition-colors flex items-center justify-center shadow-md shadow-[#f97316]/10"
            >
              <Send size={12} />
            </button>
          </form>
        </div>

      </div>
      
      {/* GROUND LOWER FOOTER BAR */}
      <div className="w-full border-t border-white/[0.02] py-6 bg-[#0e0f14]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>Copyright © {new Date().getFullYear()} Mastermind Tech Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-6 font-light">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Home</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Cookies</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Help Terminal</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">FAQs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}