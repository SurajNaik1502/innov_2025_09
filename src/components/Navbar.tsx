
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'} fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <Leaf size={28} className="text-herb-500 transition-all duration-300 group-hover:text-herb-400" />
          <span className="text-xl font-bold text-white">Herbal Garden</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-200 hover:text-herb-400 transition-all duration-300">Home</Link>
          <Link to="/garden" className="text-gray-200 hover:text-herb-400 transition-all duration-300">Garden</Link>
          <Link to="/medicines" className="text-gray-200 hover:text-herb-400 transition-all duration-300">Medicines</Link>
          <Link to="/plant-identification" className="text-gray-200 hover:text-herb-400 transition-all duration-300">Identify Plants</Link>
          <Link to="/disease-identification" className="text-gray-200 hover:text-herb-400 transition-all duration-300">Identify Diseases</Link>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-herb-400 transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-dark-500/95 backdrop-blur-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-8 space-y-8 h-full">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <Leaf size={28} className="text-herb-500" />
              <span className="text-xl font-bold text-white">Herbal Garden</span>
            </Link>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-herb-400 transition-all duration-300"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-6 mt-12">
            <Link to="/" className="text-xl text-gray-200 hover:text-herb-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/garden" className="text-xl text-gray-200 hover:text-herb-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Garden</Link>
            <Link to="/medicines" className="text-xl text-gray-200 hover:text-herb-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Medicines</Link>
            <Link to="/plant-identification" className="text-xl text-gray-200 hover:text-herb-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Identify Plants</Link>
            <Link to="/disease-identification" className="text-xl text-gray-200 hover:text-herb-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Identify Diseases</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
