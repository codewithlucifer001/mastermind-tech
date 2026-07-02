"use client";
import { Shield, HeartPulse, Car, Briefcase, Heart, BellRing } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      title: "ACA Medical Insurance",
      desc: "Comprehensive health coverage options matching Affordable Care Act guidelines. We streamline customer enrollment cycles with absolute structural precision.",
      icon: <Shield className="w-6 h-6 text-[#f97316]" />,
      label: "ACA Health",
      bgImg: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Medicare Health Insurance",
      desc: "Premium, multi-vertical guidance structures for senior care coverage, parts A/B/D tracking, and supplementary insurance acquisition lines.",
      icon: <HeartPulse className="w-6 h-6 text-[#f97316]" />,
      label: "Medicare",
      bgImg: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Auto Insurance",
      desc: "High-volume validation processing setups matching driver parameters with competitive liability, comprehensive, and collision insurance layers.",
      icon: <Car className="w-6 h-6 text-[#f97316]" />,
      label: "Auto",
      bgImg: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Business Insurance",
      desc: "Architectural risk mitigation for enterprise environments. Scale protection coverage strings over commercial liability, property, and fleet assets.",
      icon: <Briefcase className="w-6 h-6 text-[#f97316]" />,
      label: "Commercial",
      bgImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Final Expense",
      desc: "Delivering dedicated, compassionate campaign routing infrastructure processing legacy protection and final arrangement preparation arrays.",
      icon: <Heart className="w-6 h-6 text-[#f97316]" />,
      label: "Final Expense",
      bgImg: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Med Alert Solutions",
      desc: "Elevating round-the-clock emergency support connectivity channels and automated medical telemetry response handler solutions.",
      icon: <BellRing className="w-6 h-6 text-[#f97316]" />,
      label: "Med Alert",
      bgImg: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      
      {/* Header Info Blocks */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
        <span className="text-xs font-extrabold tracking-widest text-[#f97316] uppercase px-3 py-1 bg-[#f97316]/10 rounded-full border border-[#f97316]/20">
          Insurance Marketplace Verticals
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          What Solutions We Provide
        </h2>
        <div className="w-12 h-1 bg-[#f97316] mx-auto mt-2 rounded-full" />
      </div>

      {/* Stunning Glass Cards Array */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((srv, idx) => (
          <div 
            key={idx} 
            className="group relative bg-black/20 border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#f97316]/40 shadow-2xl flex flex-col justify-between"
          >
            {/* Upper Glassmorphic Description Compartment */}
            <div className="p-8 space-y-4 relative z-10 bg-gradient-to-b from-[#111217]/90 to-[#111217]/40 backdrop-blur-md">
              <div className="p-3 bg-white/[0.02] w-fit rounded-xl border border-white/[0.05] group-hover:bg-[#f97316] transition-all duration-300">
                <div className="group-hover:scale-110 group-hover:text-white transition-transform duration-300">
                  {srv.icon}
                </div>
              </div>
              <h3 className="text-xl font-black text-white group-hover:text-[#f97316] transition-colors duration-300 leading-tight">
                {srv.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light min-h-[72px]">
                {srv.desc}
              </p>
            </div>

            {/* Premium High-Fidelity Asset Image Container Layer */}
            <div 
              className="relative h-48 w-full bg-cover bg-center border-t border-white/[0.04] transition-all duration-500 overflow-hidden"
              style={{ backgroundImage: `url('${srv.bgImg}')` }}
            >
              {/* Dynamic Deep Darkening Gradients and Hover State Triggers */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111217] via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-40" />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}