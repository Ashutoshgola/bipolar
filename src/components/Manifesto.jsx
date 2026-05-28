import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Zap, Database, Layers } from 'lucide-react';

const capabilities = [
  { 
    id: '01', 
    title: 'Brutal Aesthetics', 
    desc: 'Interfaces that refuse to be ignored. Bold typography, stark layouts, and custom spatial designs that challenge the status quo.',
    icon: <Layout className="w-6 h-6" />
  },
  { 
    id: '02', 
    title: 'Frictionless Code', 
    desc: 'Blazing fast interactions optimized down to the millisecond. We prioritize performance as a feature, ensuring every frame is smooth.',
    icon: <Zap className="w-6 h-6" />
  },
  { 
    id: '03', 
    title: 'Product Architecture', 
    desc: 'Scrappy initial MVPs scaling seamlessly into robust, enterprise-ready digital ecosystems. Built to last and scale with your growth.',
    icon: <Database className="w-6 h-6" />
  },
  { 
    id: '04', 
    title: 'Digital Transformation', 
    desc: 'Helping organizations bridge the gap between legacy systems and the future of digital interaction through strategic engineering.',
    icon: <Layers className="w-6 h-6" />
  }
];

export default function Manifesto() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="manifesto" className="py-32 px-6 md:px-16 bg-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#f25f2c]">
            // Operational Philosophy
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mt-4">
            How We Think.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: The Navigation Pillars */}
          <div className="lg:col-span-5 space-y-2">
            {capabilities.map((item, index) => (
              <button
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`w-full text-left group border-b border-gray-100 py-8 transition-all duration-500 flex items-center gap-6 ${
                  activeIndex === index ? 'pl-6' : 'pl-0'
                }`}
              >
                <span className={`font-mono text-xs transition-colors duration-300 ${
                  activeIndex === index ? 'text-[#f25f2c]' : 'text-gray-300'
                }`}>
                  {item.id}
                </span>
                <h3 className={`text-2xl md:text-4xl font-black uppercase tracking-tighter transition-all duration-500 ${
                  activeIndex === index ? 'text-black translate-x-2' : 'text-gray-200'
                }`}>
                  {item.title}
                </h3>
              </button>
            ))}
          </div>

          {/* RIGHT: The Content Display (Active State) */}
          <div className="lg:col-span-7 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 p-12 md:p-16 rounded-[2.5rem] relative overflow-hidden min-h-[400px] flex flex-col justify-center"
              >
                {/* Background Accent Icon */}
                <div className="absolute -right-10 -bottom-10 text-gray-100 opacity-20 scale-[5] pointer-events-none">
                  {capabilities[activeIndex].icon}
                </div>

                <div className="relative z-10 space-y-8">
                  <div className="h-12 w-12 rounded-2xl bg-[#f25f2c] text-white flex items-center justify-center shadow-lg shadow-[#f25f2c]/20">
                    {capabilities[activeIndex].icon}
                  </div>
                  
                  <h4 className="text-3xl font-black uppercase tracking-tight leading-none">
                    {capabilities[activeIndex].title}
                  </h4>
                  
                  <p className="text-xl text-gray-500 leading-relaxed max-w-md font-light italic">
                    "{capabilities[activeIndex].desc}"
                  </p>

                  <div className="pt-4">
                    <div className="h-px w-20 bg-[#f25f2c]" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}