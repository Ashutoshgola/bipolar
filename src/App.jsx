import React, { useState, useEffect } from 'react';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import Manifesto from './components/Manifesto';
import Footer from './components/Footer';
import Clients from './components/Clients';
import Output from './components/Output';

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    /* 1. Added bg-white dark:bg-black to the main wrapper */
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500 selection:bg-[#f25f2c] selection:text-white">
      
      {/* 2. CRITICAL: Pass the props here! */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      
      <main>
        <About />
        <Products />
        <Testimonials />
        <Manifesto />
        <Output />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}

export default App;