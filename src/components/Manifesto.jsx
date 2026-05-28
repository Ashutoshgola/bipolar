import React, { useState } from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  { id: '01', title: 'Brutal Aesthetics', desc: 'Interfaces that refuse to be ignored. Bold typography, stark layouts, custom spatial layouts.' },
  { id: '02', title: 'Frictionless Code', desc: 'Blazing fast interactions optimized down to the millisecond. If it isn\'t fast, it isn\'t true.' },
  { id: '03', title: 'Product Architecture', desc: 'Scrappy initial MVPs scaling seamlessly into robust, enterprise-ready digital ecosystems.' },
];

export default function Manifesto() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="manifesto" className="py-32 px-6 md:px-16 border-t border-white/5 bg-studio-surface/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-4 space-y-4">
          <span className="text-xs font-mono text-studio-neon uppercase">// Operational Philosophy</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">How We Think</h2>
          <p className="text-studio-textMuted font-light">
            We don’t settle for generic frameworks or corporate design systems. We engineer digital interfaces from first principles.
          </p>
        </div>

        <div className="lg:col-span-8 space-y-2">
          {capabilities.map((item, index) => (
            <div
              key={item.id}
              className="border-b border-white/10 py-8 cursor-pointer relative group"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-sm text-studio-neon">{item.id}</span>
                  <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: activeIndex === index ? 'auto' : 0, 
                  opacity: activeIndex === index ? 1 : 0 
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="pt-4 pl-12 text-studio-textMuted max-w-xl font-light">
                  {item.desc}
                </p>
              </motion.div>

              {/* Hover background line flash */}
              <div className="absolute inset-0 bg-gradient-to-r from-studio-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}