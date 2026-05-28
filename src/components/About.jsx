import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id='about' className="py-24 px-6 md:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* TEXT CONTENT: The Identity */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400">
                // The Studio
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight">
                Engineering <span className="text-[#f25f2c]">Creativity</span> into Reality.
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Bipolar Factory is more than a development shop. We are a collective of designers and engineers who believe that the best products exist at the intersection of extreme technical rigor and unbridled imagination.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="font-bold text-2xl">100+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-mono">Products Built</p>
              </div>
              <div>
                <h4 className="font-bold text-2xl">24/7</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-mono">Creative Flow</p>
              </div>
            </div>
          </motion.div>

          {/* IMAGE CONTENT: The Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative group"
          >
            {/* The Image Wrapper */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Engineering and Design" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Elements (Order vs Chaos) */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-100 rounded-full -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-gray-100 rounded-full -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}