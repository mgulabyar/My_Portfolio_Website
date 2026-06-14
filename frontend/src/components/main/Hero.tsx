import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Cpu, Zap, Award, Users } from 'lucide-react';
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
    bio: "I am a professional Full-Stack Developer with 4 years of solid industry experience specializing in the MERN stack, Python, ASP.NET Core, and Angular. My core expertise lies in designing highly scalable custom web architectures, complex MS Office Add-ins built with Office.js, Google Workspace Add-ons, and dynamic VBA/Macros. I specialize in bridging the gap between secure cloud databases and automated workflows, integrating smart AI APIs, and delivering fast, automated business ecosystems.",
    email: "mgulabyaarmgulabyaar@gmail.com",
    resumeUrl: "https://example.com/assets/gulab-yar-resume.pdf",
    contactUrl: "#contact"
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
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const cardLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const cardLeftCenter = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const cardRightCenter = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const cardRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } }
  };

  return (
    <section id="home" className="pt-32 pb-8 flex flex-col">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full"
      >
        <motion.div 
          variants={slowSlideLeft}
          className="lg:col-span-5 flex justify-center relative group"
        >
          <div className="absolute inset-0 bg-linear-to-tr from-brand-orange/20 to-brand-amber/10 rounded-2xl blur-3xl animate-pulse -z-10"></div>
          <div className="relative w-full max-w-82.5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-orange/40 shadow-glow-soft hover:shadow-glow-orange transition-all duration-700 ease-out p-1.5 bg-slate-900/40">
            <img 
              src={data.avatarUrl || profileImg} 
              alt={data.name} 
              className="w-full h-auto object-cover rounded-xl filter brightness-[0.95] group-hover:brightness-100 transition-all duration-700" 
              onError={(e) => {
                e.currentTarget.src = profileImg;
              }}
            />
          </div>
        </motion.div>

        <div className="lg:col-span-7 flex flex-col gap-4">
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
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <a 
              href={data.contactUrl || "#contact"}
              className="relative overflow-hidden px-6 py-2.5 rounded-lg border border-brand-orange text-white font-bold text-sm tracking-wide transition-all duration-500 flex items-center gap-2 group cursor-pointer hover:shadow-glow-orange hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-brand-orange/20 to-brand-amber/20 -z-10 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 ease-out"></span>
              <span className="z-10">Hire Me Today</span>
              <ArrowUpRight className="h-4 w-4 z-10 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] transition-transform duration-300" />
            </a>
            
            <a 
              href={`mailto:${data.email}`}
              className="relative overflow-hidden px-6 py-2.5 rounded-lg border border-white/10 text-white font-bold text-sm tracking-wide transition-all duration-500 flex items-center gap-2 group cursor-pointer hover:border-brand-orange/30 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-brand-orange/20 to-brand-amber/20 -z-10 transition-transform duration-500 translate-x-full group-hover:translate-x-0 ease-out"></span>
              <span className="z-10">Schedule Call</span>
              <ArrowUpRight className="h-4 w-4 z-10 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full mt-16 flex flex-col items-center gap-2"
      >
        <motion.h3 
          variants={slowSlideUp}
          className="text-2xl sm:text-3xl font-extrabold text-white text-center tracking-tight"
        >
          Delivering Measured Business Impact
        </motion.h3>
        
        <motion.p 
          variants={slowSlideUp}
          className="text-xs sm:text-sm text-slate-400 text-center max-w-lg mx-auto leading-relaxed mb-4"
        >
          Proven performance metrics reflecting years of specialized automation and scalable full-stack development.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-4">
          <motion.div 
            variants={cardLeft}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 shadow-glow-soft hover:border-brand-orange/30 hover:shadow-glow-orange transition-all duration-500 flex flex-col items-center gap-2 text-center group cursor-pointer"
          >
            <Award className="h-8 w-8 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-black text-white">04+ Years</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Tech Journey</span>
          </motion.div>

          <motion.div 
            variants={cardLeftCenter}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 shadow-glow-soft hover:border-brand-orange/30 hover:shadow-glow-orange transition-all duration-500 flex flex-col items-center gap-2 text-center group cursor-pointer"
          >
            <Code className="h-8 w-8 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-black text-white">50+ Apps</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Built Worldwide</span>
          </motion.div>

          <motion.div 
            variants={cardRightCenter}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 shadow-glow-soft hover:border-brand-orange/30 hover:shadow-glow-orange transition-all duration-500 flex flex-col items-center gap-2 text-center group cursor-pointer"
          >
            <Cpu className="h-8 w-8 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-black text-white">10k+ Hours</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Manual Work Saved</span>
          </motion.div>

          <motion.div 
            variants={cardRight}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 shadow-glow-soft hover:border-brand-orange/30 hover:shadow-glow-orange transition-all duration-500 flex flex-col items-center gap-2 text-center group cursor-pointer"
          >
            <Users className="h-8 w-8 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-black text-white">99% Client</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Satisfaction & Trust</span>
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