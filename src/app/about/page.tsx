"use client";
import { motion } from "framer-motion"; // The Effects Engine
import { Users, ShieldCheck, Zap, Trophy, UserCheck, Briefcase, Activity, ArrowRight } from "lucide-react";

export default function About() {
  const stats = [
    { value: "99.2%", label: "CSAT Rating", icon: <Trophy className="w-5 h-5 text-[#f97316]" /> },
    { value: "24/7/365", label: "Live Operations", icon: <Zap className="w-5 h-5 text-[#f97316]" /> },
    { value: "100k+", label: "Daily Minutes Handled", icon: <Users className="w-5 h-5 text-[#f97316]" /> },
    { value: "99.99%", label: "Telecom Uptime", icon: <ShieldCheck className="w-5 h-5 text-[#f97316]" /> },
  ];

  const executiveTeam = [
    {
      name: "Brian Coner",
      role: "Chief Executive Officer",
      bio: "15+ years of leadership, directing macro vision and global expansion for Mastermind Tech.",
      icon: <UserCheck className="w-6 h-6 text-[#f97316]" />,
    },
    {
      name: "Jam Irfan",
      role: "Chief Operating Officer",
      bio: "Infrastructure Architect ensuring high-fidelity delivery across all primary dialer configurations.",
      icon: <Briefcase className="w-6 h-6 text-[#f97316]" />,
    },
    {
      name: "Abdul Rehman",
      role: "General Manager",
      bio: "Workforce expert commanding daily workflows and conversion performance optimization loops.",
      icon: <Activity className="w-6 h-6 text-[#f97316]" />,
    }
  ];

  // Animation Variants for Effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0c10] pt-32 pb-24 text-white font-sans">
      
      {/* SECTION 1: MATTE HERO (Fades in from top) */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeInUp}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12"
      >
        <div className="w-full bg-[#111217] border border-white/[0.03] rounded-3xl p-8 sm:p-20 text-center space-y-6 shadow-2xl">
          <motion.span variants={fadeInUp} className="text-xs font-bold tracking-widest text-[#f97316] uppercase px-4 py-1.5 bg-[#f97316]/5 rounded-full border border-[#f97316]/10 inline-block">
            Corporate Profile
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl font-black tracking-tight">
            About <span className="text-[#f97316]">Mastermind Tech</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Building the future of call center infrastructure. Strategic leadership meets 
            unrivaled teamwork to deliver enterprise-tier customer acquisitions.
          </motion.p>
        </div>
      </motion.section>

      {/* SECTION 2: STATS (Horizontal Pop Effect) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-[#111217] border border-white/[0.03] rounded-2xl p-6 sm:p-8">
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="flex items-center gap-4 p-2 border-r border-white/[0.02] last:border-0">
              <div className="p-3 bg-white/[0.01] rounded-xl border border-white/[0.03] text-[#f97316]">
                {stat.icon}
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 3: LEADERSHIP (Staggered Card Effect) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black">Meet Our <span className="text-[#f97316]">Leadership</span></h2>
          <div className="w-12 h-1 bg-[#f97316] mx-auto mt-4" />
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {executiveTeam.map((leader, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }} // Hover effect
              className="bg-[#111217] border border-white/[0.03] rounded-2xl p-8 flex flex-col items-center text-center group"
            >
              {/* Profile Image Slot */}
              <div className="w-32 h-32 bg-[#0b0c10] border-2 border-[#f97316]/20 rounded-full mb-6 overflow-hidden flex items-center justify-center group-hover:border-[#f97316] transition-colors">
                 <Users className="w-12 h-12 text-slate-700" />
              </div>
              
              <h3 className="text-2xl font-black group-hover:text-[#f97316] transition-colors">{leader.name}</h3>
              <p className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-4">{leader.role}</p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{leader.bio}</p>
              
              <button className="mt-6 text-slate-500 group-hover:text-white flex items-center gap-2 text-xs font-bold transition-all">
                VIEW PROFILE <ArrowRight size={12} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}