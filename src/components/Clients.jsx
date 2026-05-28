import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { 
    name: 'Landmark Group', 
    logo: '/LandmarkLogo.png' 
  },
  { 
    name: 'Election Commission of India', 
    logo: '/download.png' 
  },
  { 
    name: 'Government of Tamil Nadu', 
    logo: '/images.png' 
  },

  
];

export default function Clients() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-gray-400">
            Our Clients
          </span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900">
            Every Client Is a Valuable Long-Term Partner
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-100">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-40 md:w-40"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-12 md:max-h-20 w-full object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      </div>
    </section>
  );
}