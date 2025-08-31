import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';

const LuxuryFooter = () => {
  const footerSections = [
    {
      title: "Timepieces",
      links: [
        { name: "Professional", href: "#" },
        { name: "Classic", href: "#" },
        { name: "Cellini", href: "#" },
        { name: "Sky-Dweller", href: "#" },
        { name: "GMT-Master II", href: "#" }
      ]
    },
    {
      title: "Collections",
      links: [
        { name: "New Models", href: "#" },
        { name: "Heritage Collection", href: "#" },
        { name: "Limited Editions", href: "#" },
        { name: "Pre-Owned", href: "#" },
        { name: "Accessories", href: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Watch Services", href: "#" },
        { name: "Boutique Locator", href: "#" },
        { name: "Customer Care", href: "#" },
        { name: "Warranty", href: "#" },
        { name: "Authentication", href: "#" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Craftsmanship", href: "#" },
        { name: "Innovation", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Press Center", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Youtube, href: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-b from-emerald-950 via-emerald-900/80 to-black text-stone-100">
      {/* Newsletter Section */}
      <div className="border-b border-yellow-600/20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-light mb-4 tracking-wide text-stone-100">
              Stay Connected
            </h3>
            <p className="text-stone-300 mb-8 font-light">
              Be the first to discover our latest timepieces and exclusive events
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-emerald-900/30 backdrop-blur-sm border border-emerald-700/50 rounded-l-sm px-4 py-3 text-stone-100 placeholder-stone-400 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-emerald-950 px-6 py-3 rounded-r-sm transition-all duration-300 transform hover:scale-105 flex items-center font-bold">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-black rounded-full"></div>
              </div>
              <span className="text-3xl font-light tracking-wider">CHRONOS</span>
            </div>
            <p className="text-white/60 mb-8 font-light leading-relaxed">
              Crafting exceptional timepieces since 1905. Each watch represents our 
              unwavering commitment to precision, elegance, and timeless design.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                <Phone className="w-4 h-4" />
                <span className="font-light">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                <Mail className="w-4 h-4" />
                <span className="font-light">info@chronos.luxury</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                <MapPin className="w-4 h-4" />
                <span className="font-light">Geneva, Switzerland</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-medium mb-6 text-yellow-400 tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white font-light transition-all duration-300 transform hover:translate-x-1 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-white/60 font-light">Follow Us</span>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-yellow-500 rounded-sm flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-white/70 group-hover:text-black transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-8 text-sm">
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors duration-300 font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors duration-300 font-light">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-400 transition-colors duration-300 font-light">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-white/5">
            <p className="text-white/50 font-light">
              © 2024 Chronos. All rights reserved. Crafted with precision in Switzerland.
            </p>
          </div>
        </div>
      </div>

      {/* Elegant bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
    </footer>
  );
};

export default LuxuryFooter;