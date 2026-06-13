
// import  { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowUpRight, Download, Code, Cpu, ShieldCheck, Zap, Terminal } from 'lucide-react';
// import profileImg from '../../assets/profile.png';

// export default function Hero() {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [profile, setProfile] = useState<any>(null);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/profile')
//       .then(res => res.json())
//       .then(data => {
//         if (data.success && data.data) {
//           setProfile(data.data);
//         }
//       })
//       .catch(() => {});
//   }, []);

//   const defaultProfile = {
//     name: "Muhammad Gulab Yar",
//     title: "Full-Stack Web Developer & Automation Expert",
//     bio: "I am a Full-Stack Web Developer with 4 years of solid experience crafting MERN applications, customized MS Office/Google Workspace Add-ins, complex VBA/Macros, and seamless AI integrations. I specialize in optimizing enterprise workflows and translating complex logic into fluid, high-performance software solutions.",
//     email: "gulabyar@example.com",
//     resumeUrl: "https://example.com/assets/gulab-yar-resume.pdf"
//   };

//   const data = profile || defaultProfile;

//   const techStack = [
//     "React", "Node.js", "Express", "MongoDB", "TypeScript", 
//     "Python", "VBA Macros", "Office.js", "Apps Script", "OpenAI API", 
//     "PostgreSQL", "Next.js", "Tailwind CSS", "Azure", "GitHub CI/CD"
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.25, delayChildren: 0.4 }
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

//   const slowSlideUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] as const }
//     }
//   };

//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 2 } }
//   };

//   return (
//     <section id="home" className="pt-32 pb-16 min-h-screen flex flex-col justify-between">
//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//         className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full flex-grow"
//       >
//         <div className="lg:col-span-5 flex flex-col items-center gap-6">
//           <motion.div 
//             variants={slowSlideLeft}
//             className="relative w-full max-w-[330px] rounded-2xl overflow-hidden border border-white/10 hover:border-brand-orange/40 shadow-glow-soft hover:shadow-glow-orange transition-all duration-700 ease-out p-1.5 bg-slate-900/40 group"
//           >
//             <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-amber/10 rounded-2xl blur-3xl animate-pulse -z-10"></div>
//             <img 
//               src={data.avatarUrl || profileImg} 
//               alt={data.name} 
//               className="w-full h-auto object-cover rounded-xl filter brightness-[0.95] group-hover:brightness-100 transition-all duration-700" 
//               onError={(e) => {
//                 e.currentTarget.src = profileImg;
//               }}
//             />
//           </motion.div>

//           <motion.div 
//             variants={slowSlideLeft}
//             className="w-full max-w-[330px] rounded-xl bg-slate-950/80 border border-white/5 p-4 font-mono shadow-inner text-[11px]"
//           >
//             <div className="flex items-center gap-1.5 mb-2 border-b border-white/5 pb-2">
//               <Terminal className="h-3.5 w-3.5 text-brand-orange" />
//               <span className="text-slate-400 font-semibold uppercase">yardev_console_log</span>
//               <span className="h-2 w-2 rounded-full bg-green-500 animate-ping ml-auto"></span>
//             </div>
//             <div className="flex flex-col gap-1 text-slate-300">
//               <p className="text-brand-orange">$ npm run start:automator</p>
//               <p className="text-slate-400">&gt; compiling custom MS Outlook add-in...</p>
//               <p className="text-green-400">&gt; connection established with MongoDB Atlas</p>
//               <p className="text-slate-200">&gt; server status: active on port 5000</p>
//             </div>
//           </motion.div>
//         </div>

//         <div className="lg:col-span-7 flex flex-col gap-5">
//           <motion.h1 
//             variants={slowSlideRight}
//             className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight animate-fade-in"
//           >
//             I am <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-orange to-brand-amber filter drop-shadow-[0_0_12px_rgba(255,85,0,0.15)]">
//               {data.name}
//             </span>
//           </motion.h1>

//           <motion.h2
//             variants={slowSlideRight}
//             className="text-lg sm:text-xl font-bold text-slate-200 tracking-wide"
//           >
//             {data.title}
//           </motion.h2>

//           <motion.p 
//             variants={slowSlideUp}
//             className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed"
//           >
//             {data.bio}
//           </motion.p>

//           <motion.div 
//             variants={slowSlideUp}
//             className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2 max-w-2xl border-t border-white/5 pt-4"
//           >
//             <div className="flex items-center gap-2">
//               <Code className="h-5 w-5 text-brand-orange shrink-0" />
//               <span className="text-xs font-semibold text-slate-200 uppercase tracking-wide">MERN Stack</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Cpu className="h-5 w-5 text-brand-orange shrink-0" />
//               <span className="text-xs font-semibold text-slate-200 uppercase tracking-wide">Workspace Add-ins</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <ShieldCheck className="h-5 w-5 text-brand-orange shrink-0" />
//               <span className="text-xs font-semibold text-slate-200 uppercase tracking-wide">AI & VBA Logic</span>
//             </div>
//           </motion.div>

//           <motion.div 
//             variants={slowSlideUp}
//             className="grid grid-cols-3 gap-4 max-w-2xl mt-2 border-t border-b border-white/5 py-4"
//           >
//             <div className="text-center sm:text-left">
//               <h4 className="text-xl sm:text-2xl font-black text-brand-orange filter drop-shadow-[0_0_6px_#FF5500]">04+</h4>
//               <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Years Experience</p>
//             </div>
//             <div className="text-center sm:text-left">
//               <h4 className="text-xl sm:text-2xl font-black text-brand-orange filter drop-shadow-[0_0_6px_#FF5500]">50+</h4>
//               <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Projects Built</p>
//             </div>
//             <div className="text-center sm:text-left">
//               <h4 className="text-xl sm:text-2xl font-black text-brand-orange filter drop-shadow-[0_0_6px_#FF5500]">10k+</h4>
//               <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Manual Hours Saved</p>
//             </div>
//           </motion.div>

//           <motion.div 
//             variants={slowSlideUp}
//             className="flex flex-wrap items-center gap-4 mt-2"
//           >
//             <a 
//               href="#contact"
//               className="px-5 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-sm tracking-wide shadow-glow-orange transition-all duration-300 flex items-center gap-2 group cursor-pointer hover:-translate-y-0.5"
//             >
//               Hire Me Today
//               <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] transition-transform duration-300" />
//             </a>
            
//             <a 
//               href={data.resumeUrl}
//               download
//               className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm tracking-wide transition-all duration-300 cursor-pointer hover:-translate-y-0.5 flex items-center gap-2"
//             >
//               <Download className="h-4 w-4 text-brand-orange" />
//               Download Resume
//             </a>
//           </motion.div>
//         </div>
//       </motion.div>

//       <motion.div 
//         variants={fadeIn}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//         className="w-full mt-16 border-t border-b border-white/5 py-4 overflow-hidden relative"
//       >
//         <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
//         <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-brand-dark to-transparent z-10"></div>
//         <motion.div 
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ ease: "linear", duration: 30, repeat: Infinity }}
//           className="flex whitespace-nowrap gap-12 w-max"
//         >
//           {[...techStack, ...techStack].map((tech, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <Zap className="h-3.5 w-3.5 text-brand-orange filter drop-shadow-[0_0_4px_#FF5500]" />
//               <span className="text-xs font-bold uppercase tracking-wider text-slate-300 select-none">{tech}</span>
//             </div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Cpu, ShieldCheck, Zap } from 'lucide-react';
import profileImg from '../../assets/profile.png';

export default function Hero() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/profile')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setProfile(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const defaultProfile = {
    name: "Muhammad Gulab Yar",
    title: "Full-Stack Web Developer & Automation Expert",
    bio: "I am a professional Full-Stack Developer with 4 years of experience, specializing in the MERN stack, Python, ASP.NET Core, and Angular. My expertise includes building custom Office Add-ins, Google Add-ons, dynamic VBA/Macros, and seamless AI integration services.",
    email: "gulabyar@example.com",
    resumeUrl: "https://example.com/assets/gulab-yar-resume.pdf"
  };

  const data = profile || defaultProfile;

  const techStack = [
    "React", "Node.js", "Express", "MongoDB", "TypeScript", 
    "Python", "VBA Macros", "Office.js", "Apps Script", "OpenAI API", 
    "PostgreSQL", "Next.js", "Tailwind CSS", "Azure", "GitHub CI/CD"
  ];

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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } }
  };

  return (
    <section id="home" className="pt-32 pb-16 min-h-screen flex flex-col justify-between">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full grow"
      >
        <div className="lg:col-span-5 flex flex-col items-center gap-6">
          <motion.div 
            variants={slowSlideLeft}
            className="relative w-full max-w-82.5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-orange/40 shadow-glow-soft hover:shadow-glow-orange transition-all duration-700 ease-out p-1.5 bg-slate-900/40 group"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-brand-orange/20 to-brand-amber/10 rounded-2xl blur-3xl animate-pulse -z-10"></div>
            <img 
              src={data.avatarUrl || profileImg} 
              alt={data.name} 
              className="w-full h-auto object-cover rounded-xl filter brightness-[0.95] group-hover:brightness-100 transition-all duration-700" 
              onError={(e) => {
                e.currentTarget.src = profileImg;
              }}
            />
          </motion.div>

          <motion.div 
            variants={slowSlideLeft}
            className="w-full max-w-82.5 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-sm text-xs font-mono text-slate-300 shadow-inner"
          >
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Available for Remote Contracts</span>
          </motion.div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-5">
          <motion.h1 
            variants={slowSlideRight}
            className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight"
          >
            I am <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange via-brand-orange to-brand-amber filter drop-shadow-[0_0_12px_rgba(255,85,0,0.15)]">
              {data.name}
            </span>
          </motion.h1>

          <motion.h2
            variants={slowSlideRight}
            className="text-lg sm:text-xl font-bold text-slate-200 tracking-wide"
          >
            {data.title}
          </motion.h2>

          <motion.p 
            variants={slowSlideUp}
            className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed"
          >
            {data.bio}
          </motion.p>

          <motion.div 
            variants={slowSlideUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 border-t border-b border-white/5 py-6"
          >
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 shadow-glow-soft hover:border-brand-orange/30 hover:shadow-glow-orange transition-all duration-500 flex flex-col gap-2 group cursor-pointer">
              <Code className="h-5 w-5 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-black text-white">04+ Years</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Tech Journey</span>
            </div>
            
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 shadow-glow-soft hover:border-brand-orange/30 hover:shadow-glow-orange transition-all duration-500 flex flex-col gap-2 group cursor-pointer">
              <Cpu className="h-5 w-5 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-black text-white">50+ Apps</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Built Worldwide</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 shadow-glow-soft hover:border-brand-orange/30 hover:shadow-glow-orange transition-all duration-500 flex flex-col gap-2 group cursor-pointer">
              <ShieldCheck className="h-5 w-5 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-black text-white">10k+ Hours</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Manual Work Saved</span>
            </div>
          </motion.div>

          <motion.div 
            variants={slowSlideUp}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a 
              href="#contact"
              className="relative overflow-hidden px-6 py-2.5 rounded-lg border border-brand-orange text-white font-bold text-sm tracking-wide transition-all duration-500 flex items-center gap-2 group cursor-pointer hover:shadow-glow-orange hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-brand-orange to-brand-amber -z-10 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 ease-out"></span>
              <span className="z-10">Hire Me Today</span>
              <ArrowUpRight className="h-4 w-4 z-10 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] transition-transform duration-300" />
            </a>
            
            <a 
              href={`mailto:${data.email}`}
              className="relative overflow-hidden px-6 py-2.5 rounded-lg border border-white/10 text-white font-bold text-sm tracking-wide transition-all duration-500 flex items-center gap-2 group cursor-pointer hover:border-brand-orange/30 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-brand-orange/20 to-brand-amber/20 -z-10 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 ease-out"></span>
              <span className="z-10">Schedule Call</span>
              <ArrowUpRight className="h-4 w-4 z-10 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="w-full mt-16 border-t border-b border-white/5 py-4 overflow-hidden relative"
      >
        <div className="absolute left-0 top-0 h-full w-20 bg-linear-to-r from-brand-dark to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-l from-brand-dark to-transparent z-10"></div>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap gap-12 w-max"
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-brand-orange filter drop-shadow-[0_0_4px_#FF5500]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 select-none">{tech}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}