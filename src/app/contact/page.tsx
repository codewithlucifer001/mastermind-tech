"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // High-fidelity SVG paths matching exact brand guidelines
  const socialChannels = [
    {
      name: "LinkedIn",
      label: "Connect Professionally",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      label: "Follow our Updates",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      label: "See our Workspace",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      )
    },
    {
      name: "X (Twitter)",
      label: "Platform Updates",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "TikTok",
      label: "Watch Media Feeds",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31.01 2.61.01 3.91.02.08 1.53.63 3.05 1.62 4.2 1.22 1.4 3 2.2 4.9 2.3v3.8c-1.38-.03-2.73-.44-3.91-1.21-.31-.22-.61-.47-.89-.73v6.78c.01 4.08-2.5 7.91-6.55 8.71-4.81.99-9.53-2.12-10.43-6.93C.25 12.38 3 7.6 7.82 6.78c1.1-.19 2.23-.12 3.3.2v3.9c-.83-.41-1.78-.52-2.67-.3-1.84.44-3.04 2.25-2.75 4.13.33 2.11 2.41 3.49 4.5 3.03 1.51-.31 2.56-1.68 2.53-3.22V.02z"/>
        </svg>
      )
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen bg-[#0b0c10] pt-32 pb-24 text-white font-sans">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeInUp}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12"
      >
        <div className="w-full bg-[#111217] border border-white/[0.03] rounded-3xl p-8 sm:p-16 text-center space-y-4 shadow-2xl">
          <span className="text-xs font-bold tracking-widest text-[#f97316] uppercase px-4 py-1.5 bg-[#f97316]/5 rounded-full border border-[#f97316]/10 inline-block">
            Secure Communications
          </span>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white">
            Initialize <span className="text-[#f97316]">Connection</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            Establish zero-friction communications with our talent operations, technical desks, and corporate acquisition branches globally.
          </p>
        </div>
      </motion.section>

      {/* 2. SPLIT LAYOUT CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT AXIS: INFO & BRAND ACCURATE SOCIALS */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#111217] border border-white/[0.03] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-white/[0.03] pb-3">
                Operational Hotlines
              </h3>
              
              <div className="space-y-4 text-sm font-light text-slate-300">
                <a href="tel:+923069359477" className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:border-[#f97316]/30 transition-all group">
                  <div className="p-2.5 bg-white/[0.02] border border-white/[0.05] rounded-lg text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Voice Operations</p>
                    <span className="text-sm font-semibold text-white">+92 306 9359477</span>
                  </div>
                </a>

                <a href="mailto:mastermindtech@gmail.com" className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:border-[#f97316]/30 transition-all group">
                  <div className="p-2.5 bg-white/[0.02] border border-white/[0.05] rounded-lg text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Corporate Intake</p>
                    <span className="text-sm font-semibold text-white">mastermindtech@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                  <div className="p-2.5 bg-white/[0.02] border border-white/[0.05] rounded-lg text-[#f97316] shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">HQ Location</p>
                    <span className="text-sm leading-relaxed text-slate-300 font-light">Office # 7, 1st Floor, Maryam Business Center, Rawalpindi, 44300</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Social Feed Grid Container */}
            <div className="bg-[#111217] border border-white/[0.03] rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-white">
                Social Data Networks
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {socialChannels.map((channel, idx) => (
                  <a 
                    key={idx} 
                    href={channel.href} 
                    className="flex items-center justify-between p-3 bg-white/[0.01] border border-white/[0.03] rounded-xl hover:bg-white/[0.02] hover:border-[#f97316]/20 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/[0.02] border border-white/[0.04] rounded-lg text-slate-400 group-hover:text-[#f97316] transition-colors">
                        {channel.svg}
                      </div>
                      <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                        {channel.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 group-hover:text-[#f97316] font-bold tracking-wider uppercase transition-colors">
                      {channel.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT AXIS: INTAKE FORM */}
          <div className="lg:col-span-7">
            <div className="bg-[#111217] border border-white/[0.03] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">
              
              <div className="border-b border-white/[0.03] pb-4">
                <h3 className="text-xl font-black text-white">Transmission Terminal</h3>
                <p className="text-xs text-slate-400 font-light mt-1">Fields route securely to administrative desks via end-to-end telemetry strings.</p>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-[#f97316]/5 border border-[#f97316]/20 rounded-xl text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-[#f97316] mx-auto" />
                  <h4 className="text-lg font-bold text-white">Transmission Successful</h4>
                  <p className="text-slate-400 text-xs font-light">Data packets received. Mastermind Tech handlers will reply within 24 business hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Full Operational Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter identity..." 
                      className="w-full bg-[#0b0c10] border border-white/[0.05] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f97316] transition-colors" 
                      required 
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Secure Email</label>
                      <input 
                        type="email" 
                        placeholder="client@domain.com" 
                        className="w-full bg-[#0b0c10] border border-white/[0.05] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f97316] transition-colors" 
                        required 
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Active Mobile Baseline</label>
                      <input 
                        type="tel" 
                        placeholder="+92 000 0000000" 
                        className="w-full bg-[#0b0c10] border border-white/[0.05] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f97316] transition-colors" 
                        required 
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Project Parameters / Transmission Description</label>
                    <textarea 
                      rows={5} 
                      placeholder="Outline operational queries or project objectives precisely..." 
                      className="w-full bg-[#0b0c10] border border-white/[0.05] rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#f97316] transition-colors resize-none" 
                      required 
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#f97316]/10 flex items-center justify-center gap-2"
                  >
                    <Send size={12} />
                    <span>Deploy Secure Transmission</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}