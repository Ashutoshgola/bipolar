import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import PortfolioTrack from './components/PortfolioTrack';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-studio-bg text-studio-textMain selection:bg-studio-neon selection:text-black">

    

      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <PortfolioTrack />
      </main>
      <Footer />
    </div>
  );
}

export default App;