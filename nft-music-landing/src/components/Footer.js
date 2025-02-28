import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white flex items-center">
              <span className="text-primary mr-1">NFT</span>MUSIC
            </a>
            <p className="text-gray-400 mt-2">Revolutionizing music investment through NFTs</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-primary transition-colors">Benefits</a></li>
                <li><a href="#mission" className="text-gray-400 hover:text-primary transition-colors">Mission</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} NFT MUSIC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;