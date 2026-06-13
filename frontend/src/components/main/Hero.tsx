import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Terminal, Cpu } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const slideLeftToRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: "easeOut" as const }
    }
  };

  const slideBottomToTop = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut" as const }
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
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div 
            variants={slideLeftToRight}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold max-w-max"
          >
            <Terminal className="h-3.5 w-3.5" />
            Available for Enterprise Freelance Projects
          </motion.div>

          <motion.h1 
            variants={slideLeftToRight}
            className="text-4xl sm:text-6xl font-black text-white leading-[1.1] tracking-tight"
          >
            Building Intelligent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-amber filter drop-shadow-[0_0_15px_rgba(255,85,0,0.2)]">
              Web & Automation
            </span> <br />
            Ecosystems.
          </motion.h1>

          <motion.p 
            variants={slideBottomToTop}
            className="text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            I am a Full-Stack Web Developer with 4 years of solid experience crafting MERN applications, customized MS Office/Google Workspace Add-ins, complex VBA/Macros, and seamless AI integrations.
          </motion.p>

          <motion.div 
            variants={slideBottomToTop}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <button className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-sm tracking-wide shadow-glow-orange transition-all duration-300 flex items-center gap-2 group cursor-pointer hover:translate-y-[-2px]">
              Hire Me Today
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-transform duration-300" />
            </button>
            <button className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm tracking-wide transition-all duration-300 cursor-pointer hover:translate-y-[-2px]">
              View Portfolio
            </button>
          </motion.div>
        </div>

        <motion.div 
          variants={slideBottomToTop}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-2xl"></div>
          <div className="relative w-full max-w-md rounded-2xl bg-slate-900/60 border border-white/10 p-6 backdrop-blur-sm shadow-2xl hover:border-brand-orange/30 transition-all duration-500 group shadow-glow-soft">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs text-slate-500 font-mono">yardev_engine.json</span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Code2 className="h-5 w-5 text-brand-orange mt-1 shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-brand-orange transition-colors duration-300">Full-Stack Development</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Scalable MERN & Next.js dynamic architectures.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-white/5 pt-4">
                <Cpu className="h-5 w-5 text-brand-orange mt-1 shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-brand-orange transition-colors duration-300">Workspace Automation</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Custom MS Office (Office.js) & Google Add-ons.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}