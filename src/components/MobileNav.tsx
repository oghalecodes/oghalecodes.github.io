'use client';

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faTimes,
  faHome,
  faUser,
  faBriefcase,
  faCode, 
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "./DarkModeToggle";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      let currentSection = 'home';
      
      // Find the section that is most visible in the viewport
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navItems = [
    { id: 'home', label: 'Home', icon: faHome },
    { id: 'about', label: 'About', icon: faUser },
    { id: 'experience', label: 'Experience', icon: faBriefcase },
    { id: 'projects', label: 'Portfolio', icon: faCode },
    { id: 'contact', label: 'Contact', icon: faEnvelope }
  ];

  return (
    <>
      <header className="lg:hidden sticky top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h3 className="font-bold text-xl font-heading text-gradient">John Doe</h3>
          <button 
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary focus:outline-none transition-transform duration-300 hover:scale-105"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer with animation */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 h-screen w-[80%] max-w-sm glass-card p-6 transform transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-xl font-heading text-gradient">Menu</h3>
              <button 
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary focus:outline-none"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            <nav className="flex-grow">
              <ul className="space-y-5">
                {navItems.map((item) => (
                  <li key={item.id} className="transform transition-transform duration-300 hover:translate-x-2">
                    <a 
                      href={`#${item.id}`} 
                      className={`flex items-center p-2 text-lg font-medium rounded-lg ${activeSection === item.id ? 'text-primary bg-primary/10' : 'text-text-primary hover:text-primary'} transition-colors`}
                      onClick={() => setIsOpen(false)}
                    >
                      <FontAwesomeIcon icon={item.icon} className="w-5 h-5 mr-3" />
                      {item.label}
                      {activeSection === item.id && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"></span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="mt-auto pt-6 border-t border-gray-200">
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
