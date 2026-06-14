import React from 'react';
import { motion } from 'framer-motion';
import expertiseImg from '../../assets/expertise.png';

export default function Expertise() {
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
      transition: { duration: 1.6, ease: [0.25, 0.8, 0.25, 1] as const }
    }
  };

  const slowSlideRight = {
    hidden: { opacity: 0, x: 70 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1.6, ease: [0.25, 0.8, 0.25, 1] as const }
    }
  };

  return (
    <section id="expertise" className="pt-24 pb-8 sm:pt-32 sm:pb-12 lg:pt-40 lg:pb-16 flex flex-col justify-between select-none border-t border-white/5">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full px-6 md:px-12"
      >
        <div className="lg:col-span-7 flex flex-col gap-5">
          <motion.h2 
            variants={slowSlideLeft}
            className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight"
          >
            My Technical <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange to-brand-amber">
              Expertise & Core Skills
            </span>
          </motion.h2>

          <motion.p 
            variants={slowSlideLeft}
            className="text-base text-slate-400 max-w-2xl leading-relaxed font-light"
          >
            With over 4 years of dedicated industry experience, I specialize in architecting highly scalable full-stack web platforms and engineering secure workspace extensions. I design advanced MS Office Add-ins, Google Workspace add-ons, and dynamic background VBA/Macros that directly optimize enterprise workflows and eliminate thousands of lost manual work hours.
          </motion.p>

          <motion.div 
            variants={slowSlideLeft}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 border-t border-white/5 pt-6"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Full Stack Web Development</span>
              {/* <span className="text-xs text-slate-400 font-light leading-relaxed">High-fidelity custom VBA script engineering, complex data modeling, and automated calculations.</span> */}
            </div>
            
            <div className="flex">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Cross-Platform Office Add-ins</span>
              {/* <span className="text-xs text-slate-400 font-light leading-relaxed">Web-powered Microsoft Office integrations for Outlook, Word, and Excel using Office.js.</span> */}
            </div>

            <div className="flex">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">Google Workspace Automation</span>
              {/* <span className="text-xs text-slate-400 font-light leading-relaxed">Tailored Google Workspace Apps Script additions and automations for Gmail, Sheets, and Docs.</span> */}
            </div>

            <div className="flex">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">AI API Integrations</span>
              {/* <span className="text-xs text-slate-400 font-light leading-relaxed">Connecting advanced OpenAI GPT intelligence models seamlessly with secure custom cloud servers.</span> */}
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={slowSlideRight}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="absolute -z-10 animate-pulse"></div>
          <div className="">
            <img 
              src={expertiseImg} 
              alt="Expertise and Skills" 
              className="w-full h-auto" 
              onError={(e) => {
                e.currentTarget.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTV6ajZqYml2ajIxdXpqdjEydzhwOHp3dHYzajZpOXMxbzh0bXZ4cyZjdD1n/dhovVfEDgq864Tq9O0/giphy.gif";
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}