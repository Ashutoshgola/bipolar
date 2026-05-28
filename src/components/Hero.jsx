import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 relative">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl space-y-6"
      >
        <motion.div variants={itemVariants} className="text-xs uppercase font-mono tracking-widest text-studio-neon">
          // Digital Product Studio
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black tracking-tight leading-none uppercase">
          Raw Chaos.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-studio-textMuted to-white/20">
            Perfect Order.
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-studio-textMuted max-w-xl font-light leading-relaxed">
          We bridge the gap between volatile creative inspiration and bulletproof structural code. A boutique collective rewriting standard digital interfaces.
        </motion.p>

        <motion.div variants={itemVariants} className="pt-8">
          <a 
            href="#manifesto" 
            className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 rounded-full font-mono text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
          >
            Explore the Paradox
            <ArrowDownRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </motion.div>
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
    </section>
  );
}