import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Easing strings are strictly cast with 'as const'
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeInOut" as const }
    }
  };

  return (
    <motion.header 
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between"
    >
      <div className="flex items-center gap-1.5 cursor-pointer group select-none">
        <span className="text-2xl font-black tracking-wider text-white">
          Gulab<span className="text-brand-orange group-hover:text-brand-amber transition-colors duration-300">Yar</span>
        </span>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" as const }}
        >
          <Sparkles className="h-4 w-4 text-brand-orange filter drop-shadow-[0_0_6px_#FF5500] -mt-2" />
        </motion.div>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {['Home', 'About', 'Expertise', 'Projects', 'Contact'].map((item, index) => (
          <a 
            key={index} 
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-slate-300 hover:text-brand-orange transition-colors duration-300 relative group py-1"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full shadow-glow-orange"></span>
          </a>
        ))}
      </nav>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-slate-300 hover:text-brand-orange transition-colors duration-300 focus:outline-none"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 w-64 h-screen bg-brand-dark border-l border-white/5 z-40 p-8 flex flex-col gap-6 shadow-2xl md:hidden"
          >
            <div className="flex justify-end mb-4">
              <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-brand-orange">
                <X className="h-6 w-6" />
              </button>
            </div>
            {['Home', 'About', 'Expertise', 'Projects', 'Contact'].map((item, index) => (
              <a 
                key={index} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-slate-200 hover:text-brand-orange transition-colors duration-300 py-2 border-b border-white/5"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}