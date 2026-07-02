"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Clock, MapPin, ShieldCheck, HeartPulse, HardDrive, Send, FileText } from "lucide-react";

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      title: "US Healthcare Campaign Specialist (ACA/Medicare)",
      type: "Full-Time",
      location: "Rawalpindi / Islamabad Office",
      timing: "Night Shift (US EST Hours)",
      desc: "Drive frontend customer acquisitions across major US health marketplace verticals. Requires expert command of spoken English and a strong background in campaign conversion tracking.",
      icon: <HeartPulse className="w-6 h-6 text-[#f97316]" />
    },
    {
      title: "Quality Assurance & Compliance Analyst",
      type: "Full-Time",
      location: "On-Site Operations Center",
      timing: "Night Shift (US EST Hours)",
      desc: "Audit operational call logs, manage script adherence, and track compliance metrics to guarantee flawless lead validation pipelines for our US healthcare partners.",
      icon: <ShieldCheck className="w-6 h-6 text-[#f97316]" />
    },
    {
      title: "Telecom Infrastructure & Dialer Engineer",
      type: "Full-Time / Rotation",
      location: "Hybrid / On-Site Network Room",
      timing: "Flexible Shift Handling",
      desc: "Maintain server configurations, manage VICIdial / telecommunication infrastructure arrays, and optimize trunk routes to ensure our 99.99% uptime benchmark remains flawless.",
      icon: <HardDrive className="w-6 h-6 text-[#f97316]" />
    }
  ];

  // Motion animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <main className="min-h-screen bg-[#0b0c10] pt-32 pb-24 text-white">
      
      {/* 1. HERO SECTION: Clean Matte Presentation */}
      <motion.section 
        initial="hidden" animate="visible" variants={fadeInUp}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12"
      >
        <div className="w-full bg-[#111217] border border-white/[0.03] rounded-3xl p-8 sm:p-20 text-center space-y-6 shadow-2xl">
          <span className="text-xs font-bold tracking-widest text-[#f97316] uppercase px-4 py-1.5 bg-[#f97316]/5 rounded-full border border-[#f97316]/10 inline-block">
            Join Our Ranks
          </span>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white">
            Careers with <span className="text-[#f97316]">Mastermind</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Join our operations center lines to optimize campaign routing channels globally. 
            We build high-performance environments where top-tier talent commands enterprise infrastructure.
          </p>
        </div>
      </motion.section>

      {/* 2. LIVE OPENINGS GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#f97316] uppercase px-3 py-1.5 bg-[#f97316]/5 rounded-full border border-[#f97316]/10 inline-block">
            Active Vacancies
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Explore Open Operations Positions
          </h2>
          <div className="w-12 h-1 bg-[#f97316] mx-auto mt-3 rounded-full" />
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {jobs.map((job, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#111217] border border-white/[0.03] rounded-2xl p-8 shadow-xl flex flex-col justify-between transition-all duration-300 hover:border-[#f97316]/20"
            >
              <div className="space-y-5">
                <div className="p-3.5 bg-white/[0.02] w-fit rounded-xl border border-white/[0.04]">
                  {job.icon}
                </div>
                
                <h3 className="text-xl font-black text-white leading-snug min-h-[56px]">
                  {job.title}
                </h3>
                
                <div className="space-y-2.5 text-xs text-slate-400 font-light border-t border-b border-white/[0.03] py-4">
                  <div className="flex items-center gap-2"><Briefcase size={14} className="text-[#f97316]" /> <span>{job.type}</span></div>
                  <div className="flex items-center gap-2"><MapPin size={14} className="text-[#f97316]" /> <span>{job.location}</span></div>
                  <div className="flex items-center gap-2"><Clock size={14} className="text-[#f97316]" /> <span>{job.timing}</span></div>
                </div>

                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  {job.desc}
                </p>
              </div>

              <a 
                href="#apply-form" 
                className="mt-8 w-full text-center py-3 bg-white/[0.02] border border-white/[0.06] rounded-xl text-xs font-bold uppercase tracking-wider text-white hover:bg-[#f97316] hover:border-[#f97316] transition-colors"
              >
                Apply For Position
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. APPLICATION INTAKE FORM SYSTEM */}
      <section id="apply-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-[#111217] border border-white/[0.03] rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-white">Submit Your Application</h3>
            <p className="text-slate-400 text-sm font-light">Accelerate your profile directly to our talent acquisition desk.</p>
          </div>

          {submitted ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="p-8 bg-[#f97316]/5 border border-[#f97316]/20 rounded-xl text-center space-y-3"
            >
              <FileText className="w-12 h-12 text-[#f97316] mx-auto" />
              <h4 className="text-lg font-bold text-white">Application Successfully Transmitted!</h4>
              <p className="text-slate-400 text-xs font-light">Our administrative operations branch will reach out within 48 business hours.</p>
            </motion.div>
          ) : (
            <form 
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} 
              className="space-y-5 pt-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-[#0b0c10] border border-white/[0.06] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f97316] transition-colors" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                  <input type="email" placeholder="johndoe@example.com" className="w-full bg-[#0b0c10] border border-white/[0.06] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f97316] transition-colors" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Target Position</label>
                <select className="w-full bg-[#0b0c10] border border-white/[0.06] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f97316] text-slate-400 transition-colors" required>
                  <option value="">Select a role...</option>
                  <option value="healthcare">US Healthcare Campaign Specialist</option>
                  <option value="qa">Quality Assurance & Compliance Analyst</option>
                  <option value="telecom">Telecom Infrastructure & Dialer Engineer</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Cover Note / Brief Experience Profile</label>
                <textarea rows={4} placeholder="Summarize your historical campaign handling or operational backgrounds..." className="w-full bg-[#0b0c10] border border-white/[0.06] rounded-xl p-4 text-sm focus:outline-none focus:border-[#f97316] transition-colors resize-none" required></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold rounded-xl text-sm uppercase tracking-wider transition-colors shadow-lg shadow-[#f97316]/10 flex items-center justify-center gap-2"
              >
                <Send size={14} />
                <span>Submit Secure Application</span>
              </button>
            </form>
          )}
        </div>
      </section>

    </main>
  );
}