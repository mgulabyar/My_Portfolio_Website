import { motion } from "framer-motion";
import Header from "./components/Navbar/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

export default function App() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <div className="relative min-h-screen bg-brand-dark selection:bg-brand-orange selection:text-white overflow-hidden">
      {/* 1. Header (Navbar) */}
      <Header />

      {/* 2. Starry Glow Gradients */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-orange/5 blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[150px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </motion.div>

      <Main />

      <Footer />
    </div>
  );
}
