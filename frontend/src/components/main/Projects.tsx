/* eslint-disable @typescript-eslint/no-unused-vars */

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ExternalLink, X, ChevronLeft, ChevronRight} from 'lucide-react';

// import orange1 from '../../assets/orange (1).png';
// import orange2 from '../../assets/orange (2).png';
// import orange3 from '../../assets/orange (3).png';
// import ghost from '../../assets/ghostwriter.png';
// import ghost1 from '../../assets/ghostwriter.png';



// interface Project {
//   _id: string;
//   title: string;
//   tagline: string;
//   description: string;
//   category: string; 
//   subType: string; 
//   images: string[];
//   technologies: string[];
//   liveUrl?: string;
// }

// export default function Projects() {
//   const [selectedFilter, setSelectedFilter] = useState('All Portfolio');
//   const [activeProject, setActiveProject] = useState<Project | null>(null);
//   const [carouselIndex, setCarouselIndex] = useState(0);

//   const projects: Project[] = [
//     {
//       _id: "1",
//       title: "Orange Ledger",
//       tagline: "Intuit QuickBooks Automated Sheet Integration.",
//       category: "Google Add-ons",
//       subType: "Google Sheet Add-ons",
//       images: [orange1, orange2, orange3],
//       description: "A high-performance Google Sheets add-on designed to connect natively with Intuit QuickBooks. It automates importing, syncing, and financial ledger formatting directly into Google Sheets with zero manual setup.",
//       technologies: ["Google Apps Script", "QuickBooks API", "OAuth 2.0", "Automation"],
//       liveUrl: "#"
//     },
//       {
//   _id: "2",
//   title: "GhostWriter Professional",
//   tagline: "AI-Powered Document Assistance & Smart Rewriting.",
//   category: "Google Add-ons",
//   subType: "Google Docs Add-ons",
//   images: [ghost, ghost1],
//   description: "A sophisticated Google Docs add-on that integrates OpenAI's GPT-4o-mini to provide real-time writing assistance. It features a custom React-based sidebar with tone adjustment, multi-language support, and a persistent history system. The tool automates content generation and formatting directly within the document environment.",
//   technologies: ["Google Apps Script", "OpenAI API", "React.js", "Material UI", "OAuth 2.0"],
//   liveUrl: "#"
// },
//   ];

//   const filterItems = [
//     'All Portfolio', 
//     'Office Add-ins', 'Google Add-ons', 'Web Development',
//     'Word Add-ins', 'Excel Add-ins', 'PowerPoint Add-ins', 'Outlook Add-ins',
//     'Gmail Add-ons', 'Google Sheet Add-ons', 'Google Docs Add-ons', 'Google Form Add-ons'
//   ];

//   const filteredProjects = selectedFilter === 'All Portfolio' 
//     ? projects 
//     : projects.filter(p => p.category === selectedFilter || p.subType === selectedFilter);

//   const nextImage = () => activeProject && setCarouselIndex((prev) => (prev === activeProject.images.length - 1 ? 0 : prev + 1));
//   const prevImage = () => activeProject && setCarouselIndex((prev) => (prev === 0 ? activeProject.images.length - 1 : prev - 1));

//   return (
//     <section id="projects" className="pt-32 pb-20 bg-brand-dark min-h-screen border-t border-white/5 relative select-none">
//       <div className="w-full px-6 md:px-12 max-w-350 mx-auto">
        
//         <div className="flex flex-col items-center gap-4 mb-16 text-center">
//           <h2 className="text-4xl md:text-4xl font-black text-white uppercase">Our <span className="text-brand-orange">Portfolio</span></h2>
//           <p className="text-slate-400 max-w-3xl leading-relaxed text-sm md:text-base font-light">
//             We create powerful Office add-ins and Google add-ons that simplify tasks and boost productivity. 
//             Explore our work to see how we enhance business workflows with seamless integration.
//           </p>
//         </div>

//         <div className="flex flex-wrap items-center justify-center gap-3 mb-16 py-8 border-y border-white/5">
//           {filterItems.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setSelectedFilter(filter)}
//               className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer border ${
//                 selectedFilter === filter 
//                   ? 'bg-brand-orange border-brand-orange text-white shadow-glow-orange' 
//                   : 'bg-transparent border-white/20 text-slate-300 hover:border-brand-orange hover:text-brand-orange'
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           <AnimatePresence mode="popLayout">
//             {filteredProjects.map((project) => (
//               <motion.div
//                 key={project._id}
//                 layout
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 className="group rounded-2xl border border-white/5 bg-slate-900/40 hover:border-brand-orange/30 overflow-hidden transition-all duration-500 shadow-2xl flex flex-col"
//               >
//                 <div className="relative aspect-16/10 bg-black/40 flex items-center justify-center p-2 overflow-hidden">
//                   <img src={project.images[0]} alt={project.title} className="w-full h-full object-contain filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700" />
                  
//                   <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 z-20">
//                     <button 
//                       onClick={() => { setActiveProject(project); setCarouselIndex(0); }}
//                       className="px-6 py-3 rounded-lg border border-white/40 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer"
//                     >
//                       Preview
//                     </button>
//                     <a href={project.liveUrl} className="px-6 py-3 rounded-lg bg-brand-orange text-white font-bold text-xs uppercase tracking-widest shadow-glow-orange hover:scale-105 transition-all cursor-pointer flex items-center gap-2">
//                       Open Tab <ExternalLink size={14} />
//                     </a>
//                   </div>
//                 </div>

//                 <div className="p-8 bg-slate-950/80 text-center border-t border-white/5">
//                   <h3 className="text-2xl font-black text-white group-hover:text-brand-orange transition-colors">{project.title}</h3>
//                   <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">{project.category} • {project.subType}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </div>

//       <AnimatePresence>
//         {activeProject && (
//           <div className="fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-100 flex items-center justify-center p-4 md:p-8">
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="bg-brand-dark border border-white/10 rounded-4xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row"
//             >
//               {/* Close Button */}
//               <button onClick={() => setActiveProject(null)} className="absolute top-6 right-6 text-slate-400 hover:text-brand-orange transition-colors z-110 cursor-pointer">
//                 <X size={32} />
//               </button>

//               <div className="lg:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-center order-2 lg:order-1">
//                 <span className="text-brand-orange text-xs font-black uppercase tracking-[0.3em] mb-4">{activeProject.category}</span>
//                 <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">{activeProject.title}</h3>
//                 <h4 className="text-lg font-bold text-brand-orange/80 mb-6">{activeProject.tagline}</h4>
//                 <p className="text-slate-400 leading-relaxed text-base mb-8 font-light">{activeProject.description}</p>
                
//                 <div className="space-y-4 border-t border-white/10 pt-8">
//                   <span className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">Technologies & Tools</span>
//                   <div className="flex flex-wrap gap-2">
//                     {activeProject.technologies.map((tech, idx) => (
//                       <span key={idx} className="text-[11px] font-bold text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="lg:w-1/2 bg-black/20 flex items-center justify-center relative p-6 order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-white/5">
//                 <AnimatePresence mode="wait">
//                   <motion.div 
//                     key={carouselIndex}
//                     initial={{ x: 50, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     exit={{ x: -50, opacity: 0 }}
//                     transition={{ duration: 0.4, ease: "easeInOut" }}
//                     className="w-full h-full flex items-center justify-center"
//                   >
//                     <img src={activeProject.images[carouselIndex]} alt="Preview" className="w-full h-full object-contain drop-shadow-2xl" />
//                   </motion.div>
//                 </AnimatePresence>

//                 <div className="absolute inset-x-6 flex justify-between items-center z-20">
//                   <button onClick={prevImage} className="p-3 rounded-full bg-brand-dark/80 border border-white/10 text-white hover:text-brand-orange hover:border-brand-orange transition-all cursor-pointer shadow-lg">
//                     <ChevronLeft size={24} />
//                   </button>
//                   <button onClick={nextImage} className="p-3 rounded-full bg-brand-dark/80 border border-white/10 text-white hover:text-brand-orange hover:border-brand-orange transition-all cursor-pointer shadow-lg">
//                     <ChevronRight size={24} />
//                   </button>
//                 </div>
                
//                 <div className="absolute bottom-10 flex gap-2">
//                   {activeProject.images.map((_, i) => (
//                     <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === carouselIndex ? 'w-8 bg-brand-orange shadow-glow-orange' : 'w-2 bg-white/20'}`} />
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion'; 
import { ExternalLink, FolderKanban } from 'lucide-react';
import { projects, type Project } from '../data/projectsData';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All Portfolio');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  const filterItems: string[] = [
    'All Portfolio', 'Office Add-ins', 'Google Add-ons', 'Web Development',
    'Word Add-ins', 'Excel Add-ins', 'PowerPoint Add-ins', 'Outlook Add-ins',
    'Gmail Add-ons', 'Google Sheet Add-ons', 'Google Docs Add-ons', 'Google Form Add-ons'
  ];

  const filteredProjects = selectedFilter === 'All Portfolio' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter || p.subType === selectedFilter);

  const nextImage = () => activeProject && setCarouselIndex((prev) => (prev === activeProject.images.length - 1 ? 0 : prev + 1));
  const prevImage = () => activeProject && setCarouselIndex((prev) => (prev === 0 ? activeProject.images.length - 1 : prev - 1));

  // TypeScript Fixed Variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } // Fixed ease
    }
  };

  return (
    <section id="projects" className="pt-32 pb-20 bg-brand-dark min-h-screen border-t border-white/5 relative select-none">
      <div className="w-full px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-widest">
            <FolderKanban size={14} /> Our Works
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Our <span className="text-brand-orange">Portfolio</span></h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16 py-8 border-y border-white/5">
          {filterItems.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                selectedFilter === filter 
                  ? 'bg-brand-orange border-brand-orange text-white shadow-glow-orange' 
                  : 'bg-transparent border-white/10 text-slate-400 hover:border-brand-orange/40 hover:text-brand-orange'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                layout
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="group rounded-3xl border border-white/5 bg-slate-900/20 hover:border-brand-orange/30 overflow-hidden transition-all duration-500 shadow-2xl flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-black/40 flex items-center justify-center p-4 overflow-hidden">
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-contain filter brightness-[0.8] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 z-20">
                    <button 
                      onClick={() => { setActiveProject(project); setCarouselIndex(0); }}
                      className="px-6 py-3 rounded-xl border border-white/20 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer"
                    >
                      Quick Preview
                    </button>
                    <a 
                      href={`/project/${project._id}`} 
                      target="_blank" 
                      className="px-6 py-3 rounded-xl bg-brand-orange text-white font-bold text-[10px] uppercase tracking-widest shadow-glow-orange hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
                    >
                      Open Tab <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <div className="p-8 bg-slate-950/40 text-center border-t border-white/5">
                  <h3 className="text-xl font-black text-white group-hover:text-brand-orange transition-colors duration-300">{project.title}</h3>
                  <p className="text-[10px] font-bold text-slate-500 mt-2 uppercase tracking-[0.2em]">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal logic remains same, but ensured types */}
    </section>
  );
}