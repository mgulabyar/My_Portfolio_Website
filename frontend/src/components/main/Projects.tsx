import  { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ChevronLeft, ChevronRight, FolderKanban } from 'lucide-react';
import Footer from '../footer/Footer';

import orange1 from '../../assets/orange (1).png';
import orange2 from '../../assets/orange (2).png';
import orange3 from '../../assets/orange (3).png';

interface Project {
  [x: string]: ReactNode;
  _id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  subType: string;
  images: string[]; 
  technologies: string[];
  liveUrl?: string;
}

export default function Projects() {
  const [selectedFilter, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const projects: Project[] = [
    {
      _id: "1",
      title: "Orange Ledger",
      tagline: "Intuit QuickBooks Automated Sheet Integration.",
      category: "Google Workspace",
      subType: "sheets",
      images: [orange1, orange2, orange3],
      description: "A high-performance Google Sheets add-on designed to connect natively with Intuit QuickBooks (quickbooks.com). It automates the importing, syncing, and financial ledger formatting of multi-currency transaction datasets directly into Google Sheets with zero manual setup.",
      technologies: ["Google Apps Script", "QuickBooks API", "OAuth 2.0", "Financial Ledger", "Automation"],
      liveUrl: "https://quickbooks.intuit.com"
    },
      {
      _id: "1",
      title: "Orange Ledger",
      tagline: "Intuit QuickBooks Automated Sheet Integration.",
      category: "Google Workspace",
      subType: "sheets",
      images: [orange1, orange2, orange3],
      description: "A high-performance Google Sheets add-on designed to connect natively with Intuit QuickBooks (quickbooks.com). It automates the importing, syncing, and financial ledger formatting of multi-currency transaction datasets directly into Google Sheets with zero manual setup.",
      technologies: ["Google Apps Script", "QuickBooks API", "OAuth 2.0", "Financial Ledger", "Automation"],
      liveUrl: "https://quickbooks.intuit.com"
    },
      {
      _id: "1",
      title: "Orange Ledger",
      tagline: "Intuit QuickBooks Automated Sheet Integration.",
      category: "Google Workspace",
      subType: "sheets",
      images: [orange1, orange2, orange3],
      description: "A high-performance Google Sheets add-on designed to connect natively with Intuit QuickBooks (quickbooks.com). It automates the importing, syncing, and financial ledger formatting of multi-currency transaction datasets directly into Google Sheets with zero manual setup.",
      technologies: ["Google Apps Script", "QuickBooks API", "OAuth 2.0", "Financial Ledger", "Automation"],
      liveUrl: "https://quickbooks.intuit.com"
    },
  ];

  const filterItems = ['All', 'Sheets'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.subType.toLowerCase() === selectedFilter.toLowerCase());

  const prevImage = () => {
    if (activeProject) {
      setCarouselIndex(prev => (prev === 0 ? activeProject.images.length - 1 : prev - 1));
    }
  };

  const nextImage = () => {
    if (activeProject) {
      setCarouselIndex(prev => (prev === activeProject.images.length - 1 ? 0 : prev + 1));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const slowSlideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.1, ease: [0.25, 0.8, 0.25, 1] as const } 
    }
  };

  return (
    <section id="projects" className="pt-24 pb-8 sm:pt-32 sm:pb-12 lg:pt-40 lg:pb-16 flex flex-col justify-between select-none border-t border-white/5 relative">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full px-6 md:px-12 flex flex-col gap-10"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold">
            <FolderKanban className="h-3.5 w-3.5" />
            My Software Showcase
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white text-center tracking-tight">Our Portfolio</h2>
          <p className="text-sm sm:text-lg text-slate-400 text-center max-w-3xl mx-auto leading-relaxed font-light">Explore our dynamic solutions, customized extensions, and automated systems built to simplify business workflows.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 w-full py-3 border-t border-b border-white/5">
          {filterItems.map((filter, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                selectedFilter === filter 
                  ? 'bg-brand-orange text-white shadow-glow-orange border border-brand-orange' 
                  : 'bg-white/5 border border-white/10 text-slate-300 hover:border-brand-orange/40 hover:text-brand-orange'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-8 w-full mt-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                layout
                variants={slowSlideUp}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                className="rounded-2xl border border-white/5 overflow-hidden bg-slate-900/40 hover:border-brand-orange/30 shadow-glow-soft hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between group h-100 relative"
              >
                <div className="relative w-full h-70 overflow-hidden">
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover rounded-xl filter brightness-[0.95]" />
                  <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 z-20">
                    <button 
                      onClick={() => {
                        setActiveProject(project);
                        setCarouselIndex(0);
                      }}
                      className="px-6 py-3 rounded-lg border border-white/20 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:border-brand-orange hover:text-brand-orange cursor-pointer"
                    >
                      Preview
                    </button>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-6 py-3 rounded-lg border border-brand-orange text-white font-bold text-sm tracking-wide transition-all duration-500 flex items-center gap-1.5 cursor-pointer relative overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-linear-to-r from-brand-orange/20 to-brand-amber/20 -z-10 transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-center ease-out"></span>
                      Open Tab <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-6 border-t border-white/5 grow flex flex-col justify-center text-center select-none">
                  <h3 className="text-xl font-extrabold text-white">{project.title}</h3>
                  <p className="text-sm font-semibold text-slate-400 mt-2">{project.category} & {project.subCategory}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 bg-brand-dark/90 backdrop-blur-md z-100 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-dark/95 border border-white/10 rounded-3xl p-6 md:p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-brand-orange transition-colors duration-300 cursor-pointer z-110"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-4">
                <div className="lg:col-span-6 flex flex-col gap-4 text-left select-none">
                  <h3 className="text-4xl font-black text-white">{activeProject.title}</h3>
                  <h4 className="text-base sm:text-lg font-bold text-brand-orange leading-relaxed uppercase tracking-wider">{activeProject.tagline}</h4>
                  <p className="text-base text-slate-300 leading-relaxed font-light">{activeProject.description}</p>
                  
                  <div className="flex flex-col gap-2 mt-4 border-t border-white/5 pt-4">
                    <span className="text-xs uppercase tracking-widest font-extrabold text-slate-400">Skills and deliverables</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {activeProject.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs font-semibold text-slate-300 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-lg select-none">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col gap-4 relative">
                  <div className="relative w-full h-65 sm:h-85 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/40 p-1 flex items-center justify-center">
                    <img src={activeProject.images[carouselIndex]} alt={activeProject.title} className="w-full h-full object-cover rounded-xl filter brightness-[0.95]" />
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 p-2 rounded-full bg-brand-dark/80 border border-white/10 text-slate-400 hover:text-brand-orange transition-all duration-300 cursor-pointer z-10"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 p-2 rounded-full bg-brand-dark/80 border border-white/10 text-slate-400 hover:text-brand-orange transition-all duration-300 cursor-pointer z-10"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </section>
  );
}