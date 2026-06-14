import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
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
    <section id="expertise" className="pt-24 pb-8 sm:pt-32 sm:pb-12 lg:pt-40 lg:pb-16 flex flex-col justify-between select-none">
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
            <Terminal className="h-3.5 w-3.5" />
            4+ Years Engineering Experience
          </motion.div>

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
        </div>

        <motion.div 
          variants={slowSlideRight}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
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