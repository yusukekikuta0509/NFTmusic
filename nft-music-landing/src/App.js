import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Mission from './components/Mission';
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
      <Benefits />
      <Mission />
      <CEO />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;