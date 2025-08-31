import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';

const LuxuryNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Timepieces', href: '#' },
    { name: 'Collections', href: '#' },
    { name: 'Heritage', href: '#' },
    { name: 'Boutiques', href: '#' },
    { name: 'Service', href: '#' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-yellow-500/20 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-black rounded-full"></div>
            </div>
            <span className="text-2xl font-light tracking-wider text-white">
              CHRONOS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-yellow-400 font-light text-sm tracking-wide transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <button className="p-2 text-white/70 hover:text-yellow-400 transition-all duration-300 transform hover:scale-110">
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <button className="p-2 text-white/70 hover:text-yellow-400 transition-all duration-300 transform hover:scale-110">
              <User className="w-5 h-5" />
            </button>

            {/* Shopping Bag */}
            <button className="relative p-2 text-white/70 hover:text-yellow-400 transition-all duration-300 transform hover:scale-110">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 text-black text-xs rounded-full flex items-center justify-center font-bold">
                2
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white/70 hover:text-yellow-400 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-4 border-t border-yellow-500/20">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white/80 hover:text-yellow-400 font-light text-lg tracking-wide transition-all duration-300 transform hover:translate-x-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant underline effect */}
      <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent transition-opacity duration-700 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </nav>
  );
};

export default LuxuryNavbar;