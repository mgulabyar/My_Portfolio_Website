/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Terminal, Cpu, CheckCircle } from 'lucide-react';
// Profile image import
import profileImg from '../../assets/profile.png';

export default function Hero() {
  // Slow-Smooth cubic-bezier custom transitions (1.5s to 2s)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.4 }
    }
  };

  const slowSlideLeft = {
    hidden: { opacity: 0, x: -70 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const slowSlideRight = {
    hidden: { opacity: 0, x: 70 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const slowSlideUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full"
      >
        
        {/* LEFT COLUMN (5 cols): Large Profile Image with glowing border */}
        <motion.div 
          variants={slowSlideLeft}
          className="lg:col-span-5 flex justify-center relative group"
        >
          {/* Cosmic glowing pulsing backdrop glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-amber/10 rounded-2xl blur-3xl animate-pulse"></div>
          
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 hover:border-brand-orange/40 shadow-glow-soft hover:shadow-glow-orange transition-all duration-700 ease-out p-1.5 bg-slate-900/40">
            <img 
              src={profileImg} 
              alt="Muhammad Gulab Yar" 
              className="w-full h-auto object-cover rounded-xl filter brightness-[0.95] group-hover:brightness-100 transition-all duration-700" 
              onError={(e) => {
                // If user hasn't added profile.png yet, display a placeholder
                e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
              }}
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN (7 cols): Enterprise Text & Expertise Cards Grid */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          
          {/* Animated Badge */}
          <motion.div 
            variants={slowSlideRight}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold max-w-max"
          >
            <Terminal className="h-3.5 w-3.5" />
            Available for Enterprise Freelance Projects
          </motion.div>

          {/* Premium Balanced Weight Title */}
          <motion.h1 
            variants={slowSlideRight}
            className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.15] tracking-tight"
          >
            Building Intelligent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-orange to-brand-amber filter drop-shadow-[0_0_12px_rgba(255,85,0,0.15)]">
              Web & Automation
            </span> <br />
            Ecosystems.
          </motion.h1>

          {/* Premium description */}
          <motion.p 
            variants={slowSlideUp}
            className="text-base text-slate-400 max-w-xl leading-relaxed"
          >
            I am a Full-Stack Web Developer with 4 years of solid experience crafting MERN applications, customized MS Office/Google Workspace Add-ins, complex VBA/Macros, and seamless AI integrations.
          </motion.p>

          {/* Dynamic Service Grid (Replaced the generic card with multi-column specialties) */}
          <motion.div 
            variants={slowSlideUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2"
          >
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/20 transition-all duration-300">
              <div className="flex items-center gap-2 text-brand-orange mb-1">
                <Code2 className="h-4 w-4" />
                <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">Full-Stack Development</h3>
              </div>
              <p className="text-xs text-slate-400">Scalable, robust MERN & Next.js dynamic custom architectures.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/20 transition-all duration-300">
              <div className="flex items-center gap-2 text-brand-orange mb-1">
                <Cpu className="h-4 w-4" />
                <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">Workspace Automation</h3>
              </div>
              <p className="text-xs text-slate-400">Sleek custom MS Office (Office.js) & Google Workspace Add-ons.</p>
            </div>
          </motion.div>

          {/* Shorter, highly professional CTA Buttons */}
          <motion.div 
            variants={slowSlideUp}
            className="flex flex-wrap items-center gap-4 mt-3"
          >
            <button className="px-5 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-sm tracking-wide shadow-glow-orange transition-all duration-300 flex items-center gap-2 group cursor-pointer hover:-translate-y-0.5">
              Hire Me Today
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] transition-transform duration-300" />
            </button>
            
            <button className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm tracking-wide transition-all duration-300 cursor-pointer hover:-translate-y-0.5">
              View Portfolio
            </button>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}