import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft, Globe, Cpu, ShieldCheck } from 'lucide-react';
import { projects } from '../../data/projectsData';

export default function ProjectDetail() {
  const { id } = useParams();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const project = projects.find(p => p._id === id);

  // Scroll to top on load
  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!project) return <div className="h-screen flex items-center justify-center text-white font-black text-3xl tracking-tighter">PROJECT NOT FOUND</div>;

  const nextImage = () => setCarouselIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  const prevImage = () => setCarouselIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-32 pb-20 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-orange transition-colors mb-12 uppercase text-[10px] font-black tracking-widest group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Showcase
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Detailed Info */}
          <motion.div initial={{opacity:0, x:-30}} animate={{opacity:1, x:0}} transition={{duration:0.8}} className="lg:w-1/2">
            <span className="text-brand-orange text-xs font-black uppercase tracking-[0.4em] mb-6 block">{project.category}</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">{project.title}</h1>
            <p className="text-brand-orange text-xl font-bold mb-8 italic">"{project.tagline}"</p>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 font-light">{project.description}</p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
               <div className="flex items-center gap-3">
                 <div className="p-3 bg-white/5 rounded-xl text-brand-orange"><Cpu size={20}/></div>
                 <div><p className="text-[10px] text-slate-500 font-bold uppercase">Architecture</p><p className="text-xs font-bold">Cloud-Native</p></div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="p-3 bg-white/5 rounded-xl text-brand-orange"><ShieldCheck size={20}/></div>
                 <div><p className="text-[10px] text-slate-500 font-bold uppercase">Security</p><p className="text-xs font-bold">OAuth 2.0 / API</p></div>
               </div>
            </div>

            <div className="pt-10 border-t border-white/5">
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-4">Core Technologies</p>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="text-xs font-bold bg-white/5 border border-white/10 px-5 py-3 rounded-2xl text-slate-300">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Large Image Showcase */}
          <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:0.8}} className="lg:w-1/2 w-full">
            <div className="relative aspect-square md:aspect-[4/5] bg-slate-900/40 rounded-[3rem] border border-white/10 p-8 flex items-center justify-center group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={carouselIndex} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration:0.5}}
                  src={project.images[carouselIndex]} className="w-full h-full object-contain drop-shadow-3xl" 
                />
              </AnimatePresence>
              
              <div className="absolute inset-x-6 flex justify-between">
                <button onClick={prevImage} className="p-4 rounded-full bg-brand-dark/90 text-white hover:text-brand-orange cursor-pointer border border-white/10 shadow-2xl"><ChevronLeft size={24}/></button>
                <button onClick={nextImage} className="p-4 rounded-full bg-brand-dark/90 text-white hover:text-brand-orange cursor-pointer border border-white/10 shadow-2xl"><ChevronRight size={24}/></button>
              </div>

              {/* Dots */}
              <div className="absolute bottom-10 flex gap-2">
                {project.images.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === carouselIndex ? 'w-10 bg-brand-orange shadow-glow-orange' : 'w-2 bg-white/10'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}