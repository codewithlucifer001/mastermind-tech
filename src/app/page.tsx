import ServicesGrid from "@/components/ServicesGrid";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0c10] overflow-hidden relative">
      
      {/* Background Hero Section Canvas */}
      <section 
        className="relative pt-40 pb-32 flex flex-col items-center justify-center px-4 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/office-bg.avif')` }}
      >
        <div className="absolute inset-0 bg-black/55 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#f97316]/10 rounded-full blur-[140px] pointer-events-none z-10" />

        {/* Central Frosted Glass Dashboard Card Container */}
        <div className="relative z-20 max-w-5xl mx-auto w-full bg-black/25 backdrop-blur-xl border border-white/[0.08] rounded-[32px] p-8 sm:p-16 shadow-2xl text-center space-y-6">
          
          {/* Activated Option 2 Slogan Variant Text Block Layout */}
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white">
            Scale Customer Connections Through <br />
            Seamless <span className="bg-gradient-to-r from-[#f97316] to-amber-500 bg-clip-text text-transparent">Teamwork and Strategic Leadership.</span>
          </h1>
          
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Transform customer interactions with our expert development & telecom solutions. 
            Join forces with Mastermind Tech for exceptional service and growth.
          </p>
          
          <div className="pt-4 flex justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-[#f97316]/20 flex items-center gap-2 group cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      {/* Asymmetrical Curve Wave Breakdown Layer */}
      <div className="w-full relative -mb-1 pointer-events-none overflow-hidden h-24 z-10">
        <svg className="absolute bottom-0 w-full h-full text-[#111217] fill-current" viewBox="0 0 1440 74" preserveAspectRatio="none">
          <path d="M0,32 C240,70 480,74 720,52 C960,30 1200,-18 1440,8 L1440,74 L0,74 Z"></path>
        </svg>
      </div>

      {/* Services Content Section Array */}
      <div className="relative bg-[#111217] z-20">
        <div className="w-full relative -mt-24 pointer-events-none overflow-hidden h-24 transform rotate-180">
          <svg className="absolute bottom-0 w-full h-full text-[#0b0c10] fill-current" viewBox="0 0 1440 74" preserveAspectRatio="none">
            <path d="M0,32 C240,70 480,74 720,52 C960,30 1200,-18 1440,8 L1440,74 L0,74 Z"></path>
          </svg>
        </div>
        <ServicesGrid />
      </div>

    </main>
  );
}