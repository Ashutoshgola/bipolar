import React from 'react';
import { motion } from 'framer-motion';

const concepts = [
  { name: 'Aether OS', category: 'Spatial Interface' },
  { name: 'Krypton Protocol', category: 'FinTech Platform' },
  { name: 'Synthetix Studio', category: 'Creative Engine' },
];

export default function PortfolioTrack() {
  return (
    <section className="py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-16">
        <span className="text-xs font-mono text-studio-neon uppercase">// Curated Experiments</span>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">Selected Output</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {concepts.map((concept, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8 }}
            className="bg-studio-surface border border-white/5 p-8 rounded-xl relative overflow-hidden group"
          >
            <div className="h-48 bg-neutral-900/50 rounded-lg mb-6 flex items-center justify-center border border-white/5 group-hover:border-studio-neon/30 transition-colors duration-300">
              <span className="font-mono text-xs text-white/20 tracking-widest group-hover:text-studio-neon/60 transition-colors duration-300">
                [ RENDER_0{idx + 1} ]
              </span>
            </div>
            <span className="text-xs font-mono text-studio-textMuted uppercase tracking-wider">{concept.category}</span>
            <h3 className="text-xl font-bold tracking-tight uppercase mt-1 text-white group-hover:text-studio-neon transition-colors duration-300">
              {concept.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}