import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The Oly Store Sync integration completely transformed how we view our floor traffic. It’s not just data; it’s a roadmap for our growth.",
    author: "Author 1",
    role: "VP of Retail, Global Brands",
    category: "Retail Tech"
  },
  {
    quote: "Working with Bipolar Factory felt like adding a high-octane engine to our creative department. They execute at a speed that is honestly scary.",
    author: "Author 2",
    role: "Founder, Metawood Productions",
    category: "Metaverse"
  },
  {
    quote: "They bridge the gap between 'that sounds impossible' and 'here is the live demo' better than any agency I've ever partnered with.",
    author: "Author 3",
    role: "CTO, Fintech Solutions",
    category: "Product Architecture"
  }
];

export default function Testimonials() {
  return (
    <section id='testimonials' className="py-24 px-6 md:px-16 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f25f2c]">
              // Voices of the Paradox
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mt-4">
              Trusted by <br />The Bold.
            </h2>
          </div>
          <p className="text-gray-500 font-medium text-lg md:text-right max-w-xs">
            Direct feedback from the partners we’ve helped propel into the future.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[2rem] flex flex-col justify-between h-full border transition-all duration-300 ${
                index === 1 
                ? 'bg-black text-white border-black shadow-2xl shadow-gray-400/20' 
                : 'bg-white text-black border-gray-100 hover:border-[#f25f2c]/30'
              }`}
            >
              <div className="space-y-6">
                <Quote size={32} className={index === 1 ? 'text-[#f25f2c]' : 'text-gray-200'} />
                <p className={`text-xl font-medium leading-relaxed italic ${index === 1 ? 'text-gray-200' : 'text-gray-700'}`}>
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="font-black uppercase tracking-tight text-lg">{item.author}</h4>
                <div className="flex justify-between items-center mt-1">
                  <p className={`text-xs font-bold uppercase tracking-widest ${index === 1 ? 'text-[#f25f2c]' : 'text-gray-400'}`}>
                    {item.role}
                  </p>
                  <span className="text-[10px] font-mono opacity-40 italic">{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}