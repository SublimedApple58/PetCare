import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`bg-white ${scrolled ? 'shadow-md' : ''} sticky top-0 z-50 transition-shadow duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-paw text-[#4A7C59] text-2xl mr-2"></i>
              <span className="font-heading font-bold text-xl text-[#4A7C59]">The dog side</span>
            </div>
          </div>

          {/* Bottone menu mobile */}
          <div className="flex items-center sm:hidden">
            <button 
              onClick={toggleMobileMenu}
              type="button" 
              className="text-gray-500 hover:text-[#4A7C59] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>

          {/* Menu desktop */}
          <div className="hidden sm:flex sm:items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-[#4A7C59] px-3 py-2 text-sm font-medium hover:text-[#8B5A2B] transition-colors">Home</a>
              <a href="#about" className="text-[#333333] px-3 py-2 text-sm font-medium hover:text-[#4A7C59] transition-colors">Chi siamo</a>
              <a href="#services" className="text-[#333333] px-3 py-2 text-sm font-medium hover:text-[#4A7C59] transition-colors">Servizi</a>
              <a href="#gallery" className="text-[#333333] px-3 py-2 text-sm font-medium hover:text-[#4A7C59] transition-colors">Galleria</a>
              <a href="#testimonials" className="text-[#333333] px-3 py-2 text-sm font-medium hover:text-[#4A7C59] transition-colors">Testimonianze</a>
              <a 
                href="#contact" 
                className="bg-[#4A7C59] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#8B5A2B] transition-colors duration-300"
              >
                Contattaci
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="sm:hidden bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#home" 
                className="text-[#4A7C59] block px-3 py-2 text-base font-medium"
                onClick={closeMenu}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-[#333333] block px-3 py-2 text-base font-medium hover:text-[#4A7C59]"
                onClick={closeMenu}
              >
                Chi siamo
              </a>
              <a 
                href="#services" 
                className="text-[#333333] block px-3 py-2 text-base font-medium hover:text-[#4A7C59]"
                onClick={closeMenu}
              >
                Servizi
              </a>
              <a 
                href="#gallery" 
                className="text-[#333333] block px-3 py-2 text-base font-medium hover:text-[#4A7C59]"
                onClick={closeMenu}
              >
                Galleria
              </a>
              <a 
                href="#testimonials" 
                className="text-[#333333] block px-3 py-2 text-base font-medium hover:text-[#4A7C59]"
                onClick={closeMenu}
              >
                Testimonianze
              </a>
              <a 
                href="#contact" 
                className="bg-[#4A7C59] text-white block px-3 py-2 text-base font-medium rounded-md"
                onClick={closeMenu}
              >
                Contattaci
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
