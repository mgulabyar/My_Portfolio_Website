// import { motion } from 'framer-motion';
// import { Sparkles, CheckCircle2 } from 'lucide-react';
// import aboutGif from '../../assets/about.png';

// export default function About() {
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
//       transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const }
//     }
//   };

//   const slowSlideRight = {
//     hidden: { opacity: 0, x: 70 },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const }
//     }
//   };

//   return (
//     <section id="about" className="py-20 border-t border-white/5">
//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full"
//       >
//         <div className="lg:col-span-7 flex flex-col gap-5">
//           <motion.div 
//             variants={slowSlideLeft}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold max-w-max"
//           >
//             <Sparkles className="h-3.5 w-3.5" />
//             Optimized Automated Solutions
//           </motion.div>

//           <motion.h2 
//             variants={slowSlideLeft}
//             className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight"
//           >
//             Bringing Speed & Precision Through <br />
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange to-brand-amber">
//               Custom Automation
//             </span>
//           </motion.h2>

//           <motion.p 
//             variants={slowSlideLeft}
//             className="text-base text-slate-400 max-w-2xl leading-relaxed"
//           >
//             My development philosophy is focused on eliminating repetitive business processes. I build seamless, reliable connections between database pipelines, custom script macros, and high-performance frontend interfaces.
//           </motion.p>

//           <motion.div 
//             variants={slowSlideLeft}
//             className="flex flex-col gap-3 mt-2"
//           >
//             <div className="flex items-center gap-3">
//               <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
//               <span className="text-sm font-medium text-slate-200">Robust MS Office Add-ins built with JavaScript (Office.js)</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
//               <span className="text-sm font-medium text-slate-200">Custom Google Workspace Add-ons & Gmail Automations</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
//               <span className="text-sm font-medium text-slate-200">AI-driven API integrations with ChatGPT and serverless systems</span>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div 
//           variants={slowSlideRight}
//           className="lg:col-span-5 flex justify-center relative"
//         >
//           <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-2xl animate-pulse"></div>
//           <div className="relative w-full max-w-85 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-orange/40 shadow-glow-soft hover:shadow-glow-orange transition-all duration-700 ease-out p-1 bg-slate-900/40">
//             <img 
//               src={aboutGif} 
//               alt="Automation Workflow" 
//               className="w-full h-auto object-cover rounded-xl brightness-[0.95]" 
//               onError={(e) => {
//                 e.currentTarget.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3p0eDZzMHZscjM4eTdqYzNhdjMyZXpxczVqdndpcTV5aGFzMHlzNSZjdD1n/qgQUggAC3PfvGTJVPQ/giphy.gif";
//               }}
//             />
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowUpRight, Award, Layers, Shield } from 'lucide-react';
import aboutImg from '../../assets/about.png';

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

  const slowSlideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.8, ease: [0.25, 0.8, 0.25, 1] as const }
    }
  };

  return (
    <section id="about" className="py-20 border-t border-white/5">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
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

          <motion.div variants={slowSlideLeft} className="mt-2">
            <Link 
              to="/contact"
              className="relative overflow-hidden px-5 py-2.5 rounded-lg border border-brand-orange text-white font-bold text-sm tracking-wide transition-all duration-500 flex items-center gap-2 group cursor-pointer max-w-max"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-b from-brand-orange/20 to-brand-amber/20 -z-10 transition-transform duration-500 -translate-y-full group-hover:translate-y-0 ease-out"></span>
              <span className="z-10">Optimize Your Workflow</span>
              <ArrowUpRight className="h-4 w-4 z-10 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={slowSlideRight}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
          <img 
            src={aboutImg} 
            alt="Automation Workflow" 
            className="w-full h-auto max-h-105 object-contain brightness-[0.95]" 
            onError={(e) => {
              e.currentTarget.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3p0eDZzMHZscjM4eTdqYzNhdjMyZXpxczVqdndpcTV5aGFzMHlzNSZjdD1n/qgQUggAC3PfvGTJVPQ/giphy.gif";
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full mt-20 border-t border-white/5 pt-16 flex flex-col gap-6"
      >
        <motion.h3 
          variants={slowSlideUp}
          className="text-xl font-extrabold text-white tracking-widest uppercase text-center sm:text-left"
        >
          My Professional Engineering Workflow
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-2">
          <motion.div 
            variants={slowSlideUp}
            className="flex flex-col gap-3 group cursor-pointer"
          >
            <div className="h-10 w-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
              <Award className="h-5 w-5" />
            </div>
            <h4 className="text-base font-extrabold text-white group-hover:text-brand-orange transition-colors duration-300 tracking-wide">01. Milestone-Based Sprints</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">Every project roadmap is chunked into rapid, weekly iterations. This ensures continuous feedback loops, absolute transparency, and guaranteed on-time delivery.</p>
          </motion.div>

          <motion.div 
            variants={slowSlideUp}
            className="flex flex-col gap-3 group cursor-pointer border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8"
          >
            <div className="h-10 w-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
              <Layers className="h-5 w-5" />
            </div>
            <h4 className="text-base font-extrabold text-white group-hover:text-brand-orange transition-colors duration-300 tracking-wide">02. Complex System Integration</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">Seamlessly connecting secure cloud databases, high-performance web frontends, and backend server models with native background scripting engines.</p>
          </motion.div>

          <motion.div 
            variants={slowSlideUp}
            className="flex flex-col gap-3 group cursor-pointer border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8"
          >
            <div className="h-10 w-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-5 w-5" />
            </div>
            <h4 className="text-base font-extrabold text-white group-hover:text-brand-orange transition-colors duration-300 tracking-wide">03. Secure Enterprise Coding</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">Adhering strictly to security standards by utilizing clean JWT sessions, NoSQL injection preventions, HPP query protections, and CORS definitions on all APIs.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}