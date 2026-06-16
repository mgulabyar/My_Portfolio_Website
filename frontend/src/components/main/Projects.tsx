import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ChevronLeft, ChevronRight, FolderKanban } from 'lucide-react';
import Footer from '../footer/Footer';

interface Project {
  _id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  subCategory: string;
  gifUrl: string; 
  images?: string[]; 
  technologies: string[];
  liveUrl?: string;
}

export default function Projects() {
  const [dbProjects, setDbProjects] = useState<Project[]>([]);
  const [selectedFilter, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setDbProjects(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const defaultProjects: Project[] = [
    {
      _id: "1",
      title: "YouValue",
      tagline: "Create professional real estate valuation reports directly in Microsoft Word and Excel.",
      category: "Office Add-ins",
      subCategory: "Excel Add-ins",
      gifUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      ],
      description: "YouValue is a powerful Word and Excel Add-in designed to streamline the creation of professional real estate valuation reports. It integrates seamlessly with Microsoft Office, allowing users to generate comprehensive reports directly within Word and Excel. Users can easily input property data, perform valuations, and generate detailed reports that include market analysis, comparable sales, and financial projections.",
      technologies: ["Microsoft Office", "Microsoft Word", "Microsoft Excel", "Real Estate", "Automation"],
      liveUrl: "https://example.com/youvalue"
    },
    {
      _id: "2",
      title: "BiasAwareness AI",
      tagline: "Detect and flag systematic discrimination embedded within AI language models.",
      category: "MERN Web Dev",
      subCategory: "Word Add-ins",
      gifUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
      ],
      description: "An advanced Microsoft Word Add-in powered by GPT API that scans uploaded documents for implicit bias, gender discrimination, and non-inclusive language. It provides real-time highlights and alternative wording suggestions directly inside the editor.",
      technologies: ["Office.js", "GPT-4 API", "TypeScript", "React", "Inclusive Design"],
      liveUrl: "https://example.com/bias-ai"
    },
    {
      _id: "3",
      title: "Zippy Docs",
      tagline: "Automate complex document rendering pipelines inside Excel with zero setup.",
      category: "Office Add-ins",
      subCategory: "Excel Add-ins",
      gifUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
      ],
      description: "A high-performance Excel Add-in built to automate the formatting, merging, and exporting of massive accounting datasets. Supports instant translation, PDF compilation, and cloud storage backup syncs.",
      technologies: ["Excel API", "Node.js", "Azure Blob", "VBA Macros", "PDF Compiler"],
      liveUrl: "https://example.com/zippy-docs"
    }
  ];

  const projects = dbProjects.length > 0 ? dbProjects : defaultProjects;

  const filterItems = [
    'All', 'MERN Web Dev', 'Office Add-ins', 'Google Workspace',
    'Word Add-ins', 'Excel Add-ins', 'PowerPoint Add-ins', 'Outlook Add-ins',
    'Gmail Add-ons', 'Google Sheet Add-ons', 'Google Docs Add-ons', 'Google Form Add-ons'
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter || p.subCategory === selectedFilter);

  const getProjectImages = (project: Project): string[] => {
    if (project.images && project.images.length > 0) {
      return project.images;
    }
    return [project.gifUrl];
  };

  const prevImage = () => {
    if (activeProject) {
      const imgs = getProjectImages(activeProject);
      setCarouselIndex(prev => (prev === 0 ? imgs.length - 1 : prev - 1));
    }
  };

  const nextImage = () => {
    if (activeProject) {
      const imgs = getProjectImages(activeProject);
      setCarouselIndex(prev => (prev === imgs.length - 1 ? 0 : prev + 1));
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold">
            <FolderKanban className="h-3.5 w-3.5" />
            My Software Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white text-center tracking-tight">Our Portfolio</h2>
          <p className="text-xs sm:text-base text-slate-400 text-center max-w-2xl mx-auto leading-relaxed font-light">Explore our dynamic solutions, customized extensions, and automated systems built to simplify business workflows.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 w-full py-2 border-t border-b border-white/5">
          {filterItems.map((filter, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
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
                className="rounded-2xl border border-white/5 overflow-hidden bg-slate-900/40 hover:border-brand-orange/30 shadow-glow-soft hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between group h-[400px] relative"
              >
                <div className="relative w-full h-[280px] overflow-hidden">
                  <img src={getProjectImages(project)[0]} alt={project.title} className="w-full h-full object-cover filter brightness-[0.95]" />
                  <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 z-20">
                    <button 
                      onClick={() => {
                        setActiveProject(project);
                        setCarouselIndex(0);
                      }}
                      className="px-5 py-2.5 rounded-lg border border-white/20 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:border-brand-orange hover:text-brand-orange cursor-pointer"
                    >
                      Preview
                    </button>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-lg border border-brand-orange text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-glow-orange flex items-center gap-1.5 cursor-pointer relative overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-orange/20 to-brand-amber/20 -z-10 transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-center ease-out"></span>
                      Open Tab <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-6 border-t border-white/5 flex-grow flex flex-col justify-center text-center select-none">
                  <h3 className="text-lg font-black text-white">{project.title}</h3>
                  <p className="text-xs font-semibold text-slate-400 mt-2">{project.category} & {project.subCategory}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 bg-brand-dark/90 backdrop-blur-md z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-dark/95 border border-white/10 rounded-3xl p-6 md:p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-brand-orange transition-colors duration-300 cursor-pointer z-[110]"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-4">
                <div className="lg:col-span-6 flex flex-col gap-4 text-left select-none">
                  <h3 className="text-3xl font-black text-white">{activeProject.title}</h3>
                  <h4 className="text-sm font-bold text-brand-orange leading-relaxed uppercase tracking-wider">{activeProject.tagline}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">{activeProject.description}</p>
                  
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
                  <div className="relative w-full h-[260px] sm:h-[340px] rounded-2xl overflow-hidden border border-white/10 bg-slate-950/40 p-1 flex items-center justify-center">
                    <img src={getProjectImages(activeProject)[carouselIndex]} alt={activeProject.title} className="w-full h-full object-cover rounded-xl filter brightness-[0.95]" />
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