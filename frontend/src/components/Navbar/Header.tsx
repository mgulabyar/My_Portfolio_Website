import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ['home', 'about', 'expertise', 'projects', 'contact'];
      
      let currentSection = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = id;
            break;
          }
        }
      }

      setActiveSection(prev => prev !== currentSection ? currentSection : prev);

      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const sidebarVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const listContainerVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const linkItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <motion.header 
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/5 transition-all duration-500 flex items-center justify-between ${
        isScrolled 
          ? 'bg-brand-dark/95 backdrop-blur-lg py-3 px-6 md:px-12 shadow-2xl' 
          : 'bg-brand-dark/50 backdrop-blur-md py-5 px-6 md:px-12'
      }`}
    >
      <motion.div 
        variants={logoVariants}
        className="flex items-center gap-2 cursor-pointer group select-none"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-orange filter drop-shadow-[0_0_6px_#FF5500] transition-transform duration-700 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <polyline points="12 22 12 12" />
          <polyline points="12 12 22 8.5" />
          <polyline points="12 12 2 8.5" />
          <polyline points="22 8.5 12 2 2 8.5 12 12" />
        </svg>
        <span className="text-2xl font-black tracking-wider text-white">
          Gulab<span className="text-brand-orange group-hover:text-brand-amber transition-colors duration-300">Yar</span>
        </span>
      </motion.div>

      <motion.nav 
        variants={navVariants}
        className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2"
      >
        {['Home', 'About', 'Expertise', 'Projects'].map((item, index) => (
          <a 
            key={index} 
            href={`#${item.toLowerCase()}`}
            className={`text-sm font-medium transition-colors duration-300 relative group py-1 ${
              activeSection === item.toLowerCase() ? 'text-brand-orange' : 'text-slate-300 hover:text-brand-orange'
            }`}
          >
            {item}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${
              activeSection === item.toLowerCase() ? 'w-full shadow-glow-orange' : 'w-0 group-hover:w-full shadow-glow-orange'
            }`}></span>
          </a>
        ))}
      </motion.nav>

      <motion.div 
        variants={buttonVariants}
        className="hidden md:flex items-center"
      >
        <a 
          href="#contact"
          className="relative overflow-hidden px-5 py-2 rounded-lg border border-brand-orange text-white font-bold text-xs tracking-wider uppercase transition-all duration-500 flex items-center justify-center group cursor-pointer hover:shadow-glow-orange"
        >
          <span className="absolute inset-0 w-full h-full bg-linear-to-r from-brand-orange/20 to-brand-amber/20 -z-10 transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-center ease-out"></span>
          <span className="z-10">Contact</span>
        </a>
      </motion.div>

      <div className="relative h-6 w-6 z-50 md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute inset-0 text-slate-300 hover:text-brand-orange transition-colors duration-300 focus:outline-none flex items-center justify-center cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div 
                key="close" 
                initial={{ rotate: -180, opacity: 0 }} 
                animate={{ rotate: 0, opacity: 1 }} 
                exit={{ rotate: 180, opacity: 0 }} 
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <X className="h-6 w-6 text-brand-orange" />
              </motion.div>
            ) : (
              <motion.div 
                key="menu" 
                initial={{ rotate: 180, opacity: 0 }} 
                animate={{ rotate: 0, opacity: 1 }} 
                exit={{ rotate: -180, opacity: 0 }} 
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 w-64 h-screen bg-brand-dark/95 border-l border-white/5 z-40 p-8 pt-28 flex flex-col gap-6 shadow-2xl md:hidden"
          >
            <motion.div 
              variants={listContainerVariants} 
              className="flex flex-col gap-6"
            >
              {['Home', 'About', 'Expertise', 'Projects', 'Contact'].map((item, index) => (
                <motion.div key={index} variants={linkItemVariants}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-semibold tracking-widest uppercase transition-colors duration-300 py-2 block border-b border-white/5 hover:text-brand-orange hover:pl-3 ${
                      activeSection === item.toLowerCase() ? 'text-brand-orange pl-3' : 'text-slate-300'
                    }`}
                  >
                    {item}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}