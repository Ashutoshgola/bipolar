import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Shield, Database } from 'lucide-react';

const projects = [
    {
        id: "01",
        name: 'Automated Vote Counting',
        category: 'Government Tech',
        client: 'Bihar State Election Commission',
        desc: 'Engineering a transparent, real-time counting system for one of the largest democratic exercises in the world. Delivering accuracy at scale.',
        image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=2000',
        icon: <Shield className="text-[#f25f2c]" />
    },
    {
        id: "02",
        name: 'EPR Portal Modernization',
        category: 'Environmental Tech',
        client: 'Zigma',
        desc: 'Modernizing waste management infrastructure through a centralized digital ecosystem, significantly elevating operational efficiency and environmental impact.',
        image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=2000',
        icon: <Database className="text-[#f25f2c]" />
    },
    {
        id: "03",
        name: 'Indoor GPS Solutions',
        category: 'Industrial IoT',
        client: 'WoTA Coimbatore',
        desc: 'Precision tracking and worker productivity enhancements for large-scale weaving units using spatial intelligence and IoT architecture.',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2000',
        icon: <Globe className="text-[#f25f2c]" />
    }
];

export default function Output() {
    return (
        <section id="output" className="py-32 px-6 md:px-16 bg-white dark:bg-black transition-colors duration-500">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-20">
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#f25f2c]">
            //Output
                    </span>
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mt-4 dark:text-white">
                        Spotlight on Success.
                    </h2>
                </div>

                {/* Project Blocks */}
                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group rounded-[2.5rem] border border-gray-100 dark:border-white/10 overflow-hidden flex flex-col lg:flex-row bg-white dark:bg-zinc-900/30 transition-all duration-500 hover:border-[#f25f2c]/30"
                        >
                            {/* IMAGE BLOCK */}
                            <div className="lg:w-1/2 aspect-video lg:aspect-auto relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/90 backdrop-blur px-4 py-2 rounded-full border border-gray-100 dark:border-white/10 flex items-center gap-3">
                                    <span className="font-mono text-xs font-bold text-[#f25f2c]">{project.id}</span>
                                    <div className="h-3 w-px bg-gray-300" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest dark:text-white">{project.category}</span>
                                </div>
                            </div>

                            {/* CONTENT BLOCK */}
                            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                        {project.client}
                                    </h4>
                                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none dark:text-white group-hover:text-[#f25f2c] transition-colors">
                                        {project.name}
                                    </h3>
                                </div>

                                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-light italic">
                                    "{project.desc}"
                                </p>

                                <div className="pt-6">
                                    <a
                                        href="https://www.bipolarfactory.com/bihar-election-case-study" // Replace with the actual URL
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest shadow-sm transition-all active:scale-95 group/btn cursor-pointer"
                                    >
                                        Case Study
                                        <ArrowUpRight
                                            size={16}
                                            className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                                        />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}