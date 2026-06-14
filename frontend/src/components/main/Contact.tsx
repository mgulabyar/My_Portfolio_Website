import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ShieldCheck, Send, Clock, Building } from 'lucide-react';
import contactImg from '../../assets/contact.png';

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceNeeded: 'Web Development',
    message: ''
  });
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.success) {
        setStatus({ success: true, message: data.message });
        setFormData({ name: '', email: '', serviceNeeded: 'Web Development', message: '' });
      } else {
        setStatus({ success: false, message: data.error || 'Submission failed' });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setStatus({ success: false, message: 'Server connection failed' });
    }
    setLoading(false);
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

  return (
    <section id="contact" className="py-20 border-t border-white/5">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col gap-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-900/30 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden shadow-glow-soft">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-orange/5 blur-[100px] -z-10"></div>
          
          <motion.div variants={slowSlideLeft} className="lg:col-span-6 flex flex-col gap-6 justify-between h-full">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                Let's talk about <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange to-brand-amber">
                  everything!
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
                Have questions or need assistance with your digital transformation? Feel free to reach out. I am here to help you design, build, and deploy automated software solutions tailored perfectly to your requirements.
              </p>
            </div>

            <div className="w-full max-w-105 self-center lg:self-start relative mt-4">
              <img 
                src={contactImg} 
                alt="GulabYar Support Workflow" 
                className="w-full h-auto object-contain brightness-[0.95]" 
                onError={(e) => {
                  e.currentTarget.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJuYzJ1Z3h6dXVzcnlhMzk5M2xjdjV0dHF0OHdtOWx1eG91cmRndCZjdD1n/6ozwFj8tCdxpG7gA5D/giphy.gif";
                }}
              />
            </div>
          </motion.div>

          <motion.div variants={slowSlideRight} className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
              <AnimatePresence>
                {status && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`p-4 rounded-xl text-sm font-semibold border ${
                      status.success 
                        ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                        : 'bg-brand-orange/10 border-brand-orange/20 text-brand-orange'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-white uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1">
                  Email <span className="text-brand-orange">*</span>
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-white uppercase tracking-wider">Project Type</label>
                <select 
                  value={formData.serviceNeeded}
                  onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-orange transition-colors duration-300 cursor-pointer"
                >
                  <option value="Web Development" className="bg-brand-dark">MERN Stack Web Dev</option>
                  <option value="Google Workspace Add-ons" className="bg-brand-dark">Google Workspace Add-ons</option>
                  <option value="MS Office Add-ins" className="bg-brand-dark">MS Office 365 Add-ins</option>
                  <option value="AI Integration" className="bg-brand-dark">AI & VBA Automation</option>
                  <option value="VBA Macros" className="bg-brand-dark">Desktop Macros & Scripts</option>
                  <option value="Other" className="bg-brand-dark">Other Business Queries</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1">
                  Message <span className="text-brand-orange">*</span>
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell me about your project details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-300 resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="relative overflow-hidden px-6 py-3 rounded-xl border border-brand-orange text-white font-bold text-sm tracking-wide transition-all duration-500 flex items-center justify-center gap-2 group cursor-pointer hover:shadow-glow-orange disabled:opacity-50"
              >
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-brand-orange/20 to-brand-amber/20 -z-10 transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-center ease-out"></span>
                <Send className="h-4 w-4 z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
                <span className="z-10">{loading ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-4">
          <motion.div 
            variants={slowSlideUp}
            className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 shadow-glow-soft hover:border-brand-orange/30 hover:shadow-glow-orange transition-all duration-500 flex flex-col items-center gap-3 text-center group cursor-pointer"
          >
            <div className="h-10 w-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-5 w-5" />
            </div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-slate-400">Direct Connect</span>
            <a href="mailto:mgulabyaarmgulabyaar@gmail.com" className="text-sm font-bold text-white hover:text-brand-orange transition-colors duration-200">
              mgulabyaarmgulabyaar@gmail.com
            </a>
            <a href="https://wa.me/923468016921" target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-300 hover:text-brand-orange transition-colors duration-200 flex items-center gap-1.5 justify-center">
              <WhatsappIcon className="h-4 w-4 text-green-500 filter drop-shadow-[0_0_4px_#22C55E]" />
              <span className="text-xs text-slate-400 font-semibold">[WhatsApp]</span>
              +92 346 8016921
            </a>
          </motion.div>

          <motion.div 
            variants={slowSlideUp}
            className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 shadow-glow-soft hover:border-brand-orange/30 hover:shadow-glow-orange transition-all duration-500 flex flex-col items-center gap-3 text-center group cursor-pointer"
          >
            <div className="h-10 w-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
              <Building className="h-5 w-5" />
            </div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-slate-400">Headquarters</span>
            <span className="text-sm font-bold text-white">Moammaz Abad, Sargodha</span>
            <span className="text-xs text-slate-400 font-semibold flex items-center gap-1 justify-center">
              Automation Engineer at Addin Expert
            </span>
          </motion.div>

          <motion.div 
            variants={slowSlideUp}
            className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 shadow-glow-soft hover:border-brand-orange/30 hover:shadow-glow-orange transition-all duration-500 flex flex-col items-center gap-3 text-center group cursor-pointer"
          >
            <div className="h-10 w-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
              <Clock className="h-5 w-5" />
            </div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-slate-400">Response SLA</span>
            <span className="text-sm font-bold text-white">Within 24 Hours</span>
            <span className="text-xs text-slate-400 font-medium flex items-center gap-1 justify-center">
              <ShieldCheck className="h-4 w-4 text-brand-orange" />
              Direct Developer Guaranteed Review
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}