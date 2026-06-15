// import React from 'react';
// import { motion } from 'framer-motion';
// import expertiseImg from '../../assets/expertise.png';

// export default function Expertise() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.25, delayChildren: 0.3 }
//     }
//   };

//   const slowSlideLeft = {
//     hidden: { opacity: 0, x: -70 },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       transition: { duration: 1.6, ease: [0.25, 0.8, 0.25, 1] as const }
//     }
//   };

//   const slowSlideRight = {
//     hidden: { opacity: 0, x: 70 },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       transition: { duration: 1.6, ease: [0.25, 0.8, 0.25, 1] as const }
//     }
//   };

//   return (
//     <section id="expertise" className="pt-24 pb-8 sm:pt-32 sm:pb-12 lg:pt-40 lg:pb-16 flex flex-col justify-between select-none border-t border-white/5">
//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full px-6 md:px-12"
//       >
//         <div className="lg:col-span-7 flex flex-col gap-5">
//           <motion.h2 
//             variants={slowSlideLeft}
//             className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight"
//           >
//             My Technical <br />
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange to-brand-amber">
//               Expertise & Core Skills
//             </span>
//           </motion.h2>

//           <motion.p 
//             variants={slowSlideLeft}
//             className="text-base text-slate-400 max-w-2xl leading-relaxed font-light"
//           >
//             With over 4 years of dedicated industry experience, I specialize in architecting highly scalable full-stack web platforms and engineering secure workspace extensions. I design advanced MS Office Add-ins, Google Workspace add-ons, and dynamic background VBA/Macros that directly optimize enterprise workflows and eliminate thousands of lost manual work hours.
//           </motion.p>

//           <motion.div 
//             variants={slowSlideLeft}
//             className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 border-t border-white/5 pt-6"
//           >
//             <div className="flex flex-col gap-1">
//               <span className="text-xs font-semibold text-white uppercase tracking-wider">Full Stack Web Development</span>
//               {/* <span className="text-xs text-slate-400 font-light leading-relaxed">High-fidelity custom VBA script engineering, complex data modeling, and automated calculations.</span> */}
//             </div>
            
//             <div className="flex">
//               <span className="text-xs font-semibold text-white uppercase tracking-wider">Cross-Platform Office Add-ins</span>
//               {/* <span className="text-xs text-slate-400 font-light leading-relaxed">Web-powered Microsoft Office integrations for Outlook, Word, and Excel using Office.js.</span> */}
//             </div>

//             <div className="flex">
//               <span className="text-xs font-semibold text-white uppercase tracking-wider">Google Workspace Automation</span>
//               {/* <span className="text-xs text-slate-400 font-light leading-relaxed">Tailored Google Workspace Apps Script additions and automations for Gmail, Sheets, and Docs.</span> */}
//             </div>

//             <div className="flex">
//               <span className="text-xs font-semibold text-white uppercase tracking-wider">AI API Integrations</span>
//               {/* <span className="text-xs text-slate-400 font-light leading-relaxed">Connecting advanced OpenAI GPT intelligence models seamlessly with secure custom cloud servers.</span> */}
//             </div>
//           </motion.div>
//         </div>

//         <motion.div 
//           variants={slowSlideRight}
//           className="lg:col-span-5 flex justify-center items-center relative"
//         >
//           <div className="absolute -z-10 animate-pulse"></div>
//           <div className="">
//             <img 
//               src={expertiseImg} 
//               alt="Expertise and Skills" 
//               className="w-full h-auto" 
//               onError={(e) => {
//                 e.currentTarget.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTV6ajZqYml2ajIxdXpqdjEydzhwOHp3dHYzajZpOXMxbzh0bXZ4cyZjdD1n/dhovVfEDgq864Tq9O0/giphy.gif";
//               }}
//             />
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }



import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Zap, Layers } from 'lucide-react';
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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange via-brand-orange to-brand-amber">
              Expertise & Core Skills
            </span>
          </motion.h2>

          <motion.p 
            variants={slowSlideLeft}
            className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed font-light"
          >
            With over 4 years of dedicated industry experience, I specialize in architecting highly scalable full-stack web platforms and engineering secure workspace extensions. I design advanced MS Office Add-ins, Google Workspace add-ons, and dynamic background VBA/Macros that directly optimize enterprise workflows and eliminate thousands of lost manual work hours.
          </motion.p>

          <motion.div 
            variants={slowSlideLeft}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 border-t border-white/5 pt-6"
          >
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/20 transition-all duration-300 flex flex-col gap-2 group cursor-pointer">
              <div className="flex items-center gap-2 text-brand-orange">
                <Code2 className="h-4.5 w-4.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Full Stack Web Dev</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Architecting responsive, high-performance, and database-secured custom MERN portals.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/20 transition-all duration-300 flex flex-col gap-2 group cursor-pointer">
              <div className="flex items-center gap-2 text-brand-orange">
                <Cpu className="h-4.5 w-4.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Office Add-ins</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Developing custom cross-platform MS Office extensions using modern Office.js.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/20 transition-all duration-300 flex flex-col gap-2 group cursor-pointer">
              <div className="flex items-center gap-2 text-brand-orange">
                <Layers className="h-4.5 w-4.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Google Automation</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Designing tailored Apps Script configurations to automate sheets, docs, and forms.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/20 transition-all duration-300 flex flex-col gap-2 group cursor-pointer">
              <div className="flex items-center gap-2 text-brand-orange">
                <Zap className="h-4.5 w-4.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">AI API Integrations</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Connecting advanced OpenAI GPT intelligence models seamlessly with secure cloud servers.</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={slowSlideRight}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
          <img 
            src={expertiseImg} 
            alt="Expertise and Skills" 
            className="w-full h-auto max-h-105 object-contain brightness-[0.95]" 
            onError={(e) => {
              e.currentTarget.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTV6ajZqYml2ajIxdXpqdjEydzhwOHp3dHYzajZpOXMxbzh0bXZ4cyZjdD1n/dhovVfEDgq864Tq9O0/giphy.gif";
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}