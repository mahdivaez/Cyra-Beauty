import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4",
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="font-montserrat font-bold text-2xl text-cyra-teal">CYRA</span>
            <span className="font-lora italic text-cyra-gold ml-1">Beauty</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="font-montserrat text-cyra-teal hover:text-cyra-gold transition-colors">Services</a>
            <a href="#about" className="font-montserrat text-cyra-teal hover:text-cyra-gold transition-colors">About</a>
            <a href="#testimonials" className="font-montserrat text-cyra-teal hover:text-cyra-gold transition-colors">Testimonials</a>
            <a
              href="https://cyrabeauty.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-cyra-teal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md px-6 py-4 flex flex-col gap-4 animate-fade-in">
            <a
              href="#services"
              className="font-montserrat text-cyra-teal py-2 hover:text-cyra-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="font-montserrat text-cyra-teal py-2 hover:text-cyra-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="font-montserrat text-cyra-teal py-2 hover:text-cyra-gold transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="https://cyrabeauty.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
