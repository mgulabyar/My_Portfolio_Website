import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import aboutGif from '../../assets/about.gif';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 }
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

  return (
    <section id="about" className="py-20 border-t border-white/5">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full"
      >
        <div className="lg:col-span-7 flex flex-col gap-5">
          <motion.div 
            variants={slowSlideLeft}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold max-w-max"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Optimized Automated Solutions
          </motion.div>

          <motion.h2 
            variants={slowSlideLeft}
            className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight"
          >
            Bringing Speed & Precision Through <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange to-brand-amber">
              Custom Automation
            </span>
          </motion.h2>

          <motion.p 
            variants={slowSlideLeft}
            className="text-base text-slate-400 max-w-2xl leading-relaxed"
          >
            My development philosophy is focused on eliminating repetitive business processes. I build seamless, reliable connections between database pipelines, custom script macros, and high-performance frontend interfaces.
          </motion.p>

          <motion.div 
            variants={slowSlideLeft}
            className="flex flex-col gap-3 mt-2"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
              <span className="text-sm font-medium text-slate-200">Robust MS Office Add-ins built with JavaScript (Office.js)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
              <span className="text-sm font-medium text-slate-200">Custom Google Workspace Add-ons & Gmail Automations</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
              <span className="text-sm font-medium text-slate-200">AI-driven API integrations with ChatGPT and serverless systems</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={slowSlideRight}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-2xl animate-pulse"></div>
          <div className="relative w-full max-w-85 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-orange/40 shadow-glow-soft hover:shadow-glow-orange transition-all duration-700 ease-out p-1 bg-slate-900/40">
            <img 
              src={aboutGif} 
              alt="Automation Workflow" 
              className="w-full h-auto object-cover rounded-xl brightness-[0.95]" 
              onError={(e) => {
                e.currentTarget.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3p0eDZzMHZscjM4eTdqYzNhdjMyZXpxczVqdndpcTV5aGFzMHlzNSZjdD1n/qgQUggAC3PfvGTJVPQ/giphy.gif";
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}