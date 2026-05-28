import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Zap, Shield, BarChart3, Globe } from 'lucide-react';

const productData = [
    {
        id: "01",
        title: "OLY Store Sync",
        tagline: "Retail Analytics Reimagined",
        description: "Advanced retail analytics unlocking the potential of security cameras. Harness AI to track foot traffic, dwell time, demographics, and path analysis to optimize business capabilities.",
        features: ["A.I. Automation", "Heat Mapping", "Theft/Fire Detection", "Alarm Triggers"],
        color: "bg-orange-50",
        image: '/OlyStoreSync.png'
    },
    {
        id: "02",
        title: "OLY Control Center",
        tagline: "Centralized VMS Oversight",
        description: "A data-driven Video Management System for centralized monitoring. Featuring customizable dashboards and seamless integration with existing retail suites or Store Sync.",
        features: ["Camera Control", "Live Widgets", "Recording & Storage", "Map View"],
        color: "bg-gray-50",
        image: '/OlyControlCenter.png'
    },
    {
        id: "03",
        title: "Metawood",
        tagline: "Metaverse Creator Economy",
        description: "A fusion of gamified streaming and decentralized economy. Immersive virtual experiences for production houses and talent to host live events and generate revenue.",
        features: ["Story Mode", "Watch Party", "Free Roam", "Virtual Theater"],
        color: "bg-zinc-900",
        dark: true,
        image: '/Metawood.png'
    }
];

export default function Products() {
    return (
        <section id='products' className="py-24 px-6 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-20 max-w-2xl">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f25f2c]">
            // Our Creations
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mt-4">
                        Products
                    </h2>
                    <p className="text-gray-500 mt-6 text-lg leading-relaxed">
                        Discover how our groundbreaking solutions can transform your operational landscape and propel you to the forefront of your industry.
                    </p>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 gap-12">
                    {productData.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`rounded-[2.5rem] p-8 md:p-16 border border-gray-100 flex flex-col lg:flex-row gap-12 items-center ${product.color} ${product.dark ? 'text-white' : 'text-black'}`}
                        >
                            <div className="lg:w-3/5 space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-sm opacity-50">{product.id}</span>
                                    <div className="h-px w-8 bg-current opacity-20" />
                                    <span className={`text-xs font-bold uppercase tracking-widest ${product.dark ? 'text-gray-400' : 'text-[#f25f2c]'}`}>
                                        {product.tagline}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                                    {product.title}
                                </h3>

                                <p className={`text-lg leading-relaxed ${product.dark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {product.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    {product.features.map(feature => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <Zap size={14} className={product.dark ? 'text-gray-500' : 'text-[#f25f2c]'} />
                                            <span className="text-sm font-bold uppercase tracking-wide opacity-80">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4 pt-8">
                                    <button className={`px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all ${product.dark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                                        Visit Website
                                        <a href="https://www.oly.live/" target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={16} />
                                        </a>
                                    </button>
                                    <a
                                        href="mailto:hello@bipolarfactory.com"
                                        className={`px-8 py-3 rounded-full font-bold text-sm border flex items-center gap-2 transition-all no-underline ${product.dark
                                                ? 'border-gray-700 hover:bg-white/10 text-white'
                                                : 'border-gray-200 hover:bg-gray-50 text-black'
                                            }`}
                                    >
                                        Contact Us <Mail size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* Decorative Visual Element */}
                            {/* Updated Visual Element Section */}
                            <div className={`lg:flex w-2/5 aspect-square rounded-3xl items-center justify-center}`}>
                                {product.image ? (
                                    /* 1. If an image path exists, render the image */
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover "
                                    />
                                ) : (
                                    /* 2. Fallback to the old icon logic if no image is provided */
                                    product.icon && React.cloneElement(product.icon, {
                                        size: 120,
                                        strokeWidth: 1,
                                        className: `opacity-20 ${product.icon.props?.className || ''}`
                                    })
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}