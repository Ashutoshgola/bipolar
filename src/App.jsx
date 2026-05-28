import React,{useState,useEffect} from 'react';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Footer from './components/Footer';
import Clients from './components/Clients';
import Output from './components/Output';

function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check if user previously saved a preference
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
    <div className="min-h-screen bg-studio-bg text-studio-textMain selection:bg-studio-neon selection:text-black">
      <Navbar />
      {/* <Hero /> */}
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