import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Coin from './components/Coin';
import Benefits from './components/Benefits';
import Mission from './components/Mission';
import System from './components/system';
import CEO from './components/CEO';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Coin />
      <Benefits />
      <Mission />
      <System />
      <CEO />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;