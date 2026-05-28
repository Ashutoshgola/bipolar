import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-studio-bg/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="font-black text-xl tracking-tighter uppercase">
        Bipolar<span className="text-studio-neon">.</span>Factory
      </div>
      <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-mono text-studio-textMuted">
        <span className="h-2 w-2 rounded-full bg-studio-neon animate-pulse" />
        BPF
      </div>
    </motion.nav>
  );
}