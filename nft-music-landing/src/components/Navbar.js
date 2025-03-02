import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white flex items-center">
          <span className="text-primary mr-1">NFT</span>MUSIC
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a>
          <a href="#token" className="text-gray-300 hover:text-primary transition-colors">Token</a>
          <a href="#benefits" className="text-gray-300 hover:text-primary transition-colors">Benefits</a>
          <a href="#mission" className="text-gray-300 hover:text-primary transition-colors">Mission</a>
          <a href="#system" className="text-gray-300 hover:text-primary transition-colors">System</a>
          <a href="#ceo" className="text-gray-300 hover:text-primary transition-colors">CEO Message</a>
          <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a>
        </div>

        <a href="#contact" className="btn btn-primary hidden md:block">Get Started</a>
        
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
