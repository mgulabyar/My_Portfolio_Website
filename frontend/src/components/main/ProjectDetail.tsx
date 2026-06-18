import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { projects, type Project } from '../data/projectsData';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>(); // Typed params
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const project: Project | undefined = projects.find(p => p._id === id);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!project) return <div className="h-screen flex items-center justify-center text-white">PROJECT NOT FOUND</div>;

  const nextImage = () => setCarouselIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  const prevImage = () => setCarouselIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-orange transition-colors mb-12 uppercase text-[10px] font-black tracking-widest group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Showcase
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div initial={{opacity:0, x:-30}} animate={{opacity:1, x:0}} className="lg:w-1/2">
            <span className="text-brand-orange text-xs font-black uppercase tracking-[0.4em] mb-6 block">{project.category}</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]">{project.title}</h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 font-light">{project.description}</p>
            
            <div className="pt-10 border-t border-white/5">
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-4">Core Technologies</p>
              <div className="flex flex-wrap gap-3">
                {/* Fixed implicit 'any' by adding types to map parameters */}
                {project.technologies.map((tech: string, idx: number) => (
                  <span key={idx} className="text-xs font-bold bg-white/5 border border-white/10 px-5 py-3 rounded-2xl text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className="lg:w-1/2 w-full">
            <div className="relative aspect-[4/5] bg-slate-900/40 rounded-[3rem] border border-white/10 p-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={carouselIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  src={project.images[carouselIndex]} 
                  className="w-full h-full object-contain drop-shadow-3xl" 
                />
              </AnimatePresence>
              <div className="absolute inset-x-6 flex justify-between">
                <button onClick={prevImage} className="p-4 rounded-full bg-brand-dark/90 text-white hover:text-brand-orange cursor-pointer border border-white/10"><ChevronLeft size={24}/></button>
                <button onClick={nextImage} className="p-4 rounded-full bg-brand-dark/90 text-white hover:text-brand-orange cursor-pointer border border-white/10"><ChevronRight size={24}/></button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}