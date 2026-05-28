import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Add a blur effect when the user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    {name : 'Testimonials', href: '#testimonials' },
    { name: 'Output', href: '#output' },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-100 px-20 md:px-16 py-6 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      {/* Brand Logo */}
      <div className="font-black text-xl tracking-tighter uppercase cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        BIPOLAR<span className="text-[#f25f2c]">.</span>FACTORY
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#f25f2c] transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center justify-end">
        <a 
          href="mailto:hello@bipolarfactory.com" 
          className="text-[11px] font-mono font-bold text-gray-400 hover:text-[#f25f2c] uppercase tracking-widest transition-colors border border-gray-200 rounded-full px-4 py-2 hover:border-[#f25f2c]"
        >
          Contact Us
        </a>
      </div>
    </motion.nav>
  );
}