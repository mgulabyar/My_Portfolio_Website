// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Sparkles, Menu, X } from "lucide-react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const headerVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] as const },
//     },
//   };

//   const menuVariants = {
//     closed: { opacity: 0, x: "100%" },
//     open: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
//     },
//   };

//   return (
//     <motion.header
//       variants={headerVariants}
//       initial="hidden"
//       animate="visible"
//       className="fixed top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between"
//     >
//       <div className="flex items-center gap-1.5 cursor-pointer group select-none">
//         <span className="text-2xl font-black tracking-wider text-white">
//           Gulab
//           <span className="text-brand-orange group-hover:text-brand-amber transition-colors duration-300">
//             Yar
//           </span>
//         </span>
//         <motion.div
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{
//             repeat: Infinity,
//             duration: 2,
//             ease: "easeInOut" as const,
//           }}
//         >
//           <Sparkles className="h-4 w-4 text-brand-orange filter drop-shadow-[0_0_6px_#FF5500] -mt-2" />
//         </motion.div>
//       </div>

//       <nav className="hidden md:flex items-center gap-8">
//         {["Home", "About", "Expertise", "Projects", "Contact"].map(
//           (item, index) => (
//             <a
//               key={index}
//               href={`#${item.toLowerCase()}`}
//               className="text-sm font-medium text-slate-300 hover:text-brand-orange transition-colors duration-300 relative group py-1"
//             >
//               {item}
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full shadow-glow-orange"></span>
//             </a>
//           ),
//         )}
//       </nav>

//       <div className="relative h-6 w-6 z-50 md:hidden">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="absolute inset-0 text-slate-300 hover:text-brand-orange transition-colors duration-300 focus:outline-none flex items-center justify-center"
//         >
//           {isOpen ? (
//             <motion.div
//               initial={{ rotate: -90, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <X className="h-6 w-6" />
//             </motion.div>
//           ) : (
//             <motion.div
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Menu className="h-6 w-6" />
//             </motion.div>
//           )}
//         </button>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             variants={menuVariants}
//             initial="closed"
//             animate="open"
//             exit="closed"
//             className="fixed top-0 right-0 w-64 h-screen bg-brand-dark/95 border-l border-white/5 z-40 p-8 pt-24 flex flex-col gap-6 shadow-2xl md:hidden"
//           >
//             {["Home", "About", "Expertise", "Projects", "Contact"].map(
//               (item, index) => (
//                 <a
//                   key={index}
//                   href={`#${item.toLowerCase()}`}
//                   onClick={() => setIsOpen(false)}
//                   className="text-lg font-semibold text-slate-200 hover:text-brand-orange transition-colors duration-300 py-2 border-b border-white/5"
//                 >
//                   {item}
//                 </a>
//               ),
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
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
          Gulab
          <span className="text-brand-orange group-hover:text-brand-amber transition-colors duration-300">
            Yar
          </span>
        </span>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut" as const,
          }}
        >
          <Sparkles className="h-4 w-4 text-brand-orange filter drop-shadow-[0_0_6px_#FF5500] -mt-2" />
        </motion.div>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {["Home", "About", "Expertise", "Projects", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 hover:text-brand-orange transition-colors duration-300 relative group py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full shadow-glow-orange"></span>
            </a>
          ),
        )}
      </nav>

      <div className="relative h-6 w-6 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute inset-0 text-slate-300 hover:text-brand-orange transition-colors duration-300 focus:outline-none flex items-center justify-center cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 180, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <X className="h-6 w-6 text-brand-orange" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 180, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: -180, scale: 0.5, opacity: 0 }}
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
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 w-64 h-screen bg-brand-dark/95 border-l border-white/5 z-40 p-8 pt-28 flex flex-col gap-6 shadow-2xl md:hidden"
          >
            {["Home", "About", "Expertise", "Projects", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold tracking-widest uppercase text-slate-300 hover:text-brand-orange hover:pl-3 transition-all duration-300 py-3 block border-b border-white/5"
                >
                  {item}
                </a>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}